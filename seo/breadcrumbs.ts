import { BreadcrumbItem, JsonLdSchema } from "@/types/seo";

export function generateBreadcrumbSchema(
  breadcrumbs: BreadcrumbItem[] | undefined,
  currentTitle: string,
): JsonLdSchema | null {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  const items = [
    ...breadcrumbs,
    { title: currentTitle, href: "" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      ...(item.href && { item: item.href }),
    })),
  };
}