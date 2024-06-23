import { Bookmark, Factory, Home, MapPin, Newspaper, Pin } from "lucide-react";

import Link from "next/link";
import { businesses } from "@/constants/businesses";

function convertToSlug(name: string): string {
  return name
    .trim() // Remove leading and trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except hyphens
    .replace(/\-\-+/g, "-"); // Replace multiple hyphens with a single hyphen
}

export function Products() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {businesses.map((bns, i) => (
        <Link href={`/services/${convertToSlug(bns.name)}`} key={i}>
          <div className="border shadow-sm rounded-xl md:p-0 bg-background">
            <div className="p-2">
              <div className="relative overflow-hidden border border-border rounded-xl">
                <img
                  src={`${bns.image}`}
                  alt={`${bns.name} random generated image`}
                  className="object-cover w-full h-64"
                />

                <div className="absolute top-0 left-0 right-0 m-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-sm font-medium bg-background text-foreground rounded-md">
                      {bns.category.replaceAll("-", " ")}
                    </span>

                    <div className="flex items-center p-1 rounded-md shadow-sm bg-background text-foreground">
                      <Bookmark className="flex-shrink-0 size-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-2 space-y-4">
              <div>
                <div className="flex items-center">
                  <Factory className="flex-shrink-0 mr-2 size-4" />
                  <p
                    className="text-lg font-semibold line-clamp-1"
                    title={bns.name}
                  >
                    {bns.name}
                  </p>
                </div>
                <div className="flex items-center">
                  <MapPin className="flex-shrink-0 mr-2 size-4" />
                  <p className="text-sm text-muted-foreground">{bns.address}</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-sm font-medium text-muted-foreground">
                  today&apos;s price &mdash; prices are subject to change
                </p>
                <p className="text-lg font-bold">
                  ₦{Math.floor(Math.random() * (1800 - 300 + 1)) + 300}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
