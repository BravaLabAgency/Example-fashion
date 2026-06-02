import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExampleFashionStyleGuidePage } from "@/components/example-fashion/ExampleFashionPage";
import { isLanguage, languages, type Language } from "@/lib/constants";
import { exampleFashionCopy, exampleFashionEditorialCopy } from "@/lib/exampleFashionContent";

type PageProps = {
  params: {
    lang: string;
  };
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const lang = isLanguage(params.lang) ? params.lang : "es";
  const copy = exampleFashionCopy[lang];
  const guide = exampleFashionEditorialCopy[lang].styleGuide;

  return {
    title: `${guide.title} | ${copy.common.brand}`,
    description: guide.subtitle
  };
}

export default function StylePage({ params }: PageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }

  const lang = params.lang as Language;

  return <ExampleFashionStyleGuidePage lang={lang} copy={exampleFashionCopy[lang]} />;
}
