import { style } from "@vanilla-extract/css";
import { minFullHeight } from "../../styles/helpers.css";
import { responsiveStyle } from "../../styles/responsiveStyle";
import { fontSizes, spaces } from "../../styles/scales";
import { sprinkles } from "../../styles/sprinkles.css";

export const homeContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    p: [24, 48],
    gap: 32,
  }),
  minFullHeight,
  {
    paddingTop: `calc(${spaces[16]} + ${spaces[16]} + ${fontSizes[24]})`, // Height of header
  },
  responsiveStyle({
    tablet: {
      paddingTop: `calc(${spaces[32]} + ${spaces[32]} + ${fontSizes[32]})`, // Height of header
    },
  }),
]);

export const introWithGraphicContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: ["column", "row"],
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: [32, 32, 48],
    paddingTop: 32,
  }),
  {
    maxWidth: "1100px",
    alignSelf: "center",
    width: "100%",
    flex: 2,
  },
]);

export const graphicContainer = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
  }),
  {
    flex: 1,
  },
  responsiveStyle({
    desktop: { flex: "unset" },
  }),
]);

export const resumeButtonWrapper = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  {
    flex: 1,
  },
]);
