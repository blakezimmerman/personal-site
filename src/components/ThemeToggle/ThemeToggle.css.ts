import { style } from "@vanilla-extract/css";

import { durations } from "../../styles/scales";
import { sprinkles } from "../../styles/sprinkles.css";

export const themeToggle = style([
  sprinkles({ size: [20, 24] }),
  { position: "relative" },
]);

const themeIcon = style([
  sprinkles({
    size: [20, 24],
  }),
  {
    position: "absolute",
    inset: 0,
    transition: `opacity ${durations[2]} ease, transform ${durations[2]} ease`,
  },
]);

export const sunIcon = style([
  themeIcon,
  {
    selectors: {
      "button[data-color-scheme='dark'] > &": {
        opacity: 0,
        transform: "rotate(-90deg)",
      },
    },
  },
]);

export const moonIcon = style([
  themeIcon,
  {
    selectors: {
      "button[data-color-scheme='light'] > &": {
        opacity: 0,
        transform: "rotate(90deg)",
      },
    },
  },
]);
