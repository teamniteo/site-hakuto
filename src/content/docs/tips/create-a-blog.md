---
title: "Create a Blog"
description: "Add a blog to your Hakuto site with a listing page, post templates, and category pages using the built-in Skill."
category: "tips"
order: 1
---

# Create a Blog

Hakuto includes a `section-blog` Skill that builds a complete blog system for you.

Open Claude Code in your project and type:

```
Add a blog to my site.
```

Claude will invoke the `section-blog` Skill automatically. It creates:

- A blog listing page at `/blog`
- Individual post pages using a content collection

You can customize the prompt to be more specific:

```
Add a blog. Use a two-column card layout for the listing page.
Keep the design minimal — no author photos or category badges.
```

## Adding and editing posts

Blog posts live as Markdown files in the `src/content/blog/` folder. To add a new post, create a `.md` file there with frontmatter:

```markdown
---
title: "Hello World"
description: "Our first blog post."
date: 2025-01-15
---

Write your post content here using standard Markdown.
```

To edit an existing post, open its `.md` file and change the content or frontmatter. Posts with `draft: true` in the frontmatter are excluded from the published site.
