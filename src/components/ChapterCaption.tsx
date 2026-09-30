"use client";

import { forwardRef } from "react";

type Props = {
  kicker: string;
  headline: string;
  body?: string;
  align?: "center" | "left";
  cta?: { label: string; onClick: () => void };
  /** the opening caption is the page's single h1; every other chapter uses h2 */
  as?: "h1" | "h2";
};

/** A chapter info panel. Opacity/transform are driven imperatively by the
 *  parent's scroll-progress tick (see CinematicFilm) for 60fps updates
 *  without React re-renders. Width/font-size use fixed breakpoint steps,
 *  not `ch`/`vw`, so they can't blow up on narrow or unusual viewports. */
const ChapterCaption = forwardRef<HTMLDivElement, Props>(
  ({ kicker, headline, body, align = "center", cta, as: Heading = "h2" }, ref) => (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-x-0 bottom-[10vh] sm:bottom-[14vh] z-20 px-6 sm:px-10 opacity-0 ${
        align === "center" ? "text-center" : "text-left"
      }`}
      style={{ willChange: "opacity, transform" }}
    >
      <div
        className={`max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-2xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {kicker && <p className="kicker mb-3 sm:mb-4">{kicker}</p>}
        {headline && (
          <Heading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-ink">
            {headline}
          </Heading>
        )}
        {body && <p className="lead mt-3 sm:mt-4 mx-auto text-sm sm:text-base">{body}</p>}
        {cta && (
          <button onClick={cta.onClick} className="cta-ring solid pointer-events-auto mt-6 sm:mt-8">
            {cta.label}
          </button>
        )}
      </div>
    </div>
  )
);

ChapterCaption.displayName = "ChapterCaption";
export default ChapterCaption;
