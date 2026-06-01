import { Check, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { mailtoHref } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";

type ServicesProps = {
  dict: Dictionary;
};

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          label={dict.services.label}
          title={dict.services.title}
          text={dict.services.intro}
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {dict.services.cards.map((service, index) => (
            <article
              key={service.name}
              className="flex h-full flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-line transition duration-200 hover:-translate-y-1 hover:border-navy/22"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-ink">{service.name}</h3>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy text-sm font-semibold text-white">
                  0{index + 1}
                </span>
              </div>
              <p className="text-sm leading-6 text-charcoal/72">{service.description}</p>
              <ul className="mt-7 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-charcoal/74">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-navy" strokeWidth={2} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-lg border border-navy/10 bg-porcelain p-6 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-base leading-7 text-charcoal/76">{dict.services.note}</p>
          <ButtonLink href={mailtoHref} icon={Mail} className="shrink-0">
            {dict.common.requestProposal}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
