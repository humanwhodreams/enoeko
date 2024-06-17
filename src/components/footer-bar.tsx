import Link from "next/link";
import { services } from "@/constants/services";
import { socials } from "@/constants/socials";

export function FooterBar() {
  return (
    <footer className="w-full p-4 border-t sm:p-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              {/* TODO Add logo mark */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                enoeko
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Services</h2>
              <ul className="text-muted-foreground">
                {services.map((service) => (
                  <li className="mb-4" key={service.title}>
                    <Link href={service.href} className="hover:text-primary">
                      {service.title.replace("service", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="text-muted-foreground">
                {socials.map((social) => (
                  <li className="mb-4" key={social.title}>
                    <a
                      href={social.href}
                      className="hover:text-primary"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {social.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-muted-foreground">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-muted sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">
            &copy; 2024{" "}
            <Link href="/" className="hover:underline">
              enoeko
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socials.map((social) => (
              <a
                key={social.title}
                className="text-muted hover:text-gray-900 dark:hover:text-primary"
                href={social.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
