import { SignedIn, SignedOut } from "@clerk/nextjs";

import { Brand } from "./brand";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { Suspense } from "react";
import { UserButton } from "./user-button";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export async function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link href={"/"}>
          <Brand />
        </Link>
        <div className="flex items-center gap-x-4 ">
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "ghost", className: "hidden md:block" })
            )}
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Services
          </Link>
          <a
            href={"#"}
            className={cn(
              buttonVariants({ variant: "ghost", className: "hidden md:block" })
            )}
          >
            Company
          </a>

          <SignedOut>
            <div className="invisible hidden md:flex md:visible md:gap-x-4">
              <Link
                href={"/sign-in"}
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <Suspense
              fallback={<Skeleton className="w-[28px] h-[28px] rounded-full" />}
            >
              <UserButton />
            </Suspense>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
