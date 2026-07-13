import type { RobotsSEO } from "@/types/seo.ts";

export const ROBOTS_SEO: Readonly<RobotsSEO> = {
  index: true,

  follow: true,

  googleBot: {
    index: true,

    follow: true,

    noimageindex: false,

    "max-image-preview": "large",

    "max-snippet": -1,

    "max-video-preview": -1,
  },
} as const;