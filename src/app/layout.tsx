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
      <body className={cn("antialiased", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
