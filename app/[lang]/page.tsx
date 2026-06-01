import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExampleFashionPage } from "@/components/example-fashion/ExampleFashionPage";
import { exampleFashionCopy } from "@/lib/exampleFashionContent";
import { isLanguage, languages, type Language } from "@/lib/constants";

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
    title: copy.metadata.title,
    description: copy.metadata.description,
    keywords: [...copy.metadata.keywords],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ca: "/ca",
        es: "/es",
        en: "/en",
        ru: "/ru"
      }
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      type: "website",
      locale: lang,
      images: [copy.hero.image]
    }
  };
}

export default function HomePage({ params }: PageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }

  const lang = params.lang as Language;

  return <ExampleFashionPage lang={lang} copy={exampleFashionCopy[lang]} />;
}
