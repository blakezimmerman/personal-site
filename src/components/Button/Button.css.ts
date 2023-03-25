import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const button = style([
  sprinkles({
    bg: "textStrong",
    color: "surface",
    borderRadius: 2,
    px: 12,
    py: 8,
  }),
]);

export const linkButton = style([
  button,
  {
    textDecoration: "none",
  },
]);
