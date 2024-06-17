"use client";

import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center mx-2 gap-x-2 py-1">
      <Sun className="w-4 h-4" />
      <Switch
      checked={theme === "light" ? false : true}
        onCheckedChange={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      />
      <Moon className="w-4 h-4" />
    </div>
  );
}
