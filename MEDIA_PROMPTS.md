# 3S Landcraft — AI generation prompts

Use with any image/video model (Midjourney, Veo, Kling, Runway, Sora, etc).
Every prompt keeps one consistent visual language — photorealistic aerial
cinematography, Sahyadri monsoon-green mountains, warm golden-hour light,
natural architecture — so the pieces cut together as one story.

**Global style block** — append to every prompt if your tool doesn't already
carry a style/character reference between generations:
> photorealistic, cinematic aerial drone cinematography, natural golden-hour
> light, Sahyadri Western Ghats mountain landscape, atmospheric haze, 8k,
> shot on RED camera — no text, no logos, no watermarks, no people, no
> vehicles, no cartoon or game-render look

**Global negative prompt** (for tools that accept one):
> camera shake, handheld wobble, cartoon, toy-like, low-poly, video game
> rendering, morphing terrain, duplicate mountain, duplicate structures,
> text, watermark, logo, people, vehicles on road, blur, flicker,
> oversaturated, neon colors

---

## Still images

### 1. Hero — resort reveal (most important — used across Project/Masterplan/Gallery)
Aspect ratio: **16:9**
> Photorealistic aerial drone photograph of a contemporary luxury mountain
> resort spread naturally across a forested mountaintop clearing in the
> Sahyadri range, India, golden-hour sunlight. Low-rise villas built from
> natural stone, dark timber and glass integrated organically among trees,
> one reflective infinity pool catching warm light, winding stone pathways,
> layered green mountain ridgelines receding into atmospheric haze in the
> background, dramatic warm rim light. No people, no text, no logos, no
> vehicles. Cinematic aerial architectural photography, 8k photorealistic,
> wide establishing composition with generous negative sky space.

### 2. Opening still — clouds over the mountain
Aspect ratio: **16:9**
> Photorealistic aerial photograph looking across a sea of dense white
> monsoon clouds over the Sahyadri mountain range, soft golden sunlight
> filtering through volumetric cloud layers, faint dark mountain ridges
> barely visible far below through gaps in the cloud cover, vast
> atmospheric depth, serene and vast, cinematic 8k photorealistic.

### 3. Villa — "The Ridge Villa"
Aspect ratio: **3:4**
> Photorealistic architectural photograph of a single-level luxury villa in
> natural stone and dark timber, set along a mountaintop ridge edge in the
> Sahyadri range, large glass openings framing a mountain view, private
> terrace, warm interior lighting visible through glass at dusk, minimal
> contemporary design integrated into the terrain, no people, 8k
> photorealistic architectural photography.

### 4. Villa — "The Canopy Villa"
Aspect ratio: **3:4**
> Photorealistic architectural photograph of a contemporary villa raised
> slightly above grade among dense tree canopy on a forested mountainside,
> natural stone and timber cladding, a wooden deck extending into the tree
> line, dappled warm light through leaves, minimal luxury design, no
> people, 8k photorealistic architectural photography.

### 5. Villa — "The Summit Residence"
Aspect ratio: **3:4**
> Photorealistic architectural photograph of a large contemporary luxury
> residence at the highest point of a mountaintop clearing, expansive glass
> walls facing a 270-degree mountain view, natural stone base, dark timber
> upper volume, infinity-edge terrace, golden-hour light, no people, 8k
> photorealistic architectural photography.

### 6. Masterplan / landscape conceptual still (optional)
Aspect ratio: **4:3**
> Photorealistic aerial top-down-angled photograph of a mountaintop
> landscape showing scattered low-rise villas, winding pathways and
> retained forest cover distributed organically across the terrain,
> natural contours visible, no grid layout, soft overcast even lighting,
> conceptual landscape planning photography, 8k photorealistic.

---

## Video clips — 8 chapters, 10 seconds each

