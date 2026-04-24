---
title: "Custom Domain"
description: "Connect your own domain to your Cloudflare Worker. Add the domain, update wrangler.toml, and disable the workers.dev URL."
category: "setting-up"
order: 1
---

# Custom Domain on Cloudflare

How to connect your own domain (like `yourname.com`) to your Cloudflare Worker. Takes about a minute.

## 1. Add your domain

Go to your Worker page on [Cloudflare](https://dash.cloudflare.com) and click **Settings**. Under **Domains & Routes**, click **Add → Custom Domain** and enter the domain you want to use.

## 2. Update `wrangler.toml`

Cloudflare *sometimes* opens a Pull Request on GitHub with the Wrangler config update. If it does, merge it.

If it doesn't, add the route yourself. Open `wrangler.toml` and add (or uncomment) a `[[routes]]` entry:

```toml
[[routes]]
pattern = "yourname.com"
custom_domain = true
```

Replace `yourname.com` with the domain you added in step 1. Commit, push, and Cloudflare will pick up the route on the next deploy.

Tell Claude if you'd rather have it handle the edit:

```
Add yourname.com as a custom domain in wrangler.toml.
```

## 3. Disable the workers.dev domain

We recommend disabling the `workers.dev` domain so you don't run into issues with that site getting indexed instead of your main domain. When Cloudflare prompts you, **don't disable preview URLs** because you'll want those for PR previews.

---

That's all there is to it. Your site is now live on your custom domain.
