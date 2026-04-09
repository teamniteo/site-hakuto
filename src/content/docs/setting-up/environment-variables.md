---
title: "Environment Variables"
description: "How to manage API keys, secrets, and configuration values for your Hakuto site on Cloudflare Workers."
category: "setting-up"
order: 3
---

# Environment Variables

Learn how to manage API keys, secrets, and configuration values for your Hakuto site on Cloudflare Workers.

## Overview

Cloudflare Workers uses **secrets** and **environment variables** to store configuration. Secrets are encrypted and not visible in the dashboard after creation — use them for API keys and sensitive data.

## Setting secrets

Use the Wrangler CLI to set secrets for your Worker:

```bash
# Set a secret (prompts for value)
wrangler secret put API_KEY

# Set a secret from a pipe
echo "sk-..." | wrangler secret put API_KEY

# List all secrets
wrangler secret list
```

## Using variables in code

Access environment variables through the `env` parameter in your Worker:

```typescript
export default {
  async fetch(request: Request, env: Env) {
    const apiKey = env.API_KEY;
    // Use the variable...
  }
}
```

## Build-time variables

For variables needed at build time (like public API keys), add them to your `.env` file:

```bash
# .env (committed for public values)
PUBLIC_SITE_URL=https://mysite.com

# .env.local (never committed)
SECRET_API_KEY=sk-...
```

Access them in Astro with `import.meta.env.PUBLIC_SITE_URL`. Only variables prefixed with `PUBLIC_` are exposed to client-side code.

> **Tip:** Never commit `.env.local` to version control. It's already in `.gitignore` by default.
