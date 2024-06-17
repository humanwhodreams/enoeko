import { Droplets, Fuel, Truck } from "lucide-react";

import type { service } from "@/types/service";

export const services: service[] = [
  {
    title: "Cooking Gas service",
    href: "/services/cooking-gas",
    icon: Truck,
    description:
      "Fast, reliable cooking gas to your doorstep! Available 24/7, ensuring you never run out. Affordable, convenient, and safe. Order now for a hassle-free experience. Gaas up without the wait!",
  },
  {
    title: "Diesel service",
    href: "/services/diesel",
    icon: Fuel,
    description:
      "Fast, reliable gas delivery to your doorstep! Available 24/7, ensuring you never run out. Affordable, convenient, and safe. Order now for a hassle-free experience. Fuel up without the wait!",
  },
  {
    title: "Car Wash service",
    href: "/services/car-wash",
    icon: Droplets,
    description:
      "Experience the convenience of a spotless car without leaving home! Our mobile car wash service is fast, professional, and eco-friendly. Book now for a gleaming shine, right at your doorstep.",
  },
];
