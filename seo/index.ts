

// Types
export type { SeoPageType } from "../constant/seo.page.type";
export { SEO_PAGE_TYPES } from "../constant/seo.page.type";

// Routes
export { SITE_ROUTES, getRouteKeyByPath } from "../constant/site.route";
export type { RouteKey, RoutePath } from "../constant/site.route";

// Domain
export { SITE_DOMAIN, BASE_URL, createUrl } from "../constant/site.domain";

// Assets
export { SITE_ASSETS, getAssetUrl } from "../constant/site.assets";

// Complete SEO Types
export type {
  AEOConfig,
  RobotsSEO,
  OpenGraphSEO, 
  TwitterSEO,
  BreadcrumbItem,
  JsonLdSchema,
  PageSEOData,
  RouteSEO,
  SitemapEntry,
  GlobalSEO,
} from "../types/seo";

// Page Data
export { PAGE_SEO_DATA } from "./data/pages.seo.data";

// Utilities
export {
  createPageSEO,
  generateMetadata,
  generateStructuredData,
  generateJsonLdScript,
  generateSitemapEntries,
  generateRobotsTxt, 
  getAllPagesSEO,
  getAllRoutes,
} from "../utils/seo.utils";

// Route Mappings
export {
  ROUTES_SEO,
  ROUTES_SEO_MAP,
  getSEOByRoute,
  ALL_ROUTES,
  getSEOByRouteKey,
} from "./routes.seo";

// Breadcrumbs
export { generateBreadcrumbSchema } from "./breadcrumbs";


export { ROBOTS_SEO } from "./robots.content";

export { OPEN_GRAPH_SEO } from "./opengraph.seo";

export { TWITTER_SEO } from "./twitter.content";

export { GLOBAL_SCHEMA } from "./schema.seo";

export { SITEMAP } from "./sitemap.seo";

export { GLOBAL_SEO } from "./global.seo";