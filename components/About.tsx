import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

type AboutProps = {
  dict: Dictionary;
};

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading label={dict.about.label} title={dict.about.title} />
          <div className="max-w-3xl text-lg leading-8 text-charcoal/76">
            <p>{dict.about.text}</p>
            <p className="mt-6">{dict.about.secondary}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
