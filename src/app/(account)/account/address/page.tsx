import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHeader } from "@/components/account/page-header";
import { PlusCircle } from "lucide-react";

export default function Page() {
  return (
    <>
      <PageHeader>Address book</PageHeader>
      <section className="border-b">
        {/* <div className="grid items-center grid-cols-3 p-6">
          <div className="font-medium">Home</div>
          <div className="col-span-2">no address added!</div>
        </div> */}

        <div className="grid p-6 place-items-center">
          <div className="font-medium text-muted-foreground">
            no address added!
          </div>
        </div>
      </section>
      <section>
        <div className="grid p-4 place-items-center">
          <Button type="button" variant={"ghost"} size={"sm"} asChild>
            <Link href={"/account/address/create"}>
              <PlusCircle className="flex-shrink-0 mr-2 size-4" />
              Add address
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
