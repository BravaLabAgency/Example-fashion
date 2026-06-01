type NavItem = {
  label: string;
  href: string;
};

type ReservationItem = {
  id: string;
  name: string;
  label: string;
  price: string;
  capacity: string;
  mood: string;
  image: string;
  alt: string;
  inclusions: string[];
};

type EventItem = {
  name: string;
  date: string;
  time: string;
  artist: string;
  image: string;
  alt: string;
  tag: string;
};

type GalleryItem = {
  title: string;
  image: string;
  alt: string;
};

export type BeachClubCopy = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  common: {
    brand: string;
    menu: string;
    close: string;
    language: string;
    reserve: string;
    events: string;
    book: string;
    discover: string;
    concierge: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    video: string;
    poster: string;
    filmLabel: string;
    location: string;
    ritual: string;
  };
  experience: {
    label: string;
    title: string;
    microcopy: string;
    fragments: Array<{
      word: string;
      line: string;
      image: string;
      alt: string;
    }>;
  };
  reservations: {
    label: string;
    title: string;
    intro: string;
    items: ReservationItem[];
  };
  booking: {
    title: string;
    date: string;
    time: string;
    guests: string;
    occasion: string;
    occasions: string[];
    request: string;
    success: string;
  };
  events: {
    label: string;
    title: string;
    cta: string;
    items: EventItem[];
  };
  gastronomy: {
    label: string;
    title: string;
    line: string;
    explore: string;
    overlayTitle: string;
    overlayIntro: string;
    image: string;
    alt: string;
    menu: Array<{
      type: string;
      name: string;
      price: string;
    }>;
    cocktails: string[];
  };
  gallery: {
    label: string;
    title: string;
    items: GalleryItem[];
  };
  location: {
    label: string;
    title: string;
    address: string;
    schedule: string;
    contact: string;
    mapTitle: string;
    mapSrc: string;
    finalCta: string;
  };
  footer: {
    line: string;
    social: string[];
  };
};

const heroVideo = "/beach-club/hero-video.mp4";

const mapSrc =
  "https://maps.google.com/maps?q=Passeig%20de%20Gracia%2092%2C%20Eixample%2C%20Barcelona&t=&z=15&ie=UTF8&iwloc=&output=embed";

