# KobiKan — Cinematic Redesign: Assets, Content & Implementation Plan

> Goal: elevate the KobiKan landing page to an award-grade, scroll-driven experience that stays
> **functional and product-first** (not marketing-fluffy), keeps **all existing content 1:1** in
> all 5 languages (sk/en/ja/de/cs), keeps the **current brand** (colors, logo, type), adds **one
> new certified/compliance claim**, and stays fast (Lighthouse ≥ 90 mobile, SSR/SEO untouched).

---

## 1. Design direction — "functional cinema"

Award-winning through **craft, not hype**. The site should feel like a precise industrial tool
that happens to be beautifully staged — closer to a well-made machine datasheet than an ad.

Principles:
- **Show the product, not slogans.** The animated UI mockups (chat, voice, logbook, integrations,
  dashboard) are the stars; the video/photo layer is quiet background context, never foreground
  decoration.
- **Motion = explanation.** Every animation must clarify something (a step order, a stat, a
  before/after). If a motion doesn't explain, cut it.
- **Restraint in the trust zone.** Comparison table, deployment, About, badges stay calm and
  near-static — stillness reads as "certified."
- **One saturated color.** `#ff3333` only ever means "Kobi is acting/answering." Everything else
  is ink `#0d0d0d`, soft dark `#161616`, white, and grays.

Brand lock (do not change):
| Token | Value | Source |
|---|---|---|
| Brand red | `#ff3333` (`--brand`) | `src/styles.css:53` |
| Ink dark / soft / line | `#0d0d0d` / `#161616` / `#262626` | `src/styles.css:56-58` |
| Display font | General Sans → Inter → Noto Sans JP | `src/styles.css:37` |
| Mono | JetBrains Mono | `src/styles.css:39` |
| Logo | `/kobikan-logo.svg` (+ PNG variants in `graphics/`) | `public/` |

The logo stays exactly as-is in nav and footer; in generated visuals it may appear only as the
small chat-avatar "K" or on tablet screens — never distorted, recolored, or 3D-extruded.

---

## 2. ASSET PROMPTS — one prompt per asset (copy-paste one at a time)

Generate in this order: **0A → 0B first** (they produce the identity reference images), then
attach those two references + `kobikan-logo.svg` to every later generation. Each prompt below is
fully self-contained — paste it alone into the generator (Seedance 2.0 / Higgsfield or
equivalent).

Global acceptance rule for every asset: generate 3–4 takes, keep the most natural one. Reject
any take with uncanny hands, extra fingers, readable gibberish text, or any saturated color
other than the red glow. Deliver to `/assets-drop/` with the exact filename given.

### Asset 0A — Identity reference: Character A (senior technician)

```
Photorealistic portrait reference of a factory maintenance technician: male, ~55 years old,
short grey hair, calm weathered friendly face, grey work jacket over dark t-shirt. Standing in
a dim industrial hall, neutral expression, looking slightly off-camera. Color palette: ink black
#0d0d0d shadows, cool neutral greys, warm natural skin tones; no saturated colors. European
factory realism — worn but clean equipment, no US hard-hat clichés, no sci-fi. Subtle film
grain, shallow depth of field. 3/4 body framing, 2048×2560 portrait.
Filename: ref-character-a.png
```

### Asset 0B — Identity reference: Character B (junior technician)

```
Photorealistic portrait reference of a factory maintenance technician: ~30 years old, navy
work overall over dark t-shirt, short dark hair, alert open face. Standing in a dim industrial
hall, neutral expression, looking slightly off-camera. Color palette: ink black #0d0d0d shadows,
cool neutral greys, warm natural skin tones; no saturated colors. European factory realism —
worn but clean equipment, no US hard-hat clichés, no sci-fi. Subtle film grain, shallow depth
of field. 3/4 body framing, 2048×2560 portrait.
Filename: ref-character-b.png
```

### Asset 1 — Video clip "handover" (HERO scroll sequence)

