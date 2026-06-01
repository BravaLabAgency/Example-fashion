import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

type ProcessProps = {
  dict: Dictionary;
};

export function Process({ dict }: ProcessProps) {
  return (
    <section id="process" className="border-y border-navy/10 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading label={dict.process.label} title={dict.process.title} align="center" />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {dict.process.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-navy/10 bg-paper p-5"
            >
              <span className="mb-7 grid h-10 w-10 place-items-center rounded-md bg-navy text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
