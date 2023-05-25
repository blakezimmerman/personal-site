import { globalStyle } from "@vanilla-extract/css";

import { responsiveStyle } from "../../styles/responsiveStyle";
import { fontFamilies, fontSizes, fontWeights, radii, spaces } from "../../styles/scales";
import { vars } from "../../styles/theme.css";

/**
 * Since the markdown content is converted to HTML during build time, we can't put class
 * names on the individual elements of the document. Instead we'll put this class name on
 * the outer container of the markdown document, and target inner elements with a global
 * stylesheet.
 */
const m = ".markdown";

// h1 is reserved for the post heading which is outside of the markdown content
// h6 is not supported by the markdown parser that is being used
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

globalStyle(`${m} p, ${m} ul, ${m} ol`, {
  lineHeight: 1.75,
});

globalStyle(
  `${m} p, ${m} ul, ${m} ol`,
  responsiveStyle({
    mobile: { fontSize: fontSizes[16] },
    tablet: { fontSize: fontSizes[18] },
  }),
);

globalStyle(`${m} ul, ${m} ol`, {
  display: "flex",
  flexDirection: "column",
  gap: spaces[8],
});

globalStyle(
  `${m} ul, ${m} ol`,
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
  `${m} blockquote`,
  responsiveStyle({
    mobile: {
      display: "flex",
      flexDirection: "column",
      gap: spaces[12],
      margin: 0,
      backgroundColor: vars.colors.surface2,
      padding: spaces[16],
    },
    tablet: {
      borderRadius: radii[2],
      margin: `0 ${spaces[16]}`,
    },
  }),
);

globalStyle(
  `${m} blockquote > p`,
  responsiveStyle({
    mobile: {
      padding: 0,
      fontSize: fontSizes[14],
    },
    tablet: {
      fontSize: fontSizes[16],
    },
  }),
);

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

globalStyle(`${m} a > code`, {
  color: vars.colors.link,
  backgroundColor: vars.colors.linkBackground,
  borderRadius: radii[2],
  paddingTop: spaces[2],
  paddingBottom: spaces[2],
  paddingLeft: spaces[4],
  paddingRight: spaces[4],
});
