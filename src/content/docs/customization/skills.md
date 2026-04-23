---
title: "Skills Customization"
description: "How Hakuto Skills work, what each built-in Skill does, and how to create your own custom Skills to extend Claude Code for your project."
category: "customization"
order: 1
---

# Skills

Skills are pre-built AI workflows that Claude Code uses to build specific parts of your site. They encode best practices so you get production-quality output every time. Hakuto ships them as part of the [Claude Code plugin](https://code.claude.com/docs/en/plugins) — install the plugin once and every skill is available in every site you scaffold.

## How Skills work

When you ask Claude Code to perform a task, like "add a blog" or "run an SEO audit", it auto-invokes the matching Skill by matching keywords against the skill's description. Skills provide specialized prompts, templates, and validation logic that guide the AI through each step.

You can also list them explicitly by name in a prompt ("use the brand-designer skill") or browse the ones Claude has available with the `/` menu.

## Available Skills

| Skill | Description |
|-------|-------------|
| `website-builder` | Core workflow orchestrator for building pages. Provides design patterns, component structure, and styling guidelines. |
| `brand-designer` | Generate custom color palettes using color theory. Provide hex codes or upload a logo for extraction. |
| `professional-copywriter` | Conversion-optimized content with benefit-driven messaging. Preserves user-provided copy and fills gaps. |
| `fonts` | Configure web fonts via Astro's Fonts API (top-level `fonts` in Astro 6+). Google, Fontsource, Bunny, Fontshare, Adobe, and local fonts. |
| `testing-seo` | SEO validation for pages or entire sites. Reports issues and successes without applying fixes. |
| `section-form` | Add forms to Astro pages using React with Zod validation. Contact forms, newsletter signups, and more. |
| `section-blog` | Multi-page blog system with listing pages, post templates, author archives, and category pages. |
| `section-docs` | Technical documentation section with sidebar navigation, search, and nested category pages. |
| `plausible-analytics` | Privacy-friendly analytics with Cloudflare Workers proxy for ad-blocker bypass. |
| `agent-browser` | Browser automation for testing, screenshots, and data extraction directly from Claude Code. |

## Building custom Skills

To build a custom skill for your project, add it to `.claude/skills/<your-skill-name>/SKILL.md` in your site repo. Project-level skills override plugin-provided skills with the same name, and Claude loads both.

Each Skill contains:

- **Trigger conditions** (`description` frontmatter): when Claude Code should activate the Skill
- **Step-by-step workflow**: the process the AI follows
- **Technical constraints**: rules and patterns to follow
- **Quality checks**: validation before completion

To contribute a skill back to the Hakuto plugin, open a PR against the [hakuto repository](https://github.com/teamniteo/hakuto) — plugin skills live in `skills/` at the repo root.
