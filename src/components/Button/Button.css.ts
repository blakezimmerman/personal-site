import { style } from "@vanilla-extract/css";

import { sprinkles } from "../../styles/sprinkles.css";

export const button = style([
  sprinkles({
    color: "textStrong",
    bg: "surface3",
  }),
  { lineHeight: 0 },
]);

export const linkButton = style([button, { textDecoration: "none" }]);

export const nonRoundButton = sprinkles({
  borderRadius: 2,
});

export const roundButton = sprinkles({
  borderRadius: "round",
});

export const rectangleButton = sprinkles({
  px: 12,
  py: 8,
});

export const squareButton = sprinkles({
  p: 8,
});
