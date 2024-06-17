"use client";

import * as React from "react";

import { UserButton as ClerkUserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

/**
 * UserButton Component
 *
 * @description A theme version of the Clerk <UserButton /> component.
 *
 * read more: https://stackoverflow.com/a/78427863
 */
export function UserButton() {
  const { theme } = useTheme();
  const _appearance = React.useMemo(() => {
    let result: React.ComponentProps<typeof ClerkUserButton>["appearance"];
    if (theme === "dark") {
      result = {
        baseTheme: dark,
      };
    }
    return result;
  }, [theme]);
  return (
    <ClerkUserButton
      appearance={_appearance}
      userProfileProps={{ appearance: _appearance }}
    />
  );
}
