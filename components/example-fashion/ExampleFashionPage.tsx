"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe2,
  Mail,
  Menu,
  Phone,
  Star,
  X
} from "lucide-react";
import { languages, type Language } from "@/lib/constants";
import {
  collectionLookbookSlugs,
  exampleFashionEditorialCopy,
  exampleFashionFallbackImage,
  type CollectionLookbookSlug,
  type ExampleFashionCopy
} from "@/lib/exampleFashionContent";

type ExampleFashionPageProps = {
  lang: Language;
  copy: ExampleFashionCopy;
};

type DetailPage = "difference" | "news";

type DetailPageProps = ExampleFashionPageProps & {
  page: DetailPage;
};

type StyleGuidePageProps = ExampleFashionPageProps;

type CollectionLookbookPageProps = ExampleFashionPageProps & {
  collection: CollectionLookbookSlug;
};

type RetailImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  fallback?: string;
};

function RetailImage({ src, alt, priority, sizes, fallback = exampleFashionFallbackImage }: RetailImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() => {
        if (currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}

function Stars({ label }: { label: string }) {
  return (
    <span className="ef-stars" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" fill="currentColor" />
      ))}
    </span>
  );
}

function useRetailReveal(lang: Language) {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-retail-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [lang]);
}

function useSiteNav(lang: Language, copy: ExampleFashionCopy) {
  const hrefFor = useLocalizedHref(lang);

  return useMemo(
    () =>
      copy.nav.map((item) => ({
        ...item,
        href: hrefFor(item.href.startsWith("/") ? item.href : `#${item.href}`)
      })),
    [copy.nav, hrefFor]
  );
}

function getRoutePathFromFileHref(href: string, previewRoot: string, lang: string) {
  const raw = href.split("#")[0].slice(previewRoot.length);
  const escapedLang = lang.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = raw.match(new RegExp(`^${escapedLang}(?:/(.+)\\.html|\\.html)$`));
  return match?.[1] ? `/${match[1]}` : "";
}

function useLocalizedHref(lang: Language) {
  const [previewRoot, setPreviewRoot] = useState<string | null>(null);

  useEffect(() => {
    const marker = "/preview/";
    const index = window.location.href.indexOf(marker);
    setPreviewRoot(window.location.protocol === "file:" && index >= 0 ? window.location.href.slice(0, index + marker.length) : null);
  }, []);

  return useMemo(
    () =>
      function hrefFor(target: string) {
        if (target.startsWith("#")) {
          return previewRoot ? `${previewRoot}${lang}.html${target}` : `/${lang}${target}`;
        }

        const route = target.startsWith("/") ? target : `/${target}`;
        return previewRoot ? `${previewRoot}${lang}${route}.html` : `/${lang}${route}`;
      },
    [lang, previewRoot]
  );
}

