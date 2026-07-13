import type { RobotsSEO } from "@/types/seo.ts";

export const ROBOTS_SEO: Readonly<RobotsSEO> = {
  index: true,

  follow: true,

  googleBot: {
    index: true,

    follow: true,

    noimageindex: false,

    maxImagePreview: "large",

    maxSnippet: -1,

    maxVideoPreview: -1,
  },
} as const;