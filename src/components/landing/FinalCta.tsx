import { useRef } from "react";
import type { T } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/motion/scroll-reveal";
import { CtaButton, Logo, MonoId, SpecCorners } from "./primitives";

/**
 * Final demo CTA — full-bleed hero still, quiet type, single action.
 */
export function FinalCta({ t, onCta }: { t: typeof T.sk; onCta: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#e9e9e9] text-[color:var(--color-graphite)]"
    >
      <img
        src="/assets/hero-robot-arm.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#e9e9e9]/95 via-[#e9e9e9]/40 to-transparent" />
      <SpecCorners inset="1rem" className="text-[color:var(--color-graphite)]" />

      <div className="container-x relative flex min-h-[92svh] flex-col justify-end pb-20 pt-40">
        <div data-reveal>
          <MonoId className="text-[color:var(--color-graphite)]">KBK-DEMO · Final call</MonoId>
        </div>
        <h2
          data-reveal
          className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl"
        >
          {t.finalCta.headline}
        </h2>
        <p data-reveal className="mt-5 max-w-xl text-lg text-black/60">
          {t.finalCta.sub}
        </p>

        <div
          data-reveal
          className="mt-10 grid gap-6 border-y border-black/15 py-8 sm:grid-cols-3"
        >
          {t.finalCta.stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="font-mono text-2xl font-semibold text-[color:var(--color-brand)] lg:text-3xl">
                {s.v}
              </span>
              <span className="text-xs leading-snug text-black/55">{s.l}</span>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-5">
          <CtaButton onClick={onCta} size="lg">
            {t.finalCta.cta} →
          </CtaButton>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/45">
            {t.finalCta.secondary}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer({ t, year }: { t: typeof T.sk; year: number }) {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--color-void)] py-14 text-white/70">
      <div className="container-x grid gap-10 md:grid-cols-2">
        <div>
          <Logo className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-white/50">{t.footer.powered}</p>
        </div>
        <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.14em] md:text-right">
          <a href="#features" className="block text-white/50 hover:text-white">
            {t.nav.features}
          </a>
          <a href="#how" className="block text-white/50 hover:text-white">
            {t.nav.how}
          </a>
          <a href="#deployment" className="block text-white/50 hover:text-white">
            {t.nav.deployment}
          </a>
          <a href="#contact" className="block text-white/50 hover:text-white">
            {t.nav.contact}
          </a>
        </div>
      </div>
      <div className="container-x mt-10 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
        <span>
          © {year} KobiKan. {t.footer.rights}
        </span>
        <span>{t.footer.powered}</span>
      </div>
    </footer>
  );
}
