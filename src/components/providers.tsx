import * as React from "react";

import { ThemeProvider } from "@/components/theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
  mode?: "light" | "dark" | "system";
}

export default function Providers({
  children,
  mode = "system",
}: ProvidersProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme={mode}
        enableSystem
      >
        {children}
      </ThemeProvider>
    </>
  );
}
