import type { Lang } from "./i18n";

export const LANG_ORDER = ["en", "ja", "de", "cs", "sk"] as const satisfies readonly Lang[];

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  ja: "JPN",
  de: "DE",
  cs: "CZ",
  sk: "SK",
};

export const HTML_LANG: Record<Lang, string> = {
  en: "en",
  ja: "ja",
  de: "de",
  cs: "cs",
  sk: "sk",
};

export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  ja: "ja_JP",
  de: "de_DE",
  cs: "cs_CZ",
  sk: "sk_SK",
};

export function blogHref(lang: Lang) {
  return lang === "sk" ? "/blog" : lang === "ja" ? "/blog/ja" : "/blog/en";
}
