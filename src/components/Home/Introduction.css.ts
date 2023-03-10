import { style } from "@vanilla-extract/css";
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
});

export const name = sprinkles({
  fontWeight: "bold",
  fontSize: [32, 52],
});

export const tagline = style([
  sprinkles({
    fontWeight: "medium",
    color: "textSubdued",
    fontSize: [24, 32],
    marginTop: [12, 16],
  }),
  {
    maxWidth: "25ch",
  },
]);
