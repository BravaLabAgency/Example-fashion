import type { Language } from "./constants";

type NavItem = {
  label: string;
  href: string;
};

type ImageCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  action?: string;
};

type Store = {
  id: string;
  city: string;
  neighborhood: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  image: string;
  alt: string;
};

type Review = {
  name: string;
  city: string;
  quote: string;
  rating: string;
  initials: string;
};

type Look = {
  name: string;
  mood: string;
  image: string;
  alt: string;
  pieces: string[];
};

type Feature = {
  title: string;
  text: string;
  icon: "map" | "heart" | "sparkles" | "smile" | "leaf";
};

type Article = {
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
};

export const collectionLookbookSlugs = ["spring", "summer", "essentials", "new-arrivals"] as const;

export type CollectionLookbookSlug = (typeof collectionLookbookSlugs)[number];

type GuideEssential = {
  title: string;
  description: string;
  tip: string;
  image: string;
  alt: string;
};

type CollectionLookbook = {
  title: string;
  mood: string;
  intro: string;
  shopNote: string;
  heroImage: string;
  heroAlt: string;
  items: GuideEssential[];
};

export type ExampleFashionEditorialCopy = {
  common: {
    returnToInspiration: string;
    returnToCollections: string;
    stylingTip: string;
    essentialsLabel: string;
    featuredLabel: string;
  };
  styleGuide: {
    title: string;
    subtitle: string;
    intro: string;
    essentialsTitle: string;
    essentials: GuideEssential[];
  };
  collectionLookbooks: Record<CollectionLookbookSlug, CollectionLookbook>;
};

export type ExampleFashionCopy = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  common: {
    brand: string;
    language: string;
    menu: string;
    close: string;
    discoverCollection: string;
    findStore: string;
    explore: string;
    readMore: string;
    stars: string;
    previous: string;
    next: string;
    social: string;
    required: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    alt: string;
    stats: Array<{ value: string; label: string }>;
  };
  collections: {
    label: string;
    title: string;
    intro: string;
    items: ImageCard[];
  };
  realLife: {
    label: string;
    title: string;
    intro: string;
    items: ImageCard[];
  };
  stores: {
    label: string;
    title: string;
    intro: string;
    searchLabel: string;
    searchPlaceholder: string;
    allCities: string;
    resultCount: string;
    noResults: string;
    hoursLabel: string;
    phoneLabel: string;
    emailLabel: string;
    visit: string;
    stores: Store[];
  };
  reviews: {
    label: string;
    title: string;
    intro: string;
    average: string;
    basedOn: string;
    total: string;
    items: Review[];
  };
  lookbook: {
    label: string;
    title: string;
    intro: string;
    outfitLabel: string;
    items: Look[];
  };
  difference: {
    label: string;
    title: string;
    intro: string;
    image: string;
    alt: string;
    items: Feature[];
  };
  community: {
    label: string;
    title: string;
    intro: string;
    image: string;
    alt: string;
    items: ImageCard[];
  };
  news: {
    label: string;
    title: string;
    intro: string;
    articles: Article[];
  };
  newsletter: {
    label: string;
    title: string;
    intro: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    button: string;
    success: string;
    note: string;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    button: string;
    success: string;
    phone: string;
    emailAddress: string;
    support: string;
    social: string;
  };
  footer: {
    tagline: string;
    visit: string;
    copyright: string;
  };
};

const img = {
  hero: "/example-fashion/hero.jpg",
  spring: "/example-fashion/collection-spring.jpg",
  summer: "/example-fashion/collection-summer.jpg",
  essentials: "/example-fashion/collection-essentials.jpg",
  fresh: "/example-fashion/collection-new.jpg",
  family: "/example-fashion/lifestyle-family.jpg",
  cafe: "/example-fashion/lifestyle-cafe.jpg",
  storefront: "/example-fashion/storefront.jpg",
  lookbook: "/example-fashion/lookbook.jpg",
  community: "/example-fashion/community.jpg",
  seasonal: "/example-fashion/seasonal-inspiration.jpg"
};

export const exampleFashionFallbackImage = img.hero;

const storeBase = [
  {
    id: "barcelona",
    phone: "+34 930 184 220",
    email: "barcelona@examplefashion.test",
    image: img.storefront
  },
  {
    id: "girona",
    phone: "+34 972 418 105",
    email: "girona@examplefashion.test",
    image: img.essentials
  },
  {
    id: "tarragona",
    phone: "+34 977 206 330",
    email: "tarragona@examplefashion.test",
    image: img.fresh
  },
  {
    id: "sabadell",
    phone: "+34 937 401 882",
    email: "sabadell@examplefashion.test",
    image: img.spring
  },
  {
    id: "lleida",
    phone: "+34 973 114 622",
    email: "lleida@examplefashion.test",
    image: img.cafe
  }
];

