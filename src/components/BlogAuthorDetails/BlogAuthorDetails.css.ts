import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const blogAuthorDetailsContainer = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const headshotContainer = sprinkles({
  size: [60, 64],
});

export const headshot = style([
  sprinkles({
    size: [60, 64],
    borderRadius: "round",
  }),
  {
    objectFit: "cover",
  },
]);

export const authorDetails = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const greeting = sprinkles({
  fontSize: [16, 18],
  color: "textStrong",
});

export const description = sprinkles({
  fontSize: [14, 16],
  color: "textSubdued",
});
