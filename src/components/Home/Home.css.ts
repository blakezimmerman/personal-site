import { style } from "@vanilla-extract/css";
import { minFullHeight, paddingForHeader } from "../../styles/helpers.css";
import { responsiveStyle } from "../../styles/responsiveStyle";
import { sprinkles } from "../../styles/sprinkles.css";

export const homeContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    p: [24, 48],
    gap: 32,
  }),
  minFullHeight,
  paddingForHeader,
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
    alignItems: "center",
  }),
  {
    flex: 1,
  },
  responsiveStyle({
    tablet: { alignItems: "unset" },
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
