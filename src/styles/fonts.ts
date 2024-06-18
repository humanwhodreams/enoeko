import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const inter_local = LocalFont({
  src: [
    {
      path: "./inter/Inter-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./inter/Inter-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./inter/Inter-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./inter/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./inter/Inter-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ]
});
