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

## Option B: Get inspired by existing docs

If you have a docs site you love, you can point Claude at it:

```
Create a docs section for my site. Get inspired by the layout
and structure of https://docs.lovable.dev/introduction/welcome
```

Claude will study the reference and adapt the patterns to your site's design system.

## Option C: Build it manually

### 1. Define the collection

Add a `docs` collection to `src/content.config.ts`:

```typescript
const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number().optional().default(99),
  }),
});
```

### 2. Organize your content

Create Markdown files in `src/content/docs/` using directories for categories:

```
src/content/docs/
├── getting-started/
│   ├── welcome.md
│   └── quick-start.md
└── guides/
    └── first-guide.md
```

Each file needs frontmatter with `title`, `description`, `category`, and `order`.

### 3. Create the docs layout and pages

You'll need:
- A docs layout with a sidebar component
- A dynamic `[...slug].astro` page that renders each doc
- An index page at `/docs` that lists all docs by category

---

The Skill is the fastest path. Manual setup works best when you need a non-standard layout or want to integrate with an existing design system.
