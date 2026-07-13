import type { TwitterSEO } from "@/types/seo.ts";
import { SITE_CONTENT } from "./site.content";

export const TWITTER_SEO: Readonly<TwitterSEO> = {
  card: "summary_large_image",

  site: "@StockMasters",

  creator: "@StockMasters",

  title: SITE_CONTENT.name,

  description:
    "Building disciplined portfolios for Pakistani investors through expert coaching and portfolio management.",

  image: SITE_CONTENT.defaultImage,
} as const;