import { globalStyle, style } from "@vanilla-extract/css";

import { fadeUp } from "../../styles/keyframes.css";
import { responsiveStyle } from "../../styles/responsiveStyle";
import { durations, fontSizes, radii, spaces } from "../../styles/scales";
import { sprinkles } from "../../styles/sprinkles.css";
import { vars } from "../../styles/theme.css";

export const blogPostContainer = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
  }),
  {
    animationName: fadeUp,
    animationDuration: durations[3],
    animationTimingFunction: "ease-out",
  },
]);

export const blogPost = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    p: [24, 32],
    gap: [24, 32],
  }),
  {
    width: "100%",
    maxWidth: "80ch",
  },
]);

export const heading = style([
  sprinkles({
    fontWeight: "bold",
    fontSize: [24, 40],
    color: "textStrong",
  }),
  {
    lineHeight: 1.25,
  },
]);

export const postDetails = sprinkles({
  color: "textSubdued",
});

export const divider = style([
  sprinkles({
    display: "flex",
    bg: "border",
    borderRadius: "round",
    my: 16,
  }),
  { height: "1px" },
]);

export const postContent = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

globalStyle(`${postContent} p, ${postContent} ul`, {
  lineHeight: 1.75,
  fontSize: fontSizes[16],
});

globalStyle(
  `${postContent} p, ${postContent} ul`,
  responsiveStyle({
    tablet: {
      fontSize: fontSizes[18],
    },
  }),
);

globalStyle(`${postContent} ul`, {
  display: "flex",
  flexDirection: "column",
  gap: spaces[8],
  paddingLeft: spaces[24],
});

globalStyle(`${postContent} li`, {
  paddingLeft: spaces[4],
});

globalStyle(`${postContent} pre`, {
  fontSize: fontSizes[14],
  padding: spaces[12],
  borderRadius: radii[2],
});

globalStyle(
  `${postContent} pre`,
  responsiveStyle({
    tablet: {
      fontSize: fontSizes[16],
      padding: spaces[16],
    },
  }),
);

globalStyle(`${postContent} p > code, ${postContent} li > code`, {
  color: vars.colors.textStrong,
  backgroundColor: vars.colors.surface3,
  borderRadius: radii[2],
  paddingTop: spaces[2],
  paddingBottom: spaces[2],
  paddingLeft: spaces[4],
  paddingRight: spaces[4],
});
