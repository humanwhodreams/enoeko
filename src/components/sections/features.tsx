import { BadgeCheck } from "lucide-react";

export function Features() {
  return (
    <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center gap-6 px-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:pe-6 xl:pe-12">
              <p className="text-6xl font-bold leading-10 text-primary">
                92%
                <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2">
                  <BadgeCheck className="flex-shrink-0 size-4" />
                  +7% this month
                </span>
              </p>
              <p className="mt-2 text-gray-500 sm:mt-3">
                of Nigerians have bought from businesses using Enoeko
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-8 lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
              <div>
                <p className="text-3xl font-semibold text-primary">99.95%</p>
                <p className="mt-1 text-muted-foreground">in fulfilling orders</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-primary">30+</p>
                <p className="mt-1 text-muted-foreground">partner with Enoeko</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-primary">85%</p>
                <p className="mt-1 text-muted-foreground">this year alone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
