---
title: "Contact Form"
description: "How to add a working contact form to your Astro site using a Cloudflare Worker to handle submissions."
category: "setting-up"
order: 1
---

# Contact Form with Cloudflare Workers

Add a working contact form to your Astro site using a Cloudflare Worker to handle submissions. No backend required.

## 1. Create the Worker

Inside your Hakuto project, add a Worker at `worker/contact.ts`:

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }
    const { name, email, message } = await request.json();
    // Forward to your email provider (Resend, Postmark, etc.)
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@yourdomain.com",
        to: "you@yourdomain.com",
        subject: `New contact from ${name}`,
        text: `From: ${email}\n\n${message}`,
      }),
    });
    return Response.json({ ok: true });
  },
};
```

## 2. Add the form in Astro

Create `src/pages/contact.astro` with a simple form that posts to your Worker:

```html
<form id="contact-form" class="space-y-4">
  <input name="name" required placeholder="Name" />
  <input name="email" type="email" required placeholder="Email" />
  <textarea name="message" required rows="5"></textarea>
  <button type="submit">Send</button>
</form>

<script>
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Message sent.");
  });
</script>
```

## 3. Wire up the route

In `wrangler.toml`, add a route that forwards `/api/contact` to the Worker. Set `RESEND_API_KEY` as a secret with `wrangler secret put RESEND_API_KEY`.

---

Deploy. You now have a working contact form, no backend to maintain.
