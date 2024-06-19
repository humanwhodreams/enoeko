import * as React from "react";

import { AccountSideBar } from "@/components/account-sidebar";
import { NavigationBar } from "@/components/navigation-bar";

interface Props {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: Props) {
  return (
    <main>
      <NavigationBar />
      <section className="flex items-start max-w-6xl px-4 py-4 mx-auto gap-x-4">
        <AccountSideBar />
        <section className="flex-1 pt-4">{children}</section>
      </section>
    </main>
  );
}
