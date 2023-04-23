import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const blogEntryListContainer = sprinkles({
  display: "flex",
  justifyContent: "center",
});

export const blogEntryList = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    p: [24, 32],
    gap: [32, 48],
  }),
  {
    width: "100%",
    maxWidth: "80ch",
  },
]);

export const postsList = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: [24],
  }),
  {
    width: "100%",
    maxWidth: "80ch",
  },
]);

export const heading = sprinkles({
  fontWeight: "bold",
  fontSize: [24, 40],
  color: "textStrong",
});

export const blogEntry = style([
  sprinkles({
    bg: "surface2",
    borderRadius: 2,
    p: 16,
  }),
]);

export const title = style([
  sprinkles({
    fontWeight: "bold",
    fontSize: [18, 20],
    color: "textStrong",
  }),
  {
    lineHeight: 1.25,
  },
]);

export const date = sprinkles({
  fontSize: [12, 14],
  color: "textSubdued",
  marginTop: [4, 4],
  marginBottom: [8, 8],
});

export const description = sprinkles({
  fontSize: [14, 16],
  color: "text",
});
