# Hakuto — Site Specification

## Configuration
- **Site Type:** Developer tool / open-source project landing
- **Design Language (starting point):** Dark + Technology
- **Target audience:** Developers, founders, and indie makers who already use Claude Code
- **Primary goal:** Drive GitHub stars, encourage clone-and-ship, collect interest for upcoming paid MCPs

## Design Evolution
- **Starting aesthetic:** IDE-inspired dark theme. Orange accent (Hakuto primary) against
  near-black surfaces. JetBrains Mono for headings/accents, Instrument Sans for body copy.
  Mono-only on accents gives the site an unmistakable "terminal/code editor" feel while
  the sans body keeps long-form copy readable.
- **User customizations:** None — using the existing Hakuto template palette. Added
  Instrument Sans as `--font-sans` for body, keeping JetBrains Mono (`--font-mono`) for
  headings, code, and UI accents.
- **Current style:**
  - **Colors:** `--primary` HSL 40 96% 50% (orange), `--background` HSL 240 5% 3% (near
    black), `--heading` HSL 210 17% 93% (near white), `--foreground` HSL 215 14% 72%,
    `--border` HSL 220 13% 20%. Accents use `primary/10`-`primary/20` tints for soft
    atmospheric glows in hero and CTA sections.
  - **Typography:** Headings and eyebrow labels in JetBrains Mono (often with
    `// Section` prefix treatment and `tracking-[0.2em]` uppercase). Body in Instrument
    Sans. `text-4xl` → `text-7xl` scale for hero headlines.
  - **Layout:** 1200px max container, heavy top-border section dividers, card surfaces
    (`bg-card`) for grids, CSS-gradient glows behind heroes and CTAs. 12-column grids
    on larger sections for asymmetry; single-column 800px max on guide articles.
  - **Motion:** CSS-only (group-hover border color shift, arrow slide, pulse on
    "coming soon" dots). No JS animation libraries.

## Fonts
- **Mono:** JetBrains Mono (Google Fonts, via Astro Fonts API) — `--font-mono`
- **Sans:** Instrument Sans (Google Fonts, via Astro Fonts API) — `--font-sans`

## Pages
- `/` — Homepage: hero, logo strip, "what it is," "how it works" (3 steps),
  "who it's for" (4 personas), open-source CTA block
- `/start` — 5-step onboarding walkthrough with code blocks on a vertical timeline
- `/guides` — Listing of two guides with card-style links and "more coming" note
- `/guides/custom-domain` — Long-form guide, 800px container, numbered sections
- `/guides/contact-form` — Long-form guide, includes Worker + Astro code samples
- `/skills` — 2-column grid of the four included Skills with "try it" prompt examples
- `/mcps` — Coming-soon page for four upcoming paid MCPs, with notify form

## Global
- **Header:** Logo + nav (Start, Guides, Skills, MCPs, GitHub). Sticky with backdrop blur.
  Mobile hamburger with JS-only toggle.
- **Footer:** 4-column grid (brand, Docs, Community, Built by). GitHub + Discussions
  links. MIT license note.
- **SEO:** Layout.astro handles canonical, OG, JSON-LD. Homepage passes `WebSite` +
  `SoftwareSourceCode` schema.

## Copy source
- User-provided draft (verbatim). Fixed two typos in source: `Skis` → `Skills`,
  `Wh you want` → `When you want`. Repo URL `github.com/teamniteo/hakuto` used
  throughout.
