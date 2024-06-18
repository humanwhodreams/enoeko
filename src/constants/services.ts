import { Bolt, Droplets, Fuel, Recycle, Truck } from "lucide-react";

import type { service } from "@/types/service";

export const services: service[] = [
  {
    title: "Cooking Gas service",
    href: "/services/cooking-gas",
    available: true,
    icon: Truck,
    description:
      "Fast, reliable cooking gas to your doorstep! Available 24/7, ensuring you never run out. Affordable, convenient, and safe. Order now for a hassle-free experience. Gaas up without the wait!",
  },
  {
    title: "Diesel service",
    href: "/services/diesel",
    available: true,
    icon: Fuel,
    description:
      "Fast, reliable gas delivery to your doorstep! Available 24/7, ensuring you never run out. Affordable, convenient, and safe. Order now for a hassle-free experience. Fuel up without the wait!",
  },
  {
    title: "Car Wash service",
    href: "/services",
    available: false,
    icon: Droplets,
    description:
      "Experience the convenience of a spotless car without leaving home! Our mobile car wash service is fast, professional, and eco-friendly. Book now for a gleaming shine, right at your doorstep.",
  },
  {
    title: "Automobile Consulting service",
    available: false,
    href: "/services",
    icon: Bolt,
    description:
      "Experience the convenience of a spotless car without leaving home! Our mobile car wash service is fast, professional, and eco-friendly. Book now for a gleaming shine, right at your doorstep.",
  },

  {
    title: "CNG Conversion service",
    href: "/services",
    available: false,
    icon: Recycle,
    description:
      "Experience the convenience of a spotless car without leaving home! Our mobile car wash service is fast, professional, and eco-friendly. Book now for a gleaming shine, right at your doorstep.",
  },
];
