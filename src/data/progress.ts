export type ProgressEntry = {
  date: string; // ISO — update as real milestones land
  title: string;
  description: string;
  images: string[];
  videos: string[];
  category: "Site" | "Access" | "Structure" | "Landscape" | "Milestone";
};

// Empty until real construction photography/video exists — do not invent
// milestones. The Progress page renders this list generically so adding a
// real entry later needs no UI changes, just a new object here.
export const progressData: ProgressEntry[] = [];

export const progressCategories: ProgressEntry["category"][] = [
  "Site",
  "Access",
  "Structure",
  "Landscape",
  "Milestone",
];
