import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap-config";
import { prefersReducedMotion } from "./reduced-motion";

/**
 * Lenis smooth scroll wired into GSAP's ticker so ScrollTrigger
 * scrubbing stays perfectly in sync with the smoothed scroll value.
 * Disabled entirely under prefers-reduced-motion.
 */
export function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
      anchors: { offset: -64 },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}
