import { style } from "@vanilla-extract/css";
import { translucentSuface } from "../../styles/helpers.css";
import { responsiveStyle } from "../../styles/responsiveStyle";
import { fontSizes } from "../../styles/scales";
import { sprinkles } from "../../styles/sprinkles.css";

export const header = style([
  translucentSuface,
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: [24, 48],
    py: [16, 32],
    gap: [24, 32, 48],
  }),
  {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
]);

export const logo = style([
  {
    flexShrink: 0,
    height: fontSizes[24],
    width: fontSizes[24],
  },
  responsiveStyle({
    tablet: { height: fontSizes[32], width: fontSizes[32] },
  }),
]);

export const nav = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: [24, 32, 48],
  color: "text",
});

export const navItem = style([
  sprinkles({ color: "text", fontSize: [16, 20] }),
  {
    textDecoration: "none",
  },
]);
