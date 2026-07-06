import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Cable, CheckCircle2, Cloud, Factory, ShieldCheck } from "lucide-react";
import type { T } from "@/lib/i18n";
import { gsap } from "@/lib/motion/gsap-config";
import { useReducedMotion } from "@/lib/motion/reduced-motion";
import { useScrollReveal } from "@/lib/motion/scroll-reveal";
import { CtaButton, MonoId, SectionLabel } from "./primitives";

/* ================= Features ================= */
export function Features({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="border-t border-white/8 bg-[color:var(--color-void)] py-20 text-white lg:py-28"
    >
      <div className="container-x">
        <div data-reveal className="flex items-center justify-between">
          <SectionLabel>{t.features.eyebrow}</SectionLabel>
          <MonoId>KBK-SPEC / F-01–05</MonoId>
        </div>
        <h2 data-reveal className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight lg:text-5xl">
          {t.features.headline}
        </h2>

        <div data-reveal className="mt-16 space-y-24">
          {t.features.list.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={i} className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
                <div className={`${reverse ? "lg:order-2" : ""} lg:sticky lg:top-28`}>
                  <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand)]">
                    F-{String(i + 1).padStart(2, "0")} · {f.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight lg:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-lg text-white/55">{f.body}</p>
                </div>
                <FeatureMock index={i} mockups={t.mockups.features} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureMock({ index, mockups }: { index: number; mockups: typeof T.sk.mockups.features }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const base =
    "border border-white/10 bg-[color:var(--color-graphite)] text-white overflow-hidden shadow-xl";

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const st = { trigger: containerRef.current, start: "top 80%" };

      if (index === 0) {
        gsap.from(".chat-msg", {
          scrollTrigger: st,
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.8,
          ease: "power2.out",
          delay: 0.2,
        });
      } else if (index === 1) {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(".voice-pulse", { scale: 1.5, opacity: 0, duration: 1.5, ease: "power2.out" });
        gsap.from(".voice-text", { scrollTrigger: st, opacity: 0, y: 10, duration: 0.5, delay: 0.5 });
        gsap.from(".voice-success", {
          scrollTrigger: st,
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          delay: 1.5,
          ease: "back.out(1.7)",
        });
      } else if (index === 2) {
        gsap.from(".logbook-entry", {
          scrollTrigger: st,
          x: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.2,
        });
      } else if (index === 3) {
        gsap.from(".integration-item", {
          scrollTrigger: st,
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.2,
        });
        gsap.from(".integration-check", {
          scrollTrigger: st,
          scale: 0,
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "back.out(2)",
          delay: 0.4,
        });
      } else if (index === 4) {
        gsap.from(".dash-metric", {
          scrollTrigger: st,
          y: 15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2,
        });
        gsap.fromTo(
          ".dash-chart",
          { width: "0%" },
          { scrollTrigger: st, width: "100%", duration: 1.5, ease: "power3.inOut", delay: 0.5 },
        );
        gsap.from(".dash-alert", {
          scrollTrigger: st,
          x: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
          delay: 1,
        });
      }
    },
    { scope: containerRef, dependencies: [index] },
  );

  if (index === 0)
    return (
      <div ref={containerRef} className={base}>
        <div className="border-b border-white/10 px-4 py-3 font-mono text-xs text-white/40">
          {mockups.chatHeader}
        </div>
        <div className="space-y-3 p-5 text-sm">
          <div className="chat-msg bg-white/5 px-3 py-2">{mockups.chatQ}</div>
          <div className="chat-msg border border-[color:var(--color-brand)]/30 bg-[color:var(--color-brand)]/15 px-3 py-2">
            {mockups.chatA}
            <div className="mt-1 text-[11px] text-white/40">{mockups.chatSource}</div>
          </div>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div ref={containerRef} className={base + " p-8 text-center"}>
        <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-[color:var(--color-brand)]/20">
          <div className="voice-pulse absolute inset-0 rounded-full bg-[color:var(--color-brand)]/40" />
          <div className="relative z-10 h-10 w-10 rounded-full bg-[color:var(--color-brand)]" />
        </div>
        <p className="mt-5 font-mono text-sm text-white/70">▮▮▮▮▮▮▮▯▯▯ 0:14</p>
        <p className="voice-text mt-3 text-white/90">{mockups.voiceTranscript}</p>
        <p className="voice-success mt-3 text-xs text-[color:var(--color-brand)]">
          {mockups.voiceSuccess}
        </p>
      </div>
    );
  if (index === 2)
    return (
      <div ref={containerRef} className={base}>
        <div className="border-b border-white/10 px-4 py-3 font-mono text-xs text-white/40">
          {mockups.logbookHeader}
        </div>
        <div className="divide-y divide-white/10 text-sm">
          {mockups.logbookRows.map(({ id, title, who }) => (
            <div key={id} className="logbook-entry flex justify-between px-4 py-3">
              <span className="font-mono text-white/50">{id}</span>
              <span className="flex-1 px-3 text-white/90">{title}</span>
              <span className="text-xs text-white/50">{who}</span>
            </div>
          ))}
        </div>
      </div>
    );
  if (index === 3)
    return (
      <div ref={containerRef} className={base + " p-6"}>
        <div className="grid grid-cols-2 gap-3 text-xs">
          {mockups.integrations.map((x) => (
            <div
              key={x}
              className="integration-item flex items-center justify-between border border-white/10 bg-white/5 px-3 py-3"
            >
              <span className="text-white/80">{x}</span>
              <span className="integration-check text-[color:var(--color-brand)]">✓</span>
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div ref={containerRef} className={base + " p-6"}>
      <div className="grid grid-cols-3 gap-3 text-xs">
        {[
          { l: "MTTR", v: "42m", c: "text-[color:var(--color-brand)]" },
          { l: "MTTB", v: "18h", c: "text-white" },
          { l: "Uptime", v: "98.4%", c: "text-emerald-400" },
        ].map((k) => (
          <div key={k.l} className="dash-metric border border-white/10 p-3">
            <div className="text-white/40">{k.l}</div>
            <div className={`mt-1 text-xl font-semibold ${k.c}`}>{k.v}</div>
          </div>
        ))}
      </div>
      <div className="relative mt-4 h-24 overflow-hidden border border-white/10 bg-white/5">
        <div className="dash-chart absolute inset-y-0 left-0 bg-gradient-to-r from-[color:var(--color-brand)]/30 to-transparent" />
      </div>
      <div className="mt-3 space-y-1.5 text-xs text-white/70">
        {mockups.alerts.map((alert) => (
          <div key={alert.text} className="dash-alert flex justify-between">
            <span>{alert.text}</span>
            <span
              className={
                alert.priority === "P1" ? "text-[color:var(--color-brand)]" : "text-amber-400"
              }
            >
              {alert.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= Who ================= */
export function Who({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="why"
      className="border-t border-white/8 bg-[color:var(--color-graphite)] py-20 text-white lg:py-28"
    >
      <div className="container-x">
        <h2 data-reveal className="max-w-3xl text-3xl font-semibold tracking-tight lg:text-5xl">
          {t.who.headline}
        </h2>
        <div data-reveal className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {t.who.items.map((it, i) => (
            <div key={i} className="bg-[color:var(--color-graphite)] p-7">
              <div className="font-mono text-2xl font-semibold text-[color:var(--color-brand)]">
                0{i + 1}
              </div>
              <p className="mt-4 text-lg leading-snug text-white/85">{it}</p>
            </div>
          ))}
        </div>
        <p data-reveal className="mt-10 max-w-3xl text-lg text-white/55">
          {t.who.closing}
        </p>
      </div>
    </section>
  );
}

/* ================= How ================= */
export function HowItWorks({ t, onCta }: { t: typeof T.sk; onCta: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="how"
      className="border-t border-white/8 bg-[color:var(--color-void)] py-20 text-white lg:py-28"
    >
      <div className="container-x">
        <div data-reveal className="flex items-center justify-between">
          <SectionLabel>{t.how.label}</SectionLabel>
          <MonoId>KBK-PROC / 01–04</MonoId>
        </div>
        <h2 data-reveal className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight lg:text-5xl">
          {t.how.headline}
        </h2>

        <div data-reveal className="mt-14">
          <div className="hidden grid-cols-4 gap-px border border-white/10 bg-white/10 lg:grid">
            {t.how.steps.map((s) => (
              <div
                key={s.n}
                className="group bg-[color:var(--color-void)] p-7 transition-colors hover:bg-[color:var(--color-graphite)]"
              >
                <div className="font-mono text-xs text-[color:var(--color-brand)]">STEP {s.n}</div>
                <div className="mt-4 h-2 w-2 rounded-full bg-[color:var(--color-brand)] shadow-[0_0_24px_var(--brand-glow)]" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/55">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 lg:hidden">
            {t.how.steps.map((s) => (
              <div key={s.n} className="bg-[color:var(--color-void)] p-6">
                <div className="font-mono text-xs text-[color:var(--color-brand)]">STEP {s.n}</div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/55">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-10">
          <CtaButton onClick={onCta} size="lg">
            {t.how.cta} →
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ================= Differentiation ================= */
export function Differentiation({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="border-t border-white/8 bg-[color:var(--color-graphite)] py-20 text-white lg:py-28"
    >
      <div className="container-x">
        <h2 data-reveal className="max-w-3xl text-3xl font-semibold tracking-tight lg:text-5xl">
          {t.diff.headline}
        </h2>

        <div data-reveal className="mt-12 hidden overflow-hidden border border-white/10 md:block">
          <div className="grid grid-cols-[minmax(0,1fr)_150px_150px] text-sm">
            <div className="bg-white/5 px-6 py-4 font-semibold" />
            <div className="bg-[color:var(--color-brand)] px-6 py-4 text-center font-semibold text-white">
              {t.diff.cols.kobikan}
            </div>
            <div className="bg-white/5 px-6 py-4 text-center font-semibold text-white/50">
              {t.diff.cols.others}
            </div>
            {t.diff.rows.map((r, i) => (
              <div key={i} className="contents">
                <div className={`px-6 py-4 ${i % 2 ? "bg-white/[0.03]" : ""}`}>
                  <span className="mr-4 font-mono text-[11px] text-white/35">
                    ROW-{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/85">{r.label}</span>
                </div>
                <div
                  className={`px-6 py-4 text-center font-bold text-[color:var(--color-brand)] ${i % 2 ? "bg-white/[0.03]" : ""}`}
                >
                  {r.k}
                </div>
                <div className={`px-6 py-4 text-center text-white/40 ${i % 2 ? "bg-white/[0.03]" : ""}`}>
                  {r.o}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-10 grid gap-4 md:hidden">
          {t.diff.rows.map((r, i) => (
            <div key={r.label} className="border border-white/10 bg-[color:var(--color-void)] p-5">
              <div className="font-mono text-[11px] text-white/35">
                ROW-{String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 font-semibold">{r.label}</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="border border-[color:var(--color-brand)]/40 bg-[color:var(--color-brand)]/10 p-3">
                  <div className="font-semibold text-[color:var(--color-brand)]">
                    {t.diff.cols.kobikan}
                  </div>
                  <div className="mt-1">{r.k}</div>
                </div>
                <div className="border border-white/10 bg-white/5 p-3 text-white/50">
                  <div className="font-semibold">{t.diff.cols.others}</div>
                  <div className="mt-1">{r.o}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Deployment ================= */
export function Deployment({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="deployment"
      className="border-t border-white/8 bg-[color:var(--color-void)] py-20 text-white lg:py-28"
    >
      <div className="container-x">
        <div data-reveal className="flex items-center justify-between">
          <SectionLabel>DEPLOY</SectionLabel>
          <MonoId>KBK-TOPO / C-H-P</MonoId>
        </div>
        <h2 data-reveal className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight lg:text-5xl">
          {t.deploy.headline}
        </h2>

        <div data-reveal className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <DeploymentTopology />
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {t.deploy.cards.map((c, i) => (
              <div
                key={i}
                className={`relative border p-7 transition-colors hover:border-[color:var(--color-brand)]/60 ${
                  i === 1
                    ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)]/5"
                    : "border-white/10 bg-[color:var(--color-graphite)]"
                }`}
              >
                {c.tag && (
                  <span className="absolute -top-3 left-7 inline-block bg-[color:var(--color-brand)] px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                    {c.tag}
                  </span>
                )}
                <div className="font-mono text-xs text-[color:var(--color-brand)]">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-white/60">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <p data-reveal className="mt-8 font-mono text-xs text-white/40">
          {t.deploy.note}
        </p>
      </div>
    </section>
  );
}

function DeploymentTopology() {
  return (
    <div className="relative min-h-[320px] border border-white/10 bg-[color:var(--color-graphite)] p-6">
      <div className="technical-grid absolute inset-0 opacity-[0.06]" />
      <svg viewBox="0 0 420 300" className="relative h-full min-h-[280px] w-full">
        <path
          d="M210 76 L120 210 L300 210 Z"
          fill="none"
          stroke="rgba(255,255,255,.16)"
          strokeWidth="2"
        />
        <path
          d="M210 76 L120 210 L300 210 Z"
          fill="none"
          stroke="#ff3333"
          strokeWidth="2"
          strokeDasharray="34 220"
          className="topology-pulse"
        />
        {[
          { label: "Cloud", x: 210, y: 76 },
          { label: "Hybrid", x: 120, y: 210 },
          { label: "On-prem", x: 300, y: 210 },
        ].map((node, i) => (
          <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
            <circle
              r="36"
              fill={i === 1 ? "rgba(255,51,51,.14)" : "#0d0d0d"}
              stroke={i === 1 ? "#ff3333" : "rgba(255,255,255,.18)"}
              strokeWidth="2"
            />
            <circle r="7" fill="#ff3333" />
            <text
              y="58"
              textAnchor="middle"
              fill="rgba(255,255,255,.68)"
              fontSize="12"
              fontFamily="JetBrains Mono, monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ================= About ================= */
export function About({ t }: { t: typeof T.sk }) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="border-t border-white/8 bg-[color:var(--color-graphite)] py-20 text-white lg:py-28"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-5">
          <SectionLabel>{t.about.label}</SectionLabel>
          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[1.1] tracking-tight lg:text-5xl">
            {t.about.headline}
          </h2>
          <a
            href="https://touch4it.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)] hover:underline"
          >
            {t.about.cta} <span aria-hidden>→</span>
          </a>
        </div>
        <div data-reveal className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-white/75">{t.about.lead}</p>
          <ul className="mt-8 space-y-3">
            {t.about.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {t.about.clientsLabel}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {t.about.clients.map((c) => (
                <span key={c} className="text-sm font-medium text-white/55">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Trust ================= */
export function Trust({ t }: { t: typeof T.sk }) {
  const icons = [ShieldCheck, Factory, Cloud, Cable];
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="border-t border-white/8 bg-[color:var(--color-void)] py-14 text-white"
    >
      <div className="container-x">
        <p
          data-reveal
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40"
        >
          {t.trust.headline}
        </p>
        <div data-reveal className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
          {t.trust.badges.map((b, i) => {
            const Icon = icons[i] ?? CheckCircle2;
            return (
              <div key={i} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-9 w-9 place-items-center border border-[color:var(--color-brand)]/30 bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)]">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-white/75">
                  {b}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
export function Faq({ t }: { t: typeof T.sk }) {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const reducedMotion = useReducedMotion();
  useScrollReveal(sectionRef);

  useEffect(() => {
    if (!listRef.current) return;

    const answers = Array.from(listRef.current.querySelectorAll<HTMLElement>("[data-faq-answer]"));
    answers.forEach((answer, index) => {
      const isOpen = open === index;
      answer.setAttribute("aria-hidden", String(!isOpen));

      if (reducedMotion) {
        answer.style.height = isOpen ? "auto" : "0px";
        answer.style.opacity = isOpen ? "1" : "0";
        return;
      }

      gsap.to(answer, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.35,
        ease: "power2.out",
      });
    });
  }, [open, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="border-t border-white/8 bg-[color:var(--color-graphite)] py-20 text-white lg:py-28"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-4">
          <SectionLabel>{t.faq.label}</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight lg:text-5xl">
            {t.faq.headline}
          </h2>
        </div>
        <div data-reveal className="lg:col-span-8">
          <ul ref={listRef} className="divide-y divide-white/10 border-y border-white/10">
            {t.faq.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left focus-ring"
                  >
                    <span className="text-base font-semibold lg:text-lg">{it.q}</span>
                    <span
                      className={`mt-1 shrink-0 text-2xl font-light text-[color:var(--color-brand)] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div data-faq-answer className="h-0 overflow-hidden opacity-0">
                    <p className="-mt-1 pb-6 leading-relaxed text-white/60">{it.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
