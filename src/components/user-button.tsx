import { ArrowUpRight, Headset, LogOut, ShoppingBag } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { focusRing } from "./utils/focus-ring";

const useritems = [
  {
    title: "Account manager",
    href: "/account/profile",
    icon: ArrowUpRight,
  },
  {
    title: "Orders",
    href: "/account/orders",
    icon: ShoppingBag,
  },
];

/**
 * CUserButton Component
 *
 * @description A theme version of the Clerk <UserButton /> component wrapped around eneko custom popover by shadcn/ui
 *
 */
export async function UserButton() {
  const user = await currentUser();

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full",
          focusRing
        )}
      >
        <Image
          src={`${user?.imageUrl!}`}
          alt={`${user?.fullName} profile image`}
          width={32}
          height={32}
          className="rounded-full"
        />
      </PopoverTrigger>
      <PopoverContent
        className="flex flex-col w-56 px-0 py-1 gap-y-2"
        align="end"
      >
        <div className="p-4 py-2">
          <div className="text-sm font-semibold">{user?.firstName}</div>
          <div className="text-sm">
            {user?.primaryEmailAddress?.emailAddress}
          </div>
        </div>
        <hr className="border-border" />
        <div className="grid grid-cols-1 p-1">
          {useritems.map((item) => (
            <Button
              key={item.href}
              type="button"
              variant={"ghost"}
              size={"sm"}
              className="justify-start w-full"
              asChild
            >
              <Link href={item.href}>
                {item.title}
                <item.icon className="ml-auto size-4 text-muted-foreground" />
              </Link>
            </Button>
          ))}
        </div>

        <hr className="border-border" />
        <div className="grid grid-cols-1 p-1">
          <Button
            type="button"
            variant={"ghost"}
            size={"sm"}
            className="justify-start w-full"
          >
            Customer care
            <Headset className="ml-auto size-4 text-muted-foreground" />
          </Button>
        </div>
        <hr className="border-border" />
        <div className="grid grid-cols-1 p-1">
          <SignOutButton redirectUrl="/">
            <Button
              type="button"
              variant={"ghost"}
              size={"sm"}
              className="justify-start w-full"
            >
              Sign Out
              <LogOut className="ml-auto size-4 text-muted-foreground" />
            </Button>
          </SignOutButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}
