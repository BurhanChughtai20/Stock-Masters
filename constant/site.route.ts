export const SITE_ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  courses: "/courses",
  brokers: "/brokers",
  websites: "/websites",
  pricing: "/pricing",
  faq: "/faq",
  contact: "/contact", 
} as const;

export type RouteKey = keyof typeof SITE_ROUTES;
export type RoutePath = (typeof SITE_ROUTES)[RouteKey];

/**
 * Helper function to get route by path
 */
export function getRouteKeyByPath(path: string): RouteKey | null {
  const entry = (Object.entries(SITE_ROUTES) as Array<[RouteKey, RoutePath]>).find(
    ([_, routePath]) => routePath === path,
  );
  return entry ? entry[0] : null;
}