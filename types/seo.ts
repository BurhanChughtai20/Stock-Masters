import type { Metadata } from "next";

/* -------------------------------------------------------------------------- */
/*                                  Basics                                    */
/* -------------------------------------------------------------------------- */

export type SeoPageType =
  | "website"
  | "homepage"
  | "about"
  | "service"
  | "course"
  | "blog"
  | "article"
  | "faq"
  | "testimonial"
  | "contact"
  | "pricing"
  | "legal"
  | "dashboard"
  | "other";

export type SeoContentType =
  | "website"
  | "article"
  | "course"
  | "profile"
  | "service";

/* -------------------------------------------------------------------------- */
/*                              Global Site Info                              */
/* -------------------------------------------------------------------------- */

export interface SiteConfig {
  name: string;
  shortName: string;

  description: string;
  slogan?: string;

  url: string;

  logo: string;
  defaultImage: string;

  locale: string;
  country: string;
  language: string;
  timezone: string;

  email?: string;
  phone?: string;

  /**
   * Business Positioning
   */
  primaryPosition?: string;

  secondaryPositions?: readonly string[];

  /**
   * Main Business Services
   */
  services?: readonly string[];

  keywords: readonly string[];

  authors: readonly string[];

  creator: string;

  publisher: string;

  category?: string;
}
/* -------------------------------------------------------------------------- */
/*                              Page SEO Config                               */
/* -------------------------------------------------------------------------- */

export interface PageSEO {
  title: string;

  description: string;

  path: string;

  type: SeoPageType;

  keywords?: readonly string[];

  image?: string;

  noIndex?: boolean;

  noFollow?: boolean;

  publishedTime?: string;

  modifiedTime?: string;

  alternates?: AlternateLanguage[];

  breadcrumb?: BreadcrumbItem[];

  openGraph?: OpenGraphSEO;

  twitter?: TwitterSEO;

  robots?: RobotsSEO;

  aeo?: AEOConfig;

  schema?: JsonLdSchema[];

  metadata?: Metadata;
}

/* -------------------------------------------------------------------------- */
/*                               Open Graph                                   */
/* -------------------------------------------------------------------------- */

export interface OpenGraphSEO {
  title: string;

  description: string;

  url: string;

  siteName: string;

  images: readonly string[];

  locale: string;

  type: SeoContentType;
}

/* -------------------------------------------------------------------------- */
/*                                Twitter                                     */
/* -------------------------------------------------------------------------- */

export interface TwitterSEO {
  card:
    | "summary"
    | "summary_large_image"
    | "app"
    | "player";

  site?: string;

  creator?: string;

  title: string;

  description: string;

  image: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Robots                                    */
/* -------------------------------------------------------------------------- */

export interface RobotsSEO {
  index: boolean;

  follow: boolean;

  nocache?: boolean;

  googleBot?: {
    index: boolean;

    follow: boolean;

    noimageindex?: boolean;

    maxImagePreview?: "none" | "standard" | "large";

    maxSnippet?: number;

    maxVideoPreview?: number;
  };
}

/* -------------------------------------------------------------------------- */
/*                                Canonical                                   */
/* -------------------------------------------------------------------------- */

export interface CanonicalSEO {
  url: string;
}

/* -------------------------------------------------------------------------- */
/*                               Breadcrumb                                   */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbItem {
  title: string;

  href: string;
}

/* -------------------------------------------------------------------------- */
/*                            Alternate Languages                             */
/* -------------------------------------------------------------------------- */

export interface AlternateLanguage {
  locale: string;

  url: string;
}

/* -------------------------------------------------------------------------- */
/*                              Verification                                  */
/* -------------------------------------------------------------------------- */

export interface VerificationSEO {
  google?: string;

  bing?: string;

  yandex?: string;

  yahoo?: string;

  pinterest?: string;

  facebook?: string;
}

/* -------------------------------------------------------------------------- */
/*                                 AEO                                        */
/* -------------------------------------------------------------------------- */

export interface AEOConfig {
  entities?: readonly string[];

  questions?: readonly string[];

  facts?: readonly string[];

  audience?: readonly string[];

  searchIntent?:
    | "informational"
    | "commercial"
    | "transactional"
    | "navigational";

  freshness?: boolean;

  aiSummary?: string;

  citations?: readonly string[];
}

/* -------------------------------------------------------------------------- */
/*                                JSON-LD                                     */
/* -------------------------------------------------------------------------- */

export interface JsonLdSchema {
  "@context": "https://schema.org";

  "@type": string;

  [key: string]: unknown;
}

/* -------------------------------------------------------------------------- */
/*                              Sitemap Item                                  */
/* -------------------------------------------------------------------------- */

export interface SitemapEntry {
  url: string;

  lastModified?: string | Date;

  priority?: number;

  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

/* -------------------------------------------------------------------------- */
/*                               Route SEO                                    */
/* -------------------------------------------------------------------------- */

export interface RouteSEO {
  route: string;

  seo: PageSEO;
}

/* -------------------------------------------------------------------------- */
/*                             Global SEO                                     */
/* -------------------------------------------------------------------------- */

export interface GlobalSEO {
  site: SiteConfig;

  verification?: VerificationSEO;

  robots: RobotsSEO;

  openGraph: OpenGraphSEO;

  twitter: TwitterSEO;

  schema: readonly JsonLdSchema[];

  alternates?: readonly AlternateLanguage[];

  sitemap?: readonly SitemapEntry[];
}