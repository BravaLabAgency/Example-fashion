import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  text,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label ? (
        <p className="mb-4 text-xs font-semibold uppercase text-navy">{label}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-7 text-charcoal/72 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
