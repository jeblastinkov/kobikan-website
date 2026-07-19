import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Letter-by-letter headline reveal. Letters are grouped into non-breaking word
 * wrappers so lines can only wrap between words. Japanese (no word spaces)
 * animates as a single unit instead. Screen readers get the intact sentence.
 */
export function KineticHeadline({
  text,
  lang,
  className,
}: {
  text: string;
  lang: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = lang === "ja" ? [text] : text.split(" ");

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(ref.current.querySelectorAll(".kh-u"), {
        yPercent: 70,
        opacity: 0,
        duration: 0.7,
        stagger: 0.018,
        ease: "power3.out",
      });
    },
    { scope: ref, dependencies: [text] },
  );

  return (
    <span ref={ref} aria-label={text} className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="contents">
          <span aria-hidden className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => (
              <span key={ci} className="kh-u inline-block will-change-transform">
                {ch}
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
