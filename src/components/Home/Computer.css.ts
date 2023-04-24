import { sprinkles } from "../../styles/sprinkles.css";

export const computerContainer = sprinkles({
  fontSize: [12, 16],
});

export const monospace = sprinkles({ fontFamily: "monospace" });

export const promptPath = sprinkles({
  fontFamily: "monospace",
  display: "inline",
  color: "promptPath",
});

export const promptCommand = sprinkles({
  fontFamily: "monospace",
  display: "inline",
  color: "promptCommand",
});
