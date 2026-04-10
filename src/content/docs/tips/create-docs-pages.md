---
title: "Create Docs Pages"
description: "Add a documentation section to your Hakuto site with sidebar navigation, content collections, and organized category pages."
category: "tips"
order: 2
---

# Create Docs Pages

Hakuto includes a `section-docs` Skill that builds a full documentation section. You can use the Skill or build it from scratch.

## Option A: Use the Skill

Open Claude Code in your project and type:

```
Add a docs section to my site.
```

Claude will invoke the `section-docs` Skill, which creates:

- A `/docs` home page with search (Pagefind)
- Sidebar navigation with nested categories
- Individual doc pages rendered from Markdown
- Previous/next navigation between pages
- Mobile-friendly collapsible sidebar

Docs pages are Markdown files in the `src/content/docs/` folder, organized by category. You can add or edit them directly.

## Option B: Get inspired by existing docs

If you have a docs site you love, you can point Claude at it:

```
Create a docs section for my site. Get inspired by the layout
and structure of https://docs.lovable.dev/introduction/welcome
```

Claude will study the reference and adapt the patterns to your site's design system.
