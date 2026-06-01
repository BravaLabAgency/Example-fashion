import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExampleFashionDetailPage } from "@/components/example-fashion/ExampleFashionPage";
import { isLanguage, languages, type Language } from "@/lib/constants";
import { exampleFashionCopy } from "@/lib/exampleFashionContent";

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

  return {
    title: `${copy.realLife.label} | ${copy.common.brand}`,
    description: copy.realLife.intro
  };
}

export default function StylePage({ params }: PageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }

  const lang = params.lang as Language;

  return <ExampleFashionDetailPage lang={lang} copy={exampleFashionCopy[lang]} page="style" />;
}
