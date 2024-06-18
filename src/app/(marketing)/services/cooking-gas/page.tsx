import BusinessCard from "@/components/BusinessCard";
import { Businesses } from "@/constants/business";
import React from "react";

export default function Page() {
  return (
    <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto  lg:py-16">
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        Cooking Gas service
      </h1>
      <p className="mb-8 text-lg font-normal text-center lg:text-xl sm:px-16 lg:px-40 text-foreground">
        Fast, reliable cooking gas to your doorstep! Available 24/7, ensuring
        you never run out. Affordable, convenient, and safe. Order now for a
        hassle-free experience. Gaas up without the wait!
      </p>
      <div className="mt-4">
        <h2 className="mb-4 mt-4 text-3xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">
          Businesses
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Businesses.map((business, index) => (
            <BusinessCard
              image={business.image}
              name={business.name}
              address={business.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
