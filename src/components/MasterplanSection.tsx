"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { masterplanData } from "@/data/masterplan";

export default function MasterplanSection() {
  const root = useReveal<HTMLElement>();
  return (
    <section id="masterplan" ref={root} className="section border-t border-[color:var(--line)]">
      <div className="grid md:grid-cols-2 gap-[6vw] items-center">
        <div data-reveal className="relative aspect-[4/3] rounded-md overflow-hidden img-blend">
          <Image
            src="/img/masterplan.jpg"
            alt="Conceptual landscape diagram of the proposed development"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div data-reveal>
          <p className="kicker mb-5">{masterplanData.kicker}</p>
          <h2 className="text-[clamp(30px,4vw,54px)] mb-6 max-w-[14ch]">{masterplanData.headline}</h2>
          <p className="lead mb-8">{masterplanData.body}</p>
          <ul className="space-y-4">
            {masterplanData.zones.map((z) => (
              <li key={z.label} className="flex items-baseline gap-4 border-t border-[color:var(--line)] pt-4">
                <span className="text-sm text-ink w-[40%] shrink-0">{z.label}</span>
                <span className="text-sm text-ink-dim">{z.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p data-reveal className="text-center text-xs text-ink-dim/70 mt-[8vh] max-w-[60ch] mx-auto">
        {masterplanData.note}
      </p>
    </section>
  );
}
