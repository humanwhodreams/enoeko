import * as React from "react";

import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: ClassValue;
}

export function PageHeader({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "mb-4 text-4xl font-extrabold leading-none tracking-tight text-center md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
