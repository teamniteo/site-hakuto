---
title: "Create a Blog"
description: "Add a full blog to your Hakuto site — with a listing page, post templates, and category pages."
category: "tips"
order: 1
---

# Create a Blog

Hakuto includes a `section-blog` Skill that builds a complete blog system for you. You can use the Skill or set it up manually.

## Option A: Use the Skill

Open Claude Code in your project and type:

```
Add a blog to my site.
```

Claude will invoke the `section-blog` Skill automatically. It creates:

- A blog listing page at `/blog`
- Individual post pages using a content collection
- Author archives and category pages
- RSS feed support

You can customize the prompt to be more specific:

```
Add a blog. Use a two-column card layout for the listing page.
Keep the design minimal — no author photos or category badges.
```

## Option B: Build it manually

If you prefer more control, you can set up the blog yourself using Astro's [content collections](https://docs.astro.build/en/guides/content-collections/).

### 1. Define the collection

Create `src/content.config.ts` (or add to your existing one):

```typescript
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});
```

### 2. Add your first post

Create `src/content/blog/hello-world.md`:

```markdown
---
title: "Hello World"
description: "Our first blog post."
date: 2025-01-15
---

Welcome to the blog.
```

### 3. Create the listing page

Create `src/pages/blog/index.astro` that queries the collection and renders a list of posts with links to `/blog/[slug]`.

### 4. Create the post page

Create `src/pages/blog/[...slug].astro` with `getStaticPaths()` that renders each post's content inside your layout.

---

The Skill handles all of this for you and adds extras like pagination and category filtering. Manual setup gives you full control over the markup.
