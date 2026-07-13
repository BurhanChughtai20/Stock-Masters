import { SITE_CONTENT } from "./site.content";
import type { JsonLdSchema } from "@/types/seo";

export const GLOBAL_SCHEMA: readonly JsonLdSchema[] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONTENT.name,
    url: SITE_CONTENT.url,
    logo: SITE_CONTENT.logo,
    description: SITE_CONTENT.description,
    email: SITE_CONTENT.email,
    telephone: SITE_CONTENT.phone,
  },
];