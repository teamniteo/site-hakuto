---
title: "Hakuto is now a Claude Code plugin"
slug: "hakuto-is-now-a-claude-code-plugin"
date: "2026-04-23"
author: "Dejan Murko"
authorEmail: "dm@niteo.co"
authorBio: "Dejan is the co-founder of Niteo, a small SaaS studio that created Hakuto."
category: "Updates"
description: "We moved Hakuto from a cloneable template to a Claude Code plugin. Install once, scaffold anywhere, update with /plugin update hakuto."
draft: false
---

When we [killed our AI product](/blog/how-we-killed-our-new-ai-product) and leaned into Claude Code, the simplest possible distribution was a git repo: clone it, edit it, ship it. That worked. But every Hakuto site ended up carrying a full copy of every skill, the subagent, and the statusline script. Updating the skills meant re-cloning, merging, or — more honestly — not updating at all.

A few weeks ago Claude Code added first-class plugin support. Today we're shipping the next version of Hakuto on that.

## What changed

**Old flow:** `git clone https://github.com/teamniteo/hakuto.git my-site && cd my-site && bun install`. Your repo contained `.claude/skills/`, `.claude/agents/`, `.claude/statusline.sh`, a `CLAUDE.md`, and the Astro scaffold. Skills lived in the repo forever, frozen at clone time.

**New flow:**

```
/plugin marketplace add teamniteo/hakuto
/plugin install hakuto@hakuto
```

That's a one-time install, global to your machine. Then in any empty directory:

```
mkdir my-site && cd my-site
claude
/hakuto:init
```

`/hakuto:init` copies the Astro scaffold into your directory, initializes a git repo, and tells Claude to hand off to the `website-builder` skill. You get `bun install && bun run dev` running on `localhost:4321` in about two minutes.

The difference: skills, the subagent, and the scaffold command all live in the plugin, not in your repo. When we ship an improvement to `brand-designer` or `section-form`, you run `/plugin update hakuto` once and every Hakuto site on your machine picks it up. No cherry-picking commits, no merge conflicts in files you never touched.

## Why this matters

Most static-site starters ossify. You clone them, they solve your problem that week, and then they diverge from the upstream forever because the upstream inevitably touches `CLAUDE.md` or `src/layouts/Layout.astro` — files you've since customized. The rational move is to stop pulling updates.

Separating what's *yours* (site repo: content, components, design decisions) from what's *shared* (plugin: skills, workflows, the agent spec's core rules) means updates have somewhere to go. Your repo keeps the custom Layout.astro you wrote and the `## Project Plan` you appended to CLAUDE.md. The plugin keeps getting better in the background.

It also makes Hakuto composable with the rest of your Claude Code setup. Pair it with [niteo-claude](https://github.com/teamniteo/claude) for team-wide MCPs and permissions. Stack other plugins alongside it. Your configuration is now a list of plugins, not a forked repo.

## What's in the plugin

Same 10 skills the old template shipped, one new one we added during the migration:

- `website-builder` — the orchestrator. Drives the site-building conversation.
- `brand-designer` — color palettes from hex codes, logos, or theory.
- `professional-copywriter` — conversion-optimized copy.
- `fonts` — now targeting Astro 6's promoted top-level `fonts` API.
- `section-form`, `section-blog`, `section-docs` — feature modules.
- `plausible-analytics` — privacy-friendly analytics with a Cloudflare proxy.
- `testing-seo` — SEO validation without auto-fixes.
- `agent-browser` — browser automation for testing and screenshots.

Plus the `astro-file-editor` subagent and the `/hakuto:init` command. The statusline script ships in `assets/` if you want to wire it globally.

## Migrating existing Hakuto sites

If you already built a Hakuto site with the old clone flow, you can install the plugin today — but without cleanup, Claude loads **both** copies of every skill. That's confusing for the model and defeats the `/plugin update` benefit.

Cleanup is three `rm`s plus a commit:

```sh
cd /path/to/your-hakuto-site
rm -rf .claude/skills
rm -f  .claude/agents/astro-file-editor.md
rmdir  .claude/agents 2>/dev/null || true
rm -f  .claude/statusline.sh
git add -A && git commit -m "Switch to hakuto plugin"
```

Your `CLAUDE.md`, `.claude/settings.local.json`, `site-specification.md`, and everything under `src/` stay untouched. The [full migration guide](https://github.com/teamniteo/hakuto/blob/main/MIGRATING.md) covers edge cases like local skill edits you want to preserve.

## What took some figuring out

A few things surprised us building this — tucked here for anyone shipping their own plugin:

- **`${CLAUDE_PLUGIN_ROOT}` doesn't resolve in project-level `statusLine.command`.** That env var is only set inside plugin-authored skills, commands, and hooks. The scaffold's settings no longer tries to wire the statusline; set it globally in `~/.claude/settings.json` if you want it.
- **`repository` in `plugin.json` must be a string**, not a `{ type, url }` object. `/plugin install` rejects the object form with `Invalid input: expected string, received object`.
- **Radix compound components need a single React island in Astro.** Each shadcn `<Select.*>` child becomes its own island, React Context doesn't cross island boundaries, and you'll hit `SelectValue must be used within Select`. Wrap the whole compound in one `.tsx` and mark only the wrapper with `client:load`. The scaffold's `CLAUDE.md` now documents this explicitly.
- **The init command should be one atomic bash block, not multiple.** A guard block followed by a copy block trusts Claude to stop when the guard fails — sometimes it doesn't. `set -e` in a single pipeline enforces the refusal deterministically.

## Where to go next

- [Quick Start](/docs/setting-up/quick-start) — the new install + `/hakuto:init` flow end-to-end.
- [Update Hakuto](/docs/setting-up/update-hakuto) — how `/plugin update` works.
- [Start wizard](/start/prep) — the same thing with a progress bar.

Hakuto stays free, open source, bring-your-own-API-key, and deployed on Cloudflare's free tier. The only thing that changed is how you install it — and how you keep it up to date.
