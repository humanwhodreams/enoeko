"use client";

import * as React from "react";

import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export function ClerkUserButton() {
  const { theme } = useTheme();
  const _appearance = React.useMemo(() => {
    let result: React.ComponentProps<typeof UserButton>["appearance"];
    if (theme === "dark") {
      result = {
        baseTheme: dark,
      };
    }
    return result;
  }, [theme]);

  return (
    <UserButton
      appearance={_appearance}
      userProfileProps={{ appearance: _appearance }}
      afterSignOutUrl="/"
    />
  );
}
