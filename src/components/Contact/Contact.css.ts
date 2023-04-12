import { style } from "@vanilla-extract/css";

import { darkModeStyle } from "../../styles/responsiveStyle";
import { sprinkles } from "../../styles/sprinkles.css";

export const contactPointsContainer = sprinkles({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 32,
});

export const socialPlatformsContainer = sprinkles({
  display: "flex",
  gap: 32,
});

export const socialIcon = sprinkles({
  size: 40,
});

export const invertSocialIcon = style([
  socialIcon,
  { filter: "invert(100%)" },
  darkModeStyle({
    filter: "invert(0%)",
  }),
]);
