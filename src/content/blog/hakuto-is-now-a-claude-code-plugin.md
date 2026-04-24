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

I’ve been using Hakuto for a couple of weeks now for our own sites and it’s been pretty amazing. Where it got annoying is when I found a Hakuto-level bug or improvement and had to copy it over to other existing sites. Which meant continually sending Claude to other repos to fix the same things.

We planned to move Hakuto to be a plugin but never managed to do it because our devs are so busy with other stuff. So, yesterday I had a couple of hours and decided to have Claude try the conversion. And it went very smoothly! I also helped it fixed the initial bugs, and we packaged devenv (a dev environment :) with it so it’ll be easier for non-devs to run it (but if you are one, you can easily just remove it).

BTW, writing all of this sounds insane, because I am not a developer (we do have devs in the company so all PR reviews go through them).

So, now the process is much easier: add our GitHub repo as marketplace, install plugin and then run `hakuto:init` to create the site scaffold in the current folder.

I’ll be showing this to a couple of friends and we’ll probably add some more improvements soon. I also expect a couple of improvements to Skills and now that it’s a plugin, it’ll be really easy to update them for everyone using Hakuto.

## Getting started

Want to launch your own site? The [Start wizard](/start/prep) walks you through the whole thing in about five minutes.
