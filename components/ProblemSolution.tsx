import { BadgeCheck, Contact, PanelTop } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

type ProblemSolutionProps = {
  dict: Dictionary;
};

const icons = [BadgeCheck, PanelTop, Contact];

export function ProblemSolution({ dict }: ProblemSolutionProps) {
  return (
    <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            label={dict.problem.label}
            title={dict.problem.title}
            text={dict.problem.text}
          />
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {dict.problem.blocks.map((block, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={block.title}
                  className="rounded-lg border border-navy/10 bg-paper p-5 transition duration-200 hover:-translate-y-1 hover:border-navy/22"
                >
                  <Icon className="mb-5 h-5 w-5 text-navy" strokeWidth={1.8} />
                  <h3 className="text-lg font-semibold text-ink">{block.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/70">{block.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
