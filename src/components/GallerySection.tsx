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
    <>
      <style jsx>{`
        @keyframes floatImage {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmerBorder {
          0%, 100% {
            box-shadow: 0 0 20px rgba(184, 144, 90, 0.3), inset 0 0 20px rgba(184, 144, 90, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(184, 144, 90, 0.6), inset 0 0 30px rgba(184, 144, 90, 0.2), 0 0 60px rgba(74, 93, 67, 0.3);
          }
        }

        @keyframes rotateGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gallery-item {
          position: relative;
          overflow: visible;
          border-radius: 20px;
          animation: scaleIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 12px;
        }

        .gallery-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(184, 144, 90, 0.3) 0%,
            rgba(184, 144, 90, 0.1) 50%,
            rgba(74, 93, 67, 0.2) 100%);
          border-radius: 20px;
          pointer-events: none;
          z-index: 1;
          border: 3px solid #b8905a;
          box-shadow:
            0 0 30px rgba(184, 144, 90, 0.4),
            inset 0 0 30px rgba(184, 144, 90, 0.15),
            0 0 60px rgba(184, 144, 90, 0.2);
          animation: shimmerBorder 5s ease-in-out infinite;
        }

        .gallery-item::after {
          content: '';
          position: absolute;
          inset: -12px;
          background: linear-gradient(45deg, #b8905a, #d4b896, #4a5d43, #b8905a);
          background-size: 400% 400%;
          border-radius: 24px;
          opacity: 0.3;
          animation: rotateGradient 10s ease infinite;
          z-index: -1;
          filter: blur(8px);
        }

        .gallery-item:hover::before {
          box-shadow:
            0 0 50px rgba(184, 144, 90, 0.8),
            inset 0 0 40px rgba(184, 144, 90, 0.25),
            0 0 100px rgba(184, 144, 90, 0.4);
        }

        .gallery-item:hover::after {
          opacity: 0.6;
        }

        .gallery-item-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 12px;
        }

        .gallery-item-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: floatImage 6s ease-in-out infinite;
        }

        .gallery-item:hover .gallery-item-inner img {
          transform: scale(1.08) rotate(2deg);
          animation: none;
        }

        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(10, 10, 11, 0) 0%,
            rgba(10, 10, 11, 0.3) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 3;
        }

        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .gallery-decoration-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(184, 144, 90, 0.2);
        }

        .gallery-decoration-line {
          position: absolute;
          background: linear-gradient(90deg,
            transparent,
            rgba(184, 144, 90, 0.3),
            transparent);
        }

        .gallery-title {
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s backwards;
        }

        .gallery-grid {
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s backwards;
        }
      `}</style>

      <section id="gallery" ref={root} className="section border-t border-[color:var(--line)] relative overflow-visible" style={{
        backgroundImage: 'url(/gallery-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 -z-10" />

        {/* Ornate background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bronze/1 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green/1 rounded-full blur-3xl -z-10" />

        {/* Decorative top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-bronze to-transparent opacity-60" />

        {/* Decorative curved lines - left */}
        <div className="absolute left-0 top-1/4 w-64 h-64 border-2 border-bronze/20 rounded-full -z-10" />
        <div className="absolute left-8 top-1/3 w-48 h-48 border-2 border-bronze/10 rounded-full -z-10" />

        {/* Decorative curved lines - right */}
        <div className="absolute right-0 bottom-1/4 w-80 h-80 border-2 border-bronze/15 rounded-full -z-10" />
        <div className="absolute right-12 bottom-1/3 w-56 h-56 border-2 border-bronze/10 rounded-full -z-10" />

        <div data-reveal className="text-center mb-[8vh] gallery-title relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-bronze opacity-60" />
            <p className="kicker mb-0">Gallery</p>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-bronze opacity-60" />
          </div>
          <h2 className="text-[clamp(28px,3.8vw,48px)] font-serif">
            The site, <span style={{
              background: 'linear-gradient(90deg, #d4b896, #b8905a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>in fragments</span>.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-5 gallery-grid">
          {galleryData.map((g, idx) => (
            <div
              key={g.id}
              data-reveal
              className={`gallery-item ${SPAN[g.span]}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="gallery-decoration">
                {/* Decorative circle */}
                <div className="gallery-decoration-circle" style={{
                  width: '200px',
                  height: '200px',
                  top: '-50px',
                  right: '-50px',
                  opacity: 0.1
                }} />
                {/* Decorative line */}
                <div className="gallery-decoration-line" style={{
                  width: '100%',
                  height: '1px',
                  top: '20%',
                  left: 0
                }} />
              </div>

              <div className="gallery-item-inner">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover"
                  sizes="60vw"
                  quality={90}
                  priority={idx < 3}
                />
              </div>

              <div className="gallery-item-overlay" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
