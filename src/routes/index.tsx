import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { T, type Lang } from "@/lib/i18n";
import { HTML_LANG } from "@/lib/lang";
import { CookieBanner } from "@/components/CookieBanner";
import { useLenis } from "@/lib/motion/lenis";

import { Nav } from "@/components/landing/Nav";
import { HeroOrbit } from "@/components/landing/HeroOrbit";
import { StoryBeat } from "@/components/landing/StoryBeat";
import { MacroDetails } from "@/components/landing/MacroDetails";
import { KnowledgeLayer } from "@/components/landing/KnowledgeLayer";
import {
  About,
  Deployment,
  Differentiation,
  Faq,
  Features,
  HowItWorks,
  Trust,
  Who,
} from "@/components/landing/ContentSections";
import { FinalCta, Footer } from "@/components/landing/FinalCta";
import { ContactModal } from "@/components/landing/ContactModal";

const YEAR = 2026;

const SITE_URL = "https://demo-to-web.lovable.app";

function faqJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: T[lang].faq.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "KobiKan — AI asistent údržby pre priemyselné prevádzky" },
      {
        name: "description",
        content:
          "KobiKan zachytí znalosti vašej prevádzky a mení ich na okamžité odpovede pre každého technika. Pilot za 14 dní. On-prem alebo cloud. Projekt firmy Touch4IT.",
      },
      { property: "og:title", content: "KobiKan — AI asistent údržby pre priemyselné prevádzky" },
      {
        property: "og:description",
        content:
          "KobiKan zachytí znalosti vašej prevádzky a mení ich na okamžité odpovede pre každého technika. Pilot za 14 dní. On-prem alebo cloud. Projekt firmy Touch4IT.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "KobiKan" },
      { property: "og:locale", content: "sk_SK" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:locale:alternate", content: "ja_JP" },
      { property: "og:locale:alternate", content: "de_DE" },
      { property: "og:locale:alternate", content: "cs_CZ" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "sk", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "ja", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "de", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "cs", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "KobiKan",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.ico`,
              description: "AI asistent údržby pre priemyselné prevádzky.",
              parentOrganization: {
                "@type": "Organization",
                name: "Touch4IT",
                url: "https://touch4it.com",
              },
            },
            {
              "@type": "WebSite",
              name: "KobiKan",
              url: SITE_URL,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd("sk")),
      },
    ],
  }),
});

function Landing() {
  const [lang, setLang] = useState<Lang>("sk");
  const [open, setOpen] = useState(false);
  const t = T[lang];

  useLenis();

  const openModal = () => setOpen(true);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t.meta.title;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", t.meta.description);

    let faqScript = document.getElementById("faq-jsonld") as HTMLScriptElement | null;
    if (!faqScript) {
      faqScript = document.createElement("script");
      faqScript.id = "faq-jsonld";
      faqScript.type = "application/ld+json";
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqJsonLd(lang));
  }, [lang, t.meta.title, t.meta.description]);

  return (
    <div className="min-h-screen bg-[color:var(--color-void)] text-white">
      <Nav t={t} lang={lang} setLang={setLang} onCta={openModal} />

      {/* ACT I — scroll-scrubbed studio orbit */}
      <HeroOrbit t={t} onCta={openModal} />

      {/* pinned story beat — the three pillars */}
      <StoryBeat t={t} />

      {/* ACT II — macro fly-through with mono callouts */}
      <MacroDetails t={t} />

      <Features t={t} />
      <Who t={t} />

      {/* ACT III — knowledge layer converging onto the machine */}
      <KnowledgeLayer t={t} />

      <HowItWorks t={t} onCta={openModal} />
      <Differentiation t={t} />
      <Deployment t={t} />
      <About t={t} />
      <Trust t={t} />
      <Faq t={t} />

      {/* final demo CTA — full bleed */}
      <FinalCta t={t} onCta={openModal} />
      <Footer t={t} year={YEAR} />

      {open && <ContactModal t={t} onClose={() => setOpen(false)} />}
      <CookieBanner lang={lang} />
    </div>
  );
}
