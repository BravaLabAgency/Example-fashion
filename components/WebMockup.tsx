import type { Dictionary } from "@/lib/dictionaries";

type WebMockupProps = {
  dict: Dictionary;
};

export function WebMockup({ dict }: WebMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-label={dict.hero.visualLabel}>
      <div className="rounded-lg border border-navy/12 bg-white p-3 shadow-soft">
        <div className="overflow-hidden rounded-md border border-navy/10 bg-paper">
          <div className="flex items-center justify-between border-b border-navy/10 bg-white px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-navy" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky" />
              <span className="h-2.5 w-2.5 rounded-full bg-bluegrey" />
            </div>
            <div className="hidden gap-5 text-xs font-medium text-charcoal/55 sm:flex">
              {dict.hero.mockupMenu.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-[1.05fr_0.95fr] sm:p-7">
            <div className="flex min-h-64 flex-col justify-between rounded-md bg-white p-5">
              <div>
                <span className="brand-mark mb-5 block h-11 w-11 rounded-md" aria-hidden="true" />
                <h3 className="font-logo text-2xl font-semibold text-ink">
                  {dict.hero.mockupTitle}
                </h3>
                <p className="mt-3 max-w-56 text-sm leading-6 text-charcoal/68">
                  {dict.hero.mockupSubtitle}
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-2" aria-hidden="true">
                <span className="h-16 rounded-md bg-porcelain" />
                <span className="h-16 rounded-md bg-sky/70" />
                <span className="h-16 rounded-md bg-navy/10" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-[4/3] rounded-md border border-navy/10 bg-gradient-to-br from-porcelain via-white to-sky/70 p-4">
                <div className="flex h-full flex-col justify-end">
                  <span className="mb-3 h-2 w-24 rounded-full bg-navy/22" />
                  <span className="h-2 w-32 rounded-full bg-navy/12" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3" aria-hidden="true">
                <span className="h-20 rounded-md bg-white" />
                <span className="h-20 rounded-md bg-navy/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 right-4 hidden w-36 rounded-lg border border-navy/12 bg-white p-2 shadow-soft sm:block">
        <div className="rounded-md border border-navy/10 bg-paper p-2">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-navy/22" />
          <div className="aspect-[9/16] rounded-md bg-gradient-to-b from-white via-porcelain to-sky/70 p-3">
            <span className="brand-mark block h-8 w-8 rounded" aria-hidden="true" />
            <span className="mt-4 block h-16 rounded-md bg-white" />
            <span className="mt-3 block h-2 w-20 rounded-full bg-navy/16" />
            <span className="mt-2 block h-2 w-16 rounded-full bg-navy/10" />
          </div>
        </div>
        <span className="sr-only">{dict.hero.mockupPhone}</span>
      </div>
    </div>
  );
}
