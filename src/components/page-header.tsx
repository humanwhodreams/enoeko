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

function Left({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "mb-3 text-3xl font-bold leading-none tracking-tight text-left md:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
PageHeader.Left = Left;

function Right({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "mb-3 text-3xl font-bold leading-none tracking-tight text-right md:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
PageHeader.Right = Right;