---
title: "Skills Customization"
description: "How Hakuto Skills work, what each built-in Skill does, and how to create your own custom Skills to extend Claude Code for your project."
category: "customization"
order: 1
---

# Skills

Skills are pre-built AI workflows that Claude Code uses to build specific parts of your site. They encode best practices so you get production-quality output every time.

## How Skills work

When you ask Claude Code to perform a task, like "add a blog" or "run an SEO audit", it automatically invokes the matching Skill. Skills provide specialized prompts, templates, and validation logic that guide the AI through each step.

You can also invoke Skills directly using slash commands in Claude Code, like `/section-blog` or `/testing-seo`.

## Available Skills

| Skill | Description |
|-------|-------------|
| `website-builder` | Core workflow orchestrator for building pages. Provides design patterns, component structure, and styling guidelines. |
| `brand-designer` | Generate custom color palettes using color theory. Provide hex codes or upload a logo for extraction. |
| `professional-copywriter` | Conversion-optimized content with benefit-driven messaging. Preserves user-provided copy and fills gaps. |
| `testing-seo` | SEO validation for pages or entire sites. Reports issues and successes without applying fixes. |
| `section-form` | Add forms to Astro pages using React with Zod validation. Contact forms, newsletter signups, and more. |
| `section-blog` | Multi-page blog system with listing pages, post templates, author archives, and category pages. |
| `section-docs` | Technical documentation section with sidebar navigation, search, and nested category pages. |
| `plausible-analytics` | Privacy-friendly analytics with Cloudflare Workers proxy for ad-blocker bypass. |

## Building custom Skills

Skills are stored in the `.claude/skills/` directory as markdown files. Each Skill contains:

- **Trigger conditions**: when Claude Code should activate the Skill
- **Step-by-step workflow**: the process the AI follows
- **Technical constraints**: rules and patterns to follow
- **Quality checks**: validation before completion

Check the [repository](https://github.com/teamniteo/hakuto) for examples of how built-in Skills are structured.
