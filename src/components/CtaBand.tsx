"use client";

import Link from "next/link";
import { useReveal } from "@/lib/useReveal";

export default function CtaBand({
  headline = "One address, above the ghat.",
  ctaLabel = "Enquire",
  ctaHref = "/contact",
}: {
  headline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const root = useReveal<HTMLElement>();
  return (
    <section ref={root} className="section text-center py-[20vh] border-t border-[color:var(--line)]">
      <div data-reveal>
        <h2 className="text-[clamp(32px,5vw,64px)] max-w-[16ch] mx-auto mb-10">{headline}</h2>
        <Link href={ctaHref} className="cta-ring solid">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
