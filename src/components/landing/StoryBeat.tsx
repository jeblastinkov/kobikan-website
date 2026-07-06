import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { T } from "@/lib/i18n";
import { gsap } from "@/lib/motion/gsap-config";
import { prefersReducedMotion } from "@/lib/motion/reduced-motion";
import { MonoId, SectionLabel, SpecCorners } from "./primitives";

/**
 * Pinned story beat — minimal words, big type, spec-sheet framing.
 * The three pillars crossfade in place while the section is pinned.
 * Mobile / reduced motion: no pin, beats stack.
 */
export function StoryBeat({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      if (prefersReducedMotion()) return;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile) return;

      const beats = gsap.utils.toArray<HTMLElement>("[data-beat]", section);
      const dots = gsap.utils.toArray<HTMLElement>("[data-beat-dot]", section);

      // explicit initial states (scrubbed timelines render lazily)
      gsap.set("[data-beat-headline]", { y: 60, opacity: 0 });
      gsap.set(beats, { opacity: 0, y: 46 });
      gsap.set(beats[0], { opacity: 1, y: 0 });
      gsap.set("[data-beat-closing]", { opacity: 0 });
      if (dots[0]) gsap.set(dots[0], { backgroundColor: "#ff3333" });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=280%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // headline settles first
      tl.to("[data-beat-headline]", { y: 0, opacity: 1, duration: 0.1, ease: "power2.out" }, 0);

      const seg = 0.78 / beats.length;
      beats.forEach((beat, i) => {
        if (i === 0) return;
        const at = i * seg;
        tl.to(beats[i - 1], { opacity: 0, y: -34, duration: seg * 0.3, ease: "power2.in" }, at);
        tl.to(dots[i - 1], { backgroundColor: "rgba(255,255,255,0.15)", duration: 0.01 }, at);
        tl.to(beat, { opacity: 1, y: 0, duration: seg * 0.34, ease: "power2.out" }, at + 0.04);
        tl.to(dots[i], { backgroundColor: "#ff3333", duration: 0.01 }, at + 0.04);
      });

      tl.to("[data-beat-closing]", { opacity: 1, duration: 0.08 }, 0.93);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative overflow-hidden bg-[color:var(--color-void)] text-white md:h-[100svh]"
    >
      <SpecCorners inset="1rem" className="text-white" />
      <div className="container-x flex h-full flex-col py-20 md:py-0">
        <div className="flex items-center justify-between pt-0 md:pt-24">
          <SectionLabel>{t.problem.label}</SectionLabel>
          <MonoId>KBK-DOC / 01–03</MonoId>
        </div>

        <h2
          data-beat-headline
          className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl"
        >
          {t.problem.headline}
        </h2>

        {/* beats — stacked on mobile, crossfading in place on desktop */}
        <div className="relative mt-14 flex-1 md:mt-10">
          {t.problem.items.map((item, i) => (
            <div
              key={i}
              data-beat
              className="mb-12 md:absolute md:inset-0 md:mb-0 md:flex md:items-start"
              style={{ opacity: i === 0 ? 1 : undefined }}
            >
              <div className="relative max-w-3xl border-l border-white/12 pl-6 md:pl-8">
                <div
                  className="font-display text-7xl font-semibold leading-[0.85] tracking-tighter text-[color:var(--color-brand)] tabular-nums sm:text-8xl lg:text-9xl"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
                  / 03
                </div>
                <h3 className="mt-4 text-2xl font-semibold uppercase tracking-tight lg:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 lg:text-base">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* progress + closing */}
        <div className="flex items-center justify-between border-t border-white/10 py-6 md:mb-6">
          <div className="flex items-center gap-2">
            {t.problem.items.map((_, i) => (
              <span key={i} data-beat-dot className="h-1 w-8 bg-white/15" />
            ))}
          </div>
          <p
            data-beat-closing
            className="text-right font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-brand)] md:text-sm"
          >
            {t.problem.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
