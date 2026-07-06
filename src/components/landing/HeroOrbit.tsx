import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { T } from "@/lib/i18n";
import { gsap } from "@/lib/motion/gsap-config";
import { useFrameScrub } from "@/lib/motion/frame-scrub";
import { prefersReducedMotion, useReducedMotion } from "@/lib/motion/reduced-motion";
import { CtaButton, MonoId, SpecCorners } from "./primitives";

/**
 * ACT I — scroll-scrubbed 360° studio orbit of the arm.
 * The section pins for 250vh; scroll drives the turntable.
 * Brand name tracks in over the rotating product, then the
 * overlay recedes while the orbit completes.
 */
export function HeroOrbit({ t, onCta }: { t: typeof T.sk; onCta: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useFrameScrub({
    dir: "hero",
    ext: "jpg",
    sectionRef,
    canvasRef,
    end: "+=280%",
    endMobile: "+=160%",
    eager: true,
    onUpdate: (_f, p) => {
      if (angleRef.current) {
        angleRef.current.textContent = `${String(Math.round(p * 360)).padStart(3, "0")}°`;
      }
    },
    build: (tl) => {
      // overlay recedes while the orbit completes, outro line lands
      tl.to(
        "[data-hero-overlay]",
        { opacity: 0, y: -40, pointerEvents: "none", duration: 0.18, ease: "power2.in" },
        0.62,
      ).to(
        "[data-hero-outro]",
        { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
        0.84,
      );
    },
  });

  // load-time entrance: brand name tracks in over the turntable
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-title]",
        { letterSpacing: "0.35em", opacity: 0 },
        { letterSpacing: "0.01em", opacity: 1, duration: 1.4 },
        0.15,
      )
        .from("[data-hero-line]", { y: 26, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.9")
        .from("[data-hero-cta]", { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
        .from("[data-hero-stats]", { opacity: 0, duration: 0.7 }, "-=0.4");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[100svh] overflow-hidden bg-[#e9e9e9] text-[color:var(--color-graphite)]"
    >
      {reduced ? (
        <img
          src="/assets/hero-robot-arm.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

      {/* readability scrim — subtle light wash where the copy sits (left + bottom) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(233,233,233,0.58)_0%,rgba(233,233,233,0.28)_38%,rgba(233,233,233,0)_62%),linear-gradient(to_top,rgba(233,233,233,0.5)_0%,rgba(233,233,233,0)_34%)]"
      />

      <SpecCorners inset="1rem" className="text-[color:var(--color-graphite)]" />

      {/* spec chrome */}
      <div className="absolute inset-x-0 top-20 flex items-center justify-between px-6 lg:px-10">
        <MonoId className="text-[color:var(--color-graphite)]">
          KBK-001 · Orbit / turntable
        </MonoId>
        <MonoId className="text-[color:var(--color-graphite)]">
          <span className="text-[color:var(--color-brand)]">●</span>{" "}
          <span ref={angleRef}>000°</span>
        </MonoId>
      </div>

      {/* main overlay */}
      <div data-hero-overlay className="absolute inset-0 flex flex-col justify-end pb-24 lg:pb-20">
        <div className="container-x">
          <p
            data-hero-line
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-brand)]"
          >
            {t.hero.eyebrow}
          </p>
          <h1
            data-hero-title
            className="mt-3 text-[15vw] font-semibold leading-[0.9] tracking-tight lg:text-[9.5rem] will-change-[letter-spacing]"
          >
            KobiKan
          </h1>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p data-hero-line className="max-w-xl text-xl font-medium leading-snug lg:text-2xl">
                {t.hero.h1a}{" "}
                <span className="text-[color:var(--color-brand)]">{t.hero.h1b}</span>
              </p>
              {reduced ? (
                <p className="mt-4 max-w-xl text-base text-[color:var(--color-graphite)]/70">
                  {t.hero.sub}
                </p>
              ) : null}
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <div data-hero-cta className="flex flex-wrap items-center gap-4">
                <CtaButton onClick={onCta} size="lg">
                  {t.hero.cta} →
                </CtaButton>
                <a
                  href="#problem"
                  className="text-sm font-medium text-[color:var(--color-graphite)]/70 hover:text-[color:var(--color-graphite)] focus-ring"
                >
                  {t.hero.secondary} ↓
                </a>
              </div>
            </div>
          </div>

          {/* spec stats strip */}
          <div
            data-hero-stats
            className="mt-10 hidden gap-8 border-t border-black/15 pt-6 sm:grid sm:grid-cols-3"
          >
            {[
              { v: "50%", l: t.hero.stat1 },
              { v: "8+", l: t.hero.stat2 },
              { v: "70%", l: t.hero.stat3 },
            ].map((s) => (
              <div key={s.v} className="flex items-baseline gap-3">
                <span className="font-mono text-2xl font-semibold text-[color:var(--color-brand)]">
                  {s.v}
                </span>
                <span className="max-w-[240px] text-xs leading-snug text-[color:var(--color-graphite)]/60">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* outro line as the orbit completes */}
      {!reduced ? (
        <div
          data-hero-outro
          className="pointer-events-none absolute inset-0 flex translate-y-6 items-end justify-center pb-24 opacity-0"
        >
          <p className="max-w-md px-6 text-center text-lg font-medium text-[color:var(--color-graphite)]/85 lg:text-xl">
            {t.hero.sub}
          </p>
        </div>
      ) : null}

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span className="block h-8 w-px overflow-hidden bg-black/15">
          <span className="scroll-hint-bar block h-3 w-px bg-[color:var(--color-brand)]" />
        </span>
      </div>
    </section>
  );
}
