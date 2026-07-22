/** Central SEO config & helpers for WAL & Co (Google + social). */

export const SITE = {
  name: "WAL & Co",
  legalName: "WAL & Co",
  alternateName: ["walandco", "Wal and Co", "WAL et Co"],
  url: "https://walandco.ca",
  wwwUrl: "https://www.walandco.ca",
  locale: "fr_CA",
  language: "fr-CA",
  email: "contact@walandco.com",
  phoneDisplay: "+0 (000) 000-0000",
  phoneE164: "+00000000000",
  address: {
    locality: "Montréal",
    region: "QC",
    country: "CA",
    countryName: "Canada",
  },
  description:
    "Maison canadienne de diamants naturels certifiés GIA/IGI. Sélection, taille et vente de diamants d'exception pour particuliers, joailliers et grossistes.",
  keywords: [
    "WAL & Co",
    "walandco",
    "diamants certifiés",
    "diamants GIA",
    "diamants IGI",
    "diamants naturels",
    "joaillerie Montréal",
    "diamants Canada",
    "diamants RDC",
    "vente de diamants",
    "bague de fiançailles",
    "diamant sur mesure",
    "pierre précieuse Montréal",
    "grossiste diamants",
    "diamants certifiés Montréal",
    "acheter diamant Canada",
  ].join(", "),
  ogImage: "https://walandco.ca/og-image.jpg",
  ogImageWidth: 1920,
  ogImageHeight: 1088,
  logo: "https://walandco.ca/wal-logo.png",
  favicon: "https://walandco.ca/favicon.png",
  themeColor: "#0F52BA",
  twitter: "@walandco",
} as const;

export type SeoPageInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute image URL; defaults to SITE.ogImage */
  image?: string;
  type?: "website" | "article" | "product";
  keywords?: string;
  noIndex?: boolean;
  /** Extra meta tags merged after defaults */
  extraMeta?: Array<Record<string, string>>;
  /** Extra JSON-LD objects (already plain objects) */
  jsonLd?: unknown[];
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p === "/" ? "/" : p}`;
}

function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

/** Build TanStack Router `head()` payload for a public page. */
export function buildPageSeo(input: SeoPageInput) {
  const url = absoluteUrl(input.path);
  const image = input.image ?? SITE.ogImage;
  const type = input.type ?? "website";
  const robots = input.noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const meta = [
    { title: input.title },
    { name: "description", content: input.description },
    { name: "keywords", content: input.keywords ?? SITE.keywords },
    { name: "robots", content: robots },
    { name: "googlebot", content: input.noIndex ? "noindex, nofollow" : "index, follow" },
    { name: "author", content: SITE.name },
    { name: "publisher", content: SITE.name },
    { name: "language", content: SITE.language },
    { name: "geo.region", content: "CA-QC" },
    { name: "geo.placename", content: "Montréal" },
    { name: "geo.position", content: "45.5017;-73.5673" },
    { name: "ICBM", content: "45.5017, -73.5673" },
    // Open Graph
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale },
    { property: "og:type", content: type },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:secure_url", content: image },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: String(SITE.ogImageWidth) },
    { property: "og:image:height", content: String(SITE.ogImageHeight) },
    { property: "og:image:alt", content: `${SITE.name} — diamants naturels certifiés` },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE.twitter },
    { name: "twitter:creator", content: SITE.twitter },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: `${SITE.name} — diamants naturels certifiés` },
    ...(input.extraMeta ?? []),
  ];

  const links = [
    { rel: "canonical", href: url },
    { rel: "alternate", hrefLang: "fr-CA", href: url },
    { rel: "alternate", hrefLang: "x-default", href: url },
  ];

  const scripts = (input.jsonLd ?? []).map(jsonLdScript);

  return { meta, links, scripts };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "JewelryStore"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.alternateName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 512,
      height: 512,
    },
    image: SITE.ogImage,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phoneE164,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "AdministrativeArea", name: "Québec" },
    ],
    knowsAbout: [
      "Diamants naturels",
      "Certification GIA",
      "Certification IGI",
      "Taille de diamants",
      "Joaillerie",
      "Diamants RDC",
    ],
    sameAs: [SITE.url, SITE.wwwUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE.email,
        telephone: SITE.phoneE164,
        availableLanguage: ["French", "English"],
        areaServed: ["CA", "FR", "BE", "US"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        availableLanguage: ["French", "English"],
      },
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: [SITE.ogImage, SITE.logo],
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "$$$",
    currenciesAccepted: "CAD, USD, EUR",
    paymentAccepted: "Bank Transfer, Escrow",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Montréal",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: "H2X",
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5017,
      longitude: -73.5673,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    parentOrganization: { "@id": `${SITE.url}/#organization` },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.language,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/collection?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function collectionItemListJsonLd(
  products: {
    name: string;
    ref: string;
    carat: string;
    color: string;
    clarity: string;
    cut: string;
    shape: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Collection de diamants certifiés WAL & Co",
    description:
      "Sélection de diamants naturels taillés certifiés GIA/IGI — carat, couleur, clarté, taille.",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        sku: p.ref,
        description: `Diamant ${p.shape} ${p.carat} ct — couleur ${p.color}, clarté ${p.clarity}, taille ${p.cut}. Certifié GIA/IGI.`,
        brand: { "@type": "Brand", name: SITE.name },
        category: "Diamants naturels",
        material: "Diamond",
        additionalProperty: [
          { "@type": "PropertyValue", name: "Carat", value: p.carat },
          { "@type": "PropertyValue", name: "Couleur", value: p.color },
          { "@type": "PropertyValue", name: "Clarté", value: p.clarity },
          { "@type": "PropertyValue", name: "Taille", value: p.cut },
          { "@type": "PropertyValue", name: "Forme", value: p.shape },
        ],
        offers: {
          "@type": "Offer",
          url: `${SITE.url}/contact`,
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          seller: { "@id": `${SITE.url}/#organization` },
        },
      },
    })),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact — WAL & Co",
    url: `${SITE.url}/contact`,
    description:
      "Contactez WAL & Co pour un devis diamant, une recherche sur mesure ou un compte professionnel.",
    mainEntity: { "@id": `${SITE.url}/#organization` },
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos — WAL & Co",
    url: `${SITE.url}/about`,
    description:
      "Histoire et savoir-faire de WAL & Co, maison canadienne de diamants naturels certifiés.",
    mainEntity: { "@id": `${SITE.url}/#organization` },
  };
}

export function galleryPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galerie — WAL & Co",
    url: `${SITE.url}/galerie`,
    description: "Photos et vidéos de diamants naturels certifiés et pièces d'exception WAL & Co.",
    about: { "@id": `${SITE.url}/#organization` },
  };
}
