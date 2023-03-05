import { style } from "@vanilla-extract/css";

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
  minHeight: "100vh",
  "@supports": {
    "(-webkit-touch-callout: none)": { minHeight: "-web-fill-available" },
  },
});
