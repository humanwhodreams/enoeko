import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/account/page-header";

export default function Page() {
  return (
    <>
      <PageHeader>Orders</PageHeader>
      <section className="border-b">
        <div className="grid p-6 place-items-center">
          <div className="font-medium text-muted-foreground">
            no orders yet!
          </div>
        </div>
      </section>
      <section>
        <div className="grid p-6 place-items-center">
          <div>
            <Button type="button" size={"lg"}>
              See services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