const es: BeachClubCopy = {
  metadata: {
    title: "Example Beach Club | Mediterranean lifestyle destination",
    description:
      "Beach club mediterráneo ficticio con reservas premium, gastronomía, sunset sessions, DJs y una experiencia digital inmersiva.",
    keywords: [
      "premium beach club",
      "mediterranean beach club",
      "sunbeds",
      "vip cabanas",
      "sunset sessions",
      "luxury hospitality"
    ]
  },
  common: {
    brand: "Example Beach Club",
    menu: "Menú",
    close: "Cerrar",
    language: "Idioma",
    reserve: "Reservar",
    events: "Eventos",
    book: "Elegir escena",
    discover: "Descubrir",
    concierge: "Concierge"
  },
  nav: [
    { label: "Experiencia", href: "experience" },
    { label: "Reservas", href: "reservations" },
    { label: "Eventos", href: "events" },
    { label: "Gastronomía", href: "gastronomy" },
    { label: "Galería", href: "gallery" },
    { label: "Contacto", href: "location" }
  ],
  hero: {
    eyebrow: "Mediterráneo privado · Temporada 2026",
    title: "Día frente al mar. Noche con pulso propio.",
    subtitle: "Sunbeds, cocina de costa, coctelería y DJs invitados en una cala hecha para quedarse.",
    video: heroVideo,
    poster: "/beach-club/hero-beach-club.png",
    filmLabel: "Sunset film",
    location: "Cala Example · Costa Mediterránea",
    ritual: "Sunset ritual · 18:42"
  },
  experience: {
    label: "La sensación",
    title: "Mar. Música. Fuego. Sal. Energía.",
    microcopy:
      "Un club imaginado como una campaña de moda: piel salada, lino, brasas suaves, copas frías y una pista que aparece cuando cae la luz.",
    fragments: [
      {
        word: "Sea",
        line: "Primera línea, espuma cerca, servicio invisible.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Luxury sunbeds facing the Mediterranean at sunset"
      },
      {
        word: "Music",
        line: "Downtempo al atardecer, invitados cuando la noche sube.",
        image: "/beach-club/sunset-session.png",
        alt: "DJ performing at a beach club during sunset"
      },
      {
        word: "Food",
        line: "Producto fresco, platos precisos, mesa sin prisa.",
        image: "/beach-club/gastronomy.png",
        alt: "Mediterranean seafood and cocktails by the sea"
      },
      {
        word: "Night",
        line: "Velas, piel dorada, copas largas y acceso limitado.",
        image: "/beach-club/private-events.png",
        alt: "Private Mediterranean dinner at sunset"
      }
    ]
  },
  reservations: {
    label: "Reservas",
    title: "Elige tu escena antes de que cambie la luz.",
    intro: "Cuatro formas de vivir el club. Todas con servicio dedicado, ritmo de sunset y llegada sin fricción.",
    items: [
      {
        id: "sunbeds",
        name: "Sunbeds",
        label: "Front row ease",
        price: "Desde 65 EUR",
        capacity: "1-2 personas",
        mood: "Sol, toalla fría, agua mineral y mar a pocos pasos.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Premium sunbeds arranged on a Mediterranean beach",
        inclusions: ["Toalla premium", "Agua de bienvenida", "Servicio en hamaca"]
      },
      {
        id: "vip-beds",
        name: "VIP Beds",
        label: "Golden hour private",
        price: "Desde 180 EUR",
        capacity: "2-3 personas",
        mood: "Cama elevada, sombra de lino y prioridad en coctelería.",
        image: "/beach-club/hero-beach-club.png",
        alt: "VIP beach beds with champagne near the shoreline",
        inclusions: ["Welcome cocktail", "Fruta de temporada", "Priority host"]
      },
      {
        id: "cabanas",
        name: "Cabanas",
        label: "Private coastal room",
        price: "Desde 420 EUR",
        capacity: "4-6 personas",
        mood: "Sombra arquitectónica, sofá lounge, minibar curado y host.",
        image: "/beach-club/private-events.png",
        alt: "Private cabana dining area facing the sea",
        inclusions: ["Host privado", "Minibar premium", "Mesa prioritaria"]
      },
      {
        id: "tables",
        name: "Restaurant Tables",
        label: "Long lunch to late night",
        price: "Ticket medio 95 EUR",
        capacity: "2-10 personas",
        mood: "Mesa junto al agua, producto local y cocktails de sobremesa.",
        image: "/beach-club/gastronomy.png",
        alt: "Mediterranean seafood table with cocktails and sea views",
        inclusions: ["Mesa vista mar", "Menú seasonal", "Wine pairing opcional"]
      }
    ]
  },
  booking: {
    title: "Reserva privada",
    date: "Fecha",
    time: "Hora",
    guests: "Personas",
    occasion: "Mood",
    occasions: ["Sunset", "Lunch", "DJ Night", "Private"],
    request: "Solicitar disponibilidad",
    success: "Solicitud preparada. El concierge confirmaría disponibilidad, depósito y acceso."
  },
  events: {
    label: "Agenda",
    title: "Noches con nombre propio.",
    cta: "Agenda privada",
    items: [
      {
        name: "Sunset Frequencies",
        date: "19 Jun",
        time: "18:30 - 22:30",
        artist: "Nora Azul",
        image: "/beach-club/sunset-session.png",
        alt: "Sunset DJ session with elegant guests by the sea",
        tag: "Guest DJ"
      },
      {
        name: "La Mesa Larga",
        date: "28 Jun",
        time: "13:00 - 17:00",
        artist: "Seafood ritual",
        image: "/beach-club/gastronomy.png",
        alt: "Mediterranean lunch with seafood and cocktails",
        tag: "Gastronomy"
      },
      {
        name: "Moon Swim Night",
        date: "11 Jul",
        time: "21:00 - 02:00",
        artist: "House by the water",
        image: "/beach-club/sunset-session.png",
        alt: "Nightlife scene with DJ booth and sunset glow",
        tag: "Nightlife"
      },
      {
        name: "Palma After Dark",
        date: "23 Jul",
        time: "20:00 - 01:00",
        artist: "Live sax + vinyl",
        image: "/beach-club/private-events.png",
        alt: "Private dinner setting with candles and sea view",
        tag: "Live"
      }
    ]
  },
  gastronomy: {
    label: "Gastronomía",
    title: "Cocina de costa. Copas con temperatura de verano.",
    line: "Crudos, brasas, arroces, cítricos, hierbas y cocktails pensados para el sol bajo.",
    explore: "Explorar carta",
    overlayTitle: "La carta completa",
    overlayIntro: "Una secuencia mediterránea pensada para pasar del almuerzo al sunset sin perder temperatura.",
    image: "/beach-club/gastronomy.png",
    alt: "Mediterranean seafood plates and orange cocktails by the coast",
    menu: [
      { type: "Raw", name: "Lubina, lima, aceite verde", price: "24" },
      { type: "Fire", name: "Gamba roja, salvia, brasa suave", price: "32" },
      { type: "Rice", name: "Arroz meloso de mar", price: "34" },
      { type: "Sweet", name: "Higo, yogur helado, miel salina", price: "14" }
    ],
    cocktails: ["Bitter Orange Spritz", "Salt Negroni", "Fig Leaf Martini", "Mediterranean Highball"]
  },
  gallery: {
    label: "Galería",
    title: "Instantes que no piden explicación.",
    items: [
      {
        title: "Front row sea beds",
        image: "/beach-club/hero-beach-club.png",
        alt: "Beach club sunbeds beside the Mediterranean"
      },
      {
        title: "DJ at blue hour",
        image: "/beach-club/sunset-session.png",
        alt: "DJ booth glowing at sunset"
      },
      {
        title: "Seafood and citrus",
        image: "/beach-club/gastronomy.png",
        alt: "Seafood dishes and cocktails"
      },
      {
        title: "Private table",
        image: "/beach-club/private-events.png",
        alt: "Private dinner table at sunset"
      },
      {
        title: "Golden service",
        image: "/beach-club/hero-beach-club.png",
        alt: "Premium sunbed service"
      },
      {
        title: "Late glasses",
        image: "/beach-club/private-events.png",
        alt: "Candles and wine glasses by the coast"
      },
      {
        title: "Cocktail hour",
        image: "/beach-club/gastronomy.png",
        alt: "Orange cocktails on a Mediterranean table"
      },
      {
        title: "Sound on water",
        image: "/beach-club/sunset-session.png",
        alt: "Guests enjoying a sunset music session"
      }
    ]
  },
  location: {
    label: "Ubicación",
    title: "Una dirección urbana en Eixample con alma mediterránea.",
    address: "Passeig de Gràcia 92 · Eixample, Barcelona",
    schedule: "Todos los días · 10:00 - 02:00",
    contact: "+34 600 000 000 · bravalabagency@gmail.com",
    mapTitle: "Mapa de Example Beach Club en Eixample",
    mapSrc,
    finalCta: "Reservar antes del sunset"
  },
  footer: {
    line: "A fictional Mediterranean beach club shaped as a luxury digital experience.",
    social: ["Instagram", "TikTok", "Spotify"]
  }
};

