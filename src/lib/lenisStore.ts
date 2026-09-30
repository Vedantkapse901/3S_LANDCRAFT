import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

/** Smooth-scroll to an element id or selector via the shared Lenis instance. */
export function scrollToTarget(target: string, offset = 0) {
  if (instance) {
    instance.scrollTo(target, { offset, duration: 1.4 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}
