import { Business } from "@/components/business-card";
import { BusinessImage } from "@/components/business-card-image";
import { PageDescription } from "@/components/page-description";
import { PageHeader } from "@/components/page-header";
import { businesses } from "@/constants/businesses";

export default function Page() {
  return (
    <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
      <PageHeader>Diesel Service</PageHeader>
      <PageDescription>
        Fast, reliable cooking gas to your doorstep! Available 24/7, ensuring
        you never run out. Affordable, convenient, and safe. Order now for a
        hassle-free experience. Gaas up without the wait!
      </PageDescription>
      <div className="my-6">
        <h2 className="pb-8 text-3xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl md:text-center">
          Popular Business
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {businesses.map((bns, index) => (
            <Business key={index}>
              <Business.Header>
                <Business.Title>{bns.name}</Business.Title>
                <Business.Description>{bns.description}</Business.Description>
              </Business.Header>
              <BusinessImage />
              <Business.Content>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">
                      Address
                    </div>
                    <hr className="border-border" />
                    <p className="font-medium">{bns.address}</p>
                  </div>
                </div>
              </Business.Content>
              <Business.Footer className="flex flex-col items-start">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-sm font-medium text-muted-foreground">
                    {bns.contact.email}
                  </p>
                  <Business.CTA
                    name={bns.name}
                    description={bns.description}
                    href="#"
                  />
                </div>
              </Business.Footer>
            </Business>
          ))}
        </div>
      </div>
    </div>
  );
}
