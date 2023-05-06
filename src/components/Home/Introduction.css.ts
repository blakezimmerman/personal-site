import { style } from "@vanilla-extract/css";

import { responsiveStyle } from "../../styles/responsiveStyle";
import { sprinkles } from "../../styles/sprinkles.css";

export const introContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }),
  {
    flexGrow: 1,
    flexShrink: 1,
  },
]);

export const introduction = sprinkles({
  fontWeight: "regular",
  fontSize: [24, 32],
  color: "textStrong",
});

export const name = sprinkles({
  fontWeight: "bold",
  fontSize: [32, 52],
  color: "textStrong",
});

export const tagline = style([
  sprinkles({
    fontWeight: "medium",
    color: "textFaint",
    fontSize: [24, 32],
    marginTop: [12, 16],
  }),
  responsiveStyle({
    mobile: { maxWidth: "20ch" },
    tablet: { maxWidth: "24ch" },
  }),
]);
