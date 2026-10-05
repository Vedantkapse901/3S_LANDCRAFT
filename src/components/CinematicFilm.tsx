"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrameSequence } from "@/lib/useFrameSequence";
import { scrollToTarget } from "@/lib/lenisStore";
import { chapters, TOTAL_TRACK_VH } from "@/data/chapters";
import ChapterCaption from "./ChapterCaption";

gsap.registerPlugin(ScrollTrigger);

const CAPTIONED = new Set(["clouds", "mountaintop-reveal", "highway-tunnel", "resort-reveal", "final-hero"]);

function captionWindow(id: string, start: number, end: number) {
  const span = end - start;
  if (id === "clouds") {
    // visible immediately at scroll 0 — a data-in of exactly 0 is invisible
    // at the very top, so open the window slightly before it (see SKILL
    // "Failure modes" note on negative data-in).
    return { inStart: -0.05, inEnd: 0.015, outStart: 0.065, outEnd: start + span };
  }
  if (id === "final-hero") {
    return { inStart: start + span * 0.1, inEnd: start + span * 0.35, outStart: 1.5, outEnd: 1.6 };
  }
  return {
    inStart: start + span * 0.18,
    inEnd: start + span * 0.38,
    outStart: start + span * 0.78,
    outEnd: end - span * 0.04,
  };
}

function trapezoid(p: number, w: { inStart: number; inEnd: number; outStart: number; outEnd: number }) {
  if (p <= w.inStart || p >= w.outEnd) return 0;
  if (p < w.inEnd) return (p - w.inStart) / Math.max(1e-6, w.inEnd - w.inStart);
  if (p < w.outStart) return 1;
  return 1 - (p - w.outStart) / Math.max(1e-6, w.outEnd - w.outStart);
}

export default function CinematicFilm() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const captionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const scrollCueRef = useRef<HTMLDivElement | null>(null);
  const [framesBasePath, setFramesBasePath] = useState<string | null>(null);
  const { ready, loadProgress, unavailable, draw } = useFrameSequence(framesBasePath);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [checkedMotion, setCheckedMotion] = useState(false);

  const capWindows = useMemo(
    () => new Map(chapters.map((c) => [c.id, captionWindow(c.id, c.start, c.end)])),
    []
  );

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setCheckedMotion(true);
    // tablet+ get the sharper (larger) frame set; phones get the lighter one —
    // both are cover-fit full-bleed, this only trades payload size for crispness
    setFramesBasePath(window.matchMedia("(min-width: 768px)").matches ? "frames/desktop" : "frames/mobile");
  }, []);

  useEffect(() => {
    if (!checkedMotion || reducedMotion || !trackRef.current) return;
    const ctx = gsap.context(() => {
      const tick = (p: number) => {
        draw(canvasRef.current, p);
        for (const ch of chapters) {
          if (!CAPTIONED.has(ch.id)) continue;
          const el = captionRefs.current.get(ch.id);
          if (!el) continue;
          const w = capWindows.get(ch.id)!;
          const o = trapezoid(p, w);
          el.style.opacity = String(o);
          el.style.transform = `translateY(${(1 - o) * 14}px)`;
          el.style.pointerEvents = o > 0.6 ? "auto" : "none";
        }
        if (scrollCueRef.current) {
          scrollCueRef.current.style.opacity = String(Math.max(0, 1 - p / 0.06));
        }
      };

      const st = ScrollTrigger.create({
        trigger: trackRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => tick(self.progress),
      });
      // ScrollTrigger only calls onUpdate on scroll — paint the opening state now.
      tick(st.progress);
      return () => st.kill();
    }, trackRef);
    return () => ctx.revert();
  }, [checkedMotion, reducedMotion, draw, capWindows]);

  // draw the first frame as soon as it's decoded, even before any scroll
  useEffect(() => {
    if (ready) draw(canvasRef.current, 0);
  }, [ready, draw]);

  const exploreMore = () => scrollToTarget("#manifesto", 0);

  if (checkedMotion && reducedMotion) {
    return (
      <section aria-label="3S Landcraft — cinematic introduction" className="relative bg-bg">
        <div className="section text-center py-[18vh]">
          <p className="kicker mb-6">3S Landcraft</p>
          <h1 className="text-[clamp(32px,6vw,72px)] max-w-[16ch] mx-auto">
            Kashedi, Maharashtra
          </h1>
        </div>
        {chapters
          .filter((c) => CAPTIONED.has(c.id))
          .map((c) => (
            <div key={c.id} className="section text-center border-t border-[color:var(--line)]">
              {c.kicker && <p className="kicker mb-4">{c.kicker}</p>}
              <h2 className="text-[clamp(26px,3.6vw,46px)] max-w-[20ch] mx-auto">{c.headline}</h2>
              {c.body && <p className="lead mt-4 mx-auto">{c.body}</p>}
            </div>
          ))}
        <div className="text-center pb-[10vh]">
          <button onClick={exploreMore} className="cta-ring solid">
            Explore More
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      id="film"
      aria-label="3S Landcraft — cinematic introduction"
      className="relative bg-bg"
      style={{ height: `${TOTAL_TRACK_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg">
        {/* atmospheric placeholder shown until real frames are generated / decoded */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: ready ? 0 : 1,
            background:
              "radial-gradient(ellipse 90% 70% at 50% 38%, #2a2c30 0%, #17181a 45%, #0a0a0b 100%)",
          }}
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full transition-opacity duration-700"
          style={{ opacity: ready ? 1 : 0 }}
        />
        <div className="vignette" />
        <div className="grain" />

        {chapters
          .filter((c) => CAPTIONED.has(c.id))
          .map((c) => (
            <ChapterCaption
              key={c.id}
              ref={(el) => {
                if (el) captionRefs.current.set(c.id, el);
                else captionRefs.current.delete(c.id);
              }}
              kicker={c.kicker}
              headline={c.headline}
              body={c.body || undefined}
              as={c.id === "clouds" ? "h1" : "h2"}
              cta={c.id === "final-hero" ? { label: "Explore More", onClick: exploreMore } : undefined}
            />
          ))}

        <div
          ref={scrollCueRef}
          className="pointer-events-none absolute bottom-[6vh] left-1/2 z-20 -translate-x-1/2 text-center"
        >
          <div className="mx-auto h-9 w-[1px] bg-[color:var(--ink-dim)] opacity-60" />
          <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-ink-dim">Scroll</p>
        </div>

      </div>
    </section>
  );
}
