import { globalStyle } from "@vanilla-extract/css";

import { responsiveStyle } from "../../styles/responsiveStyle";
import { fontFamilies, fontSizes, fontWeights, radii, spaces } from "../../styles/scales";
import { vars } from "../../styles/theme.css";

const m = ".markdown";
const allHeadings = `${m} h2, ${m} h3, ${m} h4, ${m} h5`;

globalStyle(
  `${allHeadings}, ${m} p`,
  responsiveStyle({
    mobile: {
      paddingLeft: spaces[16],
      paddingRight: spaces[16],
    },
    tablet: {
      paddingLeft: spaces[32],
      paddingRight: spaces[32],
    },
  }),
);

globalStyle(
  allHeadings,
  responsiveStyle({
    mobile: {
      fontWeight: fontWeights.bold,
      color: vars.colors.textStrong,
      marginTop: spaces[16],
    },
    tablet: {
      marginTop: spaces[24],
    },
  }),
);

globalStyle(
  `${m} h2`,
  responsiveStyle({
    mobile: { fontSize: fontSizes[20] },
    tablet: { fontSize: fontSizes[32] },
  }),
);
globalStyle(
  `${m} h3`,
  responsiveStyle({
    mobile: { fontSize: fontSizes[16] },
    tablet: { fontSize: fontSizes[20] },
  }),
);
globalStyle(
  `${m} h4`,
  responsiveStyle({
    mobile: { fontSize: fontSizes[14] },
    tablet: { fontSize: fontSizes[16] },
  }),
);
globalStyle(
  `${m} h5`,
  responsiveStyle({
    mobile: { fontSize: fontSizes[12] },
    tablet: { fontSize: fontSizes[14] },
  }),
);

globalStyle(`${m} p, ${m} ul`, {
  lineHeight: 1.75,
});

globalStyle(
  `${m} p, ${m} ul`,
  responsiveStyle({
    mobile: { fontSize: fontSizes[16] },
    tablet: { fontSize: fontSizes[18] },
  }),
);

globalStyle(`${m} ul`, {
  display: "flex",
  flexDirection: "column",
  gap: spaces[8],
});

globalStyle(
  `${m} ul`,
  responsiveStyle({
    mobile: {
      paddingLeft: spaces[32],
      paddingRight: spaces[16],
    },
    tablet: {
      paddingLeft: spaces[64],
      paddingRight: spaces[32],
    },
  }),
);

globalStyle(`${m} li`, {
  paddingLeft: spaces[4],
});

globalStyle(`${m} pre, ${m} code`, {
  fontFamily: fontFamilies.monospace,
});

globalStyle(
  `${m} pre`,
  responsiveStyle({
    mobile: {
      fontSize: fontSizes[14],
      padding: spaces[16],
    },
    tablet: {
      fontSize: fontSizes[16],
      borderRadius: radii[2],
      margin: `0 ${spaces[16]}`,
    },
  }),
);

globalStyle(`${m} p > code, ${m} li > code`, {
  color: vars.colors.textStrong,
  backgroundColor: vars.colors.surface3,
  borderRadius: radii[2],
  paddingTop: spaces[2],
  paddingBottom: spaces[2],
  paddingLeft: spaces[4],
  paddingRight: spaces[4],
});
