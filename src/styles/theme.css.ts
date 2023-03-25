import { createTheme } from "@vanilla-extract/css";

export const [lightThemeClass, vars] = createTheme({
  colors: {
    surface: "hsl(0, 0%, 100%)",
    surfaceTranslucent: "hsla(0, 0%, 100%, 0.6)",
    textStrong: "hsl(0, 0%, 5%)",
    text: "hsl(0, 0%, 36%)",
    textSubdued: "hsl(0, 0%, 42%)",
    textFaint: "hsl(0, 0%, 54%)",
    link: "hsl(230, 80%, 56%)",
    promptPath: "hsl(202, 88%, 44%)",
    promptCommand: "hsl(144, 88%, 34%)",
  },
});

export const darkThemeClass = createTheme(vars, {
  colors: {
    surface: "hsl(0, 0%, 0%)",
    surfaceTranslucent: "hsla(0, 0%, 0%, 0.6)",
    textStrong: "hsl(0, 0%, 95%)",
    text: "hsl(0, 0%, 60%)",
    textSubdued: "hsl(0, 0%, 48%)",
    textFaint: "hsl(0, 0%, 40%)",
    link: "hsl(230, 72%, 70%)",
    promptPath: "hsl(202, 78%, 64%)",
    promptCommand: "hsl(144, 78%, 44%)",
  },
});
