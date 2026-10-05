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
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes colorShift {
          0% {
            color: #d4b896;
          }
          50% {
            color: #e8d4b8;
          }
          100% {
            color: #d4b896;
          }
        }

        @keyframes rainbowGlow {
          0% {
            text-shadow: 0 0 10px rgba(184, 144, 90, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(74, 93, 67, 0.7), 0 0 30px rgba(184, 144, 90, 0.5);
          }
          100% {
            text-shadow: 0 0 10px rgba(184, 144, 90, 0.5);
          }
        }

        @keyframes textGradientShift {
          0%, 100% {
            background: linear-gradient(90deg, #d4b896, #b8905a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          50% {
            background: linear-gradient(90deg, #e8d4b8, #d4b896);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        @keyframes colorBreathe {
          0%, 100% {
            color: #a39c8f;
            opacity: 0.8;
          }
          50% {
            color: #d4b896;
            opacity: 1;
          }
        }

        @keyframes buttonGlow {
          0%, 100% {
            background: linear-gradient(135deg, #b8905a 0%, #d4b896 100%);
            box-shadow: 0 0 20px rgba(184, 144, 90, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1);
          }
          50% {
            background: linear-gradient(135deg, #d4b896 0%, #e8d4b8 100%);
            box-shadow: 0 0 30px rgba(184, 144, 90, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.15);
          }
        }

        @keyframes pulseHighlight {
          0%, 100% {
            box-shadow: 0 0 10px rgba(184, 144, 90, 0.5), 0 0 20px rgba(184, 144, 90, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.08);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px rgba(184, 144, 90, 0.9), 0 0 40px rgba(184, 144, 90, 0.6), 0 0 60px rgba(184, 144, 90, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.15);
            transform: scale(1.03);
          }
        }

        @keyframes shimmerEffect {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .nav-link {
          position: relative;
          overflow: hidden;
          font-family: 'Times New Roman', Times, serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4b896;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 8px 0;
          background: linear-gradient(90deg, #e8d4b8 0%, #d4b896 50%, #e8d4b8 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.9;
          animation: textGradientShift 6s ease-in-out infinite;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #4a5d43, #b8905a, #4a5d43);
          background-size: 200% 100%;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease;
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(184, 144, 90, 0.3);
        }

        .nav-link:hover {
          background: linear-gradient(90deg, #e8d4b8 0%, #d4b896 50%, #e8d4b8 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 20px rgba(184, 144, 90, 0.4);
        }

        .nav-link:hover::after {
          transform: translateX(0);
          box-shadow: 0 0 15px rgba(184, 144, 90, 0.6), 0 0 25px rgba(74, 93, 67, 0.3);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          padding: 8px;
          position: relative;
          z-index: 40;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 24px;
          background: linear-gradient(90deg, #d4b896, #b8905a);
          border-radius: 1px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
          box-shadow: 0 0 8px rgba(212, 184, 150, 0.4);
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }

        .mobile-menu {
          animation: slideDown 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .mobile-menu-item {
          animation: fadeIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          color: #d4b896 !important;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.25s; }
        .mobile-menu-item:nth-child(6) { animation-delay: 0.3s; }
        .mobile-menu-item:nth-child(7) { animation-delay: 0.35s; }

        .mobile-menu-item:hover {
          color: #e8d4b8 !important;
        }

        /* Transparent during video, solid after */
        nav {
          background-color: transparent !important;
          background-image: none !important;
        }

        nav.solid {
          background-color: rgba(10, 10, 11, 0.92) !important;
          background-image: none !important;
        }

        /* Enhanced CTA button styling */
        .nav-cta {
          background: linear-gradient(135deg, #b8905a 0%, #d4b896 100%);
          color: #0a0a0b;
          border: 2px solid #d4b896;
          box-shadow: 0 0 20px rgba(184, 144, 90, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1);
          animation: pulseHighlight 2.5s ease-in-out infinite, buttonGlow 5s ease-in-out infinite;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-cta::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
          background-size: 200% 200%;
          animation: shimmerEffect 3s infinite;
          pointer-events: none;
        }

        .nav-cta:hover {
          box-shadow: 0 0 40px rgba(184, 144, 90, 0.9), 0 0 60px rgba(184, 144, 90, 0.6), 0 0 80px rgba(184, 144, 90, 0.3), inset 0 0 25px rgba(255, 255, 255, 0.2);
          transform: translateY(-4px) scale(1.08);
          background: linear-gradient(135deg, #d4b896 0%, #e8d4b8 100%);
          animation: pulseHighlight 1.5s ease-in-out infinite;
        }
      `}</style>

      <nav
        className={`fixed inset-x-0 top-0 z-[90] flex items-center justify-between px-[5vw] py-4 transition-all duration-700 ${
          solid
            ? "solid border-b border-[color:var(--line)] shadow-lg"
            : ""
        }`}
        style={{
          backgroundColor: 'transparent',
          backdropFilter: solid ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: solid ? 'blur(12px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-[14px] font-serif font-bold tracking-[0.35em] uppercase shrink-0 transition-all duration-400 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #d4b896 0%, #b8905a 50%, #4a5d43 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block'
          }}
        >
          3S Landcraft
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[3.2vw]">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={(e) => go(e, l.href, l.anchor)}
              className="nav-link"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="nav-cta hidden sm:inline-flex text-xs py-3 px-8 rounded-full font-serif font-bold tracking-[0.15em] uppercase"
          >
            Enquire
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`hamburger md:hidden ${open ? 'active' : ''}`}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="absolute top-full inset-x-0 bg-bg/95 backdrop-blur-xl border-b border-[color:var(--line)] md:hidden mobile-menu shadow-2xl">
            <div className="flex flex-col p-8 gap-6">
              {LINKS.map((l, idx) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    go(e, l.href, l.anchor);
                    setOpen(false);
                  }}
                  className="mobile-menu-item nav-link text-sm"
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-px bg-[color:var(--line)] my-2" />
              <Link
                href="/contact"
                className="nav-cta w-fit mobile-menu-item text-xs py-3 px-8 rounded-full font-serif font-bold tracking-[0.15em] uppercase inline-flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                ✨ Enquire Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
