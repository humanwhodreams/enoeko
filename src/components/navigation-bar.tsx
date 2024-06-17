import { Brand } from "./brand";
import Link from "next/link";
import { ThemeDropdownMenu } from "./theme/theme-dropdown-menu";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex items-center max-w-screen-xl py-4">
        <Link href={"/"}>
          <Brand />
        </Link>
        <div className="flex flex-1 space-x-4 md:justify-end">
          <ThemeDropdownMenu />
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
      </div>
    </header>
  );
}
