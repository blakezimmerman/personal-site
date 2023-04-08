import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

import tokyoNight from "./src/styles/tokyo-night-color-theme.json";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  markdown: {
    shikiConfig: {
      theme: tokyoNight,
    },
  },
});
