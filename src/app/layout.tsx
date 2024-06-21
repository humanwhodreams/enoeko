import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import Providers from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwindcss-indicator";
import { cn } from "@/lib/utils";
import { inter_local } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Enoeko | Mobile utility service in Nigeria.",
  description: "Mobile utility services in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("antialiased relative", inter_local.className)}>
          <Providers mode="light">
            <div className="absolute top-0 w-full h-full bg-background -z-10">
              <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/10 opacity-50 blur-[80px]"></div>
            </div>
            {children}
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
