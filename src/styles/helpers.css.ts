import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "./responsiveStyle";
import { fontSizes, spaces } from "./scales";
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

export const paddingForHeader = style([
  {
    paddingTop: `calc(${spaces[16]} + ${spaces[16]} + ${fontSizes[24]})`, // Height of header
  },
  responsiveStyle({
    tablet: {
      paddingTop: `calc(${spaces[32]} + ${spaces[32]} + ${fontSizes[32]})`, // Height of header
    },
  }),
]);

export const sectionContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 24,
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
