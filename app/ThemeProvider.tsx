"use client";
import { ThemeProvider } from "next-themes";
import ThemeProviderChild from "./themeProviderChild";
import React, { ReactNode } from "react";
const DarkLightThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ThemeProviderChild>{children}</ThemeProviderChild>
    </ThemeProvider>
  );
};

export default DarkLightThemeProvider;
