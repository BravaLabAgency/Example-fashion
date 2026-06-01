"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { languages, mailtoHref, type Language } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

type HeaderProps = {
  lang: Language;
  dict: Dictionary;
};

export function Header({ lang, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: dict.nav.home, href: `/${lang}#home` },
    { label: dict.nav.services, href: `/${lang}#services` },
    { label: dict.nav.process, href: `/${lang}#process` },
    { label: dict.nav.projects, href: `/${lang}#projects` },
    { label: dict.nav.about, href: `/${lang}#about` },
    { label: dict.nav.contact, href: `/${lang}#contact` }
  ];

  function handleLanguageChange(nextLang: string) {
    const hash = window.location.hash || "";
    window.location.href = `/${nextLang}${hash}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <a href={`/${lang}#home`} className="group inline-flex items-center gap-3">
          <span className="brand-mark h-10 w-10 rounded-md border border-navy/10 shadow-line" aria-hidden="true" />
          <span className="font-logo text-xl font-semibold tracking-normal text-navy">
            {dict.common.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label={dict.common.menu}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal/72 transition hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <label className="sr-only" htmlFor="language">
            {dict.common.language}
          </label>
          <select
            id="language"
            value={lang}
            onChange={(event) => handleLanguageChange(event.target.value)}
            className="h-11 rounded-md border border-navy/15 bg-white px-3 text-sm font-semibold text-navy outline-none transition hover:border-navy/30 focus:border-navy"
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.short}
              </option>
            ))}
          </select>
          <a
            href={mailtoHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-navy bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:border-deep hover:bg-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            <span>{dict.common.cta}</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.9} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-grid h-11 w-11 place-items-center rounded-md border border-navy/15 bg-white text-navy lg:hidden"
          aria-label={open ? dict.common.close : dict.common.menu}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-navy/10 bg-white px-5 py-5 shadow-soft lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label={dict.common.menu}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-charcoal transition hover:bg-porcelain hover:text-navy"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <label className="sr-only" htmlFor="mobile-language">
              {dict.common.language}
            </label>
            <select
              id="mobile-language"
              value={lang}
              onChange={(event) => handleLanguageChange(event.target.value)}
              className="h-11 rounded-md border border-navy/15 bg-white px-3 text-sm font-semibold text-navy outline-none focus:border-navy"
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.short}
                </option>
              ))}
            </select>
            <a
              href={mailtoHref}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border border-navy bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:border-deep hover:bg-deep"
            >
              <span>{dict.common.cta}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
