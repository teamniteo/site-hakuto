---
title: "Custom Domain"
description: "Connect your own domain to your Cloudflare Worker. Add the domain, update wrangler.toml, and hide the workers.dev URL from the public."
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

## 3. Hide the workers.dev URL from the public

Every Cloudflare Worker comes with a default `workers.dev` URL (like `your-site.your-team.workers.dev`). Now that your custom domain is live, you don't want Google indexing the same site under that URL too. Duplicate content hurts your SEO.

In your worker page on Cloudflare, go to **Settings → Domains & Routes** and click the `…` menu on the `workers.dev` row. Toggle **Cloudflare Access** on. The URL now sits behind a login screen, so the public and search engines can't reach it.

Leave the **Preview URLs** row alone. Cloudflare Access should stay **off** there so your per-PR preview links remain publicly shareable.

![Cloudflare Domains & Routes settings showing workers.dev with Cloudflare Access enabled and Preview URLs with Cloudflare Access disabled](/images/docs/cloudflare-domain-routes.jpg)

If Cloudflare ever prompts you to disable Preview URLs entirely, **don't**. You'll lose the per-PR previews.

---

That's all there is to it. Your site is now live on your custom domain.
