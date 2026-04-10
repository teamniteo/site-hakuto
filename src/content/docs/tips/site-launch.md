---
title: "Site Launch"
description: "A pre-launch checklist for your Hakuto site. Covers content review, technical checks, performance validation, and what to do after going live."
category: "tips"
order: 4
---

# Site Launch

Before you point your domain at your new site, run through this checklist.

## Run the SEO audit

Hakuto includes a `testing-seo` Skill that checks your entire site for common issues. Open Claude Code and type:

```
Run an SEO test on my site.
```

Claude will scan every page and report on:

- Missing or duplicate title tags and meta descriptions
- Heading hierarchy issues (skipped levels, multiple H1s)
- Missing alt text on images
- Open Graph and Twitter card tags
- Canonical URLs
- Structured data (JSON-LD)
- Broken internal links

Fix anything it flags before going live.

## Manual checks

You can of course use Claude Code to do these.

### Content

- All placeholder text has been replaced with real copy
- Contact information is correct (email, phone, address)
- Legal pages are in place if needed (privacy policy, terms)

### Technical

- Custom domain is configured ([guide](/docs/setting-up/custom-domain))
- The `workers.dev` subdomain is disabled to avoid duplicate indexing
- Favicon is set and shows correctly in the browser tab
- Forms work end-to-end (submit a test message)
- `llms.txt` is updated with all current pages and descriptions

## After launch

- Submit your sitemap to [Google Search Console](https://search.google.com/search-console) at `yourdomain.com/sitemap-index.xml`
- Test your site with [PageSpeed Insights](https://pagespeed.web.dev/) from multiple locations

---

Your site is live. Ship often, iterate fast.
