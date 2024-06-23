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
        "text-lg font-normal text-center lg:text-xl sm:px-16 lg:px-40 text-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

function Left({ children, className }: Props) {
  return (
    <p
      className={cn(
        "text-base font-normal text-left lg:text-lg text-muted-foreground md:w-2/3",
        className
      )}
    >
      {children}
    </p>
  );
}
PageDescription.Left = Left;

function Right({ children, className }: Props) {
  return (
    <p
      className={cn(
        "text-base font-normal text-right lg:text-lg text-muted-foreground md:w-2/3",
        className
      )}
    >
      {children}
    </p>
  );
}
PageDescription.Right = Right;
