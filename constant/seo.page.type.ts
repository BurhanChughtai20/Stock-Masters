export const SEO_PAGE_TYPES = {
  Website: "website",
  Homepage: "homepage",
  About: "about",
  Service: "service",
  Course: "course",
  Blog: "blog",
  Article: "article",
  FAQ: "faq",
  Contact: "contact",
  Pricing: "pricing",
  Other: "other",
} as const;
 
export type SeoPageType =
  (typeof SEO_PAGE_TYPES)[keyof typeof SEO_PAGE_TYPES];