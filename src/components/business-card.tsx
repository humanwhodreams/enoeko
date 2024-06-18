import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChevronRightCircle, ShoppingCart } from "lucide-react";

import { Button } from "./ui/button";
import type { ClassValue } from "clsx";
import Link from "next/link";
import { business } from "@/types/business";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: ClassValue;

  href?: string;
}

export function Business({ children, className }: Props) {
  return <Card className={cn("hover:shadow-md", className)}>{children}</Card>;
}

export function Header({ children, className }: Props) {
  return <CardHeader className={cn(className)}>{children}</CardHeader>;
}
Business.Header = Header;

export function Title({ children, className, href = "#" }: Props) {
  return (
    <CardTitle className={cn(className)}>
      <Link href={href}>{children}</Link>
    </CardTitle>
  );
}
Business.Title = Title;

export function Description({ children, className }: Props) {
  return (
    <CardDescription className={cn(className)}>{children}</CardDescription>
  );
}
Business.Description = Description;

export function Content({ children, className }: Props) {
  return <CardContent className={cn(className)}>{children}</CardContent>;
}
Business.Content = Content;

export function Footer({ children, className }: Props) {
  return <CardFooter className={cn(className)}>{children}</CardFooter>;
}
Business.Footer = Footer;

export function LearnMore() {
  return (
    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-primary decoration-2 group-hover:underline font-medium">
      Learn more
      <ChevronRightCircle className="flex-shrink-0 size-4" />
    </span>
  );
}
Business.LearnMore = LearnMore;

interface CTAProps
  extends Omit<Props, "href" | "children">,
    Pick<business, "name" | "description"> {
  href: string;
}

export function CTA({ href, name, description, className }: CTAProps) {
  return (
    <Button type="button" variant={"default"} className={cn(className)} asChild>
      <Link href={`${href}?n=${name}&d=${description}`}>
        Place order
        <ShoppingCart className="flex-shrink-0 ml-2 size-4" />
      </Link>
    </Button>
  );
}
Business.CTA = CTA;
