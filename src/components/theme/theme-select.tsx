"use client";;

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useTheme } from "next-themes";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Select onValueChange={(value) => setTheme(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={theme} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
