
export const SITE_DOMAIN = {
  protocol: "https",
  host: "stockmasters.pk",
} as const;

export const BASE_URL = `${SITE_DOMAIN.protocol}://${SITE_DOMAIN.host}` as const;

/**
 * Helper to create full URLs
 */
export function createUrl(path: string): string {
  return `${BASE_URL}${path}`;
}