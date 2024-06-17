"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export function ThemeToggleGroup() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative flex items-center justify-center border rounded-md w-fit">
      <Button
        type="button"
        size={"sm"}
        variant={theme === "light" ? "default" : "ghost"}
        onClick={() => setTheme("light")}
      >
        <Sun className="w-4 h-4"/>
        <span className="sr-only">light mode</span>
      </Button>
      <Button
        type="button"
        size={"sm"}
        variant={theme === "dark" ? "default" : "ghost"}
        onClick={() => setTheme("dark")}
      >
        <Moon className="w-4 h-4"/>
        <span className="sr-only">dark mode</span>
      </Button>
      <Button
        type="button"
        size={"sm"}
        variant={theme === "system" ? "default" : "ghost"}
        onClick={() => setTheme("system")}
      >
        <Monitor className="w-4 h-4"/>
        <span className="sr-only">system mode</span>
      </Button>
    </div>
  );
}
