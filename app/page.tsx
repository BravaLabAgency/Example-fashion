import { ExampleFashionPage } from "@/components/example-fashion/ExampleFashionPage";
import { defaultLang } from "@/lib/constants";
import { exampleFashionCopy } from "@/lib/exampleFashionContent";

export default function RootPage() {
  return <ExampleFashionPage lang={defaultLang} copy={exampleFashionCopy[defaultLang]} />;
}
