import { createServerFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader } from "@tanstack/react-start/server";

import type { Lang } from "./i18n";

export const LANGUAGE_COOKIE = "kobikan-language";
export const JAPAN_LANGUAGES = ["ja", "en"] as const satisfies readonly Lang[];

export type VisitorLocale = {
  language: Lang;
  isJapanEdition: boolean;
};

const SUPPORTED_LANGUAGES = new Set<Lang>(["sk", "en", "ja", "de", "cs"]);

const COUNTRY_LANGUAGE: Readonly<Record<string, Lang>> = {
  SK: "sk",
  JP: "ja",
  DE: "de",
  CZ: "cs",
};

export function isSupportedLanguage(value: string | undefined): value is Lang {
  return value !== undefined && SUPPORTED_LANGUAGES.has(value as Lang);
}

export function languageForCountry(country: string | undefined): Lang {
  if (!country) return "en";
  return COUNTRY_LANGUAGE[country.trim().toUpperCase()] ?? "en";
}

function requestCountry(): string | undefined {
  // These are populated by the most common Nitro deployment/CDN providers.
  // The first present header wins; no raw IP address is stored by the app.
  return (
    getRequestHeader("x-vercel-ip-country") ??
    getRequestHeader("cf-ipcountry") ??
    getRequestHeader("cloudfront-viewer-country") ??
    getRequestHeader("x-country-code") ??
    getRequestHeader("x-nf-country")
  );
}

function requestHostname(): string {
  const forwardedHost = getRequestHeader("x-forwarded-host")?.split(",")[0];
  return (forwardedHost ?? getRequestHeader("host") ?? "")
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, "");
}

export function isJapanHostname(hostname: string): boolean {
  const normalizedHostname = hostname.trim().toLowerCase().replace(/:\d+$/, "");
  return normalizedHostname === "kobikan.jp" || normalizedHostname === "www.kobikan.jp";
}

export const getVisitorLanguage = createServerFn({ method: "GET" }).handler((): VisitorLocale => {
  const isJapanEdition = isJapanHostname(requestHostname());
  const savedLanguage = getCookie(LANGUAGE_COOKIE);

  if (isJapanEdition) {
    return {
      language: savedLanguage === "en" || savedLanguage === "ja" ? savedLanguage : "ja",
      isJapanEdition,
    };
  }

  return {
    language: isSupportedLanguage(savedLanguage)
      ? savedLanguage
      : languageForCountry(requestCountry()),
    isJapanEdition,
  };
});
