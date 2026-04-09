---
title: "Favicons"
description: "Add custom favicons to your Hakuto site. Covers SVG and PNG sources, dark mode and light mode variants, and how the favicons plugin works."
category: "tips"
order: 3
---

# Favicons

Hakuto uses the `astro-favicons` plugin to automatically generate all favicon sizes and formats from a single source file.

## Adding a custom favicon

1. Place your favicon source file in `src/assets/` (SVG works best for sharp results at all sizes):

```
src/assets/favicon.svg
```

2. Update the plugin configuration in `astro.config.mjs`:

```javascript
favicons({
  input: "./src/assets/favicon.svg",
  name: "Your Site Name",
  short_name: "YourSite",
}),
```

3. Restart the preview server:

```bash
pm2 restart preview
```

The plugin generates all required sizes and formats in `public/` automatically.

## Dark mode and light mode variants

SVG favicons support `prefers-color-scheme` media queries, so you can ship a single file that adapts to the user's system theme.

Ask Claude to help:

```
Add a favicon with dark and light mode variants.
Here's my logo: src/assets/logo.svg
Use a dark icon on light backgrounds and a light icon on dark backgrounds.
```

Claude will create an SVG with embedded media queries:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <style>
    path { fill: #1a1a1a; }
    @media (prefers-color-scheme: dark) {
      path { fill: #ffffff; }
    }
  </style>
  <path d="..." />
</svg>
```

## Important notes

- **Source files go in `src/assets/`**, not `public/`. The `public/` directory contains auto-generated files only.
- If you find a favicon in `public/` that you want to use, copy it to `src/assets/` first, then update `astro.config.mjs`.
- SVG is the recommended format. It scales perfectly and supports dark/light mode.
- PNG and ICO formats are generated automatically by the plugin.
