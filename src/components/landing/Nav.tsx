import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import type { Lang, T } from "@/lib/i18n";
import { blogHref, LANG_LABELS, LANG_ORDER } from "@/lib/lang";
import { CtaButton, Logo } from "./primitives";

export function Nav({
  t,
  lang,
  setLang,
  onCta,
}: {
  t: typeof T.sk;
  lang: Lang;
  setLang: (l: Lang) => void;
  onCta: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#how", label: t.nav.how },
    { href: "#deployment", label: t.nav.deployment },
    { href: "#about", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleCta = () => {
    setMobileOpen(false);
    onCta();
  };

  return (
    <header
      className={`fixed top-0 z-40 w-full border-b transition-all ${
        scrolled || mobileOpen
          ? "border-white/10 bg-[color:var(--color-void)]/85 backdrop-blur-md"
          : "border-transparent bg-[color:var(--color-void)]/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 rounded-sm focus-ring">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.14em] lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 transition-colors hover:text-white focus-ring rounded-sm"
            >
              {l.label}
            </a>
          ))}
          <Link
            to={blogHref(lang)}
            className="text-white/60 transition-colors hover:text-white focus-ring rounded-sm"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 font-mono text-[11px] sm:flex">
            {LANG_ORDER.map((code, i) => (
              <span key={code} className="contents">
                {i > 0 && <span className="text-white/20">/</span>}
                <button
                  onClick={() => setLang(code)}
                  className={`px-1 py-0.5 uppercase focus-ring rounded-sm ${
                    lang === code ? "text-[color:var(--color-brand)]" : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {LANG_LABELS[code]}
                </button>
              </span>
            ))}
          </div>
          <CtaButton onClick={handleCta} size="sm">
            {t.nav.cta}
          </CtaButton>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden focus-ring"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[color:var(--color-void)] lg:hidden">
          <nav className="container-x grid gap-1 py-4 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 font-medium text-white/70 hover:bg-white/5 hover:text-white focus-ring"
              >
                {l.label}
              </a>
            ))}
            <Link
              to={blogHref(lang)}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 font-medium text-white/70 hover:bg-white/5 hover:text-white focus-ring"
            >
              Blog
            </Link>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              {LANG_ORDER.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLang(code);
                    setMobileOpen(false);
                  }}
                  className={`border px-3 py-2 font-mono text-xs uppercase focus-ring ${
                    lang === code
                      ? "border-[color:var(--color-brand)] text-[color:var(--color-brand)]"
                      : "border-white/15 text-white/50"
                  }`}
                >
                  {LANG_LABELS[code]}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
