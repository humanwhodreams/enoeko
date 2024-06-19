"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { ThemeToggleGroup } from "@/components/theme/theme-toggle-group";
import { useTheme } from "next-themes";

export function GlobalSection() {
  const { theme } = useTheme();
  return (
    <div className="grid items-center grid-cols-3 p-6">
      <div className="font-medium">Appearance</div>
      <div>
        <div>
          <div className="flex items-center gap-x-2">
            <p className="font-medium text-muted-foreground">Active &mdash;</p>
            <div className="flex items-center gap-x-2">
              {theme === "light" && (
                <Sun className="flex-shrink-0 size-4" />
              )}
              {theme === "dark" && (
                <Moon className="flex-shrink-0 size-4" />
              )}
              {theme === "system" && (
                <Monitor className="flex-shrink-0 size-4" />
              )}
              {theme}
            </div>
          </div>
        </div>
      </div>
      <div className="place-self-end">
        <ThemeToggleGroup />
      </div>
    </div>
  );
}
