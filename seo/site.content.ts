import { SiteConfig } from "@/types/seo.ts";

export const SITE_CONTENT: Readonly<SiteConfig> = {
  name: "Stock Masters",

  shortName: "StockMasters",

  description:
    "Disciplined investing on the Pakistan Stock Exchange through portfolio management, beginner coaching, market research and investment strategies.",

  slogan:
    "Grow Your Money With Discipline, Not Stock Advice.",

  url: "https://stockmasters.pk",

  logo: "/logo.png",

  defaultImage: "/images/seo/cover.webp",

  locale: "en_PK",

  country: "Pakistan",

  language: "en",

  timezone: "Asia/Karachi",

  email: "stockmasters125@gmail.com",

  phone: "+923318883770",

  keywords: [
    "PSX Portfolio Management",
    "Pakistan Stock Exchange",
    "PSX Investments",
    "Pakistan Stocks",
    "KSE 100",
    "Portfolio Management Services",
    "Financial Investment Mentor",
    "Investment Adviser Pakistan",
    "Long Term Investments",
    "Dividend Investments",
    "Money Maker",
    "Stock Market Coaching"
  ],

  authors: [
    "Burhan Chughtai"
  ],

  creator: "Burhan Chughtai",

  publisher: "Stock Masters",

  category: "Finance"
} as const;