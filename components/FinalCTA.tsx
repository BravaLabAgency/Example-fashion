import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { mailtoHref } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";

type FinalCTAProps = {
  dict: Dictionary;
};

export function FinalCTA({ dict }: FinalCTAProps) {
  return (
    <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <Container className="rounded-lg border border-navy/10 bg-navy px-6 py-12 text-white shadow-soft sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {dict.finalCta.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg">
              {dict.finalCta.text}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={mailtoHref} icon={Mail} className="border-white bg-white text-navy hover:border-sky hover:bg-sky">
              {dict.common.cta}
            </ButtonLink>
            <ButtonLink href={mailtoHref} variant="quiet" icon={Mail} className="border-white/18 text-white hover:bg-white/10">
              {dict.common.email}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
