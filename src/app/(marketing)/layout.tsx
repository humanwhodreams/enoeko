import * as React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationBar } from "@/components/navigation-bar-desktop";
import { Separator } from "@/components/ui/separator";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <header className="w-full bg-background border-b">
        <nav
          aria-label="global"
          className="flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12 py-2"
        >
          <Link href={"/"}>
            <h1 className="font-bold text-3xl">enoeko</h1>
          </Link>

          <NavigationBar />

          <ul className="hidden md:flex md:items-center md:gap-4">
            <li>
              <Button variant={"ghost"}>Sign in</Button>
            </li>
            <li>
              <Separator orientation="vertical" className="h-6" />
            </li>
            <li>
              <Button>Sign up</Button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex-1">{children}</section>
    </main>
  );
}
