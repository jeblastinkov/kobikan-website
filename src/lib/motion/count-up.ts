import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";
import { gsap } from "./gsap-config";
import { prefersReducedMotion } from "./reduced-motion";

export function useCountUp<T extends HTMLElement>(scope: RefObject<T | null>) {
  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return;

      const stats = gsap.utils.toArray<HTMLElement>("[data-count]", scope.current);
      stats.forEach((stat) => {
        const value = Number(stat.dataset.count);
        if (Number.isNaN(value)) return;

        const suffix = stat.dataset.suffix ?? "";
        const state = { value: 0 };

        gsap.to(state, {
          value,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            stat.textContent = `${Math.round(state.value)}${suffix}`;
          },
        });
      });
    },
    { scope },
  );
}
