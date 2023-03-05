import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const visuallyHide = style({
  border: 0,
  clip: "rect(1px, 1px, 1px, 1px)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
});

export const minFullHeight = style({
  minHeight: ["100vh", "100svh"],
});

export const translucentSuface = style([
  sprinkles({ bg: "surfaceTranslucent" }),
  {
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  },
]);
