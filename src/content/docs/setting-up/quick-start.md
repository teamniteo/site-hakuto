---
title: "Quick Start"
description: "Get your first Hakuto site up and running in about 5 minutes. All you need is Claude Code, GitHub, Cloudflare, and a code editor."
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
- A code editor. If you don't have one, [Visual Studio Code](https://code.visualstudio.com/) (free) is a solid choice.

## 2. Open VS Code and launch Claude

In **Visual Studio Code** (or your editor of choice), open a new window (`File → New Window`) and open or create an empty folder for your site. Then open the integrated terminal and launch Claude Code:

```sh
claude
```

## 3. Install the plugin and scaffold a new site

Hakuto ships as a [Claude Code plugin](https://code.claude.com/docs/en/plugins). Inside Claude, run each of these slash commands. The first two install Hakuto (you only do this once per machine); the third scaffolds your site:

```
/plugin marketplace add teamniteo/hakuto
```

```
/plugin install hakuto@hakuto
```

```
/hakuto:init
```

This drops a ready-to-go Astro project into the folder and initializes a git repo. You'll see the files appear as `/hakuto:init` copies the scaffold: `package.json`, `src/`, `CLAUDE.md`, `wrangler.toml`, and the rest.

## 4. Start the dev server

The scaffold ships with [devenv](https://devenv.sh) pre-configured. bun is declared, dependencies install automatically on first shell entry, and `devenv up` starts the Astro dev server. In a second terminal (leave Claude running in the first):

```sh
devenv up
```

**Don't want devenv?** Install [bun](https://bun.sh), then run:

```sh
bun install
```

```sh
bun run dev
```

Open [localhost:4321](http://localhost:4321). The scaffold is intentionally blank. Next step, you tell Claude what to build into it.

## 5. Push to your GitHub

In Claude, ask it to create and push the repository. You'll need the GitHub MCP server or GitHub CLI installed. If you're not sure, just ask Claude to help you set it up:

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
