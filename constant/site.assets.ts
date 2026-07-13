
export const SITE_ASSETS = {
  // Logo and branding
  logo: "/images/logo/logo.png",

  // Default social sharing image
  defaultSeoImage: "/images/logo/og-default.png",

  // Icons
  favicon: "/favicon.ico",
  appleIcon: "/images/logo/apple-icon.png",
  androidIcon: "/images/logo/android-icon.png",

  // Hero and banner images
  heroBanner: "/images/hero/banner.jpg",
  coursesBanner: "/images/courses/banner.jpg",
  brokersBanner: "/images/brokers/banner.jpg",

  // Other assets
  emptyState: "/images/empty/empty-state.svg",
} as const;
 
export function getAssetUrl(asset: (typeof SITE_ASSETS)[keyof typeof SITE_ASSETS]): string {
  if (asset.startsWith("http")) {
    return asset;
  }
  return asset;
}