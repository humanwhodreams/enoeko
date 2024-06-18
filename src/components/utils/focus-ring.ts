import type { ClassValue } from "clsx";

export const focusRing: ClassValue[] = [
  // outline
  "focus-visible:outline-none",

  // ring
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
];
