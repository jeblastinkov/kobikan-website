# KobiKan UI Redesign Proposal

**Direction: “Precision Layer”** — enterprise industrial AI with Awwwards-level craft, not startup flash.

---

## Current state — honest audit

| What works | What holds it back |
|---|---|
| Strong copy & i18n (SK/EN/JA/DE/CS) | 1,150-line monolith in `index.tsx` — hard to iterate on motion |
| Alternating light/dark rhythm | Every section uses the same pattern: eyebrow → H2 → grid |
| `TechnicalBackground` SVG schematic | Hero animation is decorative, not tied to product story |
| Feature mock ScrollTriggers | Rest of page has almost no scroll choreography |
| Red brand `#ff3333` is distinctive | Trust badges use emoji (🔒🏭) — breaks enterprise tone |
| `@react-three/fiber` in deps | Zero WebGL usage — missed signature moment |

The site communicates *what* KobiKan does. It doesn’t yet make a plant manager or IT director *feel* the precision of industrial knowledge flowing through a system.

---

## Design direction: Precision Layer

**Concept:** KobiKan sits between the physical plant (PLC, sensors, manuals) and the technician. The UI should feel like a **control-room interface** — dark technical canvas, surgical red data pulses, monospace telemetry, generous whitespace.

### Token system (evolve, don’t replace)

```
Surface hierarchy
  --void:        #070707     (hero, pinned sections)
  --graphite:    #0D0D0D     (current --dark, keep)
  --slate:       #141414     (cards on dark)
  --paper:       #FAFAFA     (light sections — warmer than pure white)
  --grid-line:   rgba(255,255,255,0.06)

Accent (keep brand, add depth)
  --brand:       #FF3333     (primary CTA, active nav)
  --brand-glow:  #FF333340   (WebGL particles, pulse nodes)
  --brand-dim:   #CC2929     (hover states)
  --signal:      #00E5A0     (uptime/connected — sparingly)
  --warn:        #FFB020     (alerts in mocks)

Typography (refined roles)
  Display:  General Sans — headlines, tight tracking (-0.04em on H1)
  Body:     Inter — paragraphs, nav
  Data:     JetBrains Mono — stats, mock UI, step labels, table cells

Radius & borders
  Cards:    12px (slightly sharper than current 8px — more industrial)
  Buttons:  8px
  Hairline borders everywhere — no heavy box shadows except hero mock
```

### Signature element (the one thing people remember)

**“Knowledge Graph Hero”** — a Three.js point-cloud network where nodes represent PLC, manuals, MES, technicians. On scroll, data pulses travel along edges toward the chat mock. This *is* KobiKan visually: disconnected plant knowledge → unified answers.

---

## Information architecture — simplify navigation

Current nav has 6 links + Blog + 5 languages + CTA. That’s a lot for enterprise buyers who scan in 8 seconds.

### Proposed nav (desktop)

```
[Logo]    Product · How it works · Deployment · About · Blog    [SK|EN|…]  [Schedule demo]
                ↑ merged Features + Why into "Product" dropdown or anchor sections
```

### Proposed nav (mobile) — currently missing

Sticky bottom bar or hamburger sheet with:

- Primary CTA always visible
- Section progress dots on the right edge (like Stripe/Linear)

### Scroll-spy sidebar (desktop, lg+)

A thin vertical rail showing active section with monospace label:

```
01 PROBLEM
02 CAPABILITIES  ← active (red tick + line extends)
03 PROCESS
04 DEPLOY
05 FAQ
```

GSAP `ScrollTrigger` pins this rail; updates on section enter. Enterprise buyers always know where they are.

---

## Section-by-section proposals

### 1. Hero — cinematic load sequence

**Replace** CSS `fade-in-up` with an orchestrated GSAP timeline on mount:

```
0.0s  Grid lines draw in (stroke-dashoffset)
0.3s  Headline words split and stagger up (SplitText or manual spans)
0.6s  Subcopy fades
0.8s  CTA buttons scale in (back.out easing)
1.0s  Hero mock slides from right + chat types first Q/A
1.2s  Stats count up (50%, 8+, 70%) with monospace flip
```

**Three.js layer** (`HeroKnowledgeGraph.tsx`):

