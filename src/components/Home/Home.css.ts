import { style } from "@vanilla-extract/css";

import { minFullHeightWithHeader } from "../../styles/helpers.css";
import { fadeIn, fadeUp } from "../../styles/keyframes.css";
import { responsiveStyle } from "../../styles/responsiveStyle";
import { durations } from "../../styles/scales";
import { sprinkles } from "../../styles/sprinkles.css";

export const homeContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    p: [24, 48],
    paddingTop: 0,
    gap: 32,
  }),
  minFullHeightWithHeader,
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
    animationName: fadeUp,
    animationDuration: durations[3],
    animationTimingFunction: "ease-out",
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
    opacity: 0,
    animationName: fadeIn,
    animationDuration: durations[3],
    animationDelay: durations[1],
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
  },
]);
