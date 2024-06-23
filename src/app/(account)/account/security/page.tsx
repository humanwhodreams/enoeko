import { DangerSection } from "@/components/account/security/danger-section";
import { PageHeader } from "@/components/account/page-header";

export default function Page() {
  return (
    <>
      <PageHeader>Security</PageHeader>
      <section className="border-b">
        <DangerSection />
      </section>
    </>
  );
}
