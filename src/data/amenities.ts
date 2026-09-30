export type Amenity = {
  id: string;
  category: "Wellness" | "Leisure" | "Dining" | "Outdoor" | "Landscape";
  name: string;
  description: string;
  placeholder: true;
};

// Conceptual categories only — final amenity list must come from the
// project team. Nothing here is a confirmed project feature.
export const amenityData: Amenity[] = [
  {
    id: "spa",
    category: "Wellness",
    name: "Wellness Pavilion",
    description: "A conceptual spa and wellness space set apart from the villas.",
    placeholder: true,
  },
  {
    id: "pool",
    category: "Leisure",
    name: "Horizon Pool",
    description: "A proposed infinity-edge pool oriented toward the mountain view.",
    placeholder: true,
  },
  {
    id: "dining",
    category: "Dining",
    name: "The Clearing",
    description: "A conceptual open-air dining pavilion within the tree line.",
    placeholder: true,
  },
  {
    id: "decks",
    category: "Outdoor",
    name: "Viewing Decks",
    description: "Proposed lookout points positioned along the summit's natural contours.",
    placeholder: true,
  },
  {
    id: "trails",
    category: "Landscape",
    name: "Forest Trails",
    description: "Conceptual walking paths through the retained natural vegetation.",
    placeholder: true,
  },
];

export const amenityDisclaimer =
  "Amenities shown are conceptual categories for the proposed development. Final amenities, " +
  "specifications and availability will be confirmed by the project team.";
