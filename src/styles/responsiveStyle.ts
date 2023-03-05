import type { StyleRule } from "@vanilla-extract/css";

export const breakpoints = {
  tablet: "screen and (min-width: 768px)",
  desktop: "screen and (min-width: 1024px)",
};

export const responsiveStyle = (breakpointStyles: {
  [Property in keyof typeof breakpoints]?: StyleRule;
}) => {
  const mediaStyles: Record<string, StyleRule> = {};

  for (const [key, value] of Object.entries(breakpointStyles)) {
    const bpKey = key as keyof typeof breakpoints;
    if (value) mediaStyles[breakpoints[bpKey]] = value;
  }

  return { "@media": mediaStyles };
};
