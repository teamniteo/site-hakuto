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

## 2. Clone the Hakuto repo

Open Visual Studio Code (or your preferred editor) and clone the Hakuto template straight from GitHub.

1. Click **Source Control** in the left sidebar.
2. Click **Clone Repository**.
3. Paste the repo URL and pick a folder:

```
https://github.com/teamniteo/hakuto.git
```

VS Code will download the template and ask you to open the folder. Click yes. You now have a ready-to-go Astro project with all Hakuto Skills included.

## 3. Push to your GitHub

Make sure you have the GitHub MCP server or GitHub CLI installed in Claude Code. If you're not sure, just ask Claude to help you set it up. Then give it this prompt:

```
Create new repository 'my-website' and push.
```

Your code now lives on GitHub and is ready to deploy.

## 4. Deploy to Cloudflare

Cloudflare gives you a free, globally distributed host with PR previews baked in.

1. Go to [Cloudflare](https://dash.cloudflare.com), open **Compute → Workers & Pages** and click the **Create Application** button in the top right.
2. Select **Continue with GitHub**, then pick your organization and repository.
3. It will figure out the build and deploy commands on its own. Click **Deploy** without changing anything.
4. Wait for the site to be deployed. Once it's done, you'll get redirected to the Worker page. Click **Visit** to see your live site on a Cloudflare subdomain.
5. You can set up a custom domain under Settings. More on that in our [custom domain guide](/docs/setting-up/custom-domain), but you can skip it for now.

Your site is live. Time to make it yours.

## 5. Open it in Claude Code

Open the project in Claude Code and describe what you want to build. Here's an example prompt:

```
Build a website for an analytics SaaS.
Use a modern, bold style with sharp typography and vibrant accents.
Write convincing, benefit-driven copy that speaks to data teams.
Include a hero section, feature grid, pricing table, and a call-to-action.
```

Claude already knows how to work with your project. The Skills are included in the repo.

## 6. Preview and ship

You don't need to go live immediately to see changes online. Cloudflare will create a preview URL for every Pull Request. Tell Claude:

```
Open PR for these changes.
```

Go to the PR on GitHub and wait a few seconds for the Cloudflare comment to appear with the branch preview URL.

If you're happy with the changes, merge the PR. If not, keep working with Claude and then tell it to:

```
Commit changes.
```

That pushes the new commit and relaunches the preview URL with your latest changes.
