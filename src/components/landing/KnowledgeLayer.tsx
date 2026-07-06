import { useRef } from "react";
import type { T } from "@/lib/i18n";
import { gsap } from "@/lib/motion/gsap-config";
import { useFrameScrub } from "@/lib/motion/frame-scrub";
import { useReducedMotion } from "@/lib/motion/reduced-motion";
import { MonoId, SpecCorners } from "./primitives";

/**
 * ACT III — the knowledge layer converges onto the machine.
 * Full-bleed scrub of clip 3 with engineering spec callouts
 * (pilot / on-prem / integrations) pinned to scroll.
 */
export function KnowledgeLayer({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useFrameScrub({
    dir: "knowledge",
    sectionRef,
    canvasRef,
    end: "+=280%",
    endMobile: "+=160%",
    build: (tl) => {
      const section = sectionRef.current;
      if (!section) return;
      const cards = gsap.utils.toArray<HTMLElement>("[data-spec-card]", section);
      gsap.set("[data-knowledge-label]", { opacity: 0 });
      gsap.set(cards, { opacity: 0, y: 26 });

      tl.to("[data-knowledge-label]", { opacity: 1, duration: 0.06 }, 0.02);
      cards.forEach((el, i) => {
        tl.to(el, { opacity: 1, y: 0, duration: 0.08, ease: "power2.out" }, 0.2 + i * 0.24);
      });
    },
  });

  const specCards: {
    id: string;
    v: string;
    title: string;
    body: string;
    chips?: string[];
  }[] = [
    {
      id: "PILOT",
      v: t.finalCta.stats[0].v,
      title: t.how.steps[1].title,
      body: t.finalCta.stats[0].l,
    },
    {
      id: "ON-PREM",
      v: t.finalCta.stats[1].v,
      title: t.deploy.cards[1].title,
      body: t.finalCta.stats[1].l,
    },
    {
      id: "INTEGRATIONS",
      v: `${t.mockups.features.integrations.length}×`,
      title: t.features.list[3].tag,
      body: t.features.list[3].title,
      chips: t.mockups.features.integrations,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#e9e9e9] text-[color:var(--color-graphite)] md:h-[100svh]"
    >
      <div className="relative h-[60vh] md:h-full">
        {reduced ? (
          <img
            src="/video/frames/knowledge/001.webp"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
        {/* readability scrim — light wash at top (label) and bottom (spec cards) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(233,233,233,0.5)_0%,rgba(233,233,233,0)_22%),linear-gradient(to_top,rgba(233,233,233,0.45)_0%,rgba(233,233,233,0)_30%)]"
        />
        <SpecCorners inset="1rem" className="text-[color:var(--color-graphite)]" />

        <div
          data-knowledge-label
          className="absolute inset-x-0 top-8 flex items-center justify-between px-6 lg:px-10"
        >
          <MonoId className="text-[color:var(--color-graphite)]">
            KBK-003 · Knowledge layer / telemetry
          </MonoId>
          <MonoId className="text-[color:var(--color-brand)] !opacity-100">● LIVE</MonoId>
        </div>

        {/* spec callouts pinned to scroll */}
        <div className="absolute inset-x-0 bottom-0 md:bottom-10">
          <div className="container-x grid gap-3 pb-6 md:grid-cols-3 md:gap-4 md:pb-0">
            {specCards.map((card) => (
              <div
                key={card.id}
                data-spec-card
                className="border border-black/12 bg-white/78 p-5 backdrop-blur-sm"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/45">
                    {card.id}
                  </span>
                  <span className="font-mono text-lg font-semibold text-[color:var(--color-brand)]">
                    {card.v}
                  </span>
                </div>
                <div className="mt-2 text-base font-semibold tracking-tight">{card.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-black/55">{card.body}</p>
                {card.chips ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {card.chips.map((chip) => (
                      <span
                        key={chip}
                        className="border border-black/12 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-black/60"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
