import React from "react";
import { Alert } from "../ui/alert";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/constants/services";
import { ChevronRightCircle } from "lucide-react";

export default function ServiceHome() {
  return (
    <section>
      <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto  lg:py-16">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Services We Offer!
        </h1>
        <p className="mb-8 text-lg font-normal text-center lg:text-xl sm:px-16 lg:px-40 text-foreground">
          Our expert mobile team provides fast, reliable, affordable solutions
          for your utility needs. We&apos;re just a click away. Trust us to make
          your life easier, one service call at a time.
        </p>

        <div className="grid items-start gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => (
            <a
              key={service.href}
              className="flex flex-col justify-center p-4 group hover:bg-muted/20 rounded-xl md:p-7"
              href={service.href}
            >
              <div className="flex items-center justify-center bg-primary size-12 rounded-xl">
                <service.icon className="flex-shrink-0 text-primary-foreground size-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold group-hover:text-muted-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {service.description}{" "}
                </p>
                {service.available === true ? (
                  <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-primary decoration-2 group-hover:underline font-medium">
                    Learn more
                    <ChevronRightCircle className="flex-shrink-0 size-4" />
                  </span>
                ) : (
                  <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-primary decoration-2 group-hover:underline font-medium">
                    Coming soon...
                    <ChevronRightCircle className="flex-shrink-0 size-4" />
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
