---
title: "Update Hakuto"
description: "How updates work now that Hakuto is a Claude Code plugin. Covers /plugin update, skill refresh, scaffold drift, and the migration path from older git-clone sites."
category: "setting-up"
order: 4
---

# Update Hakuto

Since Hakuto became a Claude Code plugin, updating skills and commands no longer touches your site repo. Your project source stays yours; the plugin evolves separately.

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

For major scaffold improvements, we'll ship release notes with a per-file diff so you can cherry-pick what you want. Most sites don't need to chase scaffold updates — once built, they're stable.

## Update dependencies in your site

Standard bun workflow:

```sh
bun update               # update everything within semver
bun update astro         # update a specific package
```

Before committing, run:

```sh
bun run check            # astro type-check
bun run build            # verify the build still passes
```

## Migrating from a pre-plugin Hakuto site

If you built your site before the plugin existed, it has a vendored `.claude/skills/`, `.claude/agents/`, and `.claude/statusline.sh`. Installing the plugin alongside those duplicates every skill.

Run this cleanup once per site:

```sh
rm -rf .claude/skills
rm -f  .claude/agents/astro-file-editor.md
rmdir  .claude/agents 2>/dev/null || true
rm -f  .claude/statusline.sh
git add -A && git commit -m "Switch to hakuto plugin"
```

Keep `CLAUDE.md`, `.claude/settings.local.json`, `site-specification.md`, and the rest of your source — those are yours.

The [full migration guide](https://github.com/teamniteo/hakuto/blob/main/MIGRATING.md) covers edge cases (custom skills you added, statusline wiring, diffing against the latest spec).

## Pinning a version

If you want to lock a team to a specific plugin version, install a tag:

```
/plugin install hakuto@hakuto@0.1.0
```

Drop the version suffix to track the rolling latest.
