"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  Languages,
  MapPin,
  Menu,
  Music,
  Sparkles,
  Sun,
  Users,
  Utensils,
  Waves,
  Wine,
  X
} from "lucide-react";
import { contactEmail, languages, type Language } from "@/lib/constants";
import type { BeachClubCopy } from "@/lib/beachClubContent";

type BeachClubPageProps = {
  lang: Language;
  copy: BeachClubCopy;
};

const fragmentIcons = [Waves, Music, Utensils, Sun];

function getMaxCapacity(capacity: string) {
  const matches = capacity.match(/\d+/g);
  const fallback = 10;

  if (!matches?.length) {
    return fallback;
  }

  return Math.max(...matches.map(Number));
}

export function BeachClubPage({ lang, copy }: BeachClubPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(copy.reservations.items[1].id);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("2026-07-18");
  const [time, setTime] = useState("18:30");
  const [occasion, setOccasion] = useState(copy.booking.occasions[0]);
  const [bookingMessage, setBookingMessage] = useState("");
  const [gastronomyOpen, setGastronomyOpen] = useState(false);
  const [mapZoom, setMapZoom] = useState(1);

  const navItems = useMemo(
    () => copy.nav.map((item) => ({ ...item, href: `/${lang}#${item.href}` })),
    [copy.nav, lang]
  );

  const activeReservation =
    copy.reservations.items.find((item) => item.id === selectedReservation) ?? copy.reservations.items[0];
  const maxGuests = getMaxCapacity(activeReservation.capacity);

  useEffect(() => {
    setGuests((currentGuests) => Math.min(Math.max(currentGuests, 1), maxGuests));
  }, [maxGuests]);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".beach-page");
    const header = document.querySelector<HTMLElement>(".bc-header");
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    let lastScrollY = -1;
    let lastHeaderState = false;
    let parallaxEnabled = false;
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    function updateMotionMode() {
      parallaxEnabled = !reduceMotionQuery.matches && !coarsePointerQuery.matches && window.innerWidth > 760;

      if (!parallaxEnabled) {
        parallaxItems.forEach((element) => element.style.removeProperty("--parallax-y"));
      }
    }

    function updateMotion() {
      frame = 0;
      const y = window.scrollY;
      const roundedY = Math.round(y);

      if (roundedY === lastScrollY) {
        return;
      }

      if (roundedY <= 950 || lastScrollY <= 950) {
        root?.style.setProperty("--scroll-y", `${Math.min(roundedY, 900)}px`);
      }

      const nextHeaderState = roundedY > 16;
      if (nextHeaderState !== lastHeaderState) {
        header?.classList.toggle("is-scrolled", nextHeaderState);
        lastHeaderState = nextHeaderState;
      }

      if (parallaxEnabled) {
        const viewportHeight = window.innerHeight;

        parallaxItems.forEach((element) => {
          const rect = element.getBoundingClientRect();

          if (rect.bottom < -160 || rect.top > viewportHeight + 160) {
            return;
          }

          const speed = Number(element.dataset.parallax ?? 0.08);
          const offset = (viewportHeight * 0.5 - rect.top) * speed;
          element.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
        });
      }

      lastScrollY = roundedY;
    }

    function onScroll() {
      if (!frame) {
        frame = window.requestAnimationFrame(updateMotion);
      }
    }

    function onResize() {
      updateMotionMode();
      onScroll();
    }

    updateMotionMode();
    updateMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    reduceMotionQuery.addEventListener("change", onResize);
    coarsePointerQuery.addEventListener("change", onResize);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reduceMotionQuery.removeEventListener("change", onResize);
      coarsePointerQuery.removeEventListener("change", onResize);
    };
  }, [lang]);

  useEffect(() => {
    const shouldLock = menuOpen || gastronomyOpen;
    document.body.classList.toggle("menu-is-open", menuOpen);
    document.body.classList.toggle("overlay-is-open", gastronomyOpen);
    document.body.classList.toggle("site-is-locked", shouldLock);

    return () => {
      document.body.classList.remove("menu-is-open");
      document.body.classList.remove("overlay-is-open");
      document.body.classList.remove("site-is-locked");
    };
  }, [menuOpen, gastronomyOpen]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setGastronomyOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function handleLanguageChange(nextLang: string) {
    const hash = window.location.hash || "#home";
    window.location.href = `/${nextLang}${hash}`;
  }

  function chooseReservation(id: string) {
    setSelectedReservation(id);
    setBookingMessage("");
  }

  function submitBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBookingMessage(copy.booking.success);
  }

  return (
    <div className="beach-page">
      <header className="bc-header">
        <a href={`/${lang}#home`} className="bc-mark" aria-label={copy.common.brand}>
          <span>EB</span>
          <small>Club</small>
        </a>

        <a href={`/${lang}#home`} className="bc-wordmark" aria-label={copy.common.brand}>
          {copy.common.brand}
        </a>

        <div className="bc-nav-actions">
          <div className="language-switch" aria-label={copy.common.language}>
            <Languages aria-hidden="true" />
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                className={language.code === lang ? "is-active" : ""}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.short}
              </button>
            ))}
          </div>
          <a className="reserve-chip" href={`/${lang}#reservations`}>
            {copy.common.reserve}
          </a>
          <button
            type="button"
            className="menu-trigger"
            aria-label={menuOpen ? copy.common.close : copy.common.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className={`screen-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="screen-menu-media" aria-hidden="true">
          <Image src="/beach-club/sunset-session.png" alt="" fill sizes="44vw" />
        </div>
        <nav aria-label={copy.common.menu}>
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="screen-menu-bottom">
          <div className="mobile-language-switch" aria-label={copy.common.language}>
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                className={language.code === lang ? "is-active" : ""}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.short}
              </button>
            ))}
          </div>
          <a href={`mailto:${contactEmail}`}>{copy.common.concierge}</a>
        </div>
      </div>

      <main>
        <section id="home" className="bc-hero" aria-label={copy.common.brand}>
          <div className="hero-video-shell" aria-hidden="true">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={copy.hero.poster}
            >
              <source src={copy.hero.video} type="video/mp4" />
            </video>
            <Image src={copy.hero.poster} alt="" fill priority sizes="100vw" className="hero-poster" />
          </div>
          <div className="hero-scrim" aria-hidden="true" />

          <div className="hero-layout">
            <div className="hero-copy" data-reveal>
              <p className="bc-eyebrow">{copy.hero.eyebrow}</p>
              <h1>{copy.hero.title}</h1>
              <p>{copy.hero.subtitle}</p>
              <div className="hero-actions">
                <a className="bc-button primary" href={`/${lang}#reservations`}>
                  {copy.common.reserve}
                  <ArrowRight aria-hidden="true" />
                </a>
                <a className="bc-button ghost" href={`/${lang}#events`}>
                  {copy.common.events}
                </a>
              </div>
            </div>

            <aside className="hero-status" data-reveal>
              <span>{copy.hero.filmLabel}</span>
              <strong>{copy.hero.ritual}</strong>
              <p>{copy.hero.location}</p>
            </aside>
          </div>

          <div className="hero-marquee" aria-hidden="true">
            <span>Sea · Music · Food · Sunset · Energy · </span>
            <span>Sea · Music · Food · Sunset · Energy · </span>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="experience-copy" data-reveal>
            <p className="bc-eyebrow">{copy.experience.label}</p>
            <h2>{copy.experience.title}</h2>
            <p>{copy.experience.microcopy}</p>
          </div>

          <div className="experience-fragments">
            {copy.experience.fragments.map((fragment, index) => {
              const Icon = fragmentIcons[index % fragmentIcons.length];
              return (
                <article key={fragment.word} className={`fragment fragment-${index}`} data-reveal>
                  <div className="fragment-image" data-parallax="0.035">
                    <Image src={fragment.image} alt={fragment.alt} fill sizes="(min-width: 900px) 30vw, 82vw" />
                  </div>
                  <div className="fragment-text">
                    <Icon aria-hidden="true" />
                    <h3>{fragment.word}</h3>
                    <p>{fragment.line}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="reservations" className="reservations-section">
          <div className="section-intro" data-reveal>
            <p className="bc-eyebrow">{copy.reservations.label}</p>
            <h2>{copy.reservations.title}</h2>
            <p>{copy.reservations.intro}</p>
          </div>

          <div className="reservation-lab" data-reveal>
            <div className="reservation-options" role="tablist" aria-label={copy.reservations.label}>
              {copy.reservations.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={item.id === selectedReservation}
                  className={item.id === selectedReservation ? "is-active" : ""}
                  onClick={() => chooseReservation(item.id)}
                >
                  <span>{item.label}</span>
                  <strong>{item.name}</strong>
                  <small>
                    {item.price}
                    <ArrowRight aria-hidden="true" />
                  </small>
                </button>
              ))}
            </div>

            <div className="reservation-stage">
              <Image
                key={activeReservation.image}
                src={activeReservation.image}
                alt={activeReservation.alt}
                fill
                sizes="(min-width: 1100px) 58vw, 100vw"
                priority={false}
              />
              <div className="reservation-stage-copy">
                <span>{activeReservation.capacity}</span>
                <h3>{activeReservation.name}</h3>
                <p>{activeReservation.mood}</p>
                <ul>
                  {activeReservation.inclusions.map((inclusion) => (
                    <li key={inclusion}>
                      <Check aria-hidden="true" />
                      {inclusion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <form className="booking-console" onSubmit={submitBooking}>
              <div className="console-title">
                <Sparkles aria-hidden="true" />
                <div>
                  <span>{copy.booking.title}</span>
                  <strong>{activeReservation.price}</strong>
                </div>
              </div>

              <label>
                <span>
                  <CalendarDays aria-hidden="true" />
                  {copy.booking.date}
                </span>
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
              </label>

              <label>
                <span>
                  <Clock aria-hidden="true" />
                  {copy.booking.time}
                </span>
                <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
              </label>

              <label>
                <span>
                  <Users aria-hidden="true" />
                  {copy.booking.guests}
                </span>
                <input
                  type="number"
                  min={1}
                  max={maxGuests}
                  value={guests}
                  onChange={(event) => {
                    const nextGuests = Number(event.target.value);
                    setGuests(Math.min(Math.max(nextGuests, 1), maxGuests));
                  }}
                />
              </label>

              <label>
                <span>
                  <Sun aria-hidden="true" />
                  {copy.booking.occasion}
                </span>
                <select value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                  {copy.booking.occasions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <button type="submit">
                {copy.booking.request}
                <ArrowRight aria-hidden="true" />
              </button>

              {bookingMessage ? (
                <p className="booking-message" role="status">
                  {bookingMessage} {activeReservation.name} · {guests} · {date} · {time} · {occasion}
                </p>
              ) : null}
            </form>
          </div>
        </section>

        <section id="events" className="events-section">
          <div className="events-header" data-reveal>
            <p className="bc-eyebrow">{copy.events.label}</p>
            <h2>{copy.events.title}</h2>
            <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(copy.events.cta)}`}>
              {copy.events.cta}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="event-track" aria-label={copy.events.title}>
            {copy.events.items.map((event, index) => (
              <article key={event.name} className="event-panel" data-reveal>
                <div className="event-number">{String(index + 1).padStart(2, "0")}</div>
                <Image src={event.image} alt={event.alt} fill sizes="(min-width: 900px) 44vw, 84vw" />
                <div className="event-info">
                  <span>{event.tag}</span>
                  <h3>{event.name}</h3>
                  <p>{event.artist}</p>
                  <div>
                    <small>{event.date}</small>
                    <small>{event.time}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gastronomy" className="gastronomy-section">
          <div className="gastronomy-media" data-reveal data-parallax="0.025">
            <Image src={copy.gastronomy.image} alt={copy.gastronomy.alt} fill sizes="(min-width: 900px) 50vw, 100vw" />
          </div>
          <div className="gastronomy-copy" data-reveal>
            <p className="bc-eyebrow">{copy.gastronomy.label}</p>
            <h2>{copy.gastronomy.title}</h2>
            <p>{copy.gastronomy.line}</p>
            <div className="menu-preview">
              {copy.gastronomy.menu.slice(0, 3).map((item) => (
                <div key={item.name}>
                  <span>{item.type}</span>
                  <strong>{item.name}</strong>
                  <em>{item.price}</em>
                </div>
              ))}
            </div>
            <div className="cocktail-strip" aria-label="Cocktails">
              {copy.gastronomy.cocktails.map((cocktail) => (
                <span key={cocktail}>
                  <Wine aria-hidden="true" />
                  {cocktail}
                </span>
              ))}
            </div>
            <button type="button" className="gastronomy-trigger" onClick={() => setGastronomyOpen(true)}>
              {copy.gastronomy.explore}
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="gallery-heading" data-reveal>
            <p className="bc-eyebrow">{copy.gallery.label}</p>
            <h2>{copy.gallery.title}</h2>
          </div>
          <div className="editorial-gallery">
            {copy.gallery.items.map((item, index) => (
              <figure key={`${item.title}-${index}`} className={`gallery-frame gallery-${index}`} data-reveal>
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 900px) 34vw, 90vw" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="location" className="location-section">
          <div className="location-copy" data-reveal>
            <p className="bc-eyebrow">{copy.location.label}</p>
            <h2>{copy.location.title}</h2>
            <div className="contact-stack">
              <p>
                <MapPin aria-hidden="true" />
                {copy.location.address}
              </p>
              <p>
                <Clock aria-hidden="true" />
                {copy.location.schedule}
              </p>
              <p>
                <ArrowUpRight aria-hidden="true" />
                {copy.location.contact}
              </p>
            </div>
            <a className="bc-button primary" href={`/${lang}#reservations`}>
              {copy.location.finalCta}
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="map-shell" data-reveal aria-label={copy.location.mapTitle}>
            <div className="interactive-map" style={{ "--map-scale": mapZoom } as React.CSSProperties}>
              <div className="map-grid" aria-hidden="true" />
              <div className="map-district">
                <span>L&apos;Eixample</span>
              </div>
              <div className="map-marker">
                <MapPin aria-hidden="true" />
                <span>Example Beach Club</span>
              </div>
              <span className="map-street street-diagonal">Avinguda Diagonal</span>
              <span className="map-street street-gracia">Passeig de Gràcia</span>
              <span className="map-street street-arago">Carrer d&apos;Aragó</span>
              <span className="map-street street-balmes">Carrer de Balmes</span>
            </div>
            <div className="map-controls">
              <button type="button" aria-label="Reducir mapa" onClick={() => setMapZoom((zoom) => Math.max(0.86, zoom - 0.12))}>
                -
              </button>
              <button type="button" aria-label="Ampliar mapa" onClick={() => setMapZoom((zoom) => Math.min(1.34, zoom + 0.12))}>
                +
              </button>
              <a href={copy.location.mapSrc} target="_blank" rel="noreferrer">
                Google Maps
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bc-footer">
        <div>
          <a href={`/${lang}#home`} className="bc-mark" aria-label={copy.common.brand}>
            <span>EB</span>
            <small>Club</small>
          </a>
          <p>{copy.footer.line}</p>
        </div>
        <nav aria-label={copy.common.menu}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-social">
          {copy.footer.social.map((social) => (
            <a key={social} href="#">
              {social}
            </a>
          ))}
        </div>
      </footer>

      <div className={`gastronomy-overlay ${gastronomyOpen ? "is-open" : ""}`} aria-hidden={!gastronomyOpen}>
        <button
          type="button"
          className="overlay-backdrop"
          aria-label={copy.common.close}
          onClick={() => setGastronomyOpen(false)}
        />
        <section
          className="gastronomy-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gastronomy-drawer-title"
        >
          <button
            type="button"
            className="drawer-close"
            aria-label={copy.common.close}
            onClick={() => setGastronomyOpen(false)}
          >
            <X aria-hidden="true" />
          </button>

          <div className="drawer-media" aria-hidden="true">
            <Image src={copy.gastronomy.image} alt="" fill sizes="(min-width: 900px) 36vw, 100vw" />
          </div>

          <div className="drawer-content">
            <p className="bc-eyebrow">{copy.gastronomy.label}</p>
            <h2 id="gastronomy-drawer-title">{copy.gastronomy.overlayTitle}</h2>
            <p>{copy.gastronomy.overlayIntro}</p>

            <div className="drawer-menu">
              {copy.gastronomy.menu.map((item) => (
                <div key={`${item.type}-${item.name}`}>
                  <span>{item.type}</span>
                  <strong>{item.name}</strong>
                  <em>{item.price}</em>
                </div>
              ))}
            </div>

            <div className="drawer-cocktails">
              {copy.gastronomy.cocktails.map((cocktail) => (
                <span key={cocktail}>
                  <Wine aria-hidden="true" />
                  {cocktail}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