```
[Attach: ref-character-a.png, ref-character-b.png, kobikan-logo.svg]
Cinematic video, ~8 s, 1080p, 16:9, no audio, std mode. Use the two attached identity
references: Character A (senior technician, ~55, grey work jacket) and Character B (junior
technician, ~30, navy overall) — same faces and wardrobe as the references.
Scene: dim European factory hall at evening. Close framing on Character A's hands passing a
worn tablet to Character B. The tablet screen shows a simple dark chat interface with faint
signal-red #ff3333 accents and the small attached logo, undistorted, not readable text. Slow
lateral dolly; soft red screen-glow rises on Character B's face. Mood: quiet succession and
trust — not sadness, not drama.
Grading: ink black #0d0d0d ambience, cool neutral shadows, warm natural skin tones, subtle film
grain, shallow depth of field. The ONLY saturated color is the red #ff3333 interface glow.
No robots, no holograms, no floating UI, no machinery close-ups.
Filename: handover.mp4
```

### Asset 2 — Video clip "answer" (FEATURES backplate)

```
[Attach: ref-character-b.png]
Cinematic video, ~8 s, 1080p, 16:9, no audio, std mode. Use the attached identity reference:
Character B (junior technician, ~30, navy overall) — same face and wardrobe as the reference.
Scene: night shift in a dark European factory hall. Character B stands alone beside a large
machine (machine stays soft and out of focus), speaks a short question toward a tablet held at
chest height. Slow cinematic push-in on the face as a calm signal-red #ff3333 reply-glow
appears from the screen; a small relieved nod. The face is the screen — never show readable
text or machinery detail.
Grading: ink black #0d0d0d ambience, cool neutral shadows, warm natural skin tones, subtle film
grain, shallow depth of field. The ONLY saturated color is the red #ff3333 glow.
No robots, no holograms, no floating UI.
Filename: answer.mp4
```

### Asset 3 — Video clip "shift" (FINALE backplate)

```
[Attach: ref-character-b.png, ref-character-a.png]
Cinematic video, ~8 s, 1080p, 16:9, no audio, std mode. Use the attached identity references:
Character B (junior technician, ~30, navy overall) walking; Character A (senior technician,
~55, grey work jacket) as the passing colleague — same faces and wardrobe as the references.
Scene: dawn light entering a European factory hall through high windows. Character B walks
steadily toward camera, tablet under arm, confident and calm; Character A nods in passing.
Ends on Character B stopping in a still, grounded pose, medium shot.
Grading: ink black #0d0d0d shadows warming slightly with dawn, warm natural skin tones, subtle
film grain, shallow depth of field. At most a faint signal-red #ff3333 glint from the tablet
edge; no other saturated colors. No robots, no holograms, no heroic slow-motion cheese.
Filename: shift.mp4
```

### Asset 4 — Still "hands-tablet" (OG image / blog fallback)

```
[Attach: ref-character-b.png, kobikan-logo.svg]
Photorealistic still, 2400×1260 landscape. Top-down close-up of Character B's hands (junior
technician, navy overall sleeves — match the attached reference) holding a worn tablet in a
dim factory hall. The tablet screen shows a clean dark chat interface, ink #0d0d0d background
with signal-red #ff3333 accent elements and the small attached logo, undistorted; interface
text abstracted/unreadable. Warm skin tones, cool neutral surroundings, subtle film grain,
shallow depth of field. The ONLY saturated color is the red interface accent. Leave the outer
15 % of the frame visually quiet (safe area for OG cropping).
Filename: hands-tablet.png
```

### Asset 5 — Still "trust backplate" (Trust section background)

```
Photorealistic still, 2560×1440. Empty European factory hall corridor at dawn — no people.
Very dark, calm, orderly: clean floor line leading away, soft dawn light from high windows on
the right. Composition weighted to the right; the LEFT half of the frame stays near-black
#0d0d0d negative space (text will sit there). Cool neutral greys, no saturated colors at all,
subtle film grain. Mood: certified order and quiet — nothing dramatic.
Filename: trust-backplate.png
```

### Poster frames (no generation needed)

