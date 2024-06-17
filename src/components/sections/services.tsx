import { ChevronRight, ChevronRightCircle, Home } from "lucide-react";

import { services } from "@/constants/services";

export function Services() {
  return (
    <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-start gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.href}
              className="flex flex-col justify-center p-4 group hover:bg-muted rounded-xl md:p-7"
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
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightCircle className="flex-shrink-0 size-4" />
                </span>
              </div>
            </a>
          ))}

          <a
            className="p-4 rounded-xl md:p-7 hover:bg-muted"
            href="/services"
          >
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-x-1.5">
                See more services{" "}
                <ChevronRightCircle className="flex-shrink-0 size-4" />
              </h3>
              <p className="mt-1 text-muted-foreground">
                More services offered by Enoeko
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
