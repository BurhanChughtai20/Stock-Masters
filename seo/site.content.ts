import { SITE_ASSETS } from "@/constant/site.assets";
import { SITE_DOMAIN } from "@/constant/site.domain";
import { SiteConfig } from "@/types/seo.ts";

const BASE_URL = `${SITE_DOMAIN.protocol}://${SITE_DOMAIN.host}`;


export const SITE_CONTENT: Readonly<SiteConfig> = {
  name: "Stock Masters",

  shortName: "Stock Masters",

  description:
    "Stock Masters (Organaization),  enables Pakistani investors to develop disciplined portfolios by coaching, portfolio management, teaching beginners, and making good investments.",

  slogan:
    "Grow Your Money With Discipline, Not Stock Advice.",

  url: BASE_URL,

  logo: SITE_ASSETS.logo,

  defaultImage: SITE_ASSETS.defaultSeoImage,

  locale: "en_PK",

  country: "Pakistan",

  language: "en",

  timezone: "Asia/Karachi",

  email: "stockmasters125@gmail.com",

  phone: "+923318883770",

  primaryPosition:
    "Portfolio Management Specialist & Stock Market Coach for Pakistani Investors",

  secondaryPositions: [
    "Portfolio Strategy Consultant",
    "PSX Investing Coach",
    "Pakistan Stock Exchange Expert",
    "Dividend & Long Term Wealth Strategy Advisor",
    "Behavioral Investor Coach"
  ],

  services: [
    "Portfolio Analysis & Strategy",
    "Portfolio Management (monthly rebalancing)",
    "One on One Premium Coaching",
    "Donne-for-you Portfolio Management"
  ],


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
    "Muhammad Burhan Chughtai"
  ],

  creator: "Muhammad Burhan Chughtai",

  publisher: "Stock Masters",

  category: "Finance"
} as const;