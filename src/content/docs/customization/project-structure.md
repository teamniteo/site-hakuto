---
title: "Project Structure"
description: "Understand how a Hakuto project is organized. Covers directory layout, key config files, page routing, and where components live."
category: "customization"
order: 2
---

# Project Structure

A Hakuto project follows the standard Astro project structure with a few additions for Cloudflare Workers deployment. Skills, subagents, and the statusline come from the installed `hakuto` plugin. They're **not** vendored into your repo.

## Directory layout

```
my-site/
├── .claude/
│   ├── settings.json        # Permissions and local config
│   └── settings.local.json  # Personal overrides (gitignored)
├── src/
│   ├── assets/          # Images, SVGs, favicons
│   ├── components/      # Reusable .astro components
│   │   └── ui/          # shadcn/ui components
│   ├── content/         # Content collections (docs, blog)
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utilities (cn, helpers)
│   ├── pages/           # File-based routing
│   └── index.css        # Theme & design tokens
├── public/              # Static assets (auto-generated)
├── astro.config.mjs     # Astro + integrations config
├── CLAUDE.md            # Project-specific agent instructions
├── devenv.nix           # Optional: bun + tooling via devenv
└── wrangler.toml        # Cloudflare Workers config
```

Skills live in the plugin cache at `~/.claude/plugins/cache/hakuto/hakuto/<version>/skills/`. They're shared across every Hakuto site on your machine and update via `/plugin update hakuto`.

## Key files

### `src/index.css`

The single source of truth for all styling. Contains Tailwind v4 theme tokens, color variables, font definitions, and custom animations. Uses `@theme {}` blocks and `@layer base {}` for CSS custom properties.

### `src/layouts/Layout.astro`

Base layout used by all pages. Handles meta tags, SEO, JSON-LD schema, fonts, and the Header/Footer structure. Pages pass a `title` prop for the document title.

### `CLAUDE.md`

Project-specific instructions for Claude Code: conventions, available components, quality standards, the mandatory workflow for building pages. `/hakuto:init` scaffolds it; you can edit and extend it (a `## Project Plan` section is common). It combines with plugin-provided skills to drive the agent.

### `astro.config.mjs`

Astro configuration with integrations for React, sitemap, search (Pagefind), favicons, and the Cloudflare adapter. Also configures web fonts via the Astro Fonts API.

## Pages and routing

Astro uses file-based routing. Every `.astro` file in `src/pages/` becomes a page:

| File | URL |
|------|-----|
| `src/pages/index.astro` | `/` |
| `src/pages/docs/index.astro` | `/docs` |
| `src/pages/docs/[...slug].astro` | `/docs/setting-up/custom-domain` |
| `src/pages/start/[step].astro` | `/start/prep`, `/start/clone`, ... |

## Components

Components live in `src/components/`. Use `.astro` files for static components and the pre-installed shadcn/ui React components (in `src/components/ui/`) when you need interactivity. Prefer native JavaScript over React for simple interactions.
