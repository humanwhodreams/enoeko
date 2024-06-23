"use client";

import {
  ChevronRight,
  Notebook,
  Phone,
  Settings,
  ShieldCheck,
  ShoppingBag,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navitems = [
  {
    section: "General",
    link: [
      {
        title: "Account",
        href: "/account/profile",
        icon: User,
      },
      {
        title: "Orders",
        href: "/account/orders",
        icon: ShoppingBag,
      },
    ],
  },
  {
    section: "Shipping",
    link: [
      {
        title: "Contacts",
        href: "/account/contact",
        icon: Phone,
      },
      {
        title: "Address book",
        href: "/account/address",
        icon: Notebook,
      },
    ],
  },
  {
    section: "Settings",
    link: [
      {
        title: "Preferences",
        href: "/account/preferences",
        icon: Settings,
      },
      {
        title: "Security",
        href: "/account/security",
        icon: ShieldCheck,
      },
    ],
  },
];

export function AccountSideBar() {
  const pathname = usePathname();
  return (
    <aside className="left-0 z-10 invisible hidden md:block md:visible md:sticky top-20 w-72 md:bg-muted md:rounded-xl">
      <div className="p-1">
        <div className="px-3 pt-3 mb-4">
          <h1 className="text-2xl font-semibold">Account Manager</h1>
          <p className="text-sm text-muted-foreground">Manage your account.</p>
        </div>
        <div className="px-1 pb-2 space-y-3">
          {navitems.map((item, index) => (
            <div key={index} className="space-y-2">
              {/* <p className="px-3 text-sm font-medium text-right text-muted-foreground">
                {item.section}
              </p> */}
              <hr className="border-border" />
              <ul className="space-y-2">
                {item.link.map((link) => (
                  <li key={link.href}>
                    <Button
                      type="button"
                      variant={link.href === pathname ? "default" : "onMuted"}
                      size={"sm"}
                      className="justify-start w-full"
                      asChild
                    >
                      <Link href={link.href}>
                        <link.icon className="flex-shrink-0 mr-2 size-4" />
                        {link.title}
                        {link.href === pathname && (
                          <ChevronRight className="flex-shrink-0 ml-auto size-4" />
                        )}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
