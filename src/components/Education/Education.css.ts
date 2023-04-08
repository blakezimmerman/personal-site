import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const schoolLogo = style([
  sprinkles({
    height: [60, 96],
  }),
  {
    objectFit: "contain",
  },
]);
