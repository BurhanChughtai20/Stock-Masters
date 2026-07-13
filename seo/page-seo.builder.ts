import { SITE_ASSETS } from "@/constant/site.assets";
import { SITE_ROUTES } from "@/constant/site.route";
import { PAGE_SEO_DATA } from "./data/pages.seo.data";
import { PageSEOData } from "../types/seo";

export function createPageSEO(
  key: keyof typeof SITE_ROUTES,
): PageSEOData {
  const page = PAGE_SEO_DATA[key];

  return {
    ...page,
    image: page.image ?? SITE_ASSETS.defaultSeoImage,
  };
}