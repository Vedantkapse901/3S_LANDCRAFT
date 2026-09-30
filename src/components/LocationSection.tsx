"use client";

import { useReveal } from "@/lib/useReveal";
import { locationData } from "@/data/location";

export default function LocationSection() {
  const root = useReveal<HTMLElement>();
  return (
    <section id="location" ref={root} className="section border-t border-[color:var(--line)]">
      <div data-reveal className="text-center mb-[8vh]">
        <p className="kicker mb-5">{locationData.kicker}</p>
        <h2 className="text-[clamp(30px,4.2vw,58px)] max-w-[18ch] mx-auto mb-5">
          {locationData.headline}
        </h2>
        <p className="lead mx-auto">{locationData.body}</p>
      </div>

      <div data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--line)] max-w-4xl mx-auto">
        {locationData.points.map((pt) => (
          <div key={pt.label} className="bg-bg p-6 text-center">
            <p className="text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-2">{pt.label}</p>
            <p className="text-sm text-ink">{pt.value}</p>
          </div>
        ))}
      </div>

      <p data-reveal className="text-center text-xs text-ink-dim/70 mt-8 max-w-[52ch] mx-auto">
        {locationData.note}
      </p>
    </section>
  );
}
