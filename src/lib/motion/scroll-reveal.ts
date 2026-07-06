import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";
import { gsap } from "./gsap-config";
import { prefersReducedMotion } from "./reduced-motion";

export function useScrollReveal<T extends HTMLElement>(
  scope: RefObject<T | null>,
  selector = "[data-reveal]",
) {
  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return;

      const elements = gsap.utils.toArray<HTMLElement>(selector, scope.current);
      if (!elements.length) return;

      gsap.from(elements, {
        scrollTrigger: {
          trigger: scope.current,
          start: "top 78%",
          once: true,
        },
        y: 34,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
    },
    { scope },
  );
}
