import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { Slider } from "@/components/ui/slider";
import { Logo } from "@/components/Logo";
import { ContactModal } from "@/components/ContactModal";
import { T, type Lang } from "@/lib/i18n";
import { LANG_LABELS, LANG_ORDER } from "@/lib/lang";
import { getVisitorLanguage, JAPAN_LANGUAGES, LANGUAGE_COOKIE } from "@/lib/visitor-language";
import { SITE_URL } from "@/lib/site";
import { CALC_T, EUR_LOCALE, type CalculatorCopy } from "@/lib/calculator-i18n";

export const Route = createFileRoute("/roi-calculator")({
  loader: () => getVisitorLanguage(),
  component: CalculatorPage,
  head: ({ loaderData }) => {
    const lang = loaderData?.language ?? "en";
    const pageUrl = loaderData?.isJapanEdition ? "https://kobikan.jp" : SITE_URL;
    const c = CALC_T[lang];

    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
        { property: "og:url", content: `${pageUrl}/roi-calculator` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "KobiKan" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${pageUrl}/roi-calculator` }],
    };
  },
});

const R_SEARCH = 0.65;
const R_MTTR = 0.26;
const R_KNOWLEDGE = 0.8;
const WORK_DAYS = 220;
const IMPL_COST = 10000;
const HOURLY_RATE = 35;
const SENIOR_VALUE = 80000;

function eur(n: number): string {
  if (n >= 1_000_000) return `€${(n / 1_000_000).toFixed(n >= 10_000_000 ? 1 : 2)}M`;
  if (n >= 1000) return `€${Math.round(n / 1000)}K`;
  return `€${Math.round(n)}`;
}
function eurFull(n: number, lang: Lang): string {
  return new Intl.NumberFormat(EUR_LOCALE[lang], {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

function CalculatorPage() {
  const visitorLocale = Route.useLoaderData();
  const [lang, setLangState] = useState<Lang>(visitorLocale.language);
  const availableLanguages = visitorLocale.isJapanEdition ? JAPAN_LANGUAGES : LANG_ORDER;
  const [contactOpen, setContactOpen] = useState(false);

  const setLang = (nextLanguage: Lang) => {
    setLangState(nextLanguage);
    document.cookie = `${LANGUAGE_COOKIE}=${nextLanguage}; Path=/; Max-Age=31536000; SameSite=Lax`;
  };

  const [techs, setTechs] = useState(12);
  const [searchH, setSearchH] = useState(1.5);
  const [incidents, setIncidents] = useState(40);
  const [mttrH, setMttrH] = useState(3.5);
  const [downCost, setDownCost] = useState(2500);
  const [seniorsOut, setSeniorsOut] = useState(1);

  const c = CALC_T[lang];

  const calc = useMemo(() => {
    const lostTimeCost = searchH * WORK_DAYS * techs * HOURLY_RATE;
    const downtimeLoss = incidents * 12 * mttrH * downCost;
    const knowledgeLoss = seniorsOut * SENIOR_VALUE;
    const totalLoss = lostTimeCost + downtimeLoss + knowledgeLoss;

    const savedSearch = lostTimeCost * R_SEARCH;
    const savedMttr = downtimeLoss * R_MTTR;
    const savedKnow = knowledgeLoss * R_KNOWLEDGE;
    const totalSaved = savedSearch + savedMttr + savedKnow;
    const paybackMonths =
      totalSaved > 0 ? Math.max(1, Math.round((IMPL_COST / totalSaved) * 12)) : 99;

    return {
      lostTimeCost,
      downtimeLoss,
      knowledgeLoss,
      totalLoss,
      savedSearch,
      savedMttr,
      savedKnow,
      totalSaved,
      paybackMonths,
    };
  }, [techs, searchH, incidents, mttrH, downCost, seniorsOut]);

  const pct = (part: number, whole: number) => (whole > 0 ? Math.round((part / whole) * 100) : 0);

  return (
    <div className="min-h-screen bg-white text-[color:var(--color-dark)]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-md border-b border-[color:var(--color-border)]">
        <div className="container-x flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 text-xs font-medium">
              {availableLanguages.map((code, i) => (
                <span key={code} className="contents">
                  {i > 0 && <span className="text-[color:var(--color-neutral-gray)]">|</span>}
                  <button
                    onClick={() => setLang(code)}
                    className={`px-1.5 py-0.5 ${lang === code ? "text-[color:var(--color-brand)] underline underline-offset-4" : "text-[color:var(--color-neutral-gray)]"}`}
                  >
                    {LANG_LABELS[code]}
                  </button>
                </span>
              ))}
            </div>
            <Link
              to="/"
              className="text-sm text-[color:var(--color-dark)]/70 hover:text-[color:var(--color-brand)]"
            >
              ← {c.back}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero with inline result strip */}
      <section className="relative overflow-hidden bg-[color:var(--color-dark)] text-white">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-x relative pt-14 pb-12 lg:pt-20 lg:pb-16">
          <div className="max-w-3xl fade-in-up">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
              {c.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              {c.h1a}
              <br />
              <span className="text-[color:var(--color-brand)]">{c.h1b}</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">{c.sub}</p>
          </div>

          {/* Horizontal result strip — 3 KPIs across full width */}
          <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden">
            <div className="p-6 lg:p-8 sm:border-r border-white/10">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                {c.resultLabel}
              </div>
              <div
                className="mt-3 flex items-baseline gap-2"
                aria-live="polite"
                aria-label={`${eurFull(calc.totalLoss, lang)} ${c.perYear}`}
              >
                <div className="text-4xl lg:text-5xl font-display font-semibold tabular-nums text-[color:var(--color-brand)] leading-none">
                  {eur(calc.totalLoss)}
                </div>
                <div className="text-xs text-white/50">{c.perYear}</div>
              </div>
            </div>
            <div className="p-6 lg:p-8 border-t sm:border-t-0 sm:border-r border-white/10">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                {c.savedLabel}
              </div>
              <div
                className="mt-3 text-4xl lg:text-5xl font-display font-semibold tabular-nums leading-none"
                aria-live="polite"
              >
                {eur(calc.totalSaved)}
              </div>
            </div>
            <div className="p-6 lg:p-8 border-t sm:border-t-0 border-white/10">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                {c.payback}
              </div>
              <div
                className="mt-3 text-4xl lg:text-5xl font-display font-semibold tabular-nums leading-none"
                aria-live="polite"
              >
                {calc.paybackMonths}{" "}
                <span className="text-base text-white/50 font-sans font-normal">
                  {c.paybackUnit}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions — 6 cards in a 3×2 grid, no sidebar */}
      <section className="container-x py-14 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Question n={1} label={c.q1} hint={c.q1hint}>
            <Stepper value={techs} setValue={setTechs} min={1} c={c} />
          </Question>
          <Question n={2} label={c.q2} hint={c.q2hint}>
            <SliderNum
              value={searchH}
              setValue={setSearchH}
              min={0.25}
              max={4}
              step={0.25}
              unit={c.q2unit}
              decimals={2}
              lang={lang}
            />
          </Question>
          <Question n={3} label={c.q3} hint={c.q3hint}>
            <SliderNum
              value={incidents}
              setValue={setIncidents}
              min={2}
              max={200}
              step={1}
              unit={c.q3unit}
              lang={lang}
            />
          </Question>
          <Question n={4} label={c.q4} hint={c.q4hint}>
            <SliderNum
              value={mttrH}
              setValue={setMttrH}
              min={0.5}
              max={12}
              step={0.5}
              unit={c.q4unit}
              decimals={1}
              lang={lang}
            />
          </Question>
          <Question n={5} label={c.q5} hint={c.q5hint}>
            <SliderNum
              value={downCost}
              setValue={setDownCost}
              min={200}
              max={20000}
              step={100}
              unit={c.q5unit}
              format="eur"
              lang={lang}
            />
          </Question>
          <Question n={6} label={c.q6} hint={c.q6hint}>
            <Stepper value={seniorsOut} setValue={setSeniorsOut} min={0} c={c} />
          </Question>
        </div>

        {/* Breakdown */}
        <div className="mt-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-6">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              {c.breakdownTitle}
            </h2>
            <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-neutral-gray)]">
              Σ{" "}
              <span className="text-[color:var(--color-brand)] font-semibold">
                {eurFull(calc.totalLoss, lang)}
              </span>{" "}
              {c.perYear}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <BreakCard
              label={c.b1}
              sub={c.b1sub}
              amount={calc.lostTimeCost}
              pct={pct(calc.lostTimeCost, calc.totalLoss)}
              savedLabel={c.savedFast}
              saved={calc.savedSearch}
              reductionPct={R_SEARCH}
            />
            <BreakCard
              label={c.b2}
              sub={c.b2sub}
              amount={calc.downtimeLoss}
              pct={pct(calc.downtimeLoss, calc.totalLoss)}
              savedLabel={c.savedMttr}
              saved={calc.savedMttr}
              reductionPct={R_MTTR}
            />
            <BreakCard
              label={c.b3}
              sub={c.b3sub}
              amount={calc.knowledgeLoss}
              pct={pct(calc.knowledgeLoss, calc.totalLoss)}
              savedLabel={c.savedKnow}
              saved={calc.savedKnow}
              reductionPct={R_KNOWLEDGE}
            />
          </div>
        </div>

        {/* How we calculate — plain language explanation */}
        <div className="mt-20 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-accent)]/40 p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">{c.howTitle}</h2>
          <p className="mt-3 text-[color:var(--color-dark)]/70 max-w-3xl">{c.howLead}</p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <HowBlock title={c.how1title} body={c.how1} />
            <HowBlock title={c.how2title} body={c.how2} />
            <HowBlock title={c.how3title} body={c.how3} />
          </div>

          <p className="mt-10 pt-6 border-t border-[color:var(--color-border)] text-xs text-[color:var(--color-neutral-gray)] leading-relaxed max-w-4xl">
            {c.howFoot}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[color:var(--color-dark)] text-white p-8 lg:p-14 flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">{c.ctaTitle}</h2>
            <p className="mt-3 text-white/70">{c.ctaSub}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-brand)] text-white font-semibold px-6 py-3.5 hover:brightness-110 transition-all"
            >
              {c.ctaBtn} →
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white font-semibold px-6 py-3.5 hover:bg-white/10 transition-all"
            >
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:var(--color-border)] py-8">
        <div className="container-x text-xs text-[color:var(--color-neutral-gray)] flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} KobiKan · Touch4IT</span>
          <Link to="/" className="hover:text-[color:var(--color-brand)]">
            KobiKan.ai
          </Link>
        </div>
      </footer>

      {contactOpen && (
        <ContactModal
          form={T[lang].form}
          successLinkLabel={T[lang].nav.contact}
          onClose={() => setContactOpen(false)}
        />
      )}
    </div>
  );
}

/* ---------- Building blocks ---------- */

function Question({
  n,
  label,
  hint,
  children,
}: {
  n: number;
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[color:var(--color-border)] bg-white p-6 lg:p-7 hover:border-[color:var(--color-brand)]/40 transition-colors">
      <div className="flex items-start gap-4">
        <span className="shrink-0 h-8 w-8 rounded-md bg-[color:var(--color-accent)] text-[color:var(--color-brand)] font-display font-semibold flex items-center justify-center text-sm tabular-nums">
          {n}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold text-[color:var(--color-dark)] leading-snug">
            {label}
          </div>
          {hint && (
            <div className="mt-1 text-sm text-[color:var(--color-neutral-gray)] leading-snug">
              {hint}
            </div>
          )}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Stepper({
  value,
  setValue,
  min = 0,
  c,
}: {
  value: number;
  setValue: (v: number) => void;
  min?: number;
  c: CalculatorCopy;
}) {
  return (
    <div className="inline-flex items-stretch rounded-md border border-[color:var(--color-border)] overflow-hidden">
      <button
        onClick={() => setValue(Math.max(min, value - 1))}
        aria-label={c.decrease}
        className="w-11 h-11 hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-brand)] transition-colors text-xl"
      >
        −
      </button>
      <div className="min-w-[72px] px-3 flex items-center justify-center font-semibold text-xl tabular-nums border-x border-[color:var(--color-border)]">
        {value}
      </div>
      <button
        onClick={() => setValue(value + 1)}
        aria-label={c.increase}
        className="w-11 h-11 hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-brand)] transition-colors text-xl"
      >
        +
      </button>
    </div>
  );
}

function SliderNum({
  value,
  setValue,
  min,
  max,
  step,
  unit,
  format,
  decimals = 0,
  lang,
}: {
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  format?: "eur";
  decimals?: number;
  lang: Lang;
}) {
  const display =
    format === "eur" ? eurFull(value, lang) : value.toFixed(decimals).replace(/\.?0+$/, "") || "0";
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <div className="text-2xl font-display font-semibold tabular-nums">{display}</div>
        <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-neutral-gray)]">
          {unit}
        </div>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => setValue(v[0])}
        aria-label={unit}
      />
    </div>
  );
}

function BreakCard({
  label,
  sub,
  amount,
  pct,
  savedLabel,
  saved,
  reductionPct,
}: {
  label: string;
  sub: string;
  amount: number;
  pct: number;
  savedLabel: string;
  saved: number;
  reductionPct: number;
}) {
  return (
    <div className="rounded-xl border border-[color:var(--color-border)] bg-white p-6 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold">{label}</div>
          <div className="text-xs text-[color:var(--color-neutral-gray)] mt-0.5">{sub}</div>
        </div>
        <div className="text-xs font-mono text-[color:var(--color-neutral-gray)] shrink-0">
          {pct}%
        </div>
      </div>
      <div className="mt-4 text-3xl font-display font-semibold tabular-nums">{eur(amount)}</div>
      <div className="mt-2 h-1.5 bg-[color:var(--color-muted)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[color:var(--color-brand)] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-5 pt-4 border-t border-[color:var(--color-border)] flex items-baseline justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-neutral-gray)]">
            {savedLabel}
          </div>
          <div className="text-lg font-semibold tabular-nums text-[color:var(--color-brand)]">
            {eur(saved)}
          </div>
        </div>
        <div className="text-xs font-mono px-2 py-1 rounded bg-[color:var(--color-accent)] text-[color:var(--color-brand)]">
          −{Math.round(reductionPct * 100)}%
        </div>
      </div>
    </div>
  );
}

function HowBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-base font-semibold text-[color:var(--color-dark)]">{title}</div>
      <p className="mt-2 text-sm text-[color:var(--color-dark)]/75 leading-relaxed">{body}</p>
    </div>
  );
}
