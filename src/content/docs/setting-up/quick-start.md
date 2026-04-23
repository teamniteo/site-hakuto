---
title: "Quick Start"
description: "Get your first Hakuto site up and running in about 5 minutes. All you need is Claude Code, GitHub, Cloudflare, and Bun."
category: "setting-up"
order: 0
---

# Quick Start

Prefer a step-by-step walkthrough? Try the [interactive Start wizard](/start/prep).

## 1. Prep

Before you start, make sure you have:

- A [Claude Code](https://claude.ai/code) account, the AI coding agent that builds your site.
- A [GitHub](https://github.com/signup) account (free) to host your site's code.
- A [Cloudflare](https://dash.cloudflare.com/sign-up) account (free) to deploy and host your site.
- [Bun](https://bun.sh) installed locally. Hakuto uses Bun exclusively — not npm.

## 2. Install the Hakuto plugin

Hakuto ships as a [Claude Code plugin](https://code.claude.com/docs/en/plugins). Install it once globally and you can scaffold new sites anywhere afterwards.

Open Claude Code and run:

```
/plugin marketplace add teamniteo/hakuto
/plugin install hakuto@hakuto
```

`/hakuto:init` now appears in your slash-command completion.

## 3. Scaffold a new site

In a terminal, create an empty directory and launch Claude inside it:

```sh
mkdir my-site && cd my-site
claude
```

Then, inside Claude, run:

```
/hakuto:init
```

This drops a ready-to-go Astro project in your directory and initializes a git repo. You'll see the files appear as `/hakuto:init` copies the scaffold — `package.json`, `src/`, `CLAUDE.md`, `wrangler.toml`, and the rest.

## 4. Start the dev server

In a second terminal (leave Claude running in the first):

```sh
bun install
bun run dev
```

Open [localhost:4321](http://localhost:4321). The scaffold is intentionally blank — next step, you tell Claude what to build into it.

## 5. Push to your GitHub

In Claude, ask it to create and push the repository. You'll need the GitHub MCP server or GitHub CLI installed — if you're not sure, just ask Claude to help you set it up:

```
Create new repository 'my-website' and push.
```

Your code now lives on GitHub and is ready to deploy.

## 6. Deploy to Cloudflare

Cloudflare gives you a free, globally distributed host with PR previews baked in.

1. Go to [Cloudflare](https://dash.cloudflare.com), open **Compute → Workers & Pages** and click the **Create Application** button in the top right.
2. Select **Continue with GitHub**, then pick your organization and repository.
3. It will figure out the build and deploy commands on its own. Click **Deploy** without changing anything.
4. Wait for the site to be deployed. Once it's done, you'll get redirected to the Worker page. Click **Visit** to see your live site on a Cloudflare subdomain.
5. You can set up a custom domain under Settings. More on that in our [custom domain guide](/docs/setting-up/custom-domain), but you can skip it for now.

Your site is live. Time to iterate.

## 7. Tell Claude what to build

Claude is already in your new project. Describe what you want. Example:

```
Build a website for an analytics SaaS.
Use a modern, bold style with sharp typography and vibrant accents.
Write convincing, benefit-driven copy that speaks to data teams.
Include a hero section, feature grid, pricing table, and a call-to-action.
```

The `website-builder` skill auto-activates and drives the workflow: site type, design language, copy, brand colors, components. Watch it happen live at localhost:4321.

## 8. Preview and ship

Cloudflare creates a preview URL for every Pull Request. Tell Claude:

```
Open PR for these changes.
```

Go to the PR on GitHub and wait a few seconds for the Cloudflare comment to appear with the preview URL. If you're happy with the changes, merge the PR. If not, keep iterating with Claude and then tell it:

```
Commit changes.
```

That pushes a new commit and refreshes the preview.

## Updating Hakuto later

Skills and commands update in place:

```
/plugin update hakuto
```

No re-clone, no merge conflicts. See [Update Hakuto](/docs/setting-up/update-hakuto) for details.
