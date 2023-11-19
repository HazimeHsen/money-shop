import { useTheme } from "next-themes";
import React, { ReactNode } from "react";

const ThemeProviderChild = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return <body data-theme={theme}>{children}</body>;
};

export default ThemeProviderChild;
