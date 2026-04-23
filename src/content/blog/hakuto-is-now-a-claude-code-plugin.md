---
title: "Hakuto is now a Claude Code plugin"
slug: "hakuto-is-now-a-claude-code-plugin"
date: "2026-04-23"
author: "Dejan Murko"
authorEmail: "dm@niteo.co"
authorBio: "Dejan is the co-founder of Niteo, a small SaaS studio that created Hakuto."
category: "Updates"
description: "Hakuto moved from a git-clone template to a Claude Code plugin. Install once, scaffold anywhere, update in place."
draft: false
---

Hakuto used to be a repo you cloned. Every site ended up carrying a full copy of every skill, the subagent, and the statusline, frozen at the moment you cloned. When we improved a skill, your site didn't.

Claude Code has had first-class plugin support for months, and this week we moved Hakuto onto it.

## How to install

Add our GitHub repo as marketplace:

```
/plugin marketplace add teamniteo/hakuto
```

Then install plugin:

```
/plugin install hakuto@hakuto
```

Then in any empty folder, run `/hakuto:init` and you have a production-ready Astro site. Later, `/plugin update hakuto` pulls new skills and workflow improvements into every Hakuto site on your machine. No re-clone, no merge conflicts in files you customized.

Your site repo stays yours: content, components, design decisions. The plugin is where the shared stuff lives: skills, the subagent, the scaffolder, the agent spec.

## Getting started

New to Hakuto? The [Start wizard](/start/prep) walks you through the whole thing in about five minutes.

That's the whole update. Back to shipping.
