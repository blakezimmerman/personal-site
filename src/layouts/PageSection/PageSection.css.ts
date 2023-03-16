import { style } from "@vanilla-extract/css";
import { paddingForHeader } from "../../styles/helpers.css";
import { sprinkles } from "../../styles/sprinkles.css";

export const sectionContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: [24, 48],
  }),
  paddingForHeader,
]);

export const sectionContents = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: [48, 64],
  }),
  {
    width: "100%",
    maxWidth: "60ch",
  },
]);

export const sectionHeading = sprinkles({
  fontWeight: "bold",
  fontSize: [20, 28],
  color: "textSubdued",
});
