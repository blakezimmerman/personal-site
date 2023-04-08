import { createTheme } from "@vanilla-extract/css";

export const [lightThemeClass, vars] = createTheme({
  colors: {
    surface: "hsl(0, 0%, 100%)",
    surfaceTranslucent: "hsla(0, 0%, 100%, 0.6)",
    surface2: "hsl(0, 0%, 97%)",
    surface3: "hsl(0, 0%, 94%)",
    textStrong: "hsl(0, 0%, 5%)",
    text: "hsl(0, 0%, 32%)",
    textSubdued: "hsl(0, 0%, 42%)",
    textFaint: "hsl(0, 0%, 54%)",
    border: "hsl(0, 0%, 74%)",
    link: "hsl(225, 85%, 55%)",
    promptPath: "hsl(202, 88%, 42%)",
    promptCommand: "hsl(144, 88%, 32%)",
  },
});

export const darkThemeClass = createTheme(vars, {
  colors: {
    surface: "hsl(0, 0%, 0%)",
    surfaceTranslucent: "hsla(0, 0%, 0%, 0.6)",
    surface2: "hsl(0, 0%, 6%)",
    surface3: "hsl(0, 0%, 12%)",
    textStrong: "hsl(0, 0%, 95%)",
    text: "hsl(0, 0%, 64%)",
    textSubdued: "hsl(0, 0%, 48%)",
    textFaint: "hsl(0, 0%, 40%)",
    border: "hsl(0, 0%, 25%)",
    link: "hsl(225, 95%, 75%)",
    promptPath: "hsl(202, 78%, 64%)",
    promptCommand: "hsl(144, 78%, 44%)",
  },
});
