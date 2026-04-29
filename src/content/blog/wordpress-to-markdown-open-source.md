---
title: "We open-sourced our WordPress-to-Markdown script"
slug: "wordpress-to-markdown-open-source"
date: "2026-04-29"
author: "Dejan Murko"
authorEmail: "dm@niteo.co"
authorBio: "Dejan is the co-founder of Niteo, a small SaaS studio that created Hakuto."
category: "Updates"
description: "The Python script Claude built to move our blogs off WordPress is now its own repo. Drop in a WXR export and a media folder, get clean Astro-ready markdown."
draft: false
---

A week ago I [wrote about moving our first site off WordPress in under an hour](/blog/bye-bye-wordpress). The script Claude wrote for that migration was sitting in a project folder, and I kept reusing it for our other sites.

So we cleaned it up and published it as its own repo: [teamniteo/wordpress-to-markdown](https://github.com/teamniteo/wordpress-to-markdown).

The flow is the same as last time, just packaged so you don't have to recreate it. You export your WordPress content and your media library, drop both into a `source/` folder, open Claude Code in the repo, and tell it `New conversion - my-site`. Claude reads the project's CLAUDE.md, asks you a few things (your old domain, who each author actually is — WordPress author metadata is famously unreliable), runs the conversion, and writes Astro-ready markdown to `projects/my-site/output/`.

It strips the usual WordPress noise — block comments, copy-paste artifacts, CTA banners — and only keeps the images that are actually referenced, with readable filenames. Drafts come through with `draft: true` so you can review before shipping.

The output frontmatter is the same shape we use on the Hakuto blog, so if you're moving to a Hakuto site, the posts drop straight into `src/content/blog/`. If you're moving somewhere else, the markdown is plain enough that adapting it is a five-minute job.

If you've been meaning to ditch WordPress and stop paying for plugins, hosting, and the constant updates — this is the best way.

Repo: [github.com/teamniteo/wordpress-to-markdown](https://github.com/teamniteo/wordpress-to-markdown)