export const exampleFashionEditorialCopy = {
  ca: {
    common: {
      returnToInspiration: "Tornar a inspiració",
      returnToCollections: "Tornar a col·leccions",
      stylingTip: "Consell d'estil",
      essentialsLabel: "5 essencials d'armari",
      featuredLabel: "Peces destacades"
    },
    styleGuide: {
      title: "Guia d'estil",
      subtitle: "Peces essencials per a outfits quotidians sense esforç.",
      intro: "Construeix un armari versàtil amb bases clares, capes suaus i peces que funcionen juntes.",
      essentialsTitle: "5 essencials d'armari",
      essentials: [
        { title: "Camisa blanca", description: "Una peça lluminosa que ordena qualsevol look.", tip: "Una peça lluminosa que ordena qualsevol look. Porta-la oberta sobre un top per a un aire relaxat, cordada amb pantaló recte per a un acabat net o sota punt fi quan vulguis una capa més suau.", image: img.essentials, alt: "Camisa blanca en una selecció d'essencials" },
        { title: "Texans rectes", description: "Denim net, còmode i fàcil de repetir durant la setmana.", tip: "Denim net, còmode i fàcil de repetir durant la setmana. Combina'ls amb punt neutre i una jaqueta lleugera, o amb camisa blanca i sabata baixa per a un look quotidià més polit.", image: img.cafe, alt: "Texans rectes en un look casual" },
        { title: "Blazer lleuger", description: "Estructura suau per donar presència sense rigidesa.", tip: "Estructura suau per donar presència sense rigidesa. Tria tons pedra o oliva per combinar-lo amb texans, vestits senzills o pantalons còmodes sense que el conjunt sembli massa formal.", image: img.lookbook, alt: "Blazer lleuger en un outfit urbà" },
        { title: "Punt neutre", description: "Textura agradable per a capes senzilles i dies variables.", tip: "Textura agradable per a capes senzilles i dies variables. Deixa veure una camisa clara al coll o als punys, o porta'l amb denim net per aconseguir calidesa sense afegir volum.", image: img.spring, alt: "Punt neutre de temporada" },
        { title: "Pantalons còmodes", description: "Una base pràctica amb caient per feina, viatges i caps de setmana.", tip: "Una base pràctica amb caient per feina, viatges i caps de setmana. Busca una cintura còmoda, teixit amb moviment i sabates baixes netes per mantenir el look fàcil i arreglat.", image: img.seasonal, alt: "Pantalons quotidians en tons neutres" }
      ]
    },
    collectionLookbooks: {
      spring: {
        title: "Col·lecció Primavera",
        mood: "Ciutat suau",
        intro: "Capes lleugeres, camises clares i tons naturals per vestir dies llargs amb calma.",
        shopNote: "Trobaràs més peces i combinacions a les botigues físiques.",
        heroImage: img.spring,
        heroAlt: "Persones amb looks de primavera en un carrer local",
        items: [
          { title: "Blazer de cotó", description: "Estructura relaxada per elevar bases senzilles.", tip: "Porta'l amb camisa blanca i denim recte.", image: img.lookbook, alt: "Blazer de cotó en un look de primavera" },
          { title: "Camisa clara", description: "Lluminositat immediata per feina i cap de setmana.", tip: "Arremanga-la per un acabat més natural.", image: img.essentials, alt: "Camisa clara entre peces essencials" },
          { title: "Pantaló fluid", description: "Moviment suau per dies llargs.", tip: "Combina'l amb sabata baixa i bossa flexible.", image: img.seasonal, alt: "Pantaló fluid en tons neutres" },
          { title: "Sobrecamisa oliva", description: "Una capa pràctica amb caràcter local.", tip: "Funciona sobre punt fi o samarreta blanca.", image: img.cafe, alt: "Sobrecamisa oliva en un look casual" },
          { title: "Vestit lleuger", description: "Una peça fàcil per plans de tarda.", tip: "Afegeix una camisa oberta si baixa la temperatura.", image: img.summer, alt: "Vestit lleuger de temporada" },
          { title: "Tote suau", description: "Accessori ampli per ritmes quotidians.", tip: "Tria tons pedra per combinar amb tot.", image: img.fresh, alt: "Clients amb bossa de compra" }
        ]
      },
      summer: {
        title: "Col·lecció Estiu",
        mood: "Estiu fàcil",
        intro: "Lli, cotó i siluetes fresques per moure't de matí a vespre.",
        shopNote: "Hi ha més colors i talles disponibles a la botiga física.",
        heroImage: img.summer,
        heroAlt: "Amics amb roba d'estiu en una plaça assolellada",
        items: [
          { title: "Vestit de lli", description: "Fresc, net i llest per sortir.", tip: "Combina'l amb sandàlia plana i bossa trenada.", image: img.summer, alt: "Vestit de lli en un look d'estiu" },
          { title: "Camisa oberta", description: "Capa lleugera per sol i ombra.", tip: "Porta-la sobre samarreta o banyador urbà.", image: img.hero, alt: "Camisa oberta en un carrer comercial" },
          { title: "Pantaló de cotó", description: "Comoditat transpirable sense perdre forma.", tip: "Doblega el baix per un aire més relaxat.", image: img.seasonal, alt: "Pantaló de cotó en tons clars" },
          { title: "Top natural", description: "Base senzilla per calor i plans llargs.", tip: "Afegeix collarets fins o una camisa fina.", image: img.cafe, alt: "Top natural en una terrassa" },
          { title: "Faldilla fluida", description: "Moviment lleuger per tardes de plaça.", tip: "Equilibra-la amb una samarreta neta.", image: img.community, alt: "Look fluid en un esdeveniment de botiga" },
          { title: "Bossa trenada", description: "Textura d'estiu amb ús diari.", tip: "Funciona amb lli, denim clar i cotó.", image: img.fresh, alt: "Bossa d'estiu en una sortida de botiga" }
        ]
      },
      essentials: {
        title: "Essencials quotidians",
        mood: "Combinacions atemporals",
        intro: "Bàsics pràctics, textures agradables i peces que resolen el dia sense soroll.",
        shopNote: "A la botiga trobaràs més talles, colors i assessorament de combinació.",
        heroImage: img.essentials,
        heroAlt: "Clients mirant essencials dins d'una botiga lluminosa",
        items: [
          { title: "Camisa blanca", description: "La base més clara per ordenar el look.", tip: "Porta-la amb blazer o sota punt fi.", image: img.essentials, alt: "Camisa blanca essencial" },
          { title: "Denim recte", description: "Una silueta fàcil que acompanya tot l'any.", tip: "Tria rentat mig per màxima versatilitat.", image: img.cafe, alt: "Denim recte en un look quotidià" },
          { title: "Punt suau", description: "Calidesa lleugera sense volum extra.", tip: "Combina'l amb pantaló fluid o texans.", image: img.spring, alt: "Punt suau en tons neutres" },
          { title: "Pantaló quotidià", description: "Còmode, net i preparat per repetir.", tip: "Un tall recte allarga visualment el look.", image: img.seasonal, alt: "Pantaló quotidià en una selecció neutra" },
          { title: "Jaqueta lleugera", description: "Una capa útil per canvis de temps.", tip: "El color oliva suma caràcter sense cridar.", image: img.lookbook, alt: "Jaqueta lleugera en una ciutat" },
          { title: "Samarreta neta", description: "La peça que uneix armari, temporada i confort.", tip: "Busca cotó amb bona caiguda.", image: img.hero, alt: "Samarreta neta en un look local" }
        ]
      },
      "new-arrivals": {
        title: "Novetats",
        mood: "Arribades de temporada",
        intro: "Peces noves triades per refrescar l'armari amb naturalitat.",
        shopNote: "Les novetats canvien sovint; a la botiga hi ha més selecció disponible.",
        heroImage: img.fresh,
        heroAlt: "Clients sortint d'una botiga amb bosses de compra",
        items: [
          { title: "Camisa fresca", description: "Un nou to clar per renovar bases.", tip: "Combina-la amb denim o pantaló pedra.", image: img.spring, alt: "Camisa fresca de temporada" },
          { title: "Punt de transició", description: "Capa suau per matins variables.", tip: "Porta'l sobre una camisa blanca.", image: img.seasonal, alt: "Punt de transició en tons naturals" },
          { title: "Pantaló ample", description: "Moviment i comoditat amb línia neta.", tip: "Equilibra'l amb una part superior més curta.", image: img.lookbook, alt: "Pantaló ample en un look urbà" },
          { title: "Sobrecamisa nova", description: "Capa fàcil per ciutat i cap de setmana.", tip: "L'oliva funciona amb blanc, denim i pedra.", image: img.cafe, alt: "Sobrecamisa nova en una cafeteria" },
          { title: "Vestit relaxat", description: "Una peça única per plans immediats.", tip: "Afegeix cinturó suau si vols marcar cintura.", image: img.summer, alt: "Vestit relaxat d'estiu" },
          { title: "Accessori quotidià", description: "Petits detalls que actualitzen el conjunt.", tip: "Repeteix un to del look per mantenir harmonia.", image: img.community, alt: "Accessori en un ambient de comunitat" }
        ]
      }
    }
  },
  es: {
    common: {
      returnToInspiration: "Volver a inspiración",
      returnToCollections: "Volver a colecciones",
      stylingTip: "Consejo de estilo",
      essentialsLabel: "5 básicos de armario",
      featuredLabel: "Piezas destacadas"
    },
    styleGuide: {
      title: "Style Guide",
      subtitle: "Piezas esenciales para outfits diarios sin esfuerzo.",
      intro: "Construye un armario versátil con bases claras, capas suaves y prendas que funcionan juntas.",
      essentialsTitle: "5 básicos de armario",
      essentials: [
        { title: "Camisa blanca", description: "Una prenda luminosa que ordena cualquier look.", tip: "Una prenda luminosa que ordena cualquier look. Llévala abierta sobre un top para un estilo relajado, cerrada con pantalón recto para un acabado más limpio o bajo punto fino para suavizar el conjunto.", image: img.essentials, alt: "Camisa blanca en una selección de básicos" },
        { title: "Vaqueros rectos", description: "Denim limpio, cómodo y fácil de repetir durante la semana.", tip: "Denim limpio, cómodo y fácil de repetir durante la semana. Combínalos con punto neutro y una chaqueta ligera, o con camisa blanca y zapato bajo para un look diario más cuidado.", image: img.cafe, alt: "Vaqueros rectos en un look casual" },
        { title: "Blazer ligero", description: "Estructura suave para dar presencia sin rigidez.", tip: "Estructura suave para dar presencia sin rigidez. Elige tonos piedra u oliva para combinarlo con vaqueros, vestidos sencillos o pantalones cómodos sin que el conjunto parezca demasiado formal.", image: img.lookbook, alt: "Blazer ligero en un outfit urbano" },
        { title: "Punto neutro", description: "Textura agradable para capas sencillas y días variables.", tip: "Textura agradable para capas sencillas y días variables. Deja ver una camisa clara en cuello o puños, o llévalo con denim limpio para sumar calidez sin añadir volumen.", image: img.spring, alt: "Punto neutro de temporada" },
        { title: "Pantalones cómodos", description: "Una base práctica con caída para trabajo, viajes y fines de semana.", tip: "Una base práctica con caída para trabajo, viajes y fines de semana. Busca una cintura cómoda, tejido con movimiento y zapato bajo limpio para mantener el look fácil y arreglado.", image: img.seasonal, alt: "Pantalones cotidianos en tonos neutros" }
      ]
    },
    collectionLookbooks: {
      spring: {
        title: "Colección Primavera",
        mood: "Ciudad suave",
        intro: "Capas ligeras, camisas claras y tonos naturales para vestir días largos con calma.",
        shopNote: "Encontrarás más prendas y combinaciones en las tiendas físicas.",
        heroImage: img.spring,
        heroAlt: "Personas con looks de primavera en una calle local",
        items: [
          { title: "Blazer de algodón", description: "Estructura relajada para elevar básicos sencillos.", tip: "Llévalo con camisa blanca y denim recto.", image: img.lookbook, alt: "Blazer de algodón en un look de primavera" },
          { title: "Camisa clara", description: "Luminosidad inmediata para trabajo y fin de semana.", tip: "Remángala para un acabado más natural.", image: img.essentials, alt: "Camisa clara entre prendas esenciales" },
          { title: "Pantalón fluido", description: "Movimiento suave para días largos.", tip: "Combínalo con zapato bajo y bolso flexible.", image: img.seasonal, alt: "Pantalón fluido en tonos neutros" },
          { title: "Sobrecamisa oliva", description: "Una capa práctica con carácter local.", tip: "Funciona sobre punto fino o camiseta blanca.", image: img.cafe, alt: "Sobrecamisa oliva en un look casual" },
          { title: "Vestido ligero", description: "Una pieza fácil para planes de tarde.", tip: "Añade una camisa abierta si baja la temperatura.", image: img.summer, alt: "Vestido ligero de temporada" },
          { title: "Tote suave", description: "Accesorio amplio para ritmos cotidianos.", tip: "Elige tonos piedra para combinar con todo.", image: img.fresh, alt: "Clientes con bolsa de compra" }
        ]
      },
      summer: {
        title: "Colección Verano",
        mood: "Verano fácil",
        intro: "Lino, algodón y siluetas frescas para moverte de la mañana a la noche.",
        shopNote: "Hay más colores y tallas disponibles en tienda física.",
        heroImage: img.summer,
        heroAlt: "Amigos con ropa de verano en una plaza soleada",
        items: [
          { title: "Vestido de lino", description: "Fresco, limpio y listo para salir.", tip: "Combínalo con sandalia plana y bolso trenzado.", image: img.summer, alt: "Vestido de lino en un look de verano" },
          { title: "Camisa abierta", description: "Capa ligera para sol y sombra.", tip: "Llévala sobre camiseta o top urbano.", image: img.hero, alt: "Camisa abierta en una calle comercial" },
          { title: "Pantalón de algodón", description: "Comodidad transpirable sin perder forma.", tip: "Dobla el bajo para un aire más relajado.", image: img.seasonal, alt: "Pantalón de algodón en tonos claros" },
          { title: "Top natural", description: "Base sencilla para calor y planes largos.", tip: "Añade collares finos o una camisa ligera.", image: img.cafe, alt: "Top natural en una terraza" },
          { title: "Falda fluida", description: "Movimiento ligero para tardes de plaza.", tip: "Equilíbrala con una camiseta limpia.", image: img.community, alt: "Look fluido en un evento de tienda" },
          { title: "Bolso trenzado", description: "Textura de verano con uso diario.", tip: "Funciona con lino, denim claro y algodón.", image: img.fresh, alt: "Bolso de verano en una salida de tienda" }
        ]
      },
      essentials: {
        title: "Everyday Essentials",
        mood: "Combinaciones atemporales",
        intro: "Básicos prácticos, texturas agradables y prendas que resuelven el día sin ruido.",
        shopNote: "En tienda encontrarás más tallas, colores y asesoramiento de combinación.",
        heroImage: img.essentials,
        heroAlt: "Clientes mirando básicos dentro de una tienda luminosa",
        items: [
          { title: "Camisa blanca", description: "La base más clara para ordenar el look.", tip: "Llévala con blazer o bajo punto fino.", image: img.essentials, alt: "Camisa blanca esencial" },
          { title: "Denim recto", description: "Una silueta fácil que acompaña todo el año.", tip: "Elige lavado medio para máxima versatilidad.", image: img.cafe, alt: "Denim recto en un look cotidiano" },
          { title: "Punto suave", description: "Calidez ligera sin volumen extra.", tip: "Combínalo con pantalón fluido o vaqueros.", image: img.spring, alt: "Punto suave en tonos neutros" },
          { title: "Pantalón cotidiano", description: "Cómodo, limpio y preparado para repetir.", tip: "Un corte recto alarga visualmente el look.", image: img.seasonal, alt: "Pantalón cotidiano en una selección neutra" },
          { title: "Chaqueta ligera", description: "Una capa útil para cambios de tiempo.", tip: "El color oliva suma carácter sin gritar.", image: img.lookbook, alt: "Chaqueta ligera en ciudad" },
          { title: "Camiseta limpia", description: "La pieza que une armario, temporada y confort.", tip: "Busca algodón con buena caída.", image: img.hero, alt: "Camiseta limpia en un look local" }
        ]
      },
      "new-arrivals": {
        title: "Novedades",
        mood: "Llegadas de temporada",
        intro: "Prendas nuevas elegidas para refrescar el armario con naturalidad.",
        shopNote: "Las novedades cambian a menudo; en tienda hay más selección disponible.",
        heroImage: img.fresh,
        heroAlt: "Clientes saliendo de una tienda con bolsas de compra",
        items: [
          { title: "Camisa fresca", description: "Un nuevo tono claro para renovar bases.", tip: "Combínala con denim o pantalón piedra.", image: img.spring, alt: "Camisa fresca de temporada" },
          { title: "Punto de transición", description: "Capa suave para mañanas variables.", tip: "Llévalo sobre una camisa blanca.", image: img.seasonal, alt: "Punto de transición en tonos naturales" },
          { title: "Pantalón ancho", description: "Movimiento y comodidad con línea limpia.", tip: "Equilíbralo con una parte superior más corta.", image: img.lookbook, alt: "Pantalón ancho en un look urbano" },
          { title: "Sobrecamisa nueva", description: "Capa fácil para ciudad y fin de semana.", tip: "El oliva funciona con blanco, denim y piedra.", image: img.cafe, alt: "Sobrecamisa nueva en una cafetería" },
          { title: "Vestido relajado", description: "Una pieza única para planes inmediatos.", tip: "Añade cinturón suave si quieres marcar cintura.", image: img.summer, alt: "Vestido relajado de verano" },
          { title: "Accesorio diario", description: "Pequeños detalles que actualizan el conjunto.", tip: "Repite un tono del look para mantener armonía.", image: img.community, alt: "Accesorio en un ambiente de comunidad" }
        ]
      }
    }
  },
  en: {
    common: {
      returnToInspiration: "Return to Inspiration",
      returnToCollections: "Return to Collections",
      stylingTip: "Styling tip",
      essentialsLabel: "5 Wardrobe Essentials",
      featuredLabel: "Featured pieces"
    },
    styleGuide: {
      title: "Style Guide",
      subtitle: "Essential pieces for effortless everyday outfits.",
      intro: "Build a versatile wardrobe with clear foundations, soft layers and pieces that work together easily.",
      essentialsTitle: "5 Wardrobe Essentials",
      essentials: [
        { title: "White shirt", description: "A bright piece that brings order to almost any look.", tip: "A timeless white shirt brings structure and freshness to everyday outfits. Wear it open over a basic top for a relaxed look, tucked into straight-leg jeans for a cleaner style, or layered under knitwear for a softer finish.", image: img.essentials, alt: "White shirt in an essentials selection" },
        { title: "Straight-leg jeans", description: "Clean denim that is comfortable enough to repeat all week.", tip: "Clean denim is comfortable enough to repeat all week. Pair straight-leg jeans with neutral knitwear and a light jacket, or add a white shirt and simple low shoes for an easy everyday uniform.", image: img.cafe, alt: "Straight-leg jeans in a casual outfit" },
        { title: "Lightweight blazer", description: "Soft structure that adds polish without feeling formal.", tip: "A lightweight blazer adds soft structure without feeling formal. Choose stone or olive tones so it works with denim, simple dresses and relaxed trousers while keeping the outfit polished.", image: img.lookbook, alt: "Lightweight blazer in a city outfit" },
        { title: "Neutral knitwear", description: "Easy texture for simple layering and changing weather.", tip: "Neutral knitwear brings easy texture for simple layering and changing weather. Let a pale shirt show at the collar or cuff, or wear it with clean denim for warmth without extra bulk.", image: img.spring, alt: "Neutral knitwear for the season" },
        { title: "Comfortable everyday trousers", description: "A practical base with movement for work, travel and weekends.", tip: "Comfortable everyday trousers give you a practical base with movement for work, travel and weekends. Look for an easy waist, fluid fabric and clean low shoes to keep the look relaxed but considered.", image: img.seasonal, alt: "Everyday trousers in neutral tones" }
      ]
    },
    collectionLookbooks: {
      spring: {
        title: "Spring Collection",
        mood: "Soft City",
        intro: "Light layers, pale shirts and natural tones for long days with an easy rhythm.",
        shopNote: "There is more to discover in the physical shop.",
        heroImage: img.spring,
        heroAlt: "People wearing spring looks on a local street",
        items: [
          { title: "Cotton blazer", description: "Relaxed structure for elevating simple basics.", tip: "Wear it with a white shirt and straight denim.", image: img.lookbook, alt: "Cotton blazer in a spring look" },
          { title: "Light shirt", description: "Immediate brightness for workdays and weekends.", tip: "Roll the sleeves for a more natural finish.", image: img.essentials, alt: "Light shirt among everyday essentials" },
          { title: "Fluid trouser", description: "Soft movement for long days.", tip: "Pair with low shoes and a flexible bag.", image: img.seasonal, alt: "Fluid trousers in neutral tones" },
          { title: "Olive overshirt", description: "A useful layer with quiet character.", tip: "Works over fine knitwear or a white tee.", image: img.cafe, alt: "Olive overshirt in a casual look" },
          { title: "Light dress", description: "An easy single piece for afternoon plans.", tip: "Add an open shirt when the temperature drops.", image: img.summer, alt: "Light seasonal dress" },
          { title: "Soft tote", description: "A roomy accessory for everyday rhythms.", tip: "Choose stone tones to wear it with everything.", image: img.fresh, alt: "Customers with a shopping bag" }
        ]
      },
      summer: {
        title: "Summer Collection",
        mood: "Summer Ease",
        intro: "Linen, cotton and fresh silhouettes made for moving from morning to evening.",
        shopNote: "More colors and sizes are available in the physical shop.",
        heroImage: img.summer,
        heroAlt: "Friends wearing summer clothing in a sunny square",
        items: [
          { title: "Linen dress", description: "Cool, clean and ready in one move.", tip: "Wear with flat sandals and a woven bag.", image: img.summer, alt: "Linen dress in a summer look" },
          { title: "Open shirt", description: "A light layer for sun and shade.", tip: "Wear over a tee or simple city top.", image: img.hero, alt: "Open shirt on a shopping street" },
          { title: "Cotton trouser", description: "Breathable comfort that keeps its shape.", tip: "Turn up the hem for a relaxed line.", image: img.seasonal, alt: "Cotton trousers in light tones" },
          { title: "Natural top", description: "A simple base for heat and long plans.", tip: "Add fine jewellery or a thin shirt.", image: img.cafe, alt: "Natural top at a cafe terrace" },
          { title: "Fluid skirt", description: "Light movement for warm afternoons.", tip: "Balance it with a clean tee.", image: img.community, alt: "Fluid look at a store event" },
          { title: "Woven bag", description: "Summer texture for daily use.", tip: "Works with linen, light denim and cotton.", image: img.fresh, alt: "Summer bag outside a store" }
        ]
      },
      essentials: {
        title: "Everyday Essentials",
        mood: "Timeless combinations",
        intro: "Basic pieces, timeless combinations and practical styling for a wardrobe that works every day.",
        shopNote: "Find more sizes, colors and styling advice in the physical shop.",
        heroImage: img.essentials,
        heroAlt: "Customers browsing essentials inside a bright store",
        items: [
          { title: "White shirt", description: "The cleanest base for shaping a look.", tip: "Layer under a blazer or fine knit.", image: img.essentials, alt: "Essential white shirt" },
          { title: "Straight denim", description: "An easy silhouette for every season.", tip: "Choose a mid wash for maximum flexibility.", image: img.cafe, alt: "Straight denim in an everyday look" },
          { title: "Soft knit", description: "Light warmth without extra bulk.", tip: "Pair with fluid trousers or jeans.", image: img.spring, alt: "Soft knitwear in neutral tones" },
          { title: "Everyday trouser", description: "Comfortable, clean and ready to repeat.", tip: "A straight cut keeps the line polished.", image: img.seasonal, alt: "Everyday trousers in a neutral selection" },
          { title: "Light jacket", description: "A useful layer for changing weather.", tip: "Olive adds character while staying quiet.", image: img.lookbook, alt: "Light jacket in the city" },
          { title: "Clean tee", description: "The piece that connects comfort, season and wardrobe.", tip: "Look for cotton with a good drape.", image: img.hero, alt: "Clean tee in a local street look" }
        ]
      },
      "new-arrivals": {
        title: "New Arrivals",
        mood: "Fresh seasonal arrivals",
        intro: "New pieces selected to refresh everyday wardrobes with natural ease.",
        shopNote: "New arrivals change often; there is more selection in the physical shop.",
        heroImage: img.fresh,
        heroAlt: "Customers leaving a store with shopping bags",
        items: [
          { title: "Fresh shirt", description: "A new pale tone for refreshing basics.", tip: "Wear with denim or stone trousers.", image: img.spring, alt: "Fresh seasonal shirt" },
          { title: "Transitional knit", description: "A soft layer for changeable mornings.", tip: "Layer it over a white shirt.", image: img.seasonal, alt: "Transitional knitwear in natural tones" },
          { title: "Wide trouser", description: "Movement and comfort with a clean line.", tip: "Balance with a shorter top.", image: img.lookbook, alt: "Wide trouser in a city look" },
          { title: "New overshirt", description: "An easy layer for city and weekend.", tip: "Olive works with white, denim and stone.", image: img.cafe, alt: "New overshirt at a cafe" },
          { title: "Relaxed dress", description: "A single piece for spontaneous plans.", tip: "Add a soft belt if you want shape.", image: img.summer, alt: "Relaxed summer dress" },
          { title: "Everyday accessory", description: "Small details that update a full outfit.", tip: "Repeat one tone from the look to keep it calm.", image: img.community, alt: "Accessory in a community setting" }
        ]
      }
    }
  },
  ru: {
    common: {
      returnToInspiration: "Вернуться к вдохновению",
      returnToCollections: "Вернуться к коллекциям",
      stylingTip: "Совет по стилю",
      essentialsLabel: "5 базовых вещей",
      featuredLabel: "Избранные вещи"
    },
    styleGuide: {
      title: "Style Guide",
      subtitle: "Базовые вещи для легких повседневных образов.",
      intro: "Создайте универсальный гардероб из понятных базовых вещей, мягких слоев и простых сочетаний.",
      essentialsTitle: "5 базовых вещей",
      essentials: [
        { title: "Белая рубашка", description: "Светлая вещь, которая собирает почти любой образ.", tip: "Белая рубашка добавляет структуру и свежесть повседневным образам. Носите ее открытой поверх базового топа, заправленной в прямые джинсы или под тонкий трикотаж для более мягкого вида.", image: img.essentials, alt: "Белая рубашка в подборке базы" },
        { title: "Прямые джинсы", description: "Чистый деним, который удобно повторять всю неделю.", tip: "Прямые джинсы легко носить всю неделю. Сочетайте их с нейтральным трикотажем и легкой курткой, или добавьте белую рубашку и аккуратную низкую обувь.", image: img.cafe, alt: "Прямые джинсы в повседневном образе" },
        { title: "Легкий блейзер", description: "Мягкая структура без ощущения офисной строгости.", tip: "Легкий блейзер дает мягкую структуру без офисной строгости. Каменные и оливковые оттенки проще сочетать с денимом, простыми платьями и удобными брюками.", image: img.lookbook, alt: "Легкий блейзер в городском образе" },
        { title: "Нейтральный трикотаж", description: "Простая фактура для слоев и переменной погоды.", tip: "Нейтральный трикотаж добавляет мягкую фактуру для слоев и переменной погоды. Пусть светлая рубашка выглядывает у воротника или манжет, или носите его с чистым денимом.", image: img.spring, alt: "Нейтральный трикотаж сезона" },
        { title: "Удобные брюки на каждый день", description: "Практичная база для работы, поездок и выходных.", tip: "Удобные брюки дают практичную базу для работы, поездок и выходных. Выбирайте комфортную талию, ткань с движением и аккуратную низкую обувь, чтобы образ выглядел спокойно и собранно.", image: img.seasonal, alt: "Повседневные брюки в нейтральных тонах" }
      ]
    },
    collectionLookbooks: {
      spring: {
        title: "Весенняя коллекция",
        mood: "Мягкий город",
        intro: "Легкие слои, светлые рубашки и натуральные оттенки для длинных спокойных дней.",
        shopNote: "Больше вещей и сочетаний доступно в физическом магазине.",
        heroImage: img.spring,
        heroAlt: "Люди в весенних образах на локальной улице",
        items: [
          { title: "Хлопковый блейзер", description: "Расслабленная структура для простых базовых вещей.", tip: "Носите с белой рубашкой и прямым денимом.", image: img.lookbook, alt: "Хлопковый блейзер в весеннем образе" },
          { title: "Светлая рубашка", description: "Мгновенная свежесть для работы и выходных.", tip: "Закатайте рукава для более естественного вида.", image: img.essentials, alt: "Светлая рубашка среди базовых вещей" },
          { title: "Свободные брюки", description: "Мягкое движение для длинных дней.", tip: "Сочетайте с низкой обувью и мягкой сумкой.", image: img.seasonal, alt: "Свободные брюки в нейтральных тонах" },
          { title: "Оливковая рубашка-куртка", description: "Практичный слой со спокойным характером.", tip: "Работает поверх тонкого трикотажа или белой футболки.", image: img.cafe, alt: "Оливковая рубашка-куртка в casual образе" },
          { title: "Легкое платье", description: "Одна простая вещь для дневных планов.", tip: "Добавьте открытую рубашку, если станет прохладно.", image: img.summer, alt: "Легкое сезонное платье" },
          { title: "Мягкая сумка", description: "Вместительный аксессуар для повседневного ритма.", tip: "Каменные оттенки легче носить со всем.", image: img.fresh, alt: "Клиенты с сумкой покупок" }
        ]
      },
      summer: {
        title: "Летняя коллекция",
        mood: "Легкое лето",
        intro: "Лен, хлопок и свежие силуэты для движения с утра до вечера.",
        shopNote: "Больше цветов и размеров доступно в физическом магазине.",
        heroImage: img.summer,
        heroAlt: "Друзья в летней одежде на солнечной площади",
        items: [
          { title: "Льняное платье", description: "Прохладно, чисто и готово одним движением.", tip: "Носите с плоскими сандалиями и плетеной сумкой.", image: img.summer, alt: "Льняное платье в летнем образе" },
          { title: "Открытая рубашка", description: "Легкий слой для солнца и тени.", tip: "Носите поверх футболки или простого топа.", image: img.hero, alt: "Открытая рубашка на торговой улице" },
          { title: "Хлопковые брюки", description: "Дышащий комфорт, который держит форму.", tip: "Подверните низ для более расслабленной линии.", image: img.seasonal, alt: "Хлопковые брюки в светлых тонах" },
          { title: "Натуральный топ", description: "Простая база для жары и долгих планов.", tip: "Добавьте тонкие украшения или легкую рубашку.", image: img.cafe, alt: "Натуральный топ на террасе кафе" },
          { title: "Свободная юбка", description: "Легкое движение для теплых вечеров.", tip: "Уравновесьте ее чистой футболкой.", image: img.community, alt: "Свободный образ на событии в магазине" },
          { title: "Плетеная сумка", description: "Летняя фактура для ежедневного использования.", tip: "Подходит к льну, светлому дениму и хлопку.", image: img.fresh, alt: "Летняя сумка у магазина" }
        ]
      },
      essentials: {
        title: "Everyday Essentials",
        mood: "Вневременные сочетания",
        intro: "Базовые вещи, практичные сочетания и простой стиль для гардероба на каждый день.",
        shopNote: "В магазине доступны дополнительные размеры, цвета и советы по сочетаниям.",
        heroImage: img.essentials,
        heroAlt: "Покупатели смотрят базовые вещи в светлом магазине",
        items: [
          { title: "Белая рубашка", description: "Самая чистая база для любого образа.", tip: "Носите под блейзер или тонкий трикотаж.", image: img.essentials, alt: "Базовая белая рубашка" },
          { title: "Прямой деним", description: "Простой силуэт для любого сезона.", tip: "Средняя стирка дает максимум гибкости.", image: img.cafe, alt: "Прямой деним в повседневном образе" },
          { title: "Мягкий трикотаж", description: "Легкое тепло без лишнего объема.", tip: "Сочетайте со свободными брюками или джинсами.", image: img.spring, alt: "Мягкий трикотаж в нейтральных тонах" },
          { title: "Брюки на каждый день", description: "Удобные, чистые и готовые к повтору.", tip: "Прямой крой сохраняет аккуратную линию.", image: img.seasonal, alt: "Повседневные брюки в нейтральной подборке" },
          { title: "Легкая куртка", description: "Полезный слой для переменной погоды.", tip: "Олива добавляет характер спокойно.", image: img.lookbook, alt: "Легкая куртка в городе" },
          { title: "Чистая футболка", description: "Вещь, которая связывает комфорт, сезон и гардероб.", tip: "Ищите хлопок с хорошей посадкой.", image: img.hero, alt: "Чистая футболка в локальном образе" }
        ]
      },
      "new-arrivals": {
        title: "Новинки",
        mood: "Свежие сезонные поступления",
        intro: "Новые вещи, выбранные для естественного обновления повседневного гардероба.",
        shopNote: "Новинки часто меняются; больше выбора доступно в физическом магазине.",
        heroImage: img.fresh,
        heroAlt: "Клиенты выходят из магазина с покупками",
        items: [
          { title: "Свежая рубашка", description: "Новый светлый тон для обновления базы.", tip: "Носите с денимом или каменными брюками.", image: img.spring, alt: "Свежая сезонная рубашка" },
          { title: "Переходный трикотаж", description: "Мягкий слой для переменных утр.", tip: "Носите поверх белой рубашки.", image: img.seasonal, alt: "Переходный трикотаж в натуральных тонах" },
          { title: "Широкие брюки", description: "Движение и комфорт с чистой линией.", tip: "Балансируйте более коротким верхом.", image: img.lookbook, alt: "Широкие брюки в городском образе" },
          { title: "Новая рубашка-куртка", description: "Легкий слой для города и выходных.", tip: "Олива сочетается с белым, денимом и камнем.", image: img.cafe, alt: "Новая рубашка-куртка в кафе" },
          { title: "Расслабленное платье", description: "Одна вещь для спонтанных планов.", tip: "Добавьте мягкий пояс, если хотите форму.", image: img.summer, alt: "Расслабленное летнее платье" },
          { title: "Аксессуар на каждый день", description: "Маленькие детали обновляют весь образ.", tip: "Повторите один оттенок из образа для спокойствия.", image: img.community, alt: "Аксессуар в атмосфере сообщества" }
        ]
      }
    }
  }
} satisfies Record<Language, ExampleFashionEditorialCopy>;

