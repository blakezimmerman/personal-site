import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const experienceItem = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  }),
  {
    flex: 1,
    width: "100%",
  },
]);

export const companyLogo = style([
  sprinkles({
    height: [48, 64],
  }),
  {
    objectFit: "contain",
  },
]);

export const roleContainer = sprinkles({
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  gap: 8,
});

export const roleHeader = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const roleTitle = sprinkles({
  fontWeight: "medium",
  fontSize: [20, 24],
});

export const roleDepartment = sprinkles({
  fontWeight: "medium",
  fontSize: [14, 16],
});

export const roleTimeline = sprinkles({
  fontSize: [16, 18],
  color: "textSubdued",
});

export const roleDetails = sprinkles({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  color: "textSubdued",
  fontSize: [14, 16],
});
