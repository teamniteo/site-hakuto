---
title: "Update Hakuto"
description: "How updates work with the Hakuto plugin. Covers /plugin update, scaffold drift, and dependency updates."
category: "setting-up"
order: 3
---

# Update Hakuto

Hakuto is a Claude Code plugin, so updating skills and commands doesn't touch your site repo. Your project source stays yours; the plugin evolves separately.

## Update the plugin

Inside Claude Code, in any project:

```
/plugin update hakuto
```

This pulls the latest skills (`website-builder`, `brand-designer`, `section-blog`, etc.), the `astro-file-editor` subagent, and the `/hakuto:init` command. No files change in your site repo.

To check what you have installed:

```
/plugin list
```

## What does not update automatically

A scaffolded site is a snapshot of `scaffold/` at the moment you ran `/hakuto:init`. That means later changes to Astro versions, Tailwind config, base `Layout.astro`, or the CLAUDE.md spec **do not** flow into your repo automatically.

For major scaffold improvements, we'll ship release notes with a per-file diff so you can cherry-pick what you want. Most sites don't need to chase scaffold updates. Once built, they're stable.

## Update dependencies in your site

Run these in your terminal with [bun](https://bun.sh) installed.

Update everything to the latest compatible versions (no breaking changes):

```sh
bun update
```

Or update a specific package:

```sh
bun update astro
```

Before committing, type-check:

```sh
bun run check
```

And verify the build still passes:

```sh
bun run build
```

## Pinning a version

If you want to lock a team to a specific plugin version, install a tag:

```
/plugin install hakuto@hakuto@0.1.0
```

Drop the version suffix to track the rolling latest.
