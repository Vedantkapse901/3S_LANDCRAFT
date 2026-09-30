"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fades/rises every [data-reveal] descendant in on scroll — for normal (non-scrub) sections. */
export function useReveal<T extends HTMLElement>() {
  const root = useRef<T | null>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const els = root.current!.querySelectorAll<HTMLElement>("[data-reveal]");
      els.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 82%",
          once: true,
          // stagger siblings slightly by index within their own section
          onEnter: () => gsap.delayedCall((i % 4) * 0.06, () => el.classList.add("in")),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return root;
}
