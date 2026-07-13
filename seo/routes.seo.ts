import { RouteKey, SITE_ROUTES } from "@/constant/site.route";
import { RouteSEO } from "@/types/seo";
import { getAllPagesSEO } from "@/utils/seo.utils";
import { createPageSEO } from "./page-seo.builder";

export const ROUTES_SEO: RouteSEO[] = getAllPagesSEO();

/* ============================================================================
   CREATE ROUTES SEO MAP FOR QUICK LOOKUP
   ============================================================================ */

export const ROUTES_SEO_MAP = Object.fromEntries(
  ROUTES_SEO.map((item) => [item.route, item.seo]),
) as Record<string, ReturnType<typeof createPageSEO>>;

/* ============================================================================
   GET SEO BY ROUTE PATH
   ============================================================================ */

export function getSEOByRoute(path: string) {
  return ROUTES_SEO_MAP[path] || null;
}

/* ============================================================================
   GET ALL ROUTE PATHS
   ============================================================================ */

export const ALL_ROUTES = Object.values(SITE_ROUTES);

/* ============================================================================
   HELPER: GET SEO BY ROUTE KEY
   ============================================================================ */

export function getSEOByRouteKey(routeKey: RouteKey) {
  return createPageSEO(routeKey);
}