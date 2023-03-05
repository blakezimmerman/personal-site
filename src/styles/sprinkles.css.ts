import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { breakpoints } from "./responsiveStyle";
import { fontFamilies, fontSizes, fontWeights, radii, spaces } from "./scales";
import { vars } from "./theme.css";

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
    alignItems: ["stretch", "flex-start", "center", "flex-end", "space-between"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end", "space-between"],
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
    fontSize: fontSizes,
    fontWeight: fontWeights,
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
