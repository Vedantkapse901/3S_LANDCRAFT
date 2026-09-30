// The cinematic film's chapter map. `start`/`end` are scroll fractions
// calibrated from scripts/build_master.py's printed per-chapter output
// (fps 7, width 1040, xfade 0.4s — 540 frames / 77.2s master, Oct 2026
// generation). Re-run build_master and update these if clips are replaced.

export type Chapter = {
  id: string;
  title: string;
  kicker: string;
  headline: string;
  body: string;
  start: number;
  end: number;
  /** i2v prompt for scripts/hf.py — kept here so the storyboard and the
   *  eventual generation pass share one source of truth. */
  videoPrompt: string;
  negativePrompt: string;
};

export const NEGATIVE_BASE =
  "camera shake, handheld wobble, cartoon, toy-like, low-poly, video game rendering, " +
  "morphing terrain, duplicate mountain, duplicate structures, text, watermark, logo, " +
  "people, vehicles on road, blur, flicker, oversaturated, neon colors";

export const chapters: Chapter[] = [
  {
    id: "clouds",
    title: "Clouds",
    kicker: "3S Landcraft",
    headline: "Kashedi, Maharashtra",
    body: "",
    start: 0,
    end: 0.124,
    videoPrompt:
      "Photorealistic aerial cinematography drifting slowly forward through dense white " +
      "monsoon clouds high above a mountain range, soft golden sunlight filtering through " +
      "volumetric cloud layers, faint hints of dark mountain ridges barely visible far below, " +
      "atmospheric haze, locked slow forward drift, no camera shake, cinematic drone footage, " +
      "8k photorealistic",
    negativePrompt: NEGATIVE_BASE,
  },
  {
    id: "breakthrough",
    title: "Breaking Through the Clouds",
    kicker: "",
    headline: "",
    body: "",
    start: 0.124,
    end: 0.249,
    videoPrompt:
      "Photorealistic aerial descent slowly breaking through a layer of white clouds, clouds " +
      "part gradually revealing a dense green Sahyadri mountain range below, natural sunlight, " +
      "atmospheric perspective and haze between ridgelines, smooth continuous descending " +
      "drone movement, camera gradually levels and locks onto a distinct mountaintop ahead, " +
      "cinematic, photorealistic 8k",
    negativePrompt: NEGATIVE_BASE,
  },
  {
    id: "mountaintop-reveal",
    title: "Mountaintop Reveal",
    kicker: "Kashedi",
    headline: "Above the Sahyadris.",
    body: "A mountaintop within the Kashedi Ghat landscape.",
    start: 0.249,
    end: 0.373,
    videoPrompt:
      "Photorealistic aerial cinematography, clouds fully cleared, wide establishing view of a " +
      "forested Sahyadri mountain range in golden-hour light, one prominent flat-topped " +
      "mountain in the foreground, layered green ridgelines receding into atmospheric haze, " +
      "slow steady forward glide, locked altitude, cinematic drone footage, 8k photorealistic",
    negativePrompt: NEGATIVE_BASE,
  },
  {
    id: "descend-orbit",
    title: "Descend and Orbit",
    kicker: "",
    headline: "",
    body: "",
    start: 0.373,
    end: 0.497,
    videoPrompt:
      "Photorealistic aerial cinematography, camera descends smoothly closer to a forested " +
      "mountaintop and begins a slow wide orbit around it, natural changing parallax between " +
      "foreground ridge and distant mountains, consistent terrain and vegetation throughout, " +
      "warm afternoon light, stable horizon, controlled cinematic drone orbit, no jitter, " +
      "8k photorealistic",
    negativePrompt: NEGATIVE_BASE,
  },
  {
    id: "highway-tunnel",
    title: "Highway and Kashedi Tunnel",
    kicker: "Connected by NH-66",
    headline: "Within the Kashedi Ghat landscape.",
    body: "",
    start: 0.497,
    end: 0.622,
    videoPrompt:
      "Photorealistic aerial cinematography continuing the orbit, reveals a two-lane highway " +
      "cut into the mountainside below leading into a concrete tunnel entrance set into the " +
      "rock face, dense Sahyadri forest surrounding the road, natural terrain integration, " +
      "no vehicles, no people, slow cinematic drone movement, 8k photorealistic",
    negativePrompt: NEGATIVE_BASE,
  },
  {
    id: "approach",
    title: "Approach to the Development",
    kicker: "",
    headline: "",
    body: "",
    start: 0.622,
    end: 0.746,
    videoPrompt:
      "Photorealistic aerial cinematography moving closer toward a mountaintop clearing, " +
      "hints of a private access path, scattered rooftops and architectural silhouettes " +
      "partially visible among trees, anticipation-building slow approach, natural vegetation " +
      "foreground, warm late-afternoon light, cinematic drone footage, 8k photorealistic",
    negativePrompt: NEGATIVE_BASE,
  },
  {
    id: "resort-reveal",
    title: "Full Resort Reveal",
    kicker: "The Retreat",
    headline: "A development integrated with its setting.",
    body: "Conceptual visualization — approximately 50–60 acres of proposed resort landscape.",
    start: 0.746,
    end: 0.87,
    videoPrompt:
      "Photorealistic aerial cinematography reveals a contemporary luxury mountain resort " +
      "spread naturally across a mountaintop clearing, low-rise villas built from natural " +
      "stone, timber and glass integrated organically among trees and winding pathways, one " +
      "reflective pool catching the light, mountain views on every side, no apartment-block " +
      "arrangement, architecture nestled into terrain, golden-hour light, slow cinematic " +
      "drone glide, 8k photorealistic architectural visualization",
    negativePrompt: NEGATIVE_BASE + ", oversized glass towers, apartment blocks, gold, marble excess",
  },
  {
    id: "final-hero",
    title: "Final Hero",
    kicker: "3S Landcraft",
    headline: "Where the mountain becomes the address.",
    body: "",
    start: 0.87,
    end: 1,
    videoPrompt:
      "Photorealistic aerial cinematography, wide hero composition of the mountaintop resort " +
      "and surrounding Sahyadri landscape, warm golden light blooms slightly richer, very " +
      "slow subtle push-in, camera settles and holds, cinematic stillness, 8k photorealistic",
    negativePrompt: NEGATIVE_BASE,
  },
];

export const TOTAL_TRACK_VH = chapters.length * 120;