Posters for the three clips are **extracted, not generated**: take frame 1 of each master via
`ffmpeg -i handover.mp4 -vframes 1 poster-handover.png` (same for `answer`, `shift`). Only
regenerate as a still (reusing the matching clip prompt, worded as "photorealistic still,
2560px wide, first-frame composition of…") if the extracted frame is soft.

### Post-processing (web team, scripted — see `scripts/make-sequence.sh` below)

```bash
# desktop: 96 frames @ 1280w, webp q70   |   mobile: 48 frames @ 720w, webp q65
ffmpeg -i handover.mp4 -vf "fps=12,scale=1280:-2" -c:v libwebp -q:v 70 public/sequences/hero/d/%03d.webp
ffmpeg -i handover.mp4 -vf "fps=6,scale=720:-2"  -c:v libwebp -q:v 65 public/sequences/hero/m/%03d.webp
# posters: avif + webp + jpg fallback, ~1600w
```

Budget check after conversion: desktop hero sequence ≤ ~3.5 MB, mobile ≤ ~1.2 MB, poster ≤ 80 kB.

---

## 3. Content: keep 1:1 + ONE new compliance claim

All existing strings in `src/lib/i18n.ts` remain byte-identical. One addition — a factual
"certified, no shadow-IT" claim rendered in the **Trust section** (large statement above the
badges), because that's the story competitors can't copy: no WhatsApp groups, no uncertified
apps, traceable answers.

### Exact i18n change

**a) Type** — `src/lib/i18n.ts:55`, extend:

```ts
trust: { headline: string; claim: string; badges: string[] };
```

**b) Add `claim` to each language's `trust` block** (locations: sk `~:268`, en `~:544`,
ja `~:816`, de `~:1100`, cs `~:1384`):

| Lang | `claim` |
|---|---|
| sk | `"Žiadny WhatsApp, žiadne necertifikované aplikácie. KobiKan je certifikovaný, plne kompliantný asistent, ktorý pozná vaše stroje — každá odpoveď je dohľadateľná vo vašej dokumentácii."` |
| en | `"No WhatsApp, no uncertified apps. KobiKan is a certified, fully compliant assistant that knows your machinery — every answer traceable back to your own documentation."` |
| ja | `"WhatsAppも未認証アプリも不要。KobiKanは認証済み・コンプライアンス準拠のアシスタントとして貴社の設備を熟知 — すべての回答は自社ドキュメントまで遡って確認できます。"` |
| de | `"Kein WhatsApp, keine unzertifizierten Apps. KobiKan ist ein zertifizierter, vollständig konformer Assistent, der Ihre Maschinen kennt — jede Antwort ist in Ihrer eigenen Dokumentation nachvollziehbar."` |
| cs | `"Žádný WhatsApp, žádné necertifikované aplikace. KobiKan je certifikovaný, plně kompliantní asistent, který zná vaše stroje — každá odpověď je dohledatelná ve vaší dokumentaci."` |

> ⚠️ Legal check with client before launch: confirm the word "certified" is defensible (which
> certification, by whom). If not yet certified, soften to "compliant by design" in all 5 langs.

**c) Render** — in `Trust()` (`src/routes/index.tsx:849`), insert between the headline `<p>` and
the badges grid:

```tsx
<p className="mt-6 text-2xl lg:text-4xl font-semibold tracking-tight max-w-4xl leading-snug">
  {t.trust.claim}
</p>
```

**d) Badges** — replace the emoji icons (`index.tsx:860`, the `["🔒","🏭","☁️","🔗"]` array) with
proper inline SVG icons (lucide-react is already a dependency: `ShieldCheck`, `Factory`,
`CloudCog`, `Cable`). Cheapest credibility upgrade on the page.

---

## 4. Implementation plan — exactly what, exactly where

### New files

| File | Purpose |
|---|---|
| `src/components/cinematic/SmoothScroll.tsx` | Lenis wrapper; syncs to `ScrollTrigger.update` via `gsap.ticker`. No-ops when `prefers-reduced-motion` or coarse pointer. Mounted once in `Landing()`. |
| `src/components/cinematic/FrameSequence.tsx` | SSR-safe `<img>` poster → hydrates `<canvas>`, preloads/decodes frames, scrubbed by ScrollTrigger. Props: `base`, `frames`, `poster`, mobile variant. Fallback chain: no-JS / reduced-motion / `saveData` → poster only. |
| `src/components/cinematic/KineticHeadline.tsx` | Splits existing H1 text into letters (latin) or words (ja) with `aria-label` preserving the full sentence; GSAP stagger-in tied to hero scrub. |
| `src/components/cinematic/CountUp.tsx` | Tween numeric part of existing stat strings ("50 %", "8+", "70 %") once on enter; renders final string SSR so SEO/no-JS sees real values. |
| `src/components/cinematic/GrainOverlay.tsx` | Fixed SVG-turbulence overlay, `opacity .03`, `pointer-events-none`; skipped on reduced-motion/low-power. |
| `scripts/make-sequence.sh` | ffmpeg conversion from `/assets-drop/*.mp4` to `public/sequences/**` per the recipe in §2. |
| `public/sequences/hero/{d,m}/` + `public/posters/` | Generated frames + posters. |

