import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { WebMockup } from "@/components/WebMockup";
import { mailtoHref, type Language } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";

type HeroProps = {
  lang: Language;
  dict: Dictionary;
};

export function Hero({ lang, dict }: HeroProps) {
  return (
    <section id="home" className="overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-3 rounded-md border border-navy/10 bg-white/72 px-3 py-2 text-xs font-semibold uppercase text-navy shadow-line">
            <span className="brand-mark h-6 w-6 rounded" aria-hidden="true" />
            <span>{dict.hero.eyebrow}</span>
          </div>
          <h1 className="text-balance font-logo text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/76">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={mailtoHref} icon={Mail}>
              {dict.common.cta}
            </ButtonLink>
            <ButtonLink href={`/${lang}#services`} variant="secondary">
              {dict.common.seeServices}
            </ButtonLink>
          </div>
        </div>
        <div className="animate-fade-up-delayed pb-8 sm:pb-10">
          <WebMockup dict={dict} />
        </div>
      </Container>
    </section>
  );
}
