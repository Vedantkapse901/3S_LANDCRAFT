export type Director = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  placeholder: true;
};

// Never invent qualifications, awards, companies, years of experience or
// achievements — replace with verified bios and photographs when supplied.
export const directorData: Director[] = [
  {
    id: "director-1",
    name: "Name pending",
    role: "Director",
    bio: "Biography to be supplied by 3S Landcraft.",
    photo: "/img/director-placeholder.jpg",
    placeholder: true,
  },
  {
    id: "director-2",
    name: "Name pending",
    role: "Director",
    bio: "Biography to be supplied by 3S Landcraft.",
    photo: "/img/director-placeholder.jpg",
    placeholder: true,
  },
];