const ca: BeachClubCopy = {
  ...es,
  metadata: {
    ...es.metadata,
    description:
      "Beach club mediterrani fictici amb reserves premium, gastronomia, sunset sessions, DJs i una experiència digital immersiva."
  },
  common: {
    ...es.common,
    close: "Tancar",
    language: "Idioma",
    reserve: "Reservar",
    events: "Esdeveniments",
    book: "Triar escena"
  },
  nav: [
    { label: "Experiència", href: "experience" },
    { label: "Reserves", href: "reservations" },
    { label: "Esdeveniments", href: "events" },
    { label: "Gastronomia", href: "gastronomy" },
    { label: "Galeria", href: "gallery" },
    { label: "Contacte", href: "location" }
  ],
  hero: {
    ...es.hero,
    eyebrow: "Mediterrani privat · Temporada 2026",
    title: "Dia davant del mar. Nit amb pols propi.",
    subtitle: "Sunbeds, cuina de costa, cocteleria i DJs convidats en una cala feta per quedar-s'hi."
  },
  experience: {
    ...es.experience,
    label: "La sensació",
    title: "Mar. Música. Foc. Sal. Energia.",
    microcopy:
      "Un club imaginat com una campanya de moda: pell salada, lli, brases suaus, copes fredes i una pista que apareix quan cau la llum."
  },
  reservations: {
    ...es.reservations,
    label: "Reserves",
    title: "Tria la teva escena abans que canviï la llum.",
    intro: "Quatre maneres de viure el club. Totes amb servei dedicat, ritme de sunset i arribada sense fricció.",
    items: [
      {
        ...es.reservations.items[0],
        price: "Des de 65 EUR",
        capacity: "1-2 persones",
        mood: "Sol, tovallola freda, aigua mineral i mar a pocs passos."
      },
      {
        ...es.reservations.items[1],
        price: "Des de 180 EUR",
        capacity: "2-3 persones",
        mood: "Llit elevat, ombra de lli i prioritat en cocteleria."
      },
      {
        ...es.reservations.items[2],
        price: "Des de 420 EUR",
        capacity: "4-6 persones",
        mood: "Ombra arquitectònica, sofà lounge, minibar curat i host."
      },
      {
        ...es.reservations.items[3],
        price: "Tiquet mitjà 95 EUR",
        capacity: "2-10 persones",
        mood: "Taula arran d'aigua, producte local i cocktails de sobretaula.",
        inclusions: ["Taula vista mar", "Menú seasonal", "Wine pairing opcional"]
      }
    ]
  },
  booking: {
    ...es.booking,
    title: "Reserva privada",
    date: "Data",
    guests: "Persones",
    request: "Sol·licitar disponibilitat",
    success: "Sol·licitud preparada. El concierge confirmaria disponibilitat, dipòsit i accés."
  },
  events: {
    ...es.events,
    label: "Agenda",
    title: "Nits amb nom propi.",
    cta: "Agenda privada"
  },
  gastronomy: {
    ...es.gastronomy,
    label: "Gastronomia",
    title: "Cuina de costa. Copes amb temperatura d'estiu.",
    line: "Crus, brases, arrossos, cítrics, herbes i cocktails pensats per al sol baix.",
    explore: "Explorar carta",
    overlayTitle: "La carta completa",
    overlayIntro: "Una seqüència mediterrània pensada per passar del dinar al sunset sense perdre temperatura."
  },
  gallery: {
    ...es.gallery,
    label: "Galeria",
    title: "Instants que no demanen explicació."
  },
  location: {
    ...es.location,
    label: "Ubicació",
    title: "Una adreça urbana a l'Eixample amb ànima mediterrània.",
    mapTitle: "Mapa d'Example Beach Club a l'Eixample",
    schedule: "Cada dia · 10:00 - 02:00",
    finalCta: "Reservar abans del sunset"
  }
};

