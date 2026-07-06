import { useRef } from "react";
import type { T } from "@/lib/i18n";
import { gsap } from "@/lib/motion/gsap-config";
import { useFrameScrub } from "@/lib/motion/frame-scrub";
import { useReducedMotion } from "@/lib/motion/reduced-motion";
import { MonoId, SectionLabel, SpecCorners } from "./primitives";

type IntroItem = (typeof T.sk.intro.items)[number];

function MacroCallout({
  index,
  item,
  align,
}: {
  index: number;
  item: IntroItem;
  align: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <div className={`flex w-full flex-col ${isRight ? "items-end text-right" : "items-start text-left"}`}>
      <div className="font-display text-5xl font-semibold leading-none tracking-tighter text-[color:var(--color-brand)] tabular-nums sm:text-6xl md:text-7xl">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-white/90">
        {item.title}
      </div>
      <span
        data-callout-line
        className={`mt-3 block h-px w-14 bg-[color:var(--color-brand)]/70 ${
          isRight ? "origin-right" : "origin-left"
        }`}
      />
      <p className="mt-3 max-w-[16rem] font-mono text-[11px] leading-relaxed text-white/55 md:text-xs">
        {item.body}
      </p>
    </div>
  );
}

/**
 * ACT II — macro fly-through. The clip scrubs inside an inset
 * spec-sheet film frame; mono callout labels crossfade one at a time.
 */
export function MacroDetails({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useFrameScrub({
    dir: "macro",
    sectionRef,
    canvasRef,
    end: "+=260%",
    endMobile: "+=150%",
    build: (tl) => {
      const section = sectionRef.current;
      if (!section) return;
      const callouts = gsap.utils.toArray<HTMLElement>("[data-macro-callout]", section);
      if (callouts.length === 0) return;

      gsap.set("[data-macro-head]", { y: 40, opacity: 0 });
      gsap.set(callouts, { opacity: 0, y: 20 });
      gsap.set(callouts[0], { opacity: 1, y: 0 });
      callouts.forEach((el) => {
        const line = el.querySelector("[data-callout-line]");
        if (line) gsap.set(line, { scaleX: el === callouts[0] ? 1 : 0 });
      });

      tl.to("[data-macro-head]", { y: 0, opacity: 1, duration: 0.08, ease: "power2.out" }, 0.02);

      const seg = 0.22;
      callouts.forEach((el, i) => {
        if (i === 0) return;
        const at = i * seg;
        tl.to(
          callouts[i - 1],
          { opacity: 0, y: -16, duration: seg * 0.3, ease: "power2.in" },
          at,
        );
        tl.to(el, { opacity: 1, y: 0, duration: seg * 0.34, ease: "power2.out" }, at + 0.04);
        const line = el.querySelector("[data-callout-line]");
        if (line) {
          tl.fromTo(
            line,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.06, ease: "power2.out" },
            at + 0.06,
          );
        }
      });
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[color:var(--color-graphite)] text-white md:h-[100svh]"
    >
      <div className="container-x flex h-full flex-col py-16 md:py-0">
        <div data-macro-head className="flex items-end justify-between pt-0 md:pt-24">
          <div>
            <SectionLabel>{t.intro.label}</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight lg:text-5xl">
              {t.intro.headline}
            </h2>
          </div>
          <MonoId className="hidden md:block">KBK-002 · Macro / detail pass</MonoId>
        </div>

        <div className="relative mt-8 min-h-[52vh] flex-1 md:mb-16 md:mt-10 md:min-h-0">
          <div className="relative h-[52vh] w-full overflow-hidden border border-white/10 md:absolute md:inset-x-[16%] md:inset-y-0 md:h-auto">
            {reduced ? (
              <img
                src="/video/frames/macro/001.webp"
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : null}
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
            {/* readability scrim — darker toward the edges where the callouts sit */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.38)_0%,rgba(10,10,10,0.08)_30%,rgba(10,10,10,0.08)_70%,rgba(10,10,10,0.38)_100%),linear-gradient(to_top,rgba(10,10,10,0.22)_0%,rgba(10,10,10,0)_28%)]"
            />
            <SpecCorners inset="0.6rem" className="text-white mix-blend-difference" />
          </div>

          {reduced ? (
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {t.intro.items.map((item, i) => (
                <div key={item.title}>
                  <MacroCallout index={i} item={item} align={i % 2 === 0 ? "left" : "right"} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* desktop — callouts overlay the film area, crossfade on scroll */}
              <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
                {t.intro.items.map((item, i) => {
                  const align = i % 2 === 0 ? "left" : "right";
                  return (
                    <div
                      key={item.title}
                      data-macro-callout
                      className={`absolute top-1/2 w-[min(17rem,19vw)] -translate-y-1/2 ${
                        align === "left" ? "left-0" : "right-0"
                      }`}
                      style={{ opacity: i === 0 ? 1 : 0 }}
                    >
                      <MacroCallout index={i} item={item} align={align} />
                    </div>
                  );
                })}
              </div>

              {/* mobile — always visible stack */}
              <div className="mt-10 space-y-10 md:hidden">
                {t.intro.items.map((item, i) => (
                  <div key={item.title}>
                    <MacroCallout index={i} item={item} align="left" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
