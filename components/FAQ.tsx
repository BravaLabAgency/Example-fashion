import { Plus } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

type FAQProps = {
  dict: Dictionary;
};

export function FAQ({ dict }: FAQProps) {
  return (
    <section className="border-y border-navy/10 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading label={dict.faq.label} title={dict.faq.title} />
          <div className="divide-y divide-navy/10 rounded-lg border border-navy/10 bg-paper">
            {dict.faq.items.map((item, index) => (
              <details key={item.question} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-ink marker:hidden">
                  <span>{item.question}</span>
                  <Plus
                    className="h-5 w-5 shrink-0 text-navy transition duration-200 group-open:rotate-45"
                    strokeWidth={1.8}
                  />
                </summary>
                <div className="px-5 pb-5 text-sm leading-6 text-charcoal/72">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
