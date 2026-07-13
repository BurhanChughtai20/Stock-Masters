import type { MetadataRoute } from "next";
import { SITEMAP } from "@/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...SITEMAP];
}