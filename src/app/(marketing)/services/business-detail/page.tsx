import { OrderForm } from "@/components/order-form";
import { PageDescription } from "@/components/page-description";
import { PageHeader } from "@/components/page-header";
import React from "react";

export default function Page() {
  return (
    <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
      <PageHeader>Cogept Gas Services</PageHeader>
      <PageDescription>
        Cogept delivers clean and natural gas utility services right to your
        doorstep.{" "}
      </PageDescription>
      <div className="my-6">
        <h2 className="pb-8 text-3xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl md:text-center">
          Order Form
        </h2>
        <div>
            <OrderForm />
        </div>
      </div>
    </div>
  );
}
