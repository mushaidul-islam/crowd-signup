import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalCSS, theme } from "~/styles/theme";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Youth Venture AI",
  description: "Sign Up Page for Youth Venture AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <CssBaseline />
        <GlobalCSS />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
