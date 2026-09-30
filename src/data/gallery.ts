export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span: "wide" | "tall" | "square";
};

// Reuses stills already shown elsewhere on the page (hero/masterplan/villas)
// per SKILL §35 — different crops/pairings rather than duplicating the same
// frame at the same size.
export const galleryData: GalleryImage[] = [
  { id: "g1", src: "/img/hero.jpg", alt: "Mountaintop resort, aerial view", span: "wide" },
  { id: "g2", src: "/img/villa-summit.jpg", alt: "The Summit Residence, conceptual view", span: "tall" },
  { id: "g3", src: "/img/clouds.jpg", alt: "Clouds over the Sahyadri range", span: "square" },
  { id: "g4", src: "/img/masterplan.jpg", alt: "Conceptual landscape diagram", span: "wide" },
];
