// @ts-check
// biome-ignore assist/source/organizeImports: custom import order
import { defineConfig, fontProviders } from "astro/config";

import { defineConfig as viteConfig } from "vite";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";
import pagefind from "astro-pagefind";
import { agentsSummary } from "@nuasite/agent-summary";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://hakuto.dev",
  output: "static",
  integrations: [
      react(),
      sitemap(),
      agentsSummary(),
      pagefind(),
      favicons({
          input: "./src/assets/hakuto-icon.svg",
          name: "Hakuto",
          short_name: "Hakuto",
      }),
  ],

  vite: viteConfig({
      cacheDir: ".astro/vite",
      plugins: [tailwindcss()],
      resolve: {
          alias: {
              "@": "/src",
          },
      },
  }),

  build: {
      concurrency: 4,
  },

  server: { port: 4321, host: "0.0.0.0", allowedHosts: true },
  devToolbar: { enabled: true },
  adapter: process.env.NODE_ENV === "production" ? cloudflare({ imageService: "compile", prerenderEnvironment: "node" }) : undefined,

  fonts: [
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: ["400", "500", "600", "700"],
      styles: ["normal"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Instrument Sans",
      cssVariable: "--font-body",
      weights: ["400", "500", "600", "700"],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
});