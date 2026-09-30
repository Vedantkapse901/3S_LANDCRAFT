"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { villaData, villaDisclaimer } from "@/data/villas";

export default function VillaShowcase() {
  const root = useReveal<HTMLElement>();
  return (
    <section id="villas" ref={root} className="section border-t border-[color:var(--line)]">
      <div data-reveal className="text-center mb-[10vh]">
        <p className="kicker mb-5">Villas</p>
        <h2 className="text-[clamp(30px,4.2vw,58px)] max-w-[16ch] mx-auto">
          Conceptual residences, not a catalogue.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {villaData.map((v) => (
          <div key={v.id} data-reveal className="group">
            <div className="relative aspect-[3/4] rounded-md overflow-hidden img-blend mb-5">
              <Image
                src={v.image}
                alt={v.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-bronze mb-2">{v.tagline}</p>
            <h3 className="text-xl mb-2">{v.name}</h3>
            <p className="text-sm text-ink-dim leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>

      <p data-reveal className="text-center text-xs text-ink-dim/70 mt-[8vh] max-w-[60ch] mx-auto">
        {villaDisclaimer}
      </p>
    </section>
  );
}