### Modified files

| File | Change |
|---|---|
| `package.json` | add `lenis` (~4 kB gz). Nothing else — GSAP/ScrollTrigger already shipped (`index.tsx:8-12`). |
| `src/lib/i18n.ts` | `trust.claim` type + 5 strings (§3). **No other string touched.** |
| `src/styles.css` | add utilities: `.text-display-xxl` (clamp ~4rem→9rem, condensed tracking), `.grain` keyframes; keep all tokens unchanged. |
| `src/routes/index.tsx` | Section-by-section (below). |

### `src/routes/index.tsx` — section by section

1. **`Landing()` (`:98`)** — mount `<SmoothScroll>` + `<GrainOverlay>` around existing tree.
   Everything else (SEO `head`, modal, CookieBanner, lang switching) untouched.
2. **`Hero` (`:259`)** — keep `TechnicalBackground` as fallback layer; add `FrameSequence`
   ("handover") as absolutely-positioned backplate at low opacity behind the existing grid.
   H1 → `KineticHeadline` (same strings). Stats (`:299-303`) → wrap values in `CountUp`.
   The `HeroMock` chat stays — it's the functional anchor; give it a slight parallax offset.
3. **`Problem` (`:365`)** — desktop `lg+`: pin section, reveal the 3 items sequentially with
   scrub; mobile: current layout with simple stagger. No copy/markup changes inside items.
