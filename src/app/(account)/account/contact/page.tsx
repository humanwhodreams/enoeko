import { CallingSection } from "@/components/account/contact/calling-section";
import { OtherNumSection } from "@/components/account/contact/other-number-section";
import { PageHeader } from "@/components/account/page-header";
import { WhatsAppSection } from "@/components/account/contact/whatsapp-section";

export default function Page() {
  return (
    <>
      <PageHeader>Contact details</PageHeader>
      <section className="border-b">
        <WhatsAppSection />
      </section>
      <section className="border-b">
        <CallingSection />
      </section>
      <section>
        <OtherNumSection />
      </section>
    </>
  );
}
