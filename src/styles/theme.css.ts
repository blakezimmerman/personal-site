import { createTheme } from "@vanilla-extract/css";

export const [lightThemeClass, vars] = createTheme({
  colors: {
    surface: "hsl(0, 0%, 100%)",
    surfaceTranslucent: "hsla(0, 0%, 100%, 0.6)",
    text: "hsl(0, 0%, 0%)",
    textSubdued: "hsl(0, 0%, 50%)",
    promptPath: "hsl(202, 88%, 44%)",
    promptCommand: "hsl(144, 88%, 34%)",
  },
});

export const darkThemeClass = createTheme(vars, {
  colors: {
    surface: "hsl(0, 0%, 0%)",
    surfaceTranslucent: "hsla(0, 0%, 0%, 0.6)",
    text: "hsl(0, 0%, 100%)",
    textSubdued: "hsl(0, 0%, 40%)",
    promptPath: "hsl(202, 78%, 64%)",
    promptCommand: "hsl(144, 78%, 44%)",
  },
});
