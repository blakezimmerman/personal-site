import { style } from "@vanilla-extract/css";
import { paddingForHeader } from "../../styles/helpers.css";
import { borderWidths } from "../../styles/scales";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme.css";

export const aboutMeContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 24,
    gap: 48,
  }),
  paddingForHeader,
]);

export const headshot = style([
  sprinkles({
    size: [160, 240, 240],
    borderRadius: 3,
  }),
  {
    objectFit: "cover",
    border: `solid ${borderWidths[3]} ${vars.colors.text}`,
  },
]);

export const paragraphsContainer = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export const paragraph = style([
  sprinkles({ fontSize: [16, 18] }),
  {
    maxWidth: "50ch",
  },
]);

export const latteContainer = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 16,
  }),
  {
    width: "100%",
    maxWidth: "40ch",
  },
]);

export const latteCaptionContainer = sprinkles({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
});

export const latteCaption = sprinkles({
  fontWeight: "bold",
  fontSize: [14, 16],
  color: "textSubdued",
});

export const arrow = style([
  sprinkles({
    width: 64,
    color: "textSubdued",
  }),
  {
    transform: "translateX(50%)",
  },
]);

export const latte = style([
  sprinkles({
    size: [160, 240],
  }),
  {
    objectFit: "contain",
  },
]);
