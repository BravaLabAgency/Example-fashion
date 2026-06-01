import {
  Compass,
  FileText,
  Handshake,
  MapPin,
  Smartphone,
  Sparkles
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/dictionaries";

type ValuePropsProps = {
  dict: Dictionary;
};

const icons = [Sparkles, Smartphone, FileText, Handshake, Compass, MapPin];

export function ValueProps({ dict }: ValuePropsProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading label={dict.value.label} title={dict.value.title} />
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {dict.value.points.map((point, index) => {
              const Icon = icons[index];
              return (
                <article key={point.title} className="border-t border-navy/12 pt-5">
                  <Icon className="mb-4 h-5 w-5 text-navy" strokeWidth={1.8} />
                  <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/70">{point.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
