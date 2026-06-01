import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outDir = path.resolve("out");
const previewDir = path.join(outDir, "preview");
const languages = ["ca", "es", "en", "ru"];
const staticPages = ["", "/difference", "/news", "/style-guide"];
const lookbooks = ["spring", "summer", "essentials", "new-arrivals"];
const routes = [
  ...staticPages,
  ...lookbooks.map((slug) => `/lookbook/${slug}`)
];

fs.rmSync(previewDir, { recursive: true, force: true });
fs.mkdirSync(previewDir, { recursive: true });

for (const language of languages) {
  fs.mkdirSync(path.join(previewDir, language, "lookbook"), { recursive: true });
}

const assetBase = pathToFileURL(`${outDir}/`).href.replace(/\/$/, "");

function outputPath(language, route) {
  return route ? `${language}${route}.html` : `${language}.html`;
}

function previewPath(language, route) {
  return route ? `preview/${language}${route}.html` : `preview/${language}.html`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function rewrite(html) {
  let rewritten = html
    .replace(/(href|src)="\/_next\//g, `$1="${assetBase}/_next/`)
    .replace(/(href|src)="\/example-fashion\//g, `$1="${assetBase}/example-fashion/`);

  for (const language of languages) {
    rewritten = rewritten.replace(
      new RegExp(`href="/${language}#([^"]+)"`, "g"),
      `href="${assetBase}/preview/${language}.html#$1"`
    );

    for (const route of routes.filter(Boolean).sort((a, b) => b.length - a.length)) {
      rewritten = rewritten.replace(
        new RegExp(`href="/${language}${escapeRegExp(route)}"`, "g"),
        `href="${assetBase}/${previewPath(language, route)}"`
      );
    }
  }

  return rewritten;
}

for (const language of languages) {
  for (const route of routes) {
    const source = path.join(outDir, outputPath(language, route));
    const target = path.join(outDir, previewPath(language, route));

    if (!fs.existsSync(source)) {
      throw new Error(`Missing export: ${source}`);
    }

    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, rewrite(fs.readFileSync(source, "utf8")));
  }
}

console.log(path.join(previewDir, "en.html"));
