---
title: "Build Failed"
description: "How to diagnose and fix a failed Cloudflare build for your Hakuto site. Covers finding error logs, sharing them with Claude, and re-running builds."
category: "tips"
order: 5
---

# Build Failed

If your site build fails on Cloudflare, here's how to find out what went wrong and fix it.

## Find the Error Log

1. Open the [Cloudflare dashboard](https://dash.cloudflare.com).
2. Go to **Compute (Workers)** → **Workers & Pages**.
3. Click on your site's worker to open it.
4. The deployment log will show you the error that caused the build to fail.

## Fix the Error

If the log contains a specific error message, copy it and give it to Claude. Describe what happened and paste the error. Claude will help you resolve it. Once fixed, commit your changes and the build will re-trigger automatically.

## Re-run the Build

Sometimes a build failure is temporary, like a network hiccup or a transient dependency issue. In that case, simply re-running the build from the Cloudflare dashboard can fix it without any code changes.
