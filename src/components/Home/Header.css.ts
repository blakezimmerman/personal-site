import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const header = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: [24, 48],
    py: [16, 32],
    gap: [24, 32, 48],
    bg: "surface",
  }),
  {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
  },
]);

export const logo = style([
  sprinkles({
    size: [24, 32],
  }),
  { flexShrink: 0 },
]);

export const nav = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: [24, 32, 48],
  color: "text",
});

export const navItem = style([
  sprinkles({ color: "text", fontSize: [16, 20] }),
  {
    textDecoration: "none",
  },
]);
