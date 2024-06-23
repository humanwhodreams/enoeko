import { PageDescription } from "@/components/page-description";
import { PageHeader } from "@/components/page-header";

export function Home() {
  return (
    <section>
      <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
        <PageHeader>Services we offer!</PageHeader>
        <PageDescription>
          Our expert mobile team provides fast, reliable, affordable solutions
          for your utility needs. We&apos;re just a click away. Trust us to make
          your life easier, one service call at a time.
        </PageDescription>
      </div>
    </section>
  );
}
