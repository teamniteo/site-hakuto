---
title: "Favicons"
description: "Add custom favicons to your Hakuto site. Covers SVG and PNG sources, dark mode and light mode variants, and how the favicons plugin works."
category: "tips"
order: 3
---

# Favicons

Hakuto uses the `astro-favicons` plugin to automatically generate all favicon sizes and formats from a single source file. SVG works best for sharp results at all sizes.

## Adding a custom favicon

Place your favicon source file in `src/assets/` and ask Claude:

```
Set up my favicon using src/assets/favicon.svg
```

Claude will configure the `astro-favicons` plugin and generate all required sizes and formats automatically.

## Dark mode and light mode variants

SVG favicons can adapt to the user's system theme. Ask Claude:

```
Add a favicon with dark and light mode variants.
Here's my icon: src/assets/favicon.svg
Use a dark icon on light backgrounds and a light icon on dark backgrounds.
```

Claude will create an SVG with embedded `prefers-color-scheme` media queries so the icon adapts automatically.

## Important notes

- **Source files go in `src/assets/`**, not `public/`. The `public/` directory contains auto-generated files only.
- If you find a favicon in `public/` that you want to use, copy it to `src/assets/` first.
- SVG is the recommended format. It scales perfectly and supports dark/light mode.
- PNG and ICO formats are generated automatically by the plugin.
