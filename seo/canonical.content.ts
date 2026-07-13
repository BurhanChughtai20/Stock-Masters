import type { CanonicalSEO } from "@/types/seo";

import { SITE_CONTENT } from "./site.content";

export function createCanonicalSEO(path: string): Readonly<CanonicalSEO> {
  return {
    url: new URL(path, SITE_CONTENT.url).toString(),
  };
}