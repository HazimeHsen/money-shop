import { useTheme } from "next-themes";
import React, { ReactNode } from "react";

const ThemeProviderChild = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className="overflow-hidden" data-theme={theme ? theme : "light"}>
      {children}
    </div>
  );
};

export default ThemeProviderChild;
