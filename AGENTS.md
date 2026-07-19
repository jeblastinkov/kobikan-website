# KobiKan website

Marketing site for KobiKan — an AI maintenance assistant for industrial plants (a Touch4IT product). TanStack Start + Vite + Tailwind 4 + GSAP, deployed via nitro.

- All copy lives in `src/lib/i18n.ts` (sk/en/ja/de/cs). Never hardcode UI strings in components.
- Canonical origin lives in `src/lib/site.ts` (`SITE_URL`) — used by SEO meta, sitemap, blog.
- `npm run dev` / `npm run build`. Cinematic scroll work: see `CINEMATIC_REDESIGN_PLAN.md`.
