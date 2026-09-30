"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TOTAL_TRACK_VH } from "@/data/chapters";
import { scrollToTarget } from "@/lib/lenisStore";

const LINKS: { label: string; href: string; anchor?: boolean }[] = [
  { label: "Project", href: "/#project", anchor: true },
  { label: "Villas", href: "/#villas", anchor: true },
  { label: "Amenities", href: "/#amenities", anchor: true },
  { label: "Progress", href: "/progress" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Transparent/overlaid during the cinematic film, becomes a solid sticky
 *  bar once the user scrolls past it (SKILL brief §22). On non-home pages
 *  there is no film to sit over, so it starts solid. */
export default function Navigation({ hasFilm = true }: { hasFilm?: boolean }) {
  const [solid, setSolid] = useState(!hasFilm);
  const [open, setOpen] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    if (!hasFilm) return;
    const filmPx = () => window.innerHeight * (TOTAL_TRACK_VH / 100 - 1);
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setSolid(window.scrollY > filmPx() * 0.96);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasFilm]);

  function go(e: React.MouseEvent, href: string, anchor?: boolean) {
    if (anchor && window.location.pathname === "/") {
      e.preventDefault();
      scrollToTarget(href.replace("/#", "#"));
      setOpen(false);
    }
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[90] flex items-center justify-between px-[5vw] py-5 transition-all duration-500 ${
        solid ? "bg-bg/85 backdrop-blur-md border-b border-[color:var(--line)]" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-[13px] tracking-[0.42em] uppercase text-ink shrink-0">
        3S Landcraft
      </Link>

      <div className="hidden md:flex items-center gap-[2.4vw]">
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={(e) => go(e, l.href, l.anchor)}
            className="text-[11px] tracking-[0.22em] uppercase text-ink-dim hover:text-ink transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/contact" className="cta-ring hidden sm:inline-flex">
          Enquire
        </Link>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-[1px] w-5 bg-ink" />
          <span className="block h-[1px] w-5 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="absolute top-full inset-x-0 bg-bg/97 backdrop-blur-md border-b border-[color:var(--line)] md:hidden">
          <div className="flex flex-col p-6 gap-5">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  go(e, l.href, l.anchor);
                  setOpen(false);
                }}
                className="text-sm tracking-[0.18em] uppercase text-ink-dim"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="cta-ring solid w-fit" onClick={() => setOpen(false)}>
              Enquire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
