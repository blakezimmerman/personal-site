import { globalStyle } from "@vanilla-extract/css";

import { responsiveStyle } from "../../styles/responsiveStyle";
import { fontFamilies, fontSizes, radii, spaces } from "../../styles/scales";
import { vars } from "../../styles/theme.css";

globalStyle(`.markdown p, .markdown ul`, {
  lineHeight: 1.75,
  fontSize: fontSizes[16],
});

globalStyle(
  `.markdown p, .markdown ul`,
  responsiveStyle({
    tablet: {
      fontSize: fontSizes[18],
    },
  }),
);

globalStyle(`.markdown ul`, {
  display: "flex",
  flexDirection: "column",
  gap: spaces[8],
  paddingLeft: spaces[24],
});

globalStyle(`.markdown li`, {
  paddingLeft: spaces[4],
});

globalStyle(`.markdown pre`, {
  fontFamily: fontFamilies.monospace,
  fontSize: fontSizes[14],
  padding: spaces[12],
  borderRadius: radii[2],
});

globalStyle(
  `.markdown pre`,
  responsiveStyle({
    tablet: {
      fontSize: fontSizes[16],
      padding: spaces[16],
    },
  }),
);

globalStyle(`.markdown p > code, .markdown li > code`, {
  fontFamily: fontFamilies.monospace,
  color: vars.colors.textStrong,
  backgroundColor: vars.colors.surface3,
  borderRadius: radii[2],
  paddingTop: spaces[2],
  paddingBottom: spaces[2],
  paddingLeft: spaces[4],
  paddingRight: spaces[4],
});
