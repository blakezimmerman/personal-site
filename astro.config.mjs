import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

import tokyoNight from "./src/styles/tokyo-night-color-theme.json";

// https://astro.build/config
export default defineConfig({
  site: "https://blakez.dev",
  integrations: [sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  markdown: {
    shikiConfig: {
      theme: tokyoNight,
    },
  },
});
