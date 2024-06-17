import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enoeko | Mobile utility service for Automobiles & more in Nigeria.",
  description: "Mobile utility service for Automobiles & more in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased relative", inter.className)}>
        <Providers>
          <div className="absolute top-0 w-full h-full bg-background -z-10">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/20 dark:bg-primary opacity-50 blur-[80px]"></div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
