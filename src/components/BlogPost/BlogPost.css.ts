import { style } from "@vanilla-extract/css";

import { fadeUp } from "../../styles/keyframes.css";
import { durations } from "../../styles/scales";
import { sprinkles } from "../../styles/sprinkles.css";

export const blogPostContainer = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
  }),
  {
    animationName: fadeUp,
    animationDuration: durations[3],
    animationTimingFunction: "ease-out",
  },
]);

export const blogPost = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    p: [24, 32],
    gap: [24, 32],
  }),
  {
    width: "100%",
    maxWidth: "80ch",
  },
]);

export const heading = style([
  sprinkles({
    fontWeight: "bold",
    fontSize: [24, 40],
    color: "textStrong",
  }),
  {
    lineHeight: 1.25,
  },
]);

export const postDetails = sprinkles({
  color: "textSubdued",
});

export const divider = style([
  sprinkles({
    display: "flex",
    bg: "border",
    borderRadius: "round",
    my: 16,
  }),
  { height: "1px" },
]);

export const postContentContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: 24,
  }),
]);
