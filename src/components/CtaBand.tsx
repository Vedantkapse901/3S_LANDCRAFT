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
    <>
      <style jsx>{`
        @keyframes titleGlowAnimation {
          0%, 100% {
            color: #f3efe7;
            text-shadow: 0 0 10px rgba(184, 144, 90, 0.3), 0 0 20px rgba(74, 93, 67, 0.2);
          }
          50% {
            color: #e8d4b8;
            text-shadow: 0 0 20px rgba(184, 144, 90, 0.6), 0 0 30px rgba(74, 93, 67, 0.4), 0 0 40px rgba(184, 144, 90, 0.3);
          }
        }

        @keyframes buttonPulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(184, 144, 90, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1), 0 0 40px rgba(184, 144, 90, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(184, 144, 90, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.15), 0 0 60px rgba(184, 144, 90, 0.4);
            transform: scale(1.02);
          }
        }

        @keyframes slideUpReveal {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starTwinkle {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes arrowBounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }

        .cta-band-section {
          background: url('/cta-bg.png') center/cover fixed;
          position: relative;
          transition: all 0.6s ease;
          animation: slideUpReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .cta-band-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 10, 11, 0.65) 0%, rgba(10, 10, 11, 0.45) 50%, rgba(10, 10, 11, 0.65) 100%);
          z-index: 0;
          pointer-events: none;
        }

        .cta-band-overlay {
          position: relative;
          z-index: 1;
        }

        .cta-band-star {
          display: inline-block;
          font-size: 28px;
          color: #d4b896;
          margin-bottom: 16px;
          animation: starTwinkle 3s ease-in-out infinite;
        }

        .cta-band-decorative-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .cta-band-line {
          width: 50px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #b8905a, transparent);
        }

        .cta-band-button {
          background: linear-gradient(135deg, #b8905a 0%, #d4b896 50%, #e8d4b8 100%);
          color: #0a0a0b;
          border: 3px solid #d4b896;
          padding: 18px 45px;
          border-radius: 50px;
          font-family: 'Times New Roman', Times, serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: buttonPulseGlow 4s ease-in-out infinite;
          box-shadow:
            0 0 20px rgba(184, 144, 90, 0.5),
            0 0 40px rgba(184, 144, 90, 0.3),
            0 0 60px rgba(184, 144, 90, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.15),
            0 10px 30px rgba(0, 0, 0, 0.4);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .cta-band-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%);
          animation: shimmer 3s infinite;
          pointer-events: none;
        }

        .cta-band-button::after {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #b8905a, #4a5d43, #d4b896);
          border-radius: 50px;
          z-index: -1;
          opacity: 0.5;
          filter: blur(10px);
          animation: buttonPulseGlow 3s ease-in-out infinite;
        }

        .cta-band-button:hover {
          transform: translateY(-6px) scale(1.1);
          background: linear-gradient(135deg, #d4b896 0%, #e8d4b8 50%, #f0e0c8 100%);
          border-color: #e8d4b8;
          box-shadow:
            0 0 30px rgba(184, 144, 90, 0.9),
            0 0 60px rgba(184, 144, 90, 0.7),
            0 0 90px rgba(184, 144, 90, 0.5),
            0 0 120px rgba(74, 93, 67, 0.4),
            inset 0 0 30px rgba(255, 255, 255, 0.25),
            0 20px 50px rgba(0, 0, 0, 0.5);
          animation: buttonPulseGlow 1.5s ease-in-out infinite;
        }

        .cta-band-button:hover::before {
          animation: shimmer 1.5s infinite;
        }

        .cta-band-arrow {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 24px;
          border-left: 2px solid #b8905a;
          border-bottom: 2px solid #b8905a;
          transform: translateX(-50%) rotate(-45deg);
          animation: arrowBounce 2s ease-in-out infinite;
          opacity: 0.7;
        }

        .cta-band-headline {
          font-family: 'Times New Roman', Times, serif;
          animation: titleGlowAnimation 4s ease-in-out infinite;
        }

        [data-reveal] {
          animation: slideUpReveal 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

      <section ref={root} className="section border-t border-[color:var(--line)] py-[15vh] cta-band-section flex items-center justify-center relative">
        <div data-reveal className="cta-band-overlay flex flex-col items-center justify-center w-full">
          {/* Decorative star */}
          <div className="cta-band-star">✦</div>

          {/* Main headline */}
          <h2 className="cta-band-headline text-[clamp(40px,7vw,72px)] max-w-[18ch] mx-auto mb-8 leading-tight text-center">{headline}</h2>

          {/* Decorative lines around button */}
          <div className="cta-band-decorative-lines">
            <div className="cta-band-line" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-bronze">EXPLORE</span>
            <div className="cta-band-line" />
          </div>

          {/* Button */}
          <div className="relative mt-4">
            <Link href={ctaHref} className="cta-band-button">
              {ctaLabel}
            </Link>
            <div className="cta-band-arrow" />
          </div>
        </div>
      </section>
    </>
  );
}
