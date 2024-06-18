import * as React from "react";

import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: ClassValue;
}

export function PageDescription({ children, className }: Props) {
  return (
    <p
      className={cn(
        "mb-8 text-lg font-normal text-center lg:text-xl sm:px-16 lg:px-40 text-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}
