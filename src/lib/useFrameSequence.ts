"use client";

import { useEffect, useRef, useState } from "react";

/** A decoded frame is either an ImageBitmap (fast path) or an <img> fallback. */
type Frame =
  | { kind: "bitmap"; img: ImageBitmap }
  | { kind: "element"; img: HTMLImageElement; url: string };

type Manifest = { count: number; pattern: string };

/**
 * Decode a WebP blob into something ctx.drawImage can use.
 * createImageBitmap is the fast, off-main-thread path — but it can throw
 * "The source image could not be decoded" in backgrounded/hidden tabs and
 * some embedded webviews. When it does, fall back to a plain HTMLImageElement,
 * which decodes reliably everywhere. Both are valid drawImage sources.
 * Do not remove this fallback — it silently blanks the canvas without it.
 */
async function decodeBlob(blob: Blob): Promise<Frame> {
  try {
    const img = await createImageBitmap(blob);
    return { kind: "bitmap", img };
  } catch {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.decoding = "async";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("img decode failed"));
      img.src = url;
    });
    return { kind: "element", img, url };
  }
}

function releaseFrame(f: Frame) {
  if (f.kind === "bitmap") f.img.close();
  else URL.revokeObjectURL(f.url);
}

/** "frame_%04d.webp" + 7 → "frame_0008.webp" (pattern-agnostic zero-pad width) */
function frameUrl(basePath: string, pattern: string, i: number) {
  const m = pattern.match(/%0(\d)d/);
  const width = m ? parseInt(m[1], 10) : 3;
  const num = String(i + 1).padStart(width, "0");
  const file = pattern.replace(/%0\d+d/, num);
  return `${basePath}/${file}`;
}

/**
 * Loads a WebP frame sequence from `${basePath}/manifest.json` and exposes a
 * draw(canvas, progress) scrubber.
 *
 * Memory strategy: compressed blobs stay resident (a few MB), decoded
 * frames live only in a sliding window around the playhead so scrubbing
 * stays 60fps without holding hundreds of MB of pixels.
 */
export function useFrameSequence(basePath: string | null) {
  const blobs = useRef<(Blob | null)[]>([]);
  const frames = useRef<Map<number, Frame>>(new Map());
  const decoding = useRef<Set<number>>(new Set());
  const countRef = useRef(0);
  const lastProgress = useRef(0);
  const [ready, setReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    if (!basePath) return; // caller hasn't resolved which tier to load yet
    let alive = true;
    (async () => {
      let m: Manifest;
      try {
        const res = await fetch(`${basePath}/manifest.json`);
        if (!res.ok) throw new Error("no manifest");
        m = await res.json();
      } catch {
        if (alive) setUnavailable(true);
        return;
      }
      if (!alive) return;
      countRef.current = m.count;
      blobs.current = new Array(m.count).fill(null);

      let loaded = 0;
      await Promise.all(
        Array.from({ length: m.count }, async (_, i) => {
          try {
            const b = await fetch(frameUrl(basePath, m.pattern, i)).then((r) => r.blob());
            if (alive) blobs.current[i] = b;
          } catch {
            /* refetched implicitly on next visit */
          } finally {
            loaded += 1;
            if (alive) setLoadProgress(loaded / m.count);
          }
        })
      );
      if (!alive) return;
      if (blobs.current[0]) {
        try {
          const f = await decodeBlob(blobs.current[0]);
          if (!alive) return releaseFrame(f);
          frames.current.set(0, f);
        } catch {
          /* first frame will be retried by the draw loop */
        }
      }
      setReady(true);
    })();
    return () => {
      alive = false;
      frames.current.forEach(releaseFrame);
      frames.current.clear();
    };
  }, [basePath]);

  function decode(i: number) {
    if (frames.current.has(i) || decoding.current.has(i) || !blobs.current[i]) return;
    decoding.current.add(i);
    decodeBlob(blobs.current[i]!)
      .then((f) => frames.current.set(i, f))
      .catch(() => {})
      .finally(() => decoding.current.delete(i));
  }

  /** decode ahead of the playhead, evict far-away frames */
  function manageWindow(center: number) {
    const AHEAD = 16;
    const KEEP = 32;
    for (let d = 0; d <= AHEAD; d++) {
      const a = center + d;
      const b = center - d;
      if (a < countRef.current) decode(a);
      if (b >= 0) decode(b);
    }
    if (frames.current.size > KEEP * 2) {
      for (const [idx, f] of frames.current) {
        if (Math.abs(idx - center) > KEEP) {
          releaseFrame(f);
          frames.current.delete(idx);
        }
      }
    }
  }

  function nearestDecoded(i: number): Frame | null {
    if (frames.current.has(i)) return frames.current.get(i)!;
    for (let d = 1; d < countRef.current; d++) {
      if (frames.current.has(i - d)) return frames.current.get(i - d)!;
      if (frames.current.has(i + d)) return frames.current.get(i + d)!;
    }
    return null;
  }

  /** progress ∈ [0,1] → draw the matching frame, cover-fit, on the canvas */
  function draw(canvas: HTMLCanvasElement | null, progress: number) {
    if (!canvas || countRef.current === 0) return;
    lastProgress.current = progress;
    const i = Math.round(Math.min(1, Math.max(0, progress)) * (countRef.current - 1));
    manageWindow(i);
    const frame = nearestDecoded(i);
    if (!frame) return;
    const src = frame.img;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = Math.round(canvas.clientWidth * dpr);
    const ch = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, cw, ch);
    // cover-fit — fills the viewport edge-to-edge (no letterbox bars), cropping
    // excess on the wider/taller axis; the vignette softens the crop edges.
    const s = Math.max(cw / src.width, ch / src.height);
    const w = src.width * s;
    const h = src.height * s;
    ctx.drawImage(src, (cw - w) / 2, (ch - h) / 2, w, h);
  }

  return { ready, loadProgress, unavailable, draw, lastProgress, frameCount: countRef };
}
