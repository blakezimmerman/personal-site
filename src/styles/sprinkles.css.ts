import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { breakpoints } from "./responsiveStyle";
import {
  fontFamilies,
  fontSizes,
  fontStyles,
  fontWeights,
  radii,
  spaces,
} from "./scales";
import { vars } from "./theme.css";

const flexAlignments = [
  "stretch",
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
];

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": breakpoints.tablet },
    desktop: { "@media": breakpoints.desktop },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    display: ["none", "block", "inline", "flex"],
    flexDirection: ["row", "column"],
    flexWrap: ["wrap", "wrap-reverse", "nowrap"],
    justifyContent: flexAlignments,
    alignItems: flexAlignments,
    justifySelf: flexAlignments,
    alignSelf: flexAlignments,
    color: vars.colors,
    backgroundColor: vars.colors,
    height: spaces,
    width: spaces,
    gap: spaces,
    paddingTop: spaces,
    paddingBottom: spaces,
    paddingLeft: spaces,
    paddingRight: spaces,
    marginTop: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
    marginRight: spaces,
    borderRadius: radii,
    fontFamily: fontFamilies,
    fontStyle: fontStyles,
    fontWeight: fontWeights,
    fontSize: fontSizes,
  },
  shorthands: {
    bg: ["backgroundColor"],
    size: ["height", "width"],
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
