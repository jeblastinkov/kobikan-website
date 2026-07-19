import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Counts the numeric part of a stat string (e.g. "50 %", "8+") up from zero
 * when scrolled into view. SSR/no-JS/reduced-motion render the final value.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const match = value.match(/\d+/);
      if (!el || !match) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const target = Number(match[0]);
      const state = { n: 0 };
      gsap.to(state, {
        n: target,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = value.replace(match[0], String(Math.round(state.n)));
        },
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
