import { globalFontFace } from "@vanilla-extract/css";

export const poppins = "Poppins";

globalFontFace(poppins, {
  src: "url('/fonts/poppins-latin-400-normal.woff2') format('woff2')",
  fontStyle: "normal",
  fontWeight: 400,
  fontDisplay: "fallback",
});

globalFontFace(poppins, {
  src: "url('/fonts/poppins-latin-500-normal.woff2') format('woff2')",
  fontStyle: "normal",
  fontWeight: 500,
  fontDisplay: "fallback",
});

globalFontFace(poppins, {
  src: "url('/fonts/poppins-latin-700-normal.woff2') format('woff2')",
  fontStyle: "normal",
  fontWeight: 700,
  fontDisplay: "fallback",
});
