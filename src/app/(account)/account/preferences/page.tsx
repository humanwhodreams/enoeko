import { GlobalSection } from "@/components/account/preferences/global-section";
import { PageHeader } from "@/components/account/page-header";

export default function Page() {
  return (
    <>
      <PageHeader>Preferences</PageHeader>
      <section className="border-b">
        <GlobalSection />
      </section>
    </>
  );
}