const en: BeachClubCopy = {
  ...es,
  metadata: {
    ...es.metadata,
    description:
      "A fictional premium Mediterranean beach club with reservations, gastronomy, sunset sessions, DJs and an immersive lifestyle website."
  },
  common: {
    ...es.common,
    close: "Close",
    language: "Language",
    reserve: "Reserve",
    events: "Events",
    book: "Choose scene",
    discover: "Discover"
  },
  nav: [
    { label: "Experience", href: "experience" },
    { label: "Reservations", href: "reservations" },
    { label: "Events", href: "events" },
    { label: "Gastronomy", href: "gastronomy" },
    { label: "Gallery", href: "gallery" },
    { label: "Contact", href: "location" }
  ],
  hero: {
    ...es.hero,
    eyebrow: "Private Mediterranean · Season 2026",
    title: "Daylight by the sea. Nightfall with a pulse.",
    subtitle: "Sunbeds, coastal cuisine, cold cocktails and guest DJs in a cove designed to make you stay.",
    location: "Cala Example · Mediterranean Coast",
    ritual: "Sunset ritual · 18:42"
  },
  experience: {
    ...es.experience,
    label: "The feeling",
    title: "Sea. Music. Fire. Salt. Energy.",
    microcopy:
      "A club imagined like a fashion campaign: salty skin, linen, soft fire, cold glasses and a dance floor that appears when the light drops.",
    fragments: [
      {
        ...es.experience.fragments[0],
        line: "Front row water, foam nearby, service that almost disappears."
      },
      {
        ...es.experience.fragments[1],
        line: "Downtempo at sunset, guest sets when the night rises."
      },
      {
        ...es.experience.fragments[2],
        line: "Fresh produce, precise plates, a table with no rush."
      },
      {
        ...es.experience.fragments[3],
        line: "Candles, bronze skin, long drinks and limited access."
      }
    ]
  },
  reservations: {
    ...es.reservations,
    label: "Reservations",
    title: "Choose your scene before the light changes.",
    intro: "Four ways to live the club. Dedicated service, sunset rhythm and an arrival that feels effortless.",
    items: [
      {
        ...es.reservations.items[0],
        price: "From 65 EUR",
        capacity: "1-2 guests",
        mood: "Sun, chilled towel, mineral water and the sea a few steps away.",
        inclusions: ["Premium towel", "Welcome water", "Sunbed service"]
      },
      {
        ...es.reservations.items[1],
        price: "From 180 EUR",
        capacity: "2-3 guests",
        mood: "Raised bed, linen shade and cocktail priority.",
        inclusions: ["Welcome cocktail", "Seasonal fruit", "Priority host"]
      },
      {
        ...es.reservations.items[2],
        price: "From 420 EUR",
        capacity: "4-6 guests",
        mood: "Architectural shade, lounge sofa, curated minibar and host.",
        inclusions: ["Private host", "Premium minibar", "Priority table"]
      },
      {
        ...es.reservations.items[3],
        price: "Average spend 95 EUR",
        capacity: "2-10 guests",
        mood: "Waterfront table, local produce and long cocktails after lunch.",
        inclusions: ["Sea-view table", "Seasonal menu", "Optional wine pairing"]
      }
    ]
  },
  booking: {
    ...es.booking,
    title: "Private reservation",
    date: "Date",
    time: "Time",
    guests: "Guests",
    request: "Request availability",
    success: "Request prepared. The concierge would confirm availability, deposit and access."
  },
  events: {
    ...es.events,
    label: "Events",
    title: "Nights with their own name.",
    cta: "Private calendar"
  },
  gastronomy: {
    ...es.gastronomy,
    label: "Gastronomy",
    title: "Coastal cuisine. Glasses at summer temperature.",
    line: "Raw plates, fire, rice, citrus, herbs and cocktails built for low sun.",
    explore: "Explore menu",
    overlayTitle: "The full offering",
    overlayIntro: "A Mediterranean sequence designed to move from lunch to sunset without losing temperature.",
    menu: [
      { type: "Raw", name: "Sea bass, lime, green oil", price: "24" },
      { type: "Fire", name: "Red prawn, sage, soft flame", price: "32" },
      { type: "Rice", name: "Creamy rice from the sea", price: "34" },
      { type: "Sweet", name: "Fig, frozen yogurt, salted honey", price: "14" }
    ]
  },
  gallery: {
    ...es.gallery,
    label: "Gallery",
    title: "Moments that need no explanation."
  },
  location: {
    ...es.location,
    label: "Location",
    title: "An Eixample address with a Mediterranean pulse.",
    address: "Passeig de Gracia 92 · Eixample, Barcelona",
    schedule: "Every day · 10:00 - 02:00",
    mapTitle: "Map of Example Beach Club in Eixample",
    finalCta: "Reserve before sunset"
  }
};

