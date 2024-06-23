"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import * as React from "react";
import { Card, CardContent } from "./ui/card";

export function BusinessImage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full px-4 lg:px-0">
      <Carousel setApi={setApi} className="relative w-full lg:mx-auto lg:w-4/5">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center p-4 aspect-square">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible hidden lg:flex lg:visible" />
        <CarouselNext className="invisible hidden lg:flex lg:visible" />
      </Carousel>
      <div className="py-2 text-sm text-center text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
