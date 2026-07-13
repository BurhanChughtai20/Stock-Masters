import { SeoPageType } from "@/constant/seo.page.type";
import { RoutePath } from "@/seo";

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

export interface PageSEOData {
  title: string;

  description: string;

  pageType: SeoPageType;

  keywords?: readonly string[];

  image?: string;

  noIndex?: boolean;

  noFollow?: boolean;

  schema?: readonly JsonLdSchema[];

  aeo?: AEOConfig;
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

    "max-image-preview"?: "none" | "standard" | "large";

    "max-snippet"?: number;

    "max-video-preview"?: number;
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
/*                                 AEO                                        */
/* -------------------------------------------------------------------------- */


export interface AEOConfig {
  /** Key entities/concepts on this page */
  entities?: readonly string[];
  /** Common questions users ask about this topic */
  questions?: readonly string[];
  /** Key facts this page covers */
  facts?: readonly string[];
  /** Target audience for this page */
  audience?: readonly string[];
  /** Search intent: what users are looking for */
  searchIntent?:
    | "informational"
    | "commercial"
    | "transactional"
    | "navigational";
  /** Is this content fresh/recent? */
  freshness?: boolean;
  /** AI-friendly summary (1-2 sentences) */
  aiSummary?: string;
  /** Citation sources for claims */
  citations?: readonly string[];
  /** Related topics to explore */
  relatedTopics?: readonly string[];
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
  route: RoutePath;

  seo: PageSEOData;
}

/* -------------------------------------------------------------------------- */
/*                             Global SEO                                     */
/* -------------------------------------------------------------------------- */

export interface GlobalSEO {
  site: SiteConfig;

  robots: RobotsSEO;

  openGraph: OpenGraphSEO;

  twitter: TwitterSEO;

  schema: readonly JsonLdSchema[];

  sitemap?: readonly SitemapEntry[];
}