import type { StyleRule } from "@vanilla-extract/css";

export const breakpoints = {
  tablet: "screen and (min-width: 768px)",
  desktop: "screen and (min-width: 1024px)",
};

/**
 * This function applies the provided style rules to the specified breakpoints.
 * Style rules for larger screen sizes may override rules for smaller screen sizes,
 * however, rules that aren't overridden will still be applied.
 */
export const responsiveStyle = (
  breakpointStyles: { mobile?: StyleRule } & {
    [Property in keyof typeof breakpoints]?: StyleRule;
  },
) => {
  const mediaStyles: Record<string, StyleRule> = {};

  for (const [key, value] of Object.entries(breakpointStyles)) {
    // mobile styles are the base styles so we want to apply them to the root of the
    // style object instead.
    if (key === "mobile") continue;
    const bpKey = key as keyof typeof breakpoints;
    if (value) mediaStyles[breakpoints[bpKey]] = value;
  }

  return { ...breakpointStyles.mobile, "@media": mediaStyles };
};

export const darkModeStyle = (styleRule: StyleRule) => {
  return { "@media": { "(prefers-color-scheme: dark)": styleRule } };
};
