import { ConnectedSection } from "@/components/account/profile/connected-section";
import { EmailSection } from "@/components/account/profile/email-section";
import { ImageSection } from "@/components/account/profile/image-section";
import Loading from "../loading";
import { NameSection } from "@/components/account/profile/name-section";
import { PageHeader } from "@/components/account/page-header";
import { Suspense } from "react";

export default async function Page() {
  return (
    <>
      <PageHeader>Profile details</PageHeader>
      <Suspense fallback={<Loading />}>
        <section className="border-b">
          <ImageSection />
        </section>
        <section className="border-b">
          <NameSection />
        </section>
        <section className="border-b">
          <EmailSection />
        </section>
        <section>
          <ConnectedSection />
        </section>
      </Suspense>
    </>
  );
}
