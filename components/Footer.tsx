import { Linkedin, Instagram, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { contactEmail, mailtoHref, type Language } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";

type FooterProps = {
  lang: Language;
  dict: Dictionary;
};

export function Footer({ lang, dict }: FooterProps) {
  const links = [
    { label: dict.nav.services, href: `/${lang}#services` },
    { label: dict.nav.process, href: `/${lang}#process` },
    { label: dict.nav.projects, href: `/${lang}#projects` },
    { label: dict.nav.about, href: `/${lang}#about` },
    { label: dict.nav.contact, href: `/${lang}#contact` }
  ];

  return (
    <footer className="border-t border-navy/10 bg-white py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href={`/${lang}#home`} className="inline-flex items-center gap-3">
              <span className="brand-mark h-10 w-10 rounded-md" aria-hidden="true" />
              <span className="font-logo text-xl font-semibold text-navy">
                {dict.common.brand}
              </span>
            </a>
            <p className="mt-3 text-sm leading-6 text-charcoal/68">{dict.footer.tagline}</p>
            <p className="mt-5 text-sm font-semibold text-charcoal">{dict.footer.country}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-charcoal/62">{dict.footer.areas}</p>
          </div>

          <nav className="grid gap-3" aria-label={dict.common.menu}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/68 transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="text-sm font-semibold text-ink">{dict.nav.contact}</p>
            <a
              href={mailtoHref}
              className="mt-3 inline-flex items-center gap-2 text-sm text-charcoal/68 transition hover:text-ink"
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} />
              {contactEmail}
            </a>
            <p className="mt-6 text-sm font-semibold text-ink">{dict.footer.social}</p>
            <div className="mt-3 flex flex-col gap-3">
              <a href="#" className="inline-flex items-center gap-2 text-sm text-charcoal/68 transition hover:text-ink">
                <Instagram className="h-4 w-4" strokeWidth={1.8} />
                {dict.footer.instagram}
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-sm text-charcoal/68 transition hover:text-ink">
                <Linkedin className="h-4 w-4" strokeWidth={1.8} />
                {dict.footer.linkedin}
              </a>
            </div>
          </div>

          <div className="grid content-start gap-3">
            {dict.footer.legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-charcoal/62 transition hover:text-ink"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
