import { globalStyle } from "@vanilla-extract/css";

import { fontFamilies } from "./scales";
import { vars } from "./theme.css";

globalStyle("*, ::before, ::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  color: vars.colors.text,
  backgroundColor: vars.colors.surface,
  fontFamily: fontFamilies.sanSerif,
});

globalStyle("h1, h2, h3, h4, h5, h6, p, pre, figure", {
  margin: 0,
});

globalStyle("button", {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  color: vars.colors.textStrong,
});

globalStyle("a", {
  textDecoration: "none",
  color: vars.colors.link,
});

globalStyle("input, textarea", {
  padding: 0,
  borderRadius: 0,
});

globalStyle("ul", {
  margin: 0,
  paddingLeft: "1.75rem",
});