4. **`Features` (`:425`)** — keep existing GSAP mockup animations (they're good); add subtle
   counter-parallax between text and mockup columns (`yPercent` ±6); retime triggers to
   `top 70%` for act pacing.
5. **`HowItWorks` (`:693`)** — desktop: convert the 4-step grid into a pinned horizontal scrub
   timeline (steps slide in left-to-right along a progress line in brand red); mobile: current
   grid. Strings untouched.
6. **`Differentiation` / `Deployment` / `About` (`:723-846`)** — deliberately minimal: single
   fade-up per block, table rows highlight current row on scroll. Nothing else.
7. **`Trust` (`:849`)** — add `claim` (§3c), swap emoji → lucide icons (§3d), optional
   `trust-backplate` still as a very dark section background if the asset lands well.
8. **`FinalCta` (`:926`)** — stats → `CountUp`; optional "shift" `FrameSequence` backplate at
   low opacity behind the red section (skip if budget tight — red section already lands).
9. **`Footer`, `Faq`, `ContactModal`, blog routes** — no changes.

### Phases

- **Phase 0 (½ d):** `lenis` + `SmoothScroll` + `GrainOverlay`; verify `bun run build`,
  Lighthouse baseline before/after; reduced-motion + touch gates proven.
- **Phase 1 (1–2 d):** `FrameSequence` with dummy generated frames, `KineticHeadline`,
  `CountUp` in Hero. De-risks the pipeline before asset spend. Verify scrub is buttery
  (Chrome + Safari/iOS) on localhost.
- **Phase 2 (1–2 d):** Problem pin, Features parallax retime, HowItWorks horizontal timeline,
  Trust claim + icons (i18n change here), Differentiation row highlight.
- **Phase 3 (parallel):** generate §2 assets one by one (0A → 0B → clips → stills),
  `scripts/make-sequence.sh`, swap dummy frames,
  color-match grain.
- **Phase 4 (1 d):** mobile pass, all-5-languages QA (ja word-split!), CLS audit (reserve all
  media boxes), Lighthouse ≥ 90 mobile, deploy preview on `preview/cinematic-redesign`.

### Acceptance checklist

- [ ] All existing i18n strings byte-identical; only `trust.claim` added (×5 languages).
- [ ] Brand tokens, logo files, light/dark section rhythm unchanged.
- [ ] SSR HTML contains full text content (view-source test); meta/JSON-LD/hreflang unchanged.
- [ ] `prefers-reduced-motion`: no pinning, no scrub, posters only — page fully usable.
- [ ] Mobile: native scroll, small frame set (≤ ~1.2 MB), no pinned sections.
- [ ] Lighthouse mobile ≥ 90 perf; LCP (hero poster) < 2.5 s; CLS < 0.05.
- [ ] Contact form, blog, cookie banner, language switch all still work.
- [ ] Client sign-offs: "certified" wording (legal), which badge artwork may be shown,
      final production domain for `SITE_URL`.
- [ ] De-Lovable checklist (§5) fully green — zero `lovable` matches in the repo
      (`grep -ri lovable . --exclude-dir=node_modules`).

---

## 5. De-Lovable — remove every Lovable trace (Phase −1, before everything else)

The project must not be associated with Lovable; it is developed here. Touchpoints and status:

| # | Where | What to do | Status |
|---|---|---|---|
| 1 | `vite.config.ts` | Replace `@lovable.dev/vite-tanstack-config` with a standalone Vite config (tailwindcss, tsconfig-paths, tanstackStart with `server: { entry: "server" }` + import protection, build-only nitro, viteReact, lightningcss, `@` alias, react dedupe). | ✅ done |
| 2 | `package.json:79` | Remove devDependency `@lovable.dev/vite-tanstack-config` (`bun remove @lovable.dev/vite-tanstack-config`), then reinstall + verify `bun run dev` and `bun run build`. | ✅ done |
| 3 | `src/lib/lovable-error-reporting.ts` | Delete the file (it only forwards errors to `window.__lovableEvents`, which no longer exists without the Lovable runtime). | ✅ done |
| 4 | `src/routes/__root.tsx:14,44` | Remove the `reportLovableError` import and the `useEffect` call in `ErrorComponent` (keep the existing `console.error`). | ✅ done |
| 5 | `src/routes/__root.tsx:107,112` | Replace `og:image` / `twitter:image` (Lovable r2.dev preview screenshot) with `${SITE_URL}/og-blog-pillar.jpg` for now; final image is Asset 4 (`hands-tablet`). | ✅ done |
| 6 | `src/routes/index.tsx:16`, `src/lib/blog-posts.ts:19`, `src/routes/sitemap[.]xml.ts:5` | Three separate copies of `SITE_URL = "https://demo-to-web.lovable.app"`. Centralize into new `src/lib/site.ts` (`export const SITE_URL = …`) and import it in all three; set it to the real production domain (**needs client/owner input**). | ✅ done |
| 7 | `public/robots.txt:4` | Sitemap line points at `demo-to-web.lovable.app` — update to the production domain. | ✅ done |
| 8 | `AGENTS.md` | Delete the `LOVABLE:BEGIN/END` block (it is the file's entire content); replace with a short real project note or delete the file. | ✅ done |
| 9 | Verify | `grep -ri lovable . --exclude-dir=node_modules` returns only this plan file; then full build + smoke test (home, blog, contact form, sitemap.xml). | ✅ done |

Note: after step 2, `lovable-tagger`, the Lovable HMR/sandbox plugins, and the dev error-logger
middleware disappear from the dependency tree automatically — they were pulled in transitively.

## 6. Risks & mitigations

- **Uncanny AI faces** → 3–4 takes per clip + hard rejection rules in the agent prompt; fallback:
  half-day real shoot (two people, one hall) — for a trust-first product, real beats uncanny.
- **Letter-split breaks Japanese** → `KineticHeadline` splits by word/line for `ja`.
- **Lenis + pinning jank on iOS** → coarse-pointer devices keep native scroll and skip pinning;
  tested in Phase 1, not at the end.
- **Frame payload on mobile data** → separate 720p/48-frame set + `navigator.connection.saveData`
  check → poster-only mode.
- **"Certified" legal exposure** → soften-to-"compliant by design" fallback pre-written in §3.
- **SEO regression** → animations only transform existing SSR DOM; nothing text-bearing is
  client-only rendered.
