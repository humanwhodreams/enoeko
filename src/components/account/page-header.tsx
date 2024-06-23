import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export function PageHeader({ children }: Props) {
  return (
    <h2 className="w-full pb-3 mb-3 text-2xl font-semibold border-b">{children}</h2>
  );
}
