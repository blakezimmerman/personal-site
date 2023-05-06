import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const blogPostContainer = sprinkles({
  display: "flex",
  justifyContent: "center",
});

export const blogPost = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    py: [24, 32],
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
    fontSize: [24, 44],
    color: "textStrong",
    px: [16, 32],
  }),
  {
    lineHeight: 1.25,
  },
]);

export const postDetails = sprinkles({
  color: "textSubdued",
  px: [16, 32],
});

export const postFooter = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: [24, 32],
  px: [16, 32],
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
