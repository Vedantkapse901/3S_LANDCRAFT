"use client";

import { useReveal } from "@/lib/useReveal";
import { projectData } from "@/data/project";

export default function ManifestoSection() {
  const root = useReveal<HTMLElement>();
  return (
    <section id="manifesto" ref={root} className="section text-center py-[22vh]">
      <div data-reveal>
        <p className="kicker mb-8">{projectData.name}</p>
        <h2 className="text-[clamp(38px,7vw,104px)] max-w-[16ch] mx-auto">
          {projectData.manifesto[0]}
          <br />
          <em className="not-italic text-bronze">{projectData.manifesto[1]}</em>
        </h2>
      </div>
    </section>
  );
}
