"use client";
import { Space_Mono as Font } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/system";

const themeFont = Font({
  weight: ["700", "400"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: themeFont.style.fontFamily,
  },
});

const GlobalCSS = () =>
  GlobalStyles({
    styles: {
      "html, body": {
        fontFamily: themeFont.style.fontFamily,
      },
      "*": {
        fontFamily: `${themeFont.style.fontFamily} !important`,
      },
    },
  });

export { theme, GlobalCSS };