const fr: BeachClubCopy = {
  ...es,
  metadata: {
    ...es.metadata,
    description:
      "Beach club méditerranéen fictif avec réservations premium, gastronomie, sunset sessions, DJs et expérience digitale immersive."
  },
  common: {
    ...es.common,
    close: "Fermer",
    language: "Langue",
    reserve: "Réserver",
    events: "Événements",
    book: "Choisir la scène",
    discover: "Découvrir"
  },
  nav: [
    { label: "Expérience", href: "experience" },
    { label: "Réservations", href: "reservations" },
    { label: "Événements", href: "events" },
    { label: "Gastronomie", href: "gastronomy" },
    { label: "Galerie", href: "gallery" },
    { label: "Contact", href: "location" }
  ],
  hero: {
    ...es.hero,
    eyebrow: "Méditerranée privée · Saison 2026",
    title: "Le jour face à la mer. La nuit avec son propre rythme.",
    subtitle: "Sunbeds, cuisine côtière, cocktails frais et DJs invités dans une crique faite pour rester.",
    location: "Cala Example · Côte méditerranéenne",
    ritual: "Rituel sunset · 18:42"
  },
  experience: {
    ...es.experience,
    label: "La sensation",
    title: "Mer. Musique. Feu. Sel. Énergie.",
    microcopy:
      "Un club imaginé comme une campagne de mode: peau salée, lin, braises douces, verres froids et une piste qui apparaît quand la lumière baisse.",
    fragments: [
      {
        ...es.experience.fragments[0],
        line: "Première ligne, écume proche, service presque invisible."
      },
      {
        ...es.experience.fragments[1],
        line: "Downtempo au coucher du soleil, invités quand la nuit monte."
      },
      {
        ...es.experience.fragments[2],
        line: "Produit frais, assiettes précises, table sans urgence."
      },
      {
        ...es.experience.fragments[3],
        line: "Bougies, peau dorée, longs cocktails et accès limité."
      }
    ]
  },
  reservations: {
    ...es.reservations,
    label: "Réservations",
    title: "Choisissez votre scène avant que la lumière change.",
    intro: "Quatre façons de vivre le club. Service dédié, rythme sunset et arrivée fluide.",
    items: [
      {
        ...es.reservations.items[0],
        price: "À partir de 65 EUR",
        capacity: "1-2 personnes",
        mood: "Soleil, serviette fraîche, eau minérale et mer à quelques pas.",
        inclusions: ["Serviette premium", "Eau d'accueil", "Service au sunbed"]
      },
      {
        ...es.reservations.items[1],
        price: "À partir de 180 EUR",
        capacity: "2-3 personnes",
        mood: "Lit surélevé, ombre en lin et priorité cocktails.",
        inclusions: ["Cocktail d'accueil", "Fruits de saison", "Host prioritaire"]
      },
      {
        ...es.reservations.items[2],
        price: "À partir de 420 EUR",
        capacity: "4-6 personnes",
        mood: "Ombre architecturale, sofa lounge, minibar curaté et host.",
        inclusions: ["Host privé", "Minibar premium", "Table prioritaire"]
      },
      {
        ...es.reservations.items[3],
        price: "Ticket moyen 95 EUR",
        capacity: "2-10 personnes",
        mood: "Table sur l'eau, produit local et cocktails d'après-déjeuner.",
        inclusions: ["Table vue mer", "Menu saisonnier", "Accord vins optionnel"]
      }
    ]
  },
  booking: {
    ...es.booking,
    title: "Réservation privée",
    date: "Date",
    time: "Heure",
    guests: "Personnes",
    request: "Demander disponibilité",
    success: "Demande préparée. Le concierge confirmerait disponibilité, dépôt et accès."
  },
  events: {
    ...es.events,
    label: "Événements",
    title: "Des nuits avec leur propre nom.",
    cta: "Agenda privé"
  },
  gastronomy: {
    ...es.gastronomy,
    label: "Gastronomie",
    title: "Cuisine de côte. Verres à température d'été.",
    line: "Crus, braises, riz, agrumes, herbes et cocktails pensés pour le soleil bas.",
    explore: "Explorer la carte",
    overlayTitle: "La carte complète",
    overlayIntro: "Une séquence méditerranéenne pensée pour passer du déjeuner au sunset sans perdre la température.",
    menu: [
      { type: "Cru", name: "Bar, citron vert, huile verte", price: "24" },
      { type: "Feu", name: "Crevette rouge, sauge, flamme douce", price: "32" },
      { type: "Riz", name: "Riz crémeux de la mer", price: "34" },
      { type: "Doux", name: "Figue, yaourt glacé, miel salin", price: "14" }
    ]
  },
  gallery: {
    ...es.gallery,
    label: "Galerie",
    title: "Des instants qui n'ont pas besoin d'explication."
  },
  location: {
    ...es.location,
    label: "Localisation",
    title: "Une adresse à l'Eixample avec une âme méditerranéenne.",
    address: "Passeig de Gracia 92 · Eixample, Barcelone",
    schedule: "Tous les jours · 10:00 - 02:00",
    mapTitle: "Carte d'Example Beach Club à l'Eixample",
    finalCta: "Réserver avant le sunset"
  }
};

type BeachClubLanguage = "es" | "ca" | "en" | "fr";

export const beachClubCopy: Record<BeachClubLanguage, BeachClubCopy> = {
  es,
  ca,
  en,
  fr
};