Generate in order. If your tool supports image-to-video from a starting
frame, **chain each clip from the previous clip's last frame** (or from the
matching still above) — this is what keeps the mountain/terrain from
morphing between cuts. If it doesn't, keep the same style block on every
clip and it will still cut together reasonably well with a crossfade
(which I'll add automatically when assembling).

### Chapter 1 — Clouds (0:00–0:10)
> Photorealistic aerial cinematography drifting slowly forward through
> dense white monsoon clouds high above a mountain range, soft golden
> sunlight filtering through volumetric cloud layers, faint hints of dark
> mountain ridges barely visible far below, atmospheric haze, locked slow
> forward drift, no camera shake, cinematic drone footage, 8k
> photorealistic. [10 seconds]

### Chapter 2 — Breaking through the clouds (0:10–0:20)
> Photorealistic aerial descent slowly breaking through a layer of white
> clouds, clouds part gradually revealing a dense green Sahyadri mountain
> range below, natural sunlight, atmospheric perspective and haze between
> ridgelines, smooth continuous descending drone movement, camera
> gradually levels and locks onto a distinct mountaintop ahead, cinematic,
> photorealistic 8k. [10 seconds]

### Chapter 3 — Mountaintop reveal (0:20–0:30)
> Photorealistic aerial cinematography, clouds fully cleared, wide
> establishing view of a forested Sahyadri mountain range in golden-hour
> light, one prominent flat-topped mountain in the foreground, layered
> green ridgelines receding into atmospheric haze, slow steady forward
> glide, locked altitude, cinematic drone footage, 8k photorealistic.
> [10 seconds]

### Chapter 4 — Descend and orbit (0:30–0:40)
> Photorealistic aerial cinematography, camera descends smoothly closer to
> a forested mountaintop and begins a slow wide orbit around it, natural
> changing parallax between foreground ridge and distant mountains,
> consistent terrain and vegetation throughout, warm afternoon light,
> stable horizon, controlled cinematic drone orbit, no jitter, 8k
> photorealistic. [10 seconds]

### Chapter 5 — Highway and Kashedi Tunnel (0:40–0:50)
> Photorealistic aerial cinematography continuing the orbit, reveals a
> two-lane highway cut into the mountainside below leading into a concrete
> tunnel entrance set into the rock face, dense Sahyadri forest
> surrounding the road, natural terrain integration, no vehicles, no
> people, slow cinematic drone movement, 8k photorealistic. [10 seconds]

### Chapter 6 — Approach to the development (0:50–1:00)
> Photorealistic aerial cinematography moving closer toward a mountaintop
> clearing, hints of a private access path, scattered rooftops and
> architectural silhouettes partially visible among trees,
> anticipation-building slow approach, natural vegetation foreground, warm
> late-afternoon light, cinematic drone footage, 8k photorealistic.
> [10 seconds]

### Chapter 7 — Full resort reveal (1:00–1:10)
> Photorealistic aerial cinematography reveals a contemporary luxury
> mountain resort spread naturally across a mountaintop clearing, low-rise
> villas built from natural stone, timber and glass integrated organically
> among trees and winding pathways, one reflective pool catching the
> light, mountain views on every side, no apartment-block arrangement,
> architecture nestled into terrain, golden-hour light, slow cinematic
> drone glide, 8k photorealistic architectural visualization. [10 seconds]

### Chapter 8 — Final hero (1:10–1:20)
> Photorealistic aerial cinematography, wide hero composition of the
> mountaintop resort and surrounding Sahyadri landscape, warm golden light
> blooms slightly richer, very slow subtle push-in, camera settles and
> holds, cinematic stillness, 8k photorealistic. [10 seconds]

---

## File naming (so I can drop them straight in)

```
incoming/stills/hero.jpg            (or .png)
incoming/stills/clouds.jpg          (optional — opening still)
incoming/stills/villa-ridge.jpg
incoming/stills/villa-canopy.jpg
incoming/stills/villa-summit.jpg
incoming/stills/masterplan.jpg      (optional)

incoming/clips/clouds.mp4
incoming/clips/breakthrough.mp4
incoming/clips/mountaintop-reveal.mp4
incoming/clips/descend-orbit.mp4
incoming/clips/highway-tunnel.mp4
incoming/clips/approach.mp4
incoming/clips/resort-reveal.mp4
incoming/clips/final-hero.mp4
```

Any subset is fine — send what you have and I'll assemble around it.
