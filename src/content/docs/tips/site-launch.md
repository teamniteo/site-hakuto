---
title: "Site Launch"
description: "A pre-launch checklist for your Hakuto site. Run the prelaunch-checklist skill, then handle the manual Cloudflare steps the skill can't automate."
category: "tips"
order: 4
---

# Site Launch

Before you point your domain at your new site, run the prelaunch checklist. It's a single Claude Code command that walks the repo and surfaces anything that needs attention.

## Run the prelaunch checklist

Open Claude Code in your site repo and type:

```
Run prelaunch checklist.
```

The `prelaunch-checklist` skill scans your project and reports what's ready and what's not. It's report-only — it won't modify files.

### What it checks

**Critical issues (block launch):**

- `SITE_NAME` and `SITE_DESCRIPTION` in `Layout.astro` aren't still the Hakuto scaffold defaults
- No placeholder text anywhere in the source (`Lorem ipsum`, `TODO`, `your-email@`, `hello@example.com`, `+1 (555)`, etc.)
- Any forms on the site submit to a real endpoint with a real recipient — not `action="#"` or a missing worker handler

**Warnings (review before launch):**

- `wrangler.toml` `name` and `package.json` `name` aren't still `hakuto-site`
- `compatibility_date` in `wrangler.toml` isn't more than 12 months old
- Custom domain is configured (either via `[[routes]]` in `wrangler.toml` or in the Cloudflare dashboard)
- Legal pages exist where appropriate — `privacy.astro`, `terms.astro`, `cookies.astro` — and are linked from the Footer
- 404 page has been customized away from the scaffold default

**Confirmation gates** — the skill asks you directly:

- Have you run the `testing-seo` skill?
- Has the source been reviewed (via `code-review` skill, external reviewer, or PR review)?

If you haven't, run those skills first, then come back.

## Manual steps

Some things can't be checked from the repo. The skill reminds you, but you do these in the Cloudflare dashboard:

- **Toggle Cloudflare Access on for the `workers.dev` URL** once your custom domain is live, so Google doesn't index your site under two URLs. In Workers & Pages → your worker → Settings → Domains & Routes, click `…` on the `workers.dev` row and flip Cloudflare Access on. Leave it off on the Preview URLs row. See the [custom domain guide](/docs/setting-up/custom-domain) for the screenshot.
- **Confirm your custom domain** is configured and DNS has propagated. See the [custom domain guide](/docs/setting-up/custom-domain).
- **Verify analytics** fires on the live domain if you've installed Plausible or similar.
- **Set environment variables / secrets** in Cloudflare for forms or analytics that need them.

## After launch

- Submit your sitemap to [Google Search Console](https://search.google.com/search-console) at `yourdomain.com/sitemap-index.xml`.
- Run [PageSpeed Insights](https://pagespeed.web.dev/) from a couple of locations to spot-check performance.

---

Your site is live. Ship often, iterate fast.
