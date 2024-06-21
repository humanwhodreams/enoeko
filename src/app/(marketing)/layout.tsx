import * as React from "react";

import { FooterBar } from "@/components/footer-bar";
import { NavigationBar } from "@/components/navigation-bar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <NavigationBar />
      <section className="flex-1 w-full">{children}</section>
      <FooterBar />
    </main>
  );
}
