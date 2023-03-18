import { keyframes } from "@vanilla-extract/css";

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const fadeUp = keyframes({
  "0%": { opacity: 0, transform: "translateY(10svh)" },
  "25%": { opacity: 0, transform: "translateY(7.5vsh)" },
  "100%": { opacity: 1, transform: "translateY(0svh)" },
});
