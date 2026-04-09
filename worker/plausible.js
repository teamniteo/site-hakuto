/**
 * Plausible Analytics Proxy Handler
 * Routes: /~/pla/js/script.js and /~/pla/api/event
 * Based on: https://plausible.io/docs/proxy/guides/cloudflare
 */

const ProxyScript = 'https://plausible.io/js/pa-I4uCXblHWXNiqDbBBhuF_.js';

export async function handlePlausible(request, ctx) {
  const pathname = new URL(request.url).pathname;

  if (pathname.endsWith('/js/script.js')) {
    return getScript(request, ctx);
  } else if (pathname.endsWith('/api/event')) {
    return postData(request);
  }
  return new Response(null, { status: 404 });
}

async function getScript(request, ctx) {
  let response = await caches.default.match(request);
  if (!response) {
    response = await fetch(ProxyScript);
    ctx.waitUntil(caches.default.put(request, response.clone()));
  }
  return response;
}

async function postData(request) {
  const newRequest = new Request(request);
  newRequest.headers.delete('cookie');
  return await fetch('https://plausible.io/api/event', newRequest);
}