- 800–1200 instanced particles in a sparse 3D graph
- Nodes: 5 labeled types (PLC, PDF, MES, Voice, Chat) as subtle billboards
- Mouse parallax ±15° (subtle — plant managers aren’t gamers)
- **Performance:** `dpr={[1, 1.5]}`, lazy-load Canvas after first paint, static fallback SVG on mobile/reduced-motion

**Hero mock upgrade:**

- Live typing cursor in chat
- Source citation slides in from bottom with mono font
- Glass panel: `backdrop-blur-xl border-white/10 bg-white/[0.03]`

---

### 2. Problem — pinned horizontal reveal

Instead of a static 3-column grid, use **ScrollTrigger pin + horizontal scrub**:

```
[Scroll down]
  Section pins → cards slide in from right one by one
  Each card: large mono index, headline, body
  Closing line animates in red after card 3
```

Feels like reviewing failure modes on a diagnostic screen. More engaging than `01 02 03` in a grid.

---

### 3. Intro (Understand → Answer → Integrate → Learn) — interactive capability switcher

Replace the 2×2 grid with a **tabbed command center**:

```
┌─────────────────────────────────────────────────┐
│  [01 Understand] [02 Answer] [03 Integrate] [04 Learn]  │
├─────────────────────────────────────────────────┤
│  Large headline          │  Animated diagram     │
│  Body copy               │  (SVG morph per tab)  │
└─────────────────────────────────────────────────┘
```

GSAP morphs SVG paths between tabs (manual → chat bubble → plug icons → brain/network). Click or auto-cycle every 6s. Red underline slides between tabs with `power3.inOut`.

---

### 4. Features — sticky scroll storytelling (Awwwards classic)

Each feature becomes a **pinned chapter**:

```
Left column (sticky):  Feature title + body stays fixed
Right column (scrub):  Mock animates through states as you scroll
                       Chat → Voice → Logbook → Integrations → Dashboard
```

Extend existing per-mock ScrollTriggers to **pin the text** and **scrub mock timelines** tied to scroll progress instead of fire-once triggers. This is the highest-impact GSAP upgrade.

Example for Voice feature:

- Scroll 0–30%: mic pulses
- 30–60%: waveform draws
- 60–100%: transcript types, success badge pops

---

### 5. How it works — animated process pipeline

Replace the 4-column grid with a **horizontal pipeline** on desktop:

```
[STEP 01] ────●──── [STEP 02] ────●──── [STEP 03] ────●──── [STEP 04]
              ↑ data pulse travels on scroll
```

Each step card expands on hover/focus. On mobile: vertical timeline with animated connector line (SVG stroke-dashoffset tied to scroll).

---

### 6. Comparison table — enterprise-grade, not spreadsheet

Current table is functional but flat. Upgrade to:

- Sticky header row
- KobiKan column: subtle red tint + checkmarks animate in on scroll
- Row hover: highlight entire row, mono row ID on left (`ROW-01`)
- Mobile: swipeable cards instead of horizontal scroll hell

GSAP: rows stagger in with `opacity + translateY`, checkmarks use `scale: 0 → 1` with `back.out`.

---

### 7. Deployment — 3D topology card

Three.js **mini scene** (or refined SVG): three deployment modes as nodes:

```
     [Cloud]
        │
   [Hybrid] ─── [On-prem]
```

Hover a card → corresponding node glows, connection lines pulse. Reinforces the on-prem story visually (critical for your buyers).

---

### 8. Trust — kill emoji, add credential marks

Replace 🔒🏭☁️🔗 with:

- Custom 24px line icons (Lucide or bespoke SVG)
- Mono labels: `ISO-27001-ready`, `On-prem`, `OT-safe`, `MES/SQL`
- Optional: infinite marquee of client logos (grayscale → color on hover)

---

### 9. FAQ — smooth accordion with GSAP

Replace instant show/hide with:

```javascript
gsap.to(content, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" })
```

Plus `+` rotates to `×` with spring. Only one open at a time (keep current behavior).

---

### 10. Final CTA — full-bleed impact

- Dark void background with subtle Three.js particle field (reuse hero graph, zoomed out)
- Headline: split-line animation on scroll into view
- Stats: odometer-style number roll
- CTA button: magnetic hover (GSAP tracks cursor, button follows ±8px)

---

## GSAP animation system (global)

Create `src/lib/motion/` with reusable patterns:

