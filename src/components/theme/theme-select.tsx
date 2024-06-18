"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface Props {
  twWidth?: string;
  align?: "start" | "center" | "end";
}

export function ThemeSelect({ twWidth, align = "center" }: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <Select onValueChange={(value) => setTheme(value)}>
      <SelectTrigger className={cn("w-[180px]", twWidth)} tabIndex={0}>
        <SelectValue placeholder={theme} />
      </SelectTrigger>
      <SelectContent align={align}>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
