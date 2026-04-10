---
title: "Custom Domain"
description: "Connect your own domain to your Cloudflare Worker in three steps. Add the domain, merge the config PR, and disable the workers.dev URL."
category: "setting-up"
order: 2
---

# Custom Domain on Cloudflare

How to connect your own domain (like `yourname.com`) to your Cloudflare Worker. Takes about a minute.

## 1. Add your domain

Go to your Worker page on [Cloudflare](https://dash.cloudflare.com) and click **Settings**. Under **Domains & Routes**, click **Add → Custom Domain** and enter the domain you want to use.

## 2. Merge the config PR

Cloudflare will detect that your Wrangler config needs updating and open a Pull Request on GitHub for you. Merge it.

## 3. Disable the workers.dev domain

We recommend disabling the `workers.dev` domain so you don't run into issues with that site getting indexed instead of your main domain. When Cloudflare prompts you, **don't disable preview URLs** because you'll want those for PR previews.

---

That's all there is to it. Your site is now live on your custom domain.
