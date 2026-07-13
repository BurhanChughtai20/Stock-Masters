import type { OpenGraphSEO } from "@/types/seo";

export const OPEN_GRAPH: Readonly<OpenGraphSEO> = {
  title: "Stock Masters",

  description:
    "Building disciplined portfolios for Pakistani investors through expert coaching and portfolio management.",

  url: "https://stockmasters.pk",

  siteName: "Stock Masters",

  images: ["/images/seo/og-image.webp"],

  locale: "en_PK",

  type: "website",
} as const;