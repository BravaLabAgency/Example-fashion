import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExampleFashionCollectionLookbookPage } from "@/components/example-fashion/ExampleFashionPage";
import { isLanguage, languages, type Language } from "@/lib/constants";
import {
  collectionLookbookSlugs,
  exampleFashionCopy,
  exampleFashionEditorialCopy,
  type CollectionLookbookSlug
} from "@/lib/exampleFashionContent";

type PageProps = {
  params: {
    lang: string;
    collection: string;
  };
};

function isCollectionLookbookSlug(value: string): value is CollectionLookbookSlug {
  return collectionLookbookSlugs.some((slug) => slug === value);
}

export function generateStaticParams() {
  return languages.flatMap((language) =>
    collectionLookbookSlugs.map((collection) => ({
      lang: language.code,
      collection
    }))
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const lang = isLanguage(params.lang) ? params.lang : "es";
  const collection = isCollectionLookbookSlug(params.collection) ? params.collection : "spring";
  const copy = exampleFashionCopy[lang];
  const lookbook = exampleFashionEditorialCopy[lang].collectionLookbooks[collection];

  return {
    title: `${lookbook.title} | ${copy.common.brand}`,
    description: lookbook.intro
  };
}

export default function CollectionLookbookPage({ params }: PageProps) {
  if (!isLanguage(params.lang) || !isCollectionLookbookSlug(params.collection)) {
    notFound();
  }

  const lang = params.lang as Language;

  return (
    <ExampleFashionCollectionLookbookPage
      lang={lang}
      copy={exampleFashionCopy[lang]}
      collection={params.collection}
    />
  );
}
