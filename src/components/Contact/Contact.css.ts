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
  gap: 24,
});

export const socialIcon = sprinkles({
  size: [60, 64],
});

export const invertSocialIcon = style([
  socialIcon,
  darkModeStyle({
    filter: "invert(100%)",
  }),
]);
