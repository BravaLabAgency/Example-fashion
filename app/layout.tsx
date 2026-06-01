import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://examplefashion.example"),
  title: "Example Fashion | Local fashion for everyday life",
  description:
    "A fictional local clothing store chain with modern collections, accessible style and warm physical stores.",
  keywords: [
    "local fashion",
    "clothing store",
    "seasonal collections",
    "store finder",
    "Example Fashion"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f0e8"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
