"use client";

import { useReveal } from "@/lib/useReveal";
import { amenityData, amenityDisclaimer } from "@/data/amenities";

export default function AmenitiesSection() {
  const root = useReveal<HTMLElement>();
  return (
    <section id="amenities" ref={root} className="section border-t border-[color:var(--line)]">
      <div data-reveal className="text-center mb-[9vh]">
        <p className="kicker mb-5">Amenities</p>
        <h2 className="text-[clamp(30px,4.2vw,58px)] max-w-[16ch] mx-auto">
          Held lightly against the landscape.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--line)]">
        {amenityData.map((a) => (
          <div key={a.id} data-reveal className="bg-bg p-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-bronze mb-3">{a.category}</p>
            <h3 className="text-lg mb-2">{a.name}</h3>
            <p className="text-sm text-ink-dim leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>

      <p data-reveal className="text-center text-xs text-ink-dim/70 mt-[8vh] max-w-[60ch] mx-auto">
        {amenityDisclaimer}
      </p>
    </section>
  );
}
