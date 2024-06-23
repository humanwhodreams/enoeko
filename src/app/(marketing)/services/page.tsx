import { FilterSideBar } from "@/components/filter-sidebar";
import { PageDescription } from "@/components/page-description";
import { PageHeader } from "@/components/page-header";
import { Products } from "@/components/sections/products";

export default function Page() {
  return (
    <div className="relative md:flex md:items-start bg-muted">
      <div className="sticky top-0 bottom-0 left-0 hidden md:block">
        <FilterSideBar />
      </div>
      <main className="p-4 md:border-l md:py-6">
        <PageHeader.Left>All Services</PageHeader.Left>
        <PageDescription.Left>
          All services provided by Enoeko vendors around you.
        </PageDescription.Left>
        <section>
          <div className="my-6">
            <Products />
          </div>
        </section>
      </main>
    </div>
  );
}
