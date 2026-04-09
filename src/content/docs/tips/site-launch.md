---
title: "Site Launch"
description: "A pre-launch checklist to make sure your Hakuto site is ready to go live."
category: "tips"
order: 5
---

# Site Launch

Before you point your domain at your new site, run through this checklist.

## Run the SEO audit

Hakuto includes a `testing-seo` Skill that checks your entire site for common issues. Open Claude Code and type:

```
Run an SEO check on my site.
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

### Content

- All placeholder text has been replaced with real copy
- Contact information is correct (email, phone, address)
- Legal pages are in place if needed (privacy policy, terms)

### Technical

- Custom domain is configured ([guide](/docs/setting-up/custom-domain))
- The `workers.dev` subdomain is disabled to avoid duplicate indexing
- Favicon is set and shows correctly in the browser tab
- Site loads over HTTPS (Cloudflare handles this by default)
- Forms work end-to-end — submit a test message

### Performance

- Images are optimized (use `<Picture>` for local images)
- No large unused JavaScript bundles
- Lighthouse score is 90+ across all categories

## After launch

- Set up [Plausible Analytics](/docs/customization/skills) for privacy-friendly traffic tracking. Ask Claude: `Add Plausible analytics to my site.`
- Submit your sitemap to [Google Search Console](https://search.google.com/search-console) at `yourdomain.com/sitemap-index.xml`
- Test your site with [PageSpeed Insights](https://pagespeed.web.dev/) from multiple locations

---

Your site is live. Ship often, iterate fast.
