"use client";

import * as React from "react";

import { Headset, Home, Notebook } from "lucide-react";

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
    >
      <UserButton.UserProfilePage
        label="Terms"
        labelIcon={<Notebook />}
        url="terms"
      >
        <div>
          <h1>Custom Terms Page</h1>
          <p>This is the custom terms page</p>
        </div>
      </UserButton.UserProfilePage>
      <UserButton.UserProfileLink
        label="Go to Home"
        url="/"
        labelIcon={<Home className="size-4" />}
      />
    </UserButton>
  );
}
