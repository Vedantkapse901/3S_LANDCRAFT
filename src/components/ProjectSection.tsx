"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { projectData } from "@/data/project";

export default function ProjectSection() {
  const root = useReveal<HTMLElement>();
  return (
    <section id="project" ref={root} className="section">
      <div className="grid md:grid-cols-2 gap-[6vw] items-center">
        <div data-reveal>
          <p className="kicker mb-5">{projectData.origin.kicker}</p>
          <h2 className="text-[clamp(30px,4vw,54px)] mb-6 max-w-[14ch]">
            {projectData.origin.headline}
          </h2>
          <p className="lead">{projectData.origin.body}</p>
        </div>
        <div data-reveal className="relative aspect-[4/5] rounded-md overflow-hidden img-blend">
          <Image
            src="/img/hero.jpg"
            alt="3S Landcraft — mountaintop site"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-[6vw] items-center mt-[16vh]">
        <div data-reveal className="relative aspect-[4/5] rounded-md overflow-hidden img-blend md:order-1">
          <Image
            src="/img/villa-ridge.jpg"
            alt="3S Landcraft — architectural approach"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div data-reveal className="md:order-2">
          <p className="kicker mb-5">{projectData.philosophy.kicker}</p>
          <h2 className="text-[clamp(30px,4vw,54px)] mb-6 max-w-[14ch]">
            {projectData.philosophy.headline}
          </h2>
          <p className="lead">{projectData.philosophy.body}</p>
        </div>
      </div>
    </section>
  );
}
