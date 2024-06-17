import * as React from "react";

import { FooterBar } from "@/components/footer-bar";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="grid flex-1 min-h-screen py-12 place-items-center">{children}</section>
      <FooterBar />
    </main>
  );
}
