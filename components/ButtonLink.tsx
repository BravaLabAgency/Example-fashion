import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  icon?: LucideIcon;
  className?: string;
};

const variants = {
  primary:
    "border-navy bg-navy text-white hover:border-deep hover:bg-deep focus-visible:outline-navy",
  secondary:
    "border-navy/15 bg-white text-navy hover:border-navy hover:bg-porcelain focus-visible:outline-navy",
  quiet:
    "border-transparent bg-transparent text-navy hover:bg-white/70 focus-visible:outline-navy"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.9} />
    </a>
  );
}
