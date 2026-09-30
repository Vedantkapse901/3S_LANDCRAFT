"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { galleryData } from "@/data/gallery";

const SPAN: Record<string, string> = {
  wide: "col-span-12 sm:col-span-7 aspect-[16/10]",
  tall: "col-span-12 sm:col-span-5 aspect-[4/5]",
  square: "col-span-6 sm:col-span-5 aspect-square",
};

export default function GallerySection() {
  const root = useReveal<HTMLElement>();
  return (
    <section id="gallery" ref={root} className="section border-t border-[color:var(--line)]">
      <div data-reveal className="text-center mb-[8vh]">
        <p className="kicker mb-5">Gallery</p>
        <h2 className="text-[clamp(28px,3.8vw,48px)]">The site, in fragments.</h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {galleryData.map((g) => (
          <div key={g.id} data-reveal className={`relative rounded-md overflow-hidden ${SPAN[g.span]}`}>
            <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="60vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
