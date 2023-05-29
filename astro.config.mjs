import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

import { remarkReadingTime } from "./markdownPlugins/remarkReadingTime.mjs";
import tokyoNight from "./markdownPlugins/tokyo-night-color-theme.json";

// https://astro.build/config
export default defineConfig({
  site: "https://blakez.dev",
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    prefetch(),
    sitemap(),
  ],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: tokyoNight,
    },
  },
});
