import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "./lib/theme";
import NavBar from "./components/NavBar/NavBar";

export const metadata = {
  title: "AI Novelist Library",
  description: "The stories generated by AI Novelist",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="fa_IR">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NavBar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
