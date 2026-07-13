import type { GlobalSEO } from "@/types/seo";

import { SITE_CONTENT } from "./site.content"; 
import { GLOBAL_SCHEMA } from "./schema.seo";
import { SITEMAP } from "./sitemap.seo";
import { ROBOTS_SEO } from "./robots.content";
import { TWITTER_SEO } from "./twitter.content";
import { OPEN_GRAPH_SEO } from "./opengraph.seo";

export const GLOBAL_SEO: Readonly<GlobalSEO> = {
  site: SITE_CONTENT,

  robots: ROBOTS_SEO,

  openGraph: OPEN_GRAPH_SEO,

  twitter: TWITTER_SEO,

  schema: GLOBAL_SCHEMA,

  sitemap: SITEMAP,
};