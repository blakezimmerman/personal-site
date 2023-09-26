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

export const translucentSuface = style([
  sprinkles({ bg: "surfaceTranslucent" }),
  {
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  },
]);

export const mobileHeaderHeight = `calc(${spaces[16]} + ${spaces[16]} + ${fontSizes[24]})`;
export const tabletHeaderHeight = `calc(${spaces[32]} + ${spaces[32]} + ${fontSizes[32]})`;

export const paddingForHeader = style(
  responsiveStyle({
    mobile: { paddingTop: mobileHeaderHeight },
    tablet: { paddingTop: tabletHeaderHeight },
  }),
);

export const minFullHeightWithHeader = style(
  responsiveStyle({
    mobile: {
      minHeight: [
        `calc(100vh - ${mobileHeaderHeight})`,
        `calc(100svh - ${mobileHeaderHeight})`,
      ],
    },
    tablet: {
      minHeight: [
        `calc(100vh - ${tabletHeaderHeight})`,
        `calc(100svh - ${tabletHeaderHeight})`,
      ],
    },
  }),
);

export const invertColorsWhenLight = style({
  filter: "invert(1)",
  "@media": {
    "(prefers-color-scheme: dark)": {
      filter: "unset",
    },
  },
});