| Utility | Use |
|---|---|
| `useScrollReveal()` | Standard section entrance (y: 40, opacity: 0, stagger children) |
| `useSplitHeadline()` | H2 word/line stagger |
| `useCountUp()` | Stats, metrics |
| `useMagneticButton()` | Primary CTAs |
| `prefersReducedMotion` | Disable pin/scrub/WebGL; show static layouts |

Register once in root:

```javascript
ScrollTrigger.defaults({ markers: false });
ScrollTrigger.config({ limitCallbacks: true });
```

**Rule:** One orchestrated moment per viewport. Hero load = big. Features = scroll story. CTA = magnetic. Everything else = subtle reveals. Restraint = enterprise.

---

## Three.js — where to use (and where not to)

| Location | Approach | Fallback |
|---|---|---|
| Hero background | Knowledge graph point cloud | Current `TechnicalBackground` SVG |
| Deployment section | 3-node topology | Static SVG diagram |
| Final CTA | Ambient particles | CSS gradient mesh |

**Do NOT** put WebGL on every section — kills performance and feels gimmicky for Siemens/Rockwell buyers.

**Bundle strategy:**

- Dynamic `import()` for Canvas components
- `Suspense` with skeleton
- Target LCP < 2.5s: hero text renders first, Canvas loads after `requestIdleCallback`

---

## Component architecture refactor

Split `index.tsx` before adding motion:

```
src/components/landing/
  Hero.tsx + HeroKnowledgeGraph.tsx
  Problem.tsx
  IntroCapabilities.tsx
  FeaturesSticky.tsx + FeatureMock.tsx
  HowPipeline.tsx
  ComparisonTable.tsx
  DeploymentTopology.tsx
  TrustBar.tsx
  FaqAccordion.tsx
  FinalCta.tsx
  Nav.tsx + ScrollSpy.tsx
src/lib/motion/
  scroll-reveal.ts
  reduced-motion.ts
  gsap-config.ts
```

---

## Mobile & accessibility (non-negotiable for enterprise)

- **Mobile nav:** Sheet/drawer with section links (currently links are `hidden lg:flex`)
- **Reduced motion:** `matchMedia('(prefers-reduced-motion: reduce)')` disables pin, scrub, WebGL
- **Focus states:** Visible ring on all interactive elements (nav, FAQ, tabs)
- **Keyboard:** FAQ and capability tabs fully operable
- **Performance budget:** WebGL only on hero + CTA; disable on `<768px` if needed

---

## Phased rollout

### Phase 1 — Foundation (1–2 days)

- Design tokens in `styles.css`
- Split components
- Global scroll reveals + mobile nav
- Trust icons, FAQ GSAP accordion
- Scroll-spy nav rail

### Phase 2 — Signature motion (2–3 days)

- Hero load timeline + count-up stats
- Features sticky scroll storytelling
- How-it-works pipeline animation
- Comparison table stagger

### Phase 3 — WebGL signature (2–3 days)

- `HeroKnowledgeGraph` Three.js
- Deployment topology scene
- Magnetic CTA + reduced-motion fallbacks
- Performance pass (Lighthouse, bundle split)

---

## Visual reference mood (Awwwards tier, enterprise-safe)

Think **Linear × Palantir × industrial HMI** — not flashy crypto landing:

- **Linear:** scroll spy, monospace data, surgical motion
- **Anduril / Palantir:** dark technical, trust through precision
- **Siemens Xcelerator:** industrial credibility, no playful illustration

The red `#FF3333` is already strong — lean into it as **signal color** (data pulses, active states), not flood-fill everywhere.

---

## Quick wins (ship first)

1. Replace emoji trust badges with Lucide icons
2. Add mobile hamburger nav
3. Wire `useScrollReveal` on all `<section>` headings
4. Hero stat count-up animation
5. FAQ height animation
6. Lazy-load a minimal Three.js hero graph (deps already installed)

---

## Related files (current codebase)

| File | Role |
|---|---|
| `src/routes/index.tsx` | Monolithic landing page — primary refactor target |
| `src/components/TechnicalBackground.tsx` | Hero SVG + GSAP parallax |
| `src/styles.css` | Design tokens, utilities |
| `package.json` | GSAP, `@react-three/fiber`, `@react-three/drei` already present |

---

*Document created from UI redesign review — July 2026.*
