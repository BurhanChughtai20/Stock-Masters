import type { OpenGraphSEO } from "@/types/seo";
import { SITE_CONTENT } from "./site.content";

export const OPEN_GRAPH_SEO: Readonly<OpenGraphSEO> = {
  title: SITE_CONTENT.name,
  description: SITE_CONTENT.description,
  url: SITE_CONTENT.url,
  siteName: SITE_CONTENT.name,
  locale: SITE_CONTENT.locale,
  type: "website",
  images: [SITE_CONTENT.defaultImage],
} as const;