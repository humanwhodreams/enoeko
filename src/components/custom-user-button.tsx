"use client";

import {
  ArrowUpRight,
  Headset,
  Loader2,
  LogOut,
  ShoppingBag,
} from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignOutButton } from "@clerk/nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeSelect } from "./theme/theme-select";
import { cn } from "@/lib/utils";
import { focusRing } from "./utils/focus-ring";
import { useUser } from "@clerk/nextjs";

const useritems = [
  {
    title: "Account settings",
    href: "/account",
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
export function CUserButton() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <Skeleton className="w-7 h-[28px] rounded-full" />;
  }

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
          width={28}
          height={28}
          className="rounded-full hover:brightness-75"
        />
      </PopoverTrigger>
      <PopoverContent
        className="px-0 w-56 py-1 flex flex-col gap-y-2"
        align="end"
      >
        <div className="p-4 py-2">
          <div className="font-semibold text-sm">{user?.firstName}</div>
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
              className="w-full justify-start"
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
          <div className="flex w-full items-center justify-start px-3">
            <span className="text-sm font-medium">Theme</span>
            <div className="ml-auto">
              <ThemeSelect twWidth="w-[80px]" align="end" />
            </div>
          </div>
        </div>
        <hr className="border-border" />
        <div className="grid grid-cols-1 p-1">
          <Button
            type="button"
            variant={"ghost"}
            size={"sm"}
            className="w-full justify-start"
          >
            Customer care
            <Headset className="ml-auto size-4 text-muted-foreground" />
          </Button>
        </div>
        <hr className="border-border" />
        <div className="grid grid-cols-1 p-1">
          <SignOutButton>
            <Button
              type="button"
              variant={"ghost"}
              size={"sm"}
              className="w-full justify-start"
            >
              Sign Out
              <ClerkLoading>
                <Loader2 className="ml-auto size-4 text-muted-foreground" />
              </ClerkLoading>
              <ClerkLoaded>
                <LogOut className="ml-auto size-4 text-muted-foreground" />
              </ClerkLoaded>
            </Button>
          </SignOutButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}
