import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { contactEmail, mailtoHref } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";

type ContactSectionProps = {
  dict: Dictionary;
};

const inputClass =
  "min-h-12 rounded-md border border-navy/12 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/38 focus:border-navy";

export function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              label={dict.contact.label}
              title={dict.contact.title}
              text={dict.contact.text}
            />
            <div className="mt-8 rounded-lg border border-navy/10 bg-white p-5">
              <p className="text-sm font-semibold text-ink">{contactEmail}</p>
              <p className="mt-2 text-sm leading-6 text-charcoal/62">{dict.footer.areas}</p>
            </div>
          </div>

          <form
            className="grid gap-4 rounded-lg border border-navy/10 bg-white p-5 shadow-line sm:p-6"
            data-ready-for-integration="true"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {dict.contact.fields.name}
                <input
                  className={inputClass}
                  name="name"
                  type="text"
                  placeholder={dict.contact.placeholders.name}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {dict.contact.fields.business}
                <input
                  className={inputClass}
                  name="business"
                  type="text"
                  placeholder={dict.contact.placeholders.business}
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {dict.contact.fields.email}
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  placeholder={dict.contact.placeholders.email}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {dict.contact.fields.phone}
                <input
                  className={inputClass}
                  name="phone"
                  type="tel"
                  placeholder={dict.contact.placeholders.phone}
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              {dict.contact.fields.type}
              <input
                className={inputClass}
                name="websiteType"
                type="text"
                placeholder={dict.contact.placeholders.type}
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              {dict.contact.fields.message}
              <textarea
                className="min-h-36 resize-y rounded-md border border-navy/12 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/38 focus:border-navy"
                name="message"
                placeholder={dict.contact.placeholders.message}
              />
            </label>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ButtonLink href={mailtoHref} icon={Mail}>
                {dict.common.email}
              </ButtonLink>
              <ButtonLink href={mailtoHref} variant="secondary">
                {dict.common.cta}
              </ButtonLink>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
