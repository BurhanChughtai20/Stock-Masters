import {
  BASE_URL,
  createUrl,
  PAGE_SEO_DATA,
  PageSEOData,
  RouteKey,
  SITE_ROUTES,
} from "@/seo";

import type { Metadata } from "next";

/* ============================================================================
   CREATE PAGE SEO DATA
   ============================================================================ */

export function createPageSEO(routeKey: RouteKey): PageSEOData {
  return PAGE_SEO_DATA[routeKey];
}

/* ============================================================================
   GENERATE NEXT.JS METADATA
   ============================================================================ */

export function generateMetadata(routeKey: RouteKey): Metadata {
  const seo = createPageSEO(routeKey);

  const path = SITE_ROUTES[routeKey];

  const canonical =
    path === "/"
      ? BASE_URL
      : createUrl(path);

  const image = seo.image ?? createUrl("/images/seo/default.webp");

  return {
    title: seo.title,

    description: seo.description,

    keywords: seo.keywords ? [...seo.keywords] : undefined,

    alternates: {
      canonical,
    },

    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "Stock Masters Pakistan",
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: image,
            width: 1200,
            height: 630,
            alt: seo.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },

    creator: "Stock Masters Pakistan",

    publisher: "Stock Masters Pakistan",
  };
}

/* ============================================================================
   STRUCTURED DATA
   ============================================================================ */

export function generateStructuredData(
  routeKey: RouteKey,
) {
  const seo = createPageSEO(routeKey);

  return {
    "@context": "https://schema.org",
    "@graph": seo.schema ?? [],
  };
}

export function generateJsonLdScript(
  routeKey: RouteKey,
): string {
  return JSON.stringify(
    generateStructuredData(routeKey),
  );
}

/* ============================================================================
   SITEMAP
   ============================================================================ */

export function generateSitemapEntries() {
  return (Object.keys(SITE_ROUTES) as RouteKey[]).map(
    (key) => ({
      url: createUrl(SITE_ROUTES[key]),

      lastModified: new Date(),

      priority: key === "home" ? 1 : 0.8,

      changeFrequency: "monthly" as const,
    }),
  );
}

/* ============================================================================
   ROBOTS.TXT
   ============================================================================ */

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Disallow: /admin
Disallow: /api
Disallow: /internal

Sitemap: ${createUrl("/sitemap.xml")}
`;
}

/* ============================================================================
   HELPERS
   ============================================================================ */

export function getAllPagesSEO() {
  return (Object.keys(SITE_ROUTES) as RouteKey[]).map(
    (key) => ({
      route: SITE_ROUTES[key],
      seo: createPageSEO(key),
    }),
  );
}

export function getAllRoutes() {
  return Object.values(SITE_ROUTES);
}