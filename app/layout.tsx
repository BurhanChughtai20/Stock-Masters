import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import {
  BASE_URL,
  GLOBAL_SEO,
} from "@/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: GLOBAL_SEO.site.name,
    template: `%s | ${GLOBAL_SEO.site.name}`,
  },

  description: GLOBAL_SEO.site.description,

  applicationName: GLOBAL_SEO.site.name,

  keywords: [...GLOBAL_SEO.site.keywords],

  authors: GLOBAL_SEO.site.authors.map((name) => ({
    name,
  })),

  creator: GLOBAL_SEO.site.creator,

  publisher: GLOBAL_SEO.site.publisher,

  category: GLOBAL_SEO.site.category,

  alternates: {
    canonical: GLOBAL_SEO.site.url,
  },

  robots: GLOBAL_SEO.robots,

  openGraph: {
    title: GLOBAL_SEO.openGraph.title,
    description: GLOBAL_SEO.openGraph.description,
    url: GLOBAL_SEO.openGraph.url,
    siteName: GLOBAL_SEO.openGraph.siteName,
    locale: GLOBAL_SEO.openGraph.locale,
    type:
  GLOBAL_SEO.openGraph.type === "article"
    ? "article"
    : GLOBAL_SEO.openGraph.type === "profile"
      ? "profile"
      : "website",
    images: GLOBAL_SEO.openGraph.images.map((url) => ({
      url,
      width: 1200,
      height: 630,
      alt: GLOBAL_SEO.site.name,
    })),
  },

  twitter: {
    card: GLOBAL_SEO.twitter.card,
    site: GLOBAL_SEO.twitter.site,
    creator: GLOBAL_SEO.twitter.creator,
    title: GLOBAL_SEO.twitter.title,
    description: GLOBAL_SEO.twitter.description,
    images: [GLOBAL_SEO.twitter.image],
  },

  icons: {
    icon: GLOBAL_SEO.site.logo,
    shortcut: GLOBAL_SEO.site.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={GLOBAL_SEO.site.language}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(GLOBAL_SEO.schema),
          }}
        />

        {children}
      </body>
    </html>
  );
}