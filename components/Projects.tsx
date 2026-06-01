import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

type ProjectsProps = {
  dict: Dictionary;
};

export function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="border-y border-navy/10 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          label={dict.projects.label}
          title={dict.projects.title}
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {dict.projects.demos.map((demo) => (
            <article
              key={demo.title}
              className="overflow-hidden rounded-lg border border-navy/10 bg-paper transition duration-200 hover:-translate-y-1 hover:border-navy/22"
            >
              <div className="grid aspect-[4/3] place-items-center border-b border-navy/10 bg-gradient-to-br from-white via-porcelain to-sky/70 p-6">
                <div className="grid h-full w-full place-items-center rounded-md border border-dashed border-navy/22 bg-white/56">
                  <span className="text-sm font-semibold text-navy/50">{demo.placeholder}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-ink">{demo.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-navy" strokeWidth={1.8} />
                </div>
                <p className="mt-4 text-sm leading-6 text-charcoal/72">{demo.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-charcoal/62">
          {dict.projects.note}
        </p>
      </Container>
    </section>
  );
}