function SiteFrame({
  lang,
  copy,
  children
}: ExampleFashionPageProps & {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = useSiteNav(lang, copy);
  const hrefFor = useLocalizedHref(lang);

  useEffect(() => {
    document.body.classList.toggle("site-is-locked", menuOpen);

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("site-is-locked");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  function changeLanguage(nextLang: string) {
    const hash = window.location.hash || "";
    const marker = "/preview/";
    const previewIndex = window.location.href.indexOf(marker);

    if (window.location.protocol === "file:" && previewIndex >= 0) {
      const previewRoot = window.location.href.slice(0, previewIndex + marker.length);
      const routePath = getRoutePathFromFileHref(window.location.href, previewRoot, lang);
      window.location.href = `${previewRoot}${nextLang}${routePath}.html${hash}`;
      return;
    }

    const path = window.location.pathname.replace(/^\/(ca|es|en|ru)(?=\/|$)/, `/${nextLang}`);
    window.location.href = path === window.location.pathname ? `/${nextLang}${hash}` : `${path}${hash}`;
  }

  return (
    <div className="ef-page">
      <header className="ef-header">
        <a className="ef-wordmark" href={hrefFor("#home")} aria-label={copy.common.brand}>
          {copy.common.brand}
        </a>

        <nav className="ef-primary-nav" aria-label={copy.common.menu}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ef-header-tools">
          <div className="ef-language" aria-label={copy.common.language}>
            <Globe2 aria-hidden="true" />
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                className={language.code === lang ? "is-active" : ""}
                onClick={() => changeLanguage(language.code)}
                aria-label={language.label}
              >
                {language.short}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="ef-menu-button"
            aria-label={menuOpen ? copy.common.close : copy.common.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className={`ef-mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label={copy.common.menu}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {children}

      <footer className="ef-footer">
        <strong>{copy.common.brand}</strong>
        <p>{copy.footer.tagline}</p>
        <p>{copy.footer.visit}</p>
        <small>{copy.footer.copyright}</small>
      </footer>
    </div>
  );
}

export function ExampleFashionPage({ lang, copy }: ExampleFashionPageProps) {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [contactSent, setContactSent] = useState(false);
  const activeReview = copy.reviews.items[reviewIndex];
  const storesShortcutLabel = copy.nav.find((item) => item.href === "stores")?.label ?? copy.stores.label;
  const hrefFor = useLocalizedHref(lang);

  useRetailReveal(lang);

  function nextReview() {
    setReviewIndex((current) => (current + 1) % copy.reviews.items.length);
  }

  function previousReview() {
    setReviewIndex((current) => (current - 1 + copy.reviews.items.length) % copy.reviews.items.length);
  }

  return (
    <SiteFrame lang={lang} copy={copy}>
      <main>
        <section id="home" className="ef-home">
          <div className="ef-home-main" data-retail-reveal>
            <RetailImage src={copy.hero.image} alt={copy.hero.alt} priority sizes="100vw" />
            <div className="ef-home-caption">
              <p>{copy.hero.eyebrow}</p>
              <h1>{copy.common.brand}</h1>
            </div>
          </div>
        </section>

        <section className="ef-shortcuts" aria-label={copy.stores.label}>
          <a className="ef-shortcut-card" href={hrefFor("#stores")} data-retail-reveal>
            <span>{copy.stores.label}</span>
            <strong>{storesShortcutLabel}</strong>
            <small>{copy.stores.title}</small>
            <ArrowRight aria-hidden="true" />
          </a>
        </section>

        <section id="collections" className="ef-section ef-collections">
          <div className="ef-section-title" data-retail-reveal>
            <span>{copy.collections.label}</span>
            <h2>{copy.collections.title}</h2>
          </div>

          <div className="ef-collection-editorial">
            {copy.collections.items.map((item, index) => (
              <article key={item.title} className={`ef-collection-item ef-collection-${(index % 4) + 1}`} data-retail-reveal>
                <a href={hrefFor(`/lookbook/${collectionLookbookSlugs[index] ?? "spring"}`)}>
                  <RetailImage src={item.image} alt={item.alt} sizes={index === 0 ? "50vw" : "25vw"} />
                </a>
                <div>
                  <h3>{item.title}</h3>
                  <a href={hrefFor(`/lookbook/${collectionLookbookSlugs[index] ?? "spring"}`)}>{item.action}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ef-visual-banner" aria-label={`${copy.news.label} / ${copy.difference.label}`} data-retail-reveal>
          <RetailImage src={copy.community.image} alt={copy.community.alt} sizes="100vw" />
          <div>
            <a className="ef-button is-light" href={hrefFor("/news")}>
              {copy.news.label}
            </a>
            <a className="ef-button is-light" href={hrefFor("/difference")}>
              {copy.difference.label}
            </a>
          </div>
        </section>

        <section id="stores" className="ef-section ef-stores">
          <div className="ef-store-header" data-retail-reveal>
            <div>
              <span>{copy.stores.label}</span>
              <h2>{copy.stores.title}</h2>
            </div>
            <p>{copy.stores.intro}</p>
          </div>

          <div className="ef-store-card-grid">
            {copy.stores.stores.map((store) => (
              <article key={store.id} className="ef-store-card" data-retail-reveal>
                <div>
                  <RetailImage src={store.image} alt={store.alt} sizes="(max-width: 700px) 100vw, 20vw" />
                </div>
                <h3>{store.city}</h3>
                <p>{store.address}</p>
                <dl>
                  <div>
                    <Clock aria-hidden="true" />
                    <dt>{copy.stores.hoursLabel}</dt>
                    <dd>{store.hours}</dd>
                  </div>
                  <div>
                    <Phone aria-hidden="true" />
                    <dt>{copy.stores.phoneLabel}</dt>
                    <dd>{store.phone}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="ef-reviews">
          <div data-retail-reveal>
            <span>{copy.reviews.label}</span>
            <h2>{copy.reviews.average}</h2>
            <Stars label={`5 ${copy.common.stars}`} />
            <p>{copy.reviews.basedOn}</p>
          </div>
          <article data-retail-reveal>
            <blockquote>“{activeReview.quote}”</blockquote>
            <p>
              {activeReview.name}
              <span>{activeReview.city}</span>
            </p>
            <div className="ef-controls">
              <button type="button" onClick={previousReview} aria-label={copy.common.previous}>
                <ChevronLeft aria-hidden="true" />
              </button>
              <span>
                {reviewIndex + 1}/{copy.reviews.items.length}
              </span>
              <button type="button" onClick={nextReview} aria-label={copy.common.next}>
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </article>
        </section>

        <section id="contact" className="ef-contact">
          <div data-retail-reveal>
            <span>{copy.contact.label}</span>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.intro}</p>
            <a href={`tel:${copy.contact.phone.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" />
              {copy.contact.phone}
            </a>
            <a href={`mailto:${copy.contact.emailAddress}`}>
              <Mail aria-hidden="true" />
              {copy.contact.emailAddress}
            </a>
            <p>{copy.contact.support}</p>
            <p>{copy.contact.social}</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setContactSent(true);
            }}
            data-retail-reveal
          >
            <input required aria-label={copy.contact.name} placeholder={copy.contact.name} />
            <input required aria-label={copy.contact.email} placeholder={copy.contact.email} type="email" />
            <textarea required aria-label={copy.contact.message} placeholder={copy.contact.message} rows={5} />
            <button type="submit">{copy.contact.button}</button>
            {contactSent ? <small>{copy.contact.success}</small> : null}
          </form>
        </section>
      </main>
    </SiteFrame>
  );
}

export function ExampleFashionDetailPage({ lang, copy, page }: DetailPageProps) {
  useRetailReveal(lang);
  const hrefFor = useLocalizedHref(lang);

  return (
    <SiteFrame lang={lang} copy={copy}>
      <main className="ef-detail-page">
        {page === "difference" ? (
          <section className="ef-section ef-brand-story is-detail">
            <div data-retail-reveal>
              <RetailImage src={copy.difference.image} alt={copy.difference.alt} sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <div data-retail-reveal>
              <span>{copy.difference.label}</span>
              <h1>{copy.difference.title}</h1>
              <p>{copy.difference.intro}</p>
              <ul>
                {copy.difference.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {page === "news" ? (
          <>
            <section className="ef-detail-hero">
              <span>{copy.news.label}</span>
              <h1>{copy.news.title}</h1>
              <p>{copy.news.intro}</p>
            </section>
            <section className="ef-section ef-news">
              <div className="ef-news-grid is-detail">
                {copy.news.articles.map((article, index) => (
                  <a
                    key={article.title}
                    className="ef-news-card"
                    href={index === 0 ? hrefFor("/style-guide") : hrefFor("/news")}
                    data-retail-reveal
                  >
                    <div>
                      <RetailImage src={article.image} alt={article.alt} sizes="(max-width: 700px) 100vw, 33vw" />
                    </div>
                    <span>{article.date}</span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </a>
                ))}
              </div>
            </section>
          </>
        ) : null}
      </main>
    </SiteFrame>
  );
}

export function ExampleFashionStyleGuidePage({ lang, copy }: StyleGuidePageProps) {
  useRetailReveal(lang);
  const hrefFor = useLocalizedHref(lang);
  const editorial = exampleFashionEditorialCopy[lang];
  const guide = editorial.styleGuide;

  return (
    <SiteFrame lang={lang} copy={copy}>
      <main className="ef-editorial-page">
        <section className="ef-guide-hero">
          <div data-retail-reveal>
            <span>{copy.news.label}</span>
            <h1>{guide.title}</h1>
            <p>{guide.subtitle}</p>
            <small>{guide.intro}</small>
            <a className="ef-button is-dark" href={hrefFor("/news")}>
              {editorial.common.returnToInspiration}
            </a>
          </div>
          <div data-retail-reveal>
            <RetailImage src={copy.news.articles[0].image} alt={copy.news.articles[0].alt} priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </section>

        <section className="ef-section ef-guide-section">
          <div className="ef-section-title" data-retail-reveal>
            <span>{editorial.common.essentialsLabel}</span>
            <h2>{guide.essentialsTitle}</h2>
          </div>
          <div className="ef-guide-grid">
            {guide.essentials.map((item, index) => (
              <article key={item.title} className={index === 0 ? "is-wide" : ""} data-retail-reveal>
                <div>
                  <RetailImage src={item.image} alt={item.alt} sizes={index === 0 ? "(max-width: 900px) 100vw, 48vw" : "(max-width: 900px) 50vw, 25vw"} />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <small>
                  <strong>{editorial.common.stylingTip}</strong>
                  {item.tip}
                </small>
              </article>
            ))}
          </div>
        </section>

        <section className="ef-section ef-style-guide-life">
          <div className="ef-section-title" data-retail-reveal>
            <span>{copy.realLife.label}</span>
            <h2>{copy.realLife.title}</h2>
            <p>{copy.realLife.intro}</p>
          </div>
          <div className="ef-life-row is-guide">
            {copy.realLife.items.map((item) => (
              <article key={item.title} data-retail-reveal>
                <div>
                  <RetailImage src={item.image} alt={item.alt} sizes="(max-width: 700px) 100vw, 33vw" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <a className="ef-button is-light" href={hrefFor("/news")}>
            {editorial.common.returnToInspiration}
          </a>
        </section>
      </main>
    </SiteFrame>
  );
}

export function ExampleFashionCollectionLookbookPage({ lang, copy, collection }: CollectionLookbookPageProps) {
  useRetailReveal(lang);
  const hrefFor = useLocalizedHref(lang);
  const editorial = exampleFashionEditorialCopy[lang];
  const lookbook = editorial.collectionLookbooks[collection];

  return (
    <SiteFrame lang={lang} copy={copy}>
      <main className="ef-collection-lookbook-page">
        <section className="ef-collection-hero">
          <div data-retail-reveal>
            <RetailImage src={lookbook.heroImage} alt={lookbook.heroAlt} priority sizes="100vw" />
          </div>
          <div data-retail-reveal>
            <span>{lookbook.mood}</span>
            <h1>{lookbook.title}</h1>
            <p>{lookbook.intro}</p>
            <small>{lookbook.shopNote}</small>
            <a className="ef-button is-dark" href={hrefFor("#collections")}>
              {editorial.common.returnToCollections}
            </a>
          </div>
        </section>

        <section className="ef-section ef-lookbook-detail">
          <div className="ef-section-title" data-retail-reveal>
            <span>{editorial.common.featuredLabel}</span>
            <h2>{lookbook.mood}</h2>
          </div>
          <div className="ef-lookbook-detail-grid">
            {lookbook.items.map((item, index) => (
              <article key={item.title} className={index === 0 || index === 5 ? "is-large" : ""} data-retail-reveal>
                <div>
                  <RetailImage src={item.image} alt={item.alt} sizes={index === 0 || index === 5 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"} />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>
                  <strong>{editorial.common.stylingTip}</strong>
                  {item.tip}
                </small>
              </article>
            ))}
          </div>
          <a className="ef-button is-light" href={hrefFor("#collections")}>
            {editorial.common.returnToCollections}
          </a>
        </section>
      </main>
    </SiteFrame>
  );
}
