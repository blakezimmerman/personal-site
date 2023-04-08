import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const footer = sprinkles({
  display: "flex",
  justifyContent: "center",
  px: 16,
  paddingTop: 48,
  paddingBottom: 24,
});

export const footerText = style([
  sprinkles({
    fontSize: 12,
    color: "textSubdued",
  }),
  {
    textAlign: "center",
  },
]);
