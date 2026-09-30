export type Villa = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  placeholder: true;
};

// All entries are conceptual visualization, not confirmed unit types —
// replace image + copy once official renders/floor plans exist.
export const villaData: Villa[] = [
  {
    id: "ridge",
    name: "The Ridge Villa",
    tagline: "Set along the summit edge",
    description:
      "A single-level form in stone and timber, opening fully onto the mountain view through " +
      "a private terrace.",
    image: "/img/villa-ridge.jpg",
    placeholder: true,
  },
  {
    id: "canopy",
    name: "The Canopy Villa",
    tagline: "Set among the tree line",
    description:
      "Raised slightly above grade, framed by existing tree cover, with a deck extended into " +
      "the canopy.",
    image: "/img/villa-canopy.jpg",
    placeholder: true,
  },
  {
    id: "summit",
    name: "The Summit Residence",
    tagline: "The highest point on the plan",
    description:
      "The development's largest conceptual residence, oriented for a 270° view across the " +
      "Sahyadri range.",
    image: "/img/villa-summit.jpg",
    placeholder: true,
  },
];

export const villaDisclaimer =
  "Villa names, forms and imagery shown are conceptual visualization for the proposed " +
  "development, not final architectural designs or confirmed unit configurations.";