export const exampleFashionCopy = {
  ca: {
    metadata: {
      title: "Example Fashion | Moda local per a la vida quotidiana",
      description:
        "Cadena fictícia de botigues locals de roba amb col·leccions modernes, estil accessible i botigues físiques a Catalunya.",
      keywords: ["moda local", "botigues de roba", "col·leccions de temporada", "Example Fashion"]
    },
    common: {
      brand: "Example Fashion",
      language: "Idioma",
      menu: "Menú",
      close: "Tancar",
      discoverCollection: "Descobrir la col·lecció",
      findStore: "Trobar botiga",
      explore: "Explorar",
      readMore: "Llegir més",
      stars: "estrelles",
      previous: "Anterior",
      next: "Següent",
      social: "Xarxes socials",
      required: "camp obligatori"
    },
    nav: [
      { label: "Col·leccions", href: "collections" },
      { label: "Botigues", href: "stores" },
      { label: "Ressenyes", href: "reviews" },
      { label: "Diferència", href: "/difference" },
      { label: "Novetats", href: "/news" },
      { label: "Contacte", href: "contact" }
    ],
    hero: {
      eyebrow: "Moda local, moderna i propera",
      title: "Example Fashion",
      subtitle:
        "Descobreix col·leccions pensades per vestir amb comoditat, estil i confiança cada dia.",
      image: img.hero,
      alt: "Grup divers de persones somrient amb roba casual davant d'una botiga local",
      stats: [
        { value: "18", label: "botigues locals" },
        { value: "4,8/5", label: "valoració mitjana" },
        { value: "1998", label: "arrels al comerç de proximitat" }
      ]
    },
    collections: {
      label: "Col·leccions actuals",
      title: "Peces fàcils de portar, pensades per a la temporada.",
      intro:
        "Roba per treballar, passejar, sortir a prendre un cafè o improvisar plans sense canviar de ritme.",
      items: [
        {
          title: "Col·lecció Primavera",
          description: "Capes lleugeres, colors suaus i peces versàtils per als dies que s'allarguen.",
          image: img.spring,
          alt: "Persones amb peces de primavera caminant per un carrer amb arbres",
          action: "Veure primavera"
        },
        {
          title: "Col·lecció Estiu",
          description: "Lli, cotó i siluetes relaxades per sentir-te còmode de matí a vespre.",
          image: img.summer,
          alt: "Grup d'amics amb roba d'estiu en una plaça assolellada",
          action: "Veure estiu"
        },
        {
          title: "Essencials",
          description: "Bàsics amb bon caient, textures agradables i combinacions que sempre funcionen.",
          image: img.essentials,
          alt: "Clients mirant peces bàsiques dins d'una botiga lluminosa",
          action: "Veure essencials"
        },
        {
          title: "Novetats",
          description: "Arribades setmanals triades amb criteri per renovar l'armari sense complicacions.",
          image: img.fresh,
          alt: "Clients sortint d'una botiga de barri amb bosses de compra",
          action: "Veure novetats"
        }
      ]
    },
    realLife: {
      label: "Estil a la vida real",
      title: "Roba que es mou amb persones reals.",
      intro:
        "Looks que no demanen una ocasió perfecta: caps de setmana, família, feina, ciutat i moments compartits.",
      items: [
        {
          title: "Caps de setmana casuals",
          description: "Texans còmodes, camises suaus i jaquetes lleugeres per sortir sense pensar-hi massa.",
          image: img.cafe,
          alt: "Amics rient en una terrassa de cafeteria",
          action: "Inspirar-me"
        },
        {
          title: "Plans en família",
          description: "Peces resistents, agradables al tacte i fàcils de combinar per a totes les edats.",
          image: img.family,
          alt: "Família passejant per un parc urbà amb roba casual",
          action: "Veure looks"
        },
        {
          title: "Passejos de ciutat",
          description: "Siluetes netes i capes pràctiques per anar de botiga, cafè i carrer.",
          image: img.hero,
          alt: "Grup de persones caminant per un carrer comercial",
          action: "Explorar"
        },
        {
          title: "Cafè amb amics",
          description: "Colors naturals i textures suaus per sentir-te arreglat sense esforç.",
          image: img.summer,
          alt: "Amics amb roba d'estiu a prop d'una cafeteria",
          action: "Veure idees"
        },
        {
          title: "Feina quotidiana",
          description: "Blazers relaxats, punt fi i pantalons amb caient per a jornades llargues.",
          image: img.lookbook,
          alt: "Models amb outfits complets caminant per un carrer tranquil",
          action: "Veure outfits"
        }
      ]
    },
    stores: {
      label: "Botigues",
      title: "Troba Example Fashion a prop teu.",
      intro:
        "Cada botiga manté el mateix tracte proper: espais lluminosos, assessorament amable i col·leccions fàcils de descobrir.",
      searchLabel: "Cerca de botigues",
      searchPlaceholder: "Cerca per ciutat, barri o adreça",
      allCities: "Totes les ciutats",
      resultCount: "botigues trobades",
      noResults: "No hem trobat cap botiga amb aquesta cerca.",
      hoursLabel: "Horari",
      phoneLabel: "Telèfon",
      emailLabel: "Email",
      visit: "Com arribar",
      stores: [
        {
          ...storeBase[0],
          city: "Barcelona",
          neighborhood: "Eixample",
          address: "Rambla de Catalunya 88, 08008 Barcelona",
          hours: "Dl-Ds 10:00-20:30 · Dg 11:00-19:00",
          alt: "Façana lluminosa d'una botiga Example Fashion a Barcelona"
        },
        {
          ...storeBase[1],
          city: "Girona",
          neighborhood: "Centre",
          address: "Carrer de Santa Clara 24, 17001 Girona",
          hours: "Dl-Ds 10:00-20:00",
          alt: "Interior acollidor d'una botiga Example Fashion a Girona"
        },
        {
          ...storeBase[2],
          city: "Tarragona",
          neighborhood: "Rambla Nova",
          address: "Rambla Nova 63, 43003 Tarragona",
          hours: "Dl-Ds 10:00-20:30",
          alt: "Clients sortint d'una botiga Example Fashion a Tarragona"
        },
        {
          ...storeBase[3],
          city: "Sabadell",
          neighborhood: "Centre",
          address: "Passeig de la Plaça Major 18, 08201 Sabadell",
          hours: "Dl-Ds 10:00-20:00",
          alt: "Moda de temporada en una botiga Example Fashion de Sabadell"
        },
        {
          ...storeBase[4],
          city: "Lleida",
          neighborhood: "Eix Comercial",
          address: "Carrer Major 41, 25007 Lleida",
          hours: "Dl-Ds 10:00-20:00",
          alt: "Ambient social i proper en una botiga Example Fashion de Lleida"
        }
      ]
    },
    reviews: {
      label: "Opinions de clients",
      title: "La confiança també es nota quan entres per la porta.",
      intro:
        "Persones que tornen per la qualitat, el tracte i la sensació d'estar comprant en una botiga de barri ben cuidada.",
      average: "4,8/5",
      basedOn: "basat en més de 2.500 ressenyes de clients",
      total: "2.500+ ressenyes",
      items: [
        {
          name: "Maria",
          city: "Barcelona",
          quote: "Sempre hi trobo alguna cosa que m'agrada. L'equip és atent i t'ajuda sense pressionar.",
          rating: "5",
          initials: "MA"
        },
        {
          name: "David",
          city: "Girona",
          quote: "Bona qualitat, preus raonables i un ambient molt acollidor. S'ha convertit en una parada habitual.",
          rating: "5",
          initials: "DA"
        },
        {
          name: "Laura",
          city: "Tarragona",
          quote: "Una de les meves botigues locals preferides. Les col·leccions són fàcils de combinar.",
          rating: "5",
          initials: "LA"
        },
        {
          name: "Nadia",
          city: "Sabadell",
          quote: "El personal em va recomanar talles i combinacions amb molta naturalitat. Vaig sortir encantada.",
          rating: "5",
          initials: "NA"
        }
      ]
    },
    lookbook: {
      label: "Lookbook",
      title: "Outfits complets per inspirar el teu dia.",
      intro:
        "Una mirada editorial, però pensada per a armaris reals: peces que pots portar avui i tornar a combinar demà.",
      outfitLabel: "Peces del look",
      items: [
        {
          name: "Ciutat suau",
          mood: "Blazer relaxat, camisa clara i pantaló fluid per a dies de feina i cafè.",
          image: img.lookbook,
          alt: "Tres persones amb outfits complets en un carrer tranquil",
          pieces: ["Blazer de cotó", "Camisa blanca", "Pantaló ample", "Bossa de pell suau"]
        },
        {
          name: "Cap de setmana natural",
          mood: "Denim net, punt lleuger i una capa oliva per moure't amb calma.",
          image: img.cafe,
          alt: "Amics amb looks casuals en una cafeteria",
          pieces: ["Jersei fi", "Texans rectes", "Sobrecamisa oliva", "Sabatilla clara"]
        },
        {
          name: "Estiu de plaça",
          mood: "Teixits frescos i tons lluminosos per plans de tarda.",
          image: img.summer,
          alt: "Grup amb roba d'estiu en una plaça amb arbres",
          pieces: ["Vestit de lli", "Camisa oberta", "Pantaló de cotó", "Tote trenat"]
        }
      ]
    },
    difference: {
      label: "El que ens fa diferents",
      title: "Una experiència de botiga propera, clara i agradable.",
      intro:
        "No busquem sonar grans. Volem que cada visita sigui fàcil, humana i útil, amb peces que t'acompanyin de veritat.",
      image: img.essentials,
      alt: "Clienta rebent assessorament en una botiga lluminosa",
      items: [
        { icon: "map", title: "Presència local", text: "Botigues arrelades als carrers on la gent compra, passeja i es troba." },
        { icon: "heart", title: "Servei amable", text: "Assessorament proper, sense presses ni pressió." },
        { icon: "sparkles", title: "Col·leccions seleccionades", text: "Peces de temporada triades per combinar fàcilment." },
        { icon: "smile", title: "Compra còmoda", text: "Espais lluminosos, talles accessibles i recorreguts senzills." },
        { icon: "leaf", title: "Inspiració de temporada", text: "Idees noves durant l'any per vestir millor el teu dia a dia." }
      ]
    },
    community: {
      label: "Comunitat",
      title: "Gent del barri, moments reals i una manera compartida de vestir.",
      intro:
        "Ens agrada veure com les col·leccions surten de la botiga i formen part de sopars, passejos, feina i celebracions petites.",
      image: img.community,
      alt: "Clients i equip en un esdeveniment de temporada dins la botiga",
      items: [
        { title: "@examplefashion", description: "Looks de clients a Barcelona", image: img.hero, alt: "Clients caminant amb bosses de compra" },
        { title: "Tardes d'estil", description: "Sessions de consell a la botiga", image: img.community, alt: "Clients xerrant en un esdeveniment de botiga" },
        { title: "Caps de setmana", description: "Roba còmoda per plans compartits", image: img.family, alt: "Família passejant pel parc" }
      ]
    },
    news: {
      label: "Novetats i inspiració",
      title: "Idees de temporada sense complicar l'armari.",
      intro:
        "Tendències properes, consells de combinació i petits esdeveniments per seguir connectat amb la botiga.",
      articles: [
        {
          title: "Guia d'estil",
          date: "Guia d'estil",
          description: "Essencials, idees de combinació i inspiració real per vestir millor cada dia.",
          image: img.seasonal,
          alt: "Peces de roba en tons neutres sobre una taula"
        },
        {
          title: "Arriben els caps de setmana de consell",
          date: "Esdeveniments",
          description: "Reserva una sessió curta amb l'equip per trobar talles, capes i colors que encaixin.",
          image: img.community,
          alt: "Esdeveniment amb clients dins d'una botiga"
        },
        {
          title: "Cinc peces essencials per viatjar lleuger",
          date: "Inspiració",
          description: "Roba còmoda i combinable per preparar una bossa petita amb moltes possibilitats.",
          image: img.summer,
          alt: "Amics amb peces d'estiu en una plaça"
        }
      ]
    },
    newsletter: {
      label: "Newsletter",
      title: "Reb les novetats abans de passar per la botiga.",
      intro:
        "Col·leccions, idees d'estil i esdeveniments locals, només quan hi ha alguna cosa útil a explicar.",
      namePlaceholder: "El teu nom",
      emailPlaceholder: "El teu email",
      button: "Subscriure'm",
      success: "Gràcies. T'avisarem de les properes novetats.",
      note: "Sense spam. Pots donar-te de baixa quan vulguis."
    },
    contact: {
      label: "Contacte",
      title: "Parla amb nosaltres o amb la teva botiga habitual.",
      intro:
        "Resolem dubtes sobre talles, disponibilitat, horaris i serveis de botiga.",
      name: "Nom",
      email: "Email",
      message: "Missatge",
      button: "Enviar missatge",
      success: "Missatge rebut. Et respondrem aviat.",
      phone: "+34 900 184 220",
      emailAddress: "hello@examplefashion.test",
      support: "Atenció de botiga: dl-ds, 10:00-20:00",
      social: "Instagram · TikTok · Pinterest"
    },
    footer: {
      tagline: "Moda quotidiana amb arrels locals.",
      visit: "Visita'ns a Barcelona, Girona, Tarragona, Sabadell i Lleida.",
      copyright: "© 2026 Example Fashion. Marca fictícia creada per a demostració."
    }
  },
  es: {
    metadata: {
      title: "Example Fashion | Moda local para la vida diaria",
      description:
        "Cadena ficticia de tiendas locales de ropa con colecciones modernas, estilo accesible y tiendas físicas en Cataluña.",
      keywords: ["moda local", "tiendas de ropa", "colecciones de temporada", "Example Fashion"]
    },
    common: {
      brand: "Example Fashion",
      language: "Idioma",
      menu: "Menú",
      close: "Cerrar",
      discoverCollection: "Descubrir la colección",
      findStore: "Encontrar tienda",
      explore: "Explorar",
      readMore: "Leer más",
      stars: "estrellas",
      previous: "Anterior",
      next: "Siguiente",
      social: "Redes sociales",
      required: "campo obligatorio"
    },
    nav: [
      { label: "Colecciones", href: "collections" },
      { label: "Tiendas", href: "stores" },
      { label: "Reseñas", href: "reviews" },
      { label: "Diferencia", href: "/difference" },
      { label: "Noticias", href: "/news" },
      { label: "Contacto", href: "contact" }
    ],
    hero: {
      eyebrow: "Moda local, moderna y cercana",
      title: "Example Fashion",
      subtitle:
        "Descubre colecciones diseñadas para vestir con comodidad, estilo y confianza cada día.",
      image: img.hero,
      alt: "Grupo diverso de personas sonriendo con ropa casual frente a una tienda local",
      stats: [
        { value: "18", label: "tiendas locales" },
        { value: "4,8/5", label: "valoración media" },
        { value: "1998", label: "raíces en el comercio de proximidad" }
      ]
    },
    collections: {
      label: "Colecciones actuales",
      title: "Prendas fáciles de llevar, pensadas para la temporada.",
      intro:
        "Ropa para trabajar, pasear, tomar un café o improvisar planes sin cambiar de ritmo.",
      items: [
        {
          title: "Colección Primavera",
          description: "Capas ligeras, colores suaves y prendas versátiles para los días que se alargan.",
          image: img.spring,
          alt: "Personas con prendas de primavera caminando por una calle arbolada",
          action: "Ver primavera"
        },
        {
          title: "Colección Verano",
          description: "Lino, algodón y siluetas relajadas para sentirte cómodo de la mañana a la noche.",
          image: img.summer,
          alt: "Grupo de amigos con ropa de verano en una plaza soleada",
          action: "Ver verano"
        },
        {
          title: "Esenciales",
          description: "Básicos con buena caída, texturas agradables y combinaciones que siempre funcionan.",
          image: img.essentials,
          alt: "Clientes mirando básicos en una tienda luminosa",
          action: "Ver esenciales"
        },
        {
          title: "Novedades",
          description: "Llegadas semanales elegidas con criterio para renovar el armario sin complicaciones.",
          image: img.fresh,
          alt: "Clientes saliendo de una tienda de barrio con bolsas de compra",
          action: "Ver novedades"
        }
      ]
    },
    realLife: {
      label: "Estilo en la vida real",
      title: "Ropa que se mueve con personas reales.",
      intro:
        "Looks que no esperan una ocasión perfecta: fines de semana, familia, trabajo, ciudad y momentos compartidos.",
      items: [
        {
          title: "Fines de semana casuales",
          description: "Vaqueros cómodos, camisas suaves y chaquetas ligeras para salir sin pensarlo demasiado.",
          image: img.cafe,
          alt: "Amigos riendo en una terraza de cafetería",
          action: "Inspirarme"
        },
        {
          title: "Planes en familia",
          description: "Prendas resistentes, agradables al tacto y fáciles de combinar para todas las edades.",
          image: img.family,
          alt: "Familia paseando por un parque urbano con ropa casual",
          action: "Ver looks"
        },
        {
          title: "Paseos de ciudad",
          description: "Siluetas limpias y capas prácticas para ir de tienda, café y calle.",
          image: img.hero,
          alt: "Grupo de personas caminando por una calle comercial",
          action: "Explorar"
        },
        {
          title: "Café con amigos",
          description: "Colores naturales y texturas suaves para sentirte arreglado sin esfuerzo.",
          image: img.summer,
          alt: "Amigos con ropa de verano cerca de una cafetería",
          action: "Ver ideas"
        },
        {
          title: "Trabajo cotidiano",
          description: "Blazers relajados, punto fino y pantalones con caída para jornadas largas.",
          image: img.lookbook,
          alt: "Modelos con outfits completos caminando por una calle tranquila",
          action: "Ver outfits"
        }
      ]
    },
    stores: {
      label: "Tiendas",
      title: "Encuentra Example Fashion cerca de ti.",
      intro:
        "Cada tienda mantiene el mismo trato cercano: espacios luminosos, asesoramiento amable y colecciones fáciles de descubrir.",
      searchLabel: "Buscador de tiendas",
      searchPlaceholder: "Busca por ciudad, barrio o dirección",
      allCities: "Todas las ciudades",
      resultCount: "tiendas encontradas",
      noResults: "No hemos encontrado ninguna tienda con esa búsqueda.",
      hoursLabel: "Horario",
      phoneLabel: "Teléfono",
      emailLabel: "Email",
      visit: "Cómo llegar",
      stores: [
        {
          ...storeBase[0],
          city: "Barcelona",
          neighborhood: "Eixample",
          address: "Rambla de Catalunya 88, 08008 Barcelona",
          hours: "L-S 10:00-20:30 · D 11:00-19:00",
          alt: "Fachada luminosa de una tienda Example Fashion en Barcelona"
        },
        {
          ...storeBase[1],
          city: "Girona",
          neighborhood: "Centro",
          address: "Carrer de Santa Clara 24, 17001 Girona",
          hours: "L-S 10:00-20:00",
          alt: "Interior acogedor de una tienda Example Fashion en Girona"
        },
        {
          ...storeBase[2],
          city: "Tarragona",
          neighborhood: "Rambla Nova",
          address: "Rambla Nova 63, 43003 Tarragona",
          hours: "L-S 10:00-20:30",
          alt: "Clientes saliendo de una tienda Example Fashion en Tarragona"
        },
        {
          ...storeBase[3],
          city: "Sabadell",
          neighborhood: "Centro",
          address: "Passeig de la Plaça Major 18, 08201 Sabadell",
          hours: "L-S 10:00-20:00",
          alt: "Moda de temporada en una tienda Example Fashion de Sabadell"
        },
        {
          ...storeBase[4],
          city: "Lleida",
          neighborhood: "Eje Comercial",
          address: "Carrer Major 41, 25007 Lleida",
          hours: "L-S 10:00-20:00",
          alt: "Ambiente social y cercano en una tienda Example Fashion de Lleida"
        }
      ]
    },
    reviews: {
      label: "Opiniones de clientes",
      title: "La confianza también se nota cuando entras por la puerta.",
      intro:
        "Personas que vuelven por la calidad, el trato y la sensación de comprar en una tienda de barrio bien cuidada.",
      average: "4,8/5",
      basedOn: "basado en más de 2.500 reseñas de clientes",
      total: "2.500+ reseñas",
      items: [
        {
          name: "Maria",
          city: "Barcelona",
          quote: "Siempre encuentro algo que me gusta. El equipo es atento y ayuda sin presionar.",
          rating: "5",
          initials: "MA"
        },
        {
          name: "David",
          city: "Girona",
          quote: "Buena calidad, precios razonables y un ambiente muy acogedor. Ya es una parada habitual.",
          rating: "5",
          initials: "DA"
        },
        {
          name: "Laura",
          city: "Tarragona",
          quote: "Una de mis tiendas locales favoritas. Las colecciones son fáciles de combinar.",
          rating: "5",
          initials: "LA"
        },
        {
          name: "Nadia",
          city: "Sabadell",
          quote: "El personal me recomendó tallas y combinaciones con mucha naturalidad. Salí encantada.",
          rating: "5",
          initials: "NA"
        }
      ]
    },
    lookbook: {
      label: "Lookbook",
      title: "Outfits completos para inspirar tu día.",
      intro:
        "Una mirada editorial, pero pensada para armarios reales: prendas que puedes llevar hoy y volver a combinar mañana.",
      outfitLabel: "Prendas del look",
      items: [
        {
          name: "Ciudad suave",
          mood: "Blazer relajado, camisa clara y pantalón fluido para días de trabajo y café.",
          image: img.lookbook,
          alt: "Tres personas con outfits completos en una calle tranquila",
          pieces: ["Blazer de algodón", "Camisa blanca", "Pantalón ancho", "Bolso de piel suave"]
        },
        {
          name: "Fin de semana natural",
          mood: "Denim limpio, punto ligero y una capa oliva para moverte con calma.",
          image: img.cafe,
          alt: "Amigos con looks casuales en una cafetería",
          pieces: ["Jersey fino", "Vaqueros rectos", "Sobrecamisa oliva", "Zapatilla clara"]
        },
        {
          name: "Verano de plaza",
          mood: "Tejidos frescos y tonos luminosos para planes de tarde.",
          image: img.summer,
          alt: "Grupo con ropa de verano en una plaza con árboles",
          pieces: ["Vestido de lino", "Camisa abierta", "Pantalón de algodón", "Tote trenzado"]
        }
      ]
    },
    difference: {
      label: "Lo que nos hace diferentes",
      title: "Una experiencia de tienda cercana, clara y agradable.",
      intro:
        "No buscamos sonar grandes. Queremos que cada visita sea fácil, humana y útil, con prendas que te acompañen de verdad.",
      image: img.essentials,
      alt: "Clienta recibiendo asesoramiento en una tienda luminosa",
      items: [
        { icon: "map", title: "Presencia local", text: "Tiendas arraigadas en las calles donde la gente compra, pasea y se encuentra." },
        { icon: "heart", title: "Servicio amable", text: "Asesoramiento cercano, sin prisas ni presión." },
        { icon: "sparkles", title: "Colecciones seleccionadas", text: "Prendas de temporada elegidas para combinar fácilmente." },
        { icon: "smile", title: "Compra cómoda", text: "Espacios luminosos, tallas accesibles y recorridos sencillos." },
        { icon: "leaf", title: "Inspiración de temporada", text: "Ideas nuevas durante el año para vestir mejor tu día a día." }
      ]
    },
    community: {
      label: "Comunidad",
      title: "Gente del barrio, momentos reales y una forma compartida de vestir.",
      intro:
        "Nos gusta ver cómo las colecciones salen de la tienda y forman parte de cenas, paseos, trabajo y pequeñas celebraciones.",
      image: img.community,
      alt: "Clientes y equipo en un evento de temporada dentro de la tienda",
      items: [
        { title: "@examplefashion", description: "Looks de clientes en Barcelona", image: img.hero, alt: "Clientes caminando con bolsas de compra" },
        { title: "Tardes de estilo", description: "Sesiones de consejo en tienda", image: img.community, alt: "Clientes charlando en un evento de tienda" },
        { title: "Fines de semana", description: "Ropa cómoda para planes compartidos", image: img.family, alt: "Familia paseando por el parque" }
      ]
    },
    news: {
      label: "Noticias e inspiración",
      title: "Ideas de temporada sin complicar el armario.",
      intro:
        "Tendencias cercanas, consejos de combinación y pequeños eventos para seguir conectado con la tienda.",
      articles: [
        {
          title: "Guía de estilo",
          date: "Guía de estilo",
          description: "Básicos, ideas de combinación e inspiración real para vestir mejor cada día.",
          image: img.seasonal,
          alt: "Prendas en tonos neutros sobre una mesa"
        },
        {
          title: "Llegan los fines de semana de asesoramiento",
          date: "Eventos",
          description: "Reserva una sesión corta con el equipo para encontrar tallas, capas y colores que encajen.",
          image: img.community,
          alt: "Evento con clientes dentro de una tienda"
        },
        {
          title: "Cinco esenciales para viajar ligero",
          date: "Inspiración",
          description: "Ropa cómoda y combinable para preparar una bolsa pequeña con muchas posibilidades.",
          image: img.summer,
          alt: "Amigos con prendas de verano en una plaza"
        }
      ]
    },
    newsletter: {
      label: "Newsletter",
      title: "Recibe novedades antes de pasar por la tienda.",
      intro:
        "Colecciones, ideas de estilo y eventos locales, solo cuando haya algo útil que contar.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      button: "Suscribirme",
      success: "Gracias. Te avisaremos de las próximas novedades.",
      note: "Sin spam. Puedes darte de baja cuando quieras."
    },
    contact: {
      label: "Contacto",
      title: "Habla con nosotros o con tu tienda habitual.",
      intro:
        "Resolvemos dudas sobre tallas, disponibilidad, horarios y servicios de tienda.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      button: "Enviar mensaje",
      success: "Mensaje recibido. Te responderemos pronto.",
      phone: "+34 900 184 220",
      emailAddress: "hello@examplefashion.test",
      support: "Atención de tienda: l-s, 10:00-20:00",
      social: "Instagram · TikTok · Pinterest"
    },
    footer: {
      tagline: "Moda cotidiana con raíces locales.",
      visit: "Visítanos en Barcelona, Girona, Tarragona, Sabadell y Lleida.",
      copyright: "© 2026 Example Fashion. Marca ficticia creada para demostración."
    }
  },
  en: {
    metadata: {
      title: "Example Fashion | Local fashion for everyday life",
      description:
        "A fictional local clothing store chain with modern collections, accessible style and physical stores across Catalonia.",
      keywords: ["local fashion", "clothing stores", "seasonal collections", "Example Fashion"]
    },
    common: {
      brand: "Example Fashion",
      language: "Language",
      menu: "Menu",
      close: "Close",
      discoverCollection: "Discover the Collection",
      findStore: "Find Your Store",
      explore: "Explore",
      readMore: "Read more",
      stars: "stars",
      previous: "Previous",
      next: "Next",
      social: "Social media",
      required: "required field"
    },
    nav: [
      { label: "Collections", href: "collections" },
      { label: "Stores", href: "stores" },
      { label: "Reviews", href: "reviews" },
      { label: "Different", href: "/difference" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "contact" }
    ],
    hero: {
      eyebrow: "Modern local fashion with a human touch",
      title: "Example Fashion",
      subtitle:
        "Discover collections designed for comfort, style and confidence.",
      image: img.hero,
      alt: "A diverse group of people smiling in casual clothing outside a local fashion store",
      stats: [
        { value: "18", label: "local stores" },
        { value: "4.8/5", label: "average rating" },
        { value: "1998", label: "rooted in local retail" }
      ]
    },
    collections: {
      label: "Current collections",
      title: "Easy pieces made for the season.",
      intro:
        "Clothing for work, walks, coffee plans and everything you do between one part of the day and the next.",
      items: [
        {
          title: "Spring Collection",
          description: "Light layers, soft colors and versatile pieces for longer, brighter days.",
          image: img.spring,
          alt: "People wearing spring clothing walking along a tree-lined street",
          action: "Explore spring"
        },
        {
          title: "Summer Collection",
          description: "Linen, cotton and relaxed silhouettes for comfort from morning to evening.",
          image: img.summer,
          alt: "Friends wearing summer clothing in a sunny city square",
          action: "Explore summer"
        },
        {
          title: "Essentials",
          description: "Reliable basics with good drape, soft textures and combinations that always work.",
          image: img.essentials,
          alt: "Customers browsing essentials inside a bright clothing store",
          action: "Explore essentials"
        },
        {
          title: "New Arrivals",
          description: "Weekly arrivals carefully chosen to refresh your wardrobe without overthinking it.",
          image: img.fresh,
          alt: "Customers leaving a neighborhood clothing store with shopping bags",
          action: "Explore arrivals"
        }
      ]
    },
    realLife: {
      label: "Style in real life",
      title: "Clothing that moves with real people.",
      intro:
        "Looks that do not wait for a perfect occasion: weekends, family outings, workdays, city walks and shared moments.",
      items: [
        {
          title: "Casual weekends",
          description: "Comfortable denim, soft shirts and light jackets for plans that begin easily.",
          image: img.cafe,
          alt: "Friends laughing at an outdoor cafe table",
          action: "Get inspired"
        },
        {
          title: "Family outings",
          description: "Durable, soft and easy-to-match pieces for every age.",
          image: img.family,
          alt: "A family walking through an urban park in casual clothing",
          action: "See looks"
        },
        {
          title: "City walks",
          description: "Clean silhouettes and practical layers for shops, cafes and everyday streets.",
          image: img.hero,
          alt: "People walking along a local shopping street",
          action: "Explore"
        },
        {
          title: "Coffee with friends",
          description: "Natural colors and soft textures that feel put together without effort.",
          image: img.summer,
          alt: "Friends in summer clothing near a cafe terrace",
          action: "See ideas"
        },
        {
          title: "Everyday workwear",
          description: "Relaxed blazers, fine knits and trousers with movement for long days.",
          image: img.lookbook,
          alt: "Models wearing complete outfits on a quiet local street",
          action: "See outfits"
        }
      ]
    },
    stores: {
      label: "Store locations",
      title: "Find Example Fashion near you.",
      intro:
        "Every store shares the same welcoming rhythm: bright spaces, friendly advice and collections that are easy to discover.",
      searchLabel: "Store search",
      searchPlaceholder: "Search by city, neighborhood or address",
      allCities: "All cities",
      resultCount: "stores found",
      noResults: "No stores match that search yet.",
      hoursLabel: "Opening hours",
      phoneLabel: "Phone",
      emailLabel: "Email",
      visit: "Get directions",
      stores: [
        {
          ...storeBase[0],
          city: "Barcelona",
          neighborhood: "Eixample",
          address: "Rambla de Catalunya 88, 08008 Barcelona",
          hours: "Mon-Sat 10:00-20:30 · Sun 11:00-19:00",
          alt: "Bright Example Fashion storefront in Barcelona"
        },
        {
          ...storeBase[1],
          city: "Girona",
          neighborhood: "Centre",
          address: "Carrer de Santa Clara 24, 17001 Girona",
          hours: "Mon-Sat 10:00-20:00",
          alt: "Welcoming Example Fashion store interior in Girona"
        },
        {
          ...storeBase[2],
          city: "Tarragona",
          neighborhood: "Rambla Nova",
          address: "Rambla Nova 63, 43003 Tarragona",
          hours: "Mon-Sat 10:00-20:30",
          alt: "Customers leaving an Example Fashion store in Tarragona"
        },
        {
          ...storeBase[3],
          city: "Sabadell",
          neighborhood: "Centre",
          address: "Passeig de la Plaça Major 18, 08201 Sabadell",
          hours: "Mon-Sat 10:00-20:00",
          alt: "Seasonal clothing at an Example Fashion store in Sabadell"
        },
        {
          ...storeBase[4],
          city: "Lleida",
          neighborhood: "Eix Comercial",
          address: "Carrer Major 41, 25007 Lleida",
          hours: "Mon-Sat 10:00-20:00",
          alt: "Warm social atmosphere inside an Example Fashion store in Lleida"
        }
      ]
    },
    reviews: {
      label: "Customer reviews",
      title: "Trust is something you feel when you walk in.",
      intro:
        "Customers return for the quality, the advice and the feeling of shopping somewhere local and cared for.",
      average: "4.8/5",
      basedOn: "based on 2,500+ customer reviews",
      total: "2,500+ reviews",
      items: [
        {
          name: "Maria",
          city: "Barcelona",
          quote: "I always find something I love. The team is attentive and helpful without ever pushing.",
          rating: "5",
          initials: "MA"
        },
        {
          name: "David",
          city: "Girona",
          quote: "Good quality, fair prices and a genuinely welcoming atmosphere. It has become a regular stop.",
          rating: "5",
          initials: "DA"
        },
        {
          name: "Laura",
          city: "Tarragona",
          quote: "One of my favourite local fashion stores. The collections are easy to mix into my wardrobe.",
          rating: "5",
          initials: "LA"
        },
        {
          name: "Nadia",
          city: "Sabadell",
          quote: "The staff suggested sizes and outfit ideas in such a natural way. I left very happy.",
          rating: "5",
          initials: "NA"
        }
      ]
    },
    lookbook: {
      label: "Lookbook",
      title: "Complete outfits to inspire your day.",
      intro:
        "Editorial in feel, practical in real life: pieces you can wear today and combine again tomorrow.",
      outfitLabel: "Pieces in this look",
      items: [
        {
          name: "Soft city",
          mood: "A relaxed blazer, light shirt and fluid trousers for workdays that turn into coffee plans.",
          image: img.lookbook,
          alt: "Three people wearing complete outfits on a quiet local street",
          pieces: ["Cotton blazer", "White shirt", "Wide-leg trousers", "Soft leather bag"]
        },
        {
          name: "Natural weekend",
          mood: "Clean denim, a light knit and an olive overshirt for moving through the day calmly.",
          image: img.cafe,
          alt: "Friends in casual looks at a cafe",
          pieces: ["Fine knit", "Straight denim", "Olive overshirt", "Light sneaker"]
        },
        {
          name: "Summer square",
          mood: "Fresh fabrics and luminous tones for warm afternoon plans.",
          image: img.summer,
          alt: "Group wearing summer clothing in a leafy square",
          pieces: ["Linen dress", "Open shirt", "Cotton trouser", "Woven tote"]
        }
      ]
    },
    difference: {
      label: "What makes us different",
      title: "A store experience that feels clear, friendly and easy.",
      intro:
        "We are not trying to sound big. We want every visit to feel useful and human, with clothes that genuinely fit your life.",
      image: img.essentials,
      alt: "Customer receiving advice inside a bright store",
      items: [
        { icon: "map", title: "Local presence", text: "Stores rooted in the streets where people shop, meet and walk every day." },
        { icon: "heart", title: "Friendly service", text: "Helpful advice without pressure or rush." },
        { icon: "sparkles", title: "Carefully selected collections", text: "Seasonal pieces chosen to combine easily." },
        { icon: "smile", title: "Comfortable shopping", text: "Bright spaces, approachable sizing and simple store layouts." },
        { icon: "leaf", title: "Seasonal inspiration", text: "Fresh ideas throughout the year for better everyday dressing." }
      ]
    },
    community: {
      label: "Community",
      title: "Neighborhood people, real moments and a shared way of dressing.",
      intro:
        "We love seeing collections leave the store and become part of dinners, walks, workdays and small celebrations.",
      image: img.community,
      alt: "Customers and staff at a seasonal in-store event",
      items: [
        { title: "@examplefashion", description: "Customer looks in Barcelona", image: img.hero, alt: "Customers walking with shopping bags" },
        { title: "Style afternoons", description: "In-store advice sessions", image: img.community, alt: "Customers chatting at a store event" },
        { title: "Weekends out", description: "Comfortable clothing for shared plans", image: img.family, alt: "Family walking through a park" }
      ]
    },
    news: {
      label: "News & inspiration",
      title: "Seasonal ideas without overcomplicating your wardrobe.",
      intro:
        "Nearby trends, styling advice and small store events that keep you connected to the brand.",
      articles: [
        {
          title: "Style Guide",
          date: "Style guide",
          description: "Wardrobe essentials, styling ideas and real-life inspiration for everyday dressing.",
          image: img.seasonal,
          alt: "Neutral clothing pieces arranged on a table"
        },
        {
          title: "Style advice weekends are here",
          date: "Events",
          description: "Book a short in-store session to find sizes, layers and colors that feel right.",
          image: img.community,
          alt: "Customers at a store event"
        },
        {
          title: "Five essentials for travelling light",
          date: "Inspiration",
          description: "Comfortable, easy-to-combine clothing for a small bag with many options.",
          image: img.summer,
          alt: "Friends wearing summer pieces in a square"
        }
      ]
    },
    newsletter: {
      label: "Newsletter",
      title: "Hear about new arrivals before your next store visit.",
      intro:
        "Collections, styling ideas and local events, only when there is something useful to share.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      button: "Subscribe",
      success: "Thank you. We will keep you posted on the next arrivals.",
      note: "No spam. Unsubscribe whenever you like."
    },
    contact: {
      label: "Contact",
      title: "Talk to us or your usual store.",
      intro:
        "We can help with sizing, availability, opening hours and in-store services.",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send message",
      success: "Message received. We will reply soon.",
      phone: "+34 900 184 220",
      emailAddress: "hello@examplefashion.test",
      support: "Store support: Mon-Sat, 10:00-20:00",
      social: "Instagram · TikTok · Pinterest"
    },
    footer: {
      tagline: "Everyday fashion with local roots.",
      visit: "Visit us in Barcelona, Girona, Tarragona, Sabadell and Lleida.",
      copyright: "© 2026 Example Fashion. Fictional brand created for demonstration."
    }
  },
  ru: {
    metadata: {
      title: "Example Fashion | Локальная мода на каждый день",
      description:
        "Вымышленная сеть локальных магазинов одежды с современными коллекциями, доступным стилем и физическими магазинами в Каталонии.",
      keywords: ["локальная мода", "магазины одежды", "сезонные коллекции", "Example Fashion"]
    },
    common: {
      brand: "Example Fashion",
      language: "Язык",
      menu: "Меню",
      close: "Закрыть",
      discoverCollection: "Открыть коллекцию",
      findStore: "Найти магазин",
      explore: "Смотреть",
      readMore: "Подробнее",
      stars: "звезд",
      previous: "Назад",
      next: "Далее",
      social: "Социальные сети",
      required: "обязательное поле"
    },
    nav: [
      { label: "Коллекции", href: "collections" },
      { label: "Магазины", href: "stores" },
      { label: "Отзывы", href: "reviews" },
      { label: "Отличие", href: "/difference" },
      { label: "Новости", href: "/news" },
      { label: "Контакты", href: "contact" }
    ],
    hero: {
      eyebrow: "Современная локальная мода с человеческим настроением",
      title: "Example Fashion",
      subtitle:
        "Откройте коллекции, созданные для комфорта, стиля и уверенности каждый день.",
      image: img.hero,
      alt: "Разные люди улыбаются в повседневной одежде у локального магазина",
      stats: [
        { value: "18", label: "локальных магазинов" },
        { value: "4,8/5", label: "средняя оценка" },
        { value: "1998", label: "корни в локальной торговле" }
      ]
    },
    collections: {
      label: "Актуальные коллекции",
      title: "Простые в носке вещи, созданные для сезона.",
      intro:
        "Одежда для работы, прогулок, встреч за кофе и всех обычных планов между ними.",
      items: [
        {
          title: "Весенняя коллекция",
          description: "Легкие слои, мягкие цвета и универсальные вещи для длинных светлых дней.",
          image: img.spring,
          alt: "Люди в весенней одежде идут по улице с деревьями",
          action: "Смотреть весну"
        },
        {
          title: "Летняя коллекция",
          description: "Лен, хлопок и расслабленные силуэты для комфорта с утра до вечера.",
          image: img.summer,
          alt: "Друзья в летней одежде на солнечной городской площади",
          action: "Смотреть лето"
        },
        {
          title: "База",
          description: "Надежные базовые вещи с хорошей посадкой, приятными фактурами и простыми сочетаниями.",
          image: img.essentials,
          alt: "Покупатели выбирают базовые вещи в светлом магазине",
          action: "Смотреть базу"
        },
        {
          title: "Новинки",
          description: "Еженедельные поступления, отобранные так, чтобы обновить гардероб без лишних сложностей.",
          image: img.fresh,
          alt: "Покупатели выходят из районного магазина одежды с пакетами",
          action: "Смотреть новинки"
        }
      ]
    },
    realLife: {
      label: "Стиль в реальной жизни",
      title: "Одежда, которая движется вместе с людьми.",
      intro:
        "Образы не для особого случая, а для выходных, семьи, работы, города и встреч с близкими.",
      items: [
        {
          title: "Спокойные выходные",
          description: "Удобный деним, мягкие рубашки и легкие куртки для планов без лишней подготовки.",
          image: img.cafe,
          alt: "Друзья смеются за столиком у кафе",
          action: "Вдохновиться"
        },
        {
          title: "Семейные прогулки",
          description: "Прочные, приятные к телу и легко сочетаемые вещи для любого возраста.",
          image: img.family,
          alt: "Семья гуляет по городскому парку в повседневной одежде",
          action: "Смотреть образы"
        },
        {
          title: "Городские прогулки",
          description: "Чистые силуэты и практичные слои для магазинов, кафе и обычных улиц.",
          image: img.hero,
          alt: "Люди идут по торговой улице",
          action: "Смотреть"
        },
        {
          title: "Кофе с друзьями",
          description: "Естественные цвета и мягкие фактуры, чтобы выглядеть собранно без усилий.",
          image: img.summer,
          alt: "Друзья в летней одежде рядом с кафе",
          action: "Идеи образов"
        },
        {
          title: "Рабочие будни",
          description: "Расслабленные блейзеры, тонкий трикотаж и брюки с движением для длинных дней.",
          image: img.lookbook,
          alt: "Модели в полных образах идут по тихой улице",
          action: "Смотреть outfits"
        }
      ]
    },
    stores: {
      label: "Магазины",
      title: "Найдите Example Fashion рядом с вами.",
      intro:
        "В каждом магазине один и тот же теплый ритм: светлое пространство, дружелюбные советы и коллекции, которые легко изучать.",
      searchLabel: "Поиск магазинов",
      searchPlaceholder: "Ищите по городу, району или адресу",
      allCities: "Все города",
      resultCount: "магазинов найдено",
      noResults: "По этому запросу магазины не найдены.",
      hoursLabel: "Часы работы",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      visit: "Маршрут",
      stores: [
        {
          ...storeBase[0],
          city: "Барселона",
          neighborhood: "Эшампле",
          address: "Rambla de Catalunya 88, 08008 Barcelona",
          hours: "Пн-Сб 10:00-20:30 · Вс 11:00-19:00",
          alt: "Светлый фасад магазина Example Fashion в Барселоне"
        },
        {
          ...storeBase[1],
          city: "Жирона",
          neighborhood: "Центр",
          address: "Carrer de Santa Clara 24, 17001 Girona",
          hours: "Пн-Сб 10:00-20:00",
          alt: "Уютный интерьер магазина Example Fashion в Жироне"
        },
        {
          ...storeBase[2],
          city: "Таррагона",
          neighborhood: "Rambla Nova",
          address: "Rambla Nova 63, 43003 Tarragona",
          hours: "Пн-Сб 10:00-20:30",
          alt: "Покупатели выходят из магазина Example Fashion в Таррагоне"
        },
        {
          ...storeBase[3],
          city: "Сабадель",
          neighborhood: "Центр",
          address: "Passeig de la Plaça Major 18, 08201 Sabadell",
          hours: "Пн-Сб 10:00-20:00",
          alt: "Сезонная одежда в магазине Example Fashion в Сабаделе"
        },
        {
          ...storeBase[4],
          city: "Льейда",
          neighborhood: "Торговый центр",
          address: "Carrer Major 41, 25007 Lleida",
          hours: "Пн-Сб 10:00-20:00",
          alt: "Теплая атмосфера в магазине Example Fashion в Льейде"
        }
      ]
    },
    reviews: {
      label: "Отзывы клиентов",
      title: "Доверие чувствуется уже у входа.",
      intro:
        "Клиенты возвращаются за качеством, советами и ощущением ухоженного локального магазина.",
      average: "4,8/5",
      basedOn: "на основе более 2 500 отзывов клиентов",
      total: "2 500+ отзывов",
      items: [
        {
          name: "Мария",
          city: "Барселона",
          quote: "Я всегда нахожу что-то любимое. Команда внимательная и помогает без давления.",
          rating: "5",
          initials: "MA"
        },
        {
          name: "Давид",
          city: "Жирона",
          quote: "Хорошее качество, честные цены и очень приятная атмосфера. Теперь я захожу регулярно.",
          rating: "5",
          initials: "DA"
        },
        {
          name: "Лаура",
          city: "Таррагона",
          quote: "Один из моих любимых локальных магазинов одежды. Коллекции легко сочетать.",
          rating: "5",
          initials: "LA"
        },
        {
          name: "Надя",
          city: "Сабадель",
          quote: "Сотрудники очень естественно подсказали размеры и сочетания. Я ушла довольной.",
          rating: "5",
          initials: "NA"
        }
      ]
    },
    lookbook: {
      label: "Лукбук",
      title: "Готовые образы для вдохновения на каждый день.",
      intro:
        "Редакционное настроение, но для реального гардероба: вещи, которые можно носить сегодня и сочетать завтра.",
      outfitLabel: "Вещи в образе",
      items: [
        {
          name: "Мягкий город",
          mood: "Расслабленный блейзер, светлая рубашка и свободные брюки для рабочих дней и кофе после.",
          image: img.lookbook,
          alt: "Три человека в готовых образах на тихой улице",
          pieces: ["Хлопковый блейзер", "Белая рубашка", "Широкие брюки", "Мягкая кожаная сумка"]
        },
        {
          name: "Естественные выходные",
          mood: "Чистый деним, легкий трикотаж и оливковая рубашка-куртка для спокойного дня.",
          image: img.cafe,
          alt: "Друзья в повседневных образах в кафе",
          pieces: ["Тонкий джемпер", "Прямые джинсы", "Оливковая рубашка", "Светлые кеды"]
        },
        {
          name: "Летняя площадь",
          mood: "Свежие ткани и светлые оттенки для теплых вечерних планов.",
          image: img.summer,
          alt: "Группа людей в летней одежде на площади с деревьями",
          pieces: ["Льняное платье", "Открытая рубашка", "Хлопковые брюки", "Плетеная сумка"]
        }
      ]
    },
    difference: {
      label: "Что нас отличает",
      title: "Магазин, где все понятно, дружелюбно и легко.",
      intro:
        "Мы не пытаемся звучать крупнее, чем есть. Мы хотим, чтобы каждый визит был полезным и человеческим.",
      image: img.essentials,
      alt: "Покупательница получает совет в светлом магазине",
      items: [
        { icon: "map", title: "Локальное присутствие", text: "Магазины на улицах, где люди каждый день гуляют, встречаются и покупают." },
        { icon: "heart", title: "Дружелюбный сервис", text: "Полезные советы без давления и спешки." },
        { icon: "sparkles", title: "Отобранные коллекции", text: "Сезонные вещи, которые легко сочетать между собой." },
        { icon: "smile", title: "Комфортная покупка", text: "Светлые пространства, понятные размеры и простая навигация." },
        { icon: "leaf", title: "Сезонное вдохновение", text: "Новые идеи в течение года для лучшего повседневного стиля." }
      ]
    },
    community: {
      label: "Сообщество",
      title: "Люди района, реальные моменты и общий стиль.",
      intro:
        "Нам нравится видеть, как коллекции выходят из магазина и становятся частью ужинов, прогулок, работы и маленьких праздников.",
      image: img.community,
      alt: "Клиенты и команда на сезонном событии в магазине",
      items: [
        { title: "@examplefashion", description: "Образы клиентов в Барселоне", image: img.hero, alt: "Клиенты идут с покупками" },
        { title: "Стильные вечера", description: "Сессии советов в магазине", image: img.community, alt: "Клиенты общаются на событии в магазине" },
        { title: "Выходные", description: "Удобная одежда для общих планов", image: img.family, alt: "Семья гуляет в парке" }
      ]
    },
    news: {
      label: "Новости и вдохновение",
      title: "Сезонные идеи без сложного гардероба.",
      intro:
        "Близкие тренды, советы по сочетаниям и небольшие события в магазинах.",
      articles: [
        {
          title: "Гид по стилю",
          date: "Гид по стилю",
          description: "База гардероба, идеи сочетаний и вдохновение для повседневного стиля.",
          image: img.seasonal,
          alt: "Нейтральные вещи разложены на столе"
        },
        {
          title: "Выходные с советами по стилю",
          date: "События",
          description: "Запишитесь на короткую встречу в магазине, чтобы подобрать размеры, слои и цвета.",
          image: img.community,
          alt: "Клиенты на событии в магазине"
        },
        {
          title: "Пять базовых вещей для легкого путешествия",
          date: "Вдохновение",
          description: "Удобная одежда, которая легко сочетается и помещается в небольшую сумку.",
          image: img.summer,
          alt: "Друзья в летних вещах на площади"
        }
      ]
    },
    newsletter: {
      label: "Рассылка",
      title: "Узнавайте о новинках до следующего визита.",
      intro:
        "Коллекции, идеи стиля и локальные события, только когда есть что-то полезное.",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш email",
      button: "Подписаться",
      success: "Спасибо. Мы сообщим о следующих новинках.",
      note: "Без спама. Отписаться можно в любой момент."
    },
    contact: {
      label: "Контакты",
      title: "Свяжитесь с нами или со своим обычным магазином.",
      intro:
        "Мы поможем с размерами, наличием, графиком работы и услугами магазина.",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      button: "Отправить",
      success: "Сообщение получено. Мы скоро ответим.",
      phone: "+34 900 184 220",
      emailAddress: "hello@examplefashion.test",
      support: "Поддержка магазинов: пн-сб, 10:00-20:00",
      social: "Instagram · TikTok · Pinterest"
    },
    footer: {
      tagline: "Повседневная мода с локальными корнями.",
      visit: "Приходите в Барселоне, Жироне, Таррагоне, Сабаделе и Льейде.",
      copyright: "© 2026 Example Fashion. Вымышленный бренд для демонстрации."
    }
  }
} satisfies Record<Language, ExampleFashionCopy>;
