---
title: "Bye-bye WordPress - a move done in less than an hour with Claude Code"
slug: "bye-bye-wordpress"
date: "2026-04-21"
author: "Dejan Murko"
authorEmail: "dm@niteo.co"
authorBio: "Dejan is the co-founder of Niteo, a small SaaS studio that created Hakuto."
category: "Updates"
description: "How we migrated 64 WordPress blog posts to Astro in under an hour using Claude Code, going from 147 media files down to 11."
draft: false
---

WordPress is... not great. All the same, it does run a large section on the internet and a lot of people use it, including us. At least for now.

But, it's been horrible for a lot of years (decades?). Plugins, updates, hacks, etc.

One of the main things we wanted to do with the move to Hakuto for our websites is to get rid of WordPress. And we just did it for the first website.

I like the formatting we use on Hakuto blog for the markdown (it includes Gravatar for the easy profile pics, since everyone already has that) so I gave the destination blog Claude the template.

And for the source blog Claude, I gave it the same template and uploaded the WXR XML exports plus the media files in the working folder.

The rest was easy. Here's Claude's report:

> **WordPress to Astro Blog Migration**
>
> We migrated 64 blog posts from a WordPress WXR export to clean Astro-compatible markdown.
>
> What we started with:
> - WordPress WXR XML export (posts + media metadata)
> - 147 media files (originals, size variants, multiple formats)
> - One example Astro markdown file as the target template
>
> What we built:
> - A Python conversion script (convert.py) that parses WXR XML, maps authors, converts HTML content to markdown (stripping WordPress block comments, CTA banners, and copy-paste artifacts), resolves image URLs to local files, and generates frontmatter
> - A rename script (rename_images.py) to standardize image filenames to {post-slug}-{description}.{ext}
>
> Key decisions along the way:
> - Author mapping was done by slug override, not WXR metadata (which was unreliable — blogadmin was used for most posts instead of the actual authors)
> - Newsletter CTA banner images (19 occurrences linking to a subscribe modal) were stripped from content
> - Only original image uploads were kept — WordPress size variants (-1024x208) were mapped back to originals
> - One ChatGPT UI HTML blob that was accidentally pasted into a post got cleaned up automatically
>
> Final output:
> - 64 markdown files with consistent frontmatter (title, slug, date, author, authorEmail, authorBio, category, description, draft)
> - 11 content images, down from 147 source files
> - Zero warnings, zero leftover HTML

When that was done, I just gave my other Claude access to the new markdown posts and told it to create new posts.