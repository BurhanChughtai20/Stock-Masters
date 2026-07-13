
/* ============================================================================
   HOME PAGE
   ============================================================================ */

import { SEO_PAGE_TYPES } from "@/constant/seo.page.type";
import { SITE_ASSETS } from "@/constant/site.assets";
import { BASE_URL, createUrl } from "@/constant/site.domain";
import { RouteKey, SITE_ROUTES } from "@/constant/site.route";
import { PageSEOData } from "../../types/seo";

const homeSEO: PageSEOData = {
  title: "Stock Masters Pakistan – Learn PSX Trading & Stock Market Investing",
  description:
    "Master PSX trading and stock market investing with discipline-based strategies. Educational resources, courses, and expert guidance for Pakistani investors.",
  pageType: SEO_PAGE_TYPES.Homepage,
  keywords: [
    "PSX trading",
    "Pakistan stock exchange",
    "stock market Pakistan",
    "how to invest in PSX",
    "stock market courses Pakistan",
    "PSX brokers",
    "trading education",
    "investment guide Pakistan",
  ],
  
  aeo: {
    entities: [
      "Stock Masters Pakistan",
      "PSX (Pakistan Stock Exchange)",
      "Stock Market Trading",
      "Investment Education",
    ],
    questions: [
      "How do I start investing in PSX?",
      "What are the best PSX brokers?",
      "How to learn stock trading in Pakistan?",
      "What is the minimum investment for PSX?",
    ],
    facts: [
      "PSX is Pakistan's primary stock exchange",
      "Stock trading requires a CNIC and bank account",
      "Commission rates vary by broker",
    ],
    audience: [
      "Beginner investors in Pakistan",
      "Experienced traders",
      "Financial students",
    ],
    searchIntent: "informational",
    freshness: true,
    aiSummary:
      "Comprehensive platform for learning stock market investing and PSX trading with discipline-based education and resources.",
    relatedTopics: [
      "Investment strategies",
      "Risk management",
      "Portfolio management",
      "Technical analysis",
    ],
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Stock Masters Pakistan",
      url: BASE_URL,
      logo: createUrl(SITE_ASSETS.logo),
      description:
        "Learn stock market investing and PSX trading with discipline-based education.",
      areaServed: "PK",
      contactPoint: {
        "@type": "ContactPoint",
        contactpageType: "Customer Service",
        email: "hello@stockmasters.pk",
      },
    },
  ],
};

/* ============================================================================
   ABOUT PAGE
   ============================================================================ */

const aboutSEO: PageSEOData = {
  title: "About Stock Masters Pakistan – Our Mission & Expert Team",
  description:
    "Discover Stock Masters Pakistan. Learn about our mission to educate Pakistani investors about PSX trading, our team, and our discipline-based investment philosophy.",
  pageType: SEO_PAGE_TYPES.About,
  keywords: [
    "about stock masters",
    "investment education Pakistan",
    "PSX expertise",
    "trading mentors Pakistan",
    "investment team",
  ], 
  aeo: {
    entities: ["Stock Masters Pakistan", "Investment Education"],
    questions: [
      "Who are the founders of Stock Masters?",
      "What is Stock Masters' investment philosophy?",
      "Who teaches at Stock Masters?",
    ],
    audience: ["Potential students", "Investors seeking credibility"],
    searchIntent: "informational",
    aiSummary: "Learn about Stock Masters Pakistan's mission, team, and values.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Stock Masters Pakistan",
      url: createUrl(SITE_ROUTES.about),
    },
  ], 
};

/* ============================================================================
   SERVICES PAGE
   ============================================================================ */

const servicesSEO: PageSEOData = {
  title: "Investment Services – PSX Guidance & Financial Consulting",
  description:
    "Explore our investment services: PSX trading guidance, portfolio consultation, brokerage recommendations, and personalized investment strategies.",
  pageType: SEO_PAGE_TYPES.Service,
  keywords: [
    "investment services Pakistan",
    "PSX consultation",
    "trading guidance",
    "financial advisory Pakistan",
    "portfolio management",
    "broker recommendations",
  ], 
  aeo: {
    entities: ["Investment Services", "PSX Trading", "Portfolio Management"],
    questions: [
      "What investment services do you offer?",
      "How much do services cost?",
      "Can you help me choose a broker?",
    ],
    audience: ["Active investors", "Beginners seeking guidance"],
    searchIntent: "commercial",
    aiSummary: "Comprehensive investment services for PSX traders in Pakistan.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Investment Consulting",
      provider: {
        "@type": "Organization",
        name: "Stock Masters Pakistan",
      },
      areaServed: "PK",
    },
  ], 
};

/* ============================================================================
   COURSES PAGE
   ============================================================================ */

const coursesSEO: PageSEOData = {
  title: "Stock Market Courses – Learn PSX Trading & Investing Strategies",
  description:
    "Professional PSX and stock market courses for all levels. Learn trading strategies, risk management, and analysis from experts.",
  pageType: SEO_PAGE_TYPES.Course,
  keywords: [
    "PSX courses",
    "stock market courses Pakistan",
    "trading courses",
    "investment education",
    "technical analysis course",
    "fundamental analysis",
    "online trading course Pakistan",
  ], 
  aeo: {
    entities: ["Stock Market Courses", "PSX Training", "Investment Education"],
    questions: [
      "What courses do you offer?",
      "How much do courses cost?",
      "Are courses for beginners?",
      "Is there a certification?",
    ],
    audience: ["Beginners", "Intermediate traders", "Professionals"],
    searchIntent: "transactional",
    aiSummary:
      "Comprehensive trading and investment courses for all skill levels.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Stock Masters Professional Courses",
      provider: {
        "@type": "Organization",
        name: "Stock Masters Pakistan",
      },
      areaServed: "PK",
    },
  ], 
};

/* ============================================================================
   BROKERS PAGE
   ============================================================================ */

const brokersSEO: PageSEOData = {
  title: "PSX Brokers Comparison – Find the Best Brokerage in Pakistan",
  description:
    "Compare Pakistan's top PSX brokers. Reviews, features, commissions, and recommendations to help you choose the right brokerage.",
  pageType: SEO_PAGE_TYPES.Other,
  keywords: [
    "PSX brokers",
    "Pakistan stock brokers",
    "best brokers Pakistan",
    "brokerage comparison",
    "broker commissions",
    "broker reviews Pakistan",
    "online brokers PSX",
  ], 
  aeo: {
    entities: ["PSX Brokers", "Pakistan Stock Exchange", "Brokerage Services"],
    questions: [
      "Which PSX broker is best?",
      "What are broker commissions?",
      "How do I open a broker account?",
      "Which broker has lowest fees?",
    ],
    audience: ["New traders", "Active traders", "Retail investors"],
    searchIntent: "commercial",
    aiSummary:
      "Comprehensive guide to selecting the best PSX broker for trading.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "ComparisonChart",
      name: "PSX Brokers Comparison",
    },
  ], 
};

/* ============================================================================
   WEBSITES/RESOURCES PAGE
   ============================================================================ */

const websitesSEO: PageSEOData = {
  title: "Investment Websites & Resources – Essential Tools for Traders",
  description:
    "Curated list of essential investment websites, trading tools, financial data sources, and resources for PSX traders.",
  pageType: SEO_PAGE_TYPES.Other,
  keywords: [
    "investment websites Pakistan",
    "trading tools",
    "financial websites",
    "stock market resources",
    "investment tools online",
    "trading platforms",
  ], 
  aeo: {
    entities: ["Investment Resources", "Trading Tools", "Financial Websites"],
    questions: [
      "What are the best investment websites?",
      "Which platforms track PSX stocks?",
      "What tools do professional traders use?",
    ],
    audience: ["Traders", "Investors", "Financial professionals"],
    searchIntent: "informational",
    aiSummary: "Collection of essential investment websites and trading tools.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Collection",
      name: "Investment Resources",
    },
  ], 
};

/* ============================================================================
   PRICING PAGE
   ============================================================================ */

const pricingSEO: PageSEOData = {
  title: "Pricing – Affordable Plans for Stock Market Education & Services",
  description:
    "Transparent pricing for Stock Masters courses, memberships, and investment services. Flexible plans for all investor types.",
  pageType: SEO_PAGE_TYPES.Pricing,
  keywords: [
    "stock market course pricing",
    "investment course fees",
    "stock masters pricing",
    "course membership Pakistan",
    "affordable investing education",
  ], 
  aeo: {
    entities: ["Pricing", "Courses", "Membership"],
    questions: [
      "How much do courses cost?",
      "What's included in each plan?",
      "Is there a money-back guarantee?",
      "Do you offer discounts?",
    ],
    audience: ["Potential students", "Budget-conscious investors"],
    searchIntent: "transactional",
    aiSummary: "Clear pricing and plan options for all investment education needs.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "PricingTable",
      name: "Stock Masters Pricing",
    },
  ], 
};

/* ============================================================================
   FAQ PAGE
   ============================================================================ */

const faqSEO: PageSEOData = {
  title: "FAQ – Common Questions About PSX Trading & Stock Market Investing",
  description:
    "Answers to frequently asked questions about PSX trading, stock market investing, our courses, services, and how to get started.",
  pageType: SEO_PAGE_TYPES.FAQ,
  keywords: [
    "PSX FAQs",
    "stock market questions",
    "trading questions answered",
    "investment FAQ",
    "how to start investing Pakistan",
  ], 
  aeo: {
    entities: ["FAQ", "Common Questions", "Stock Market Education"],
    questions: [
      "How do I start investing in PSX?",
      "What's the minimum investment?",
      "How do I open a broker account?",
      "What are the risks of stock trading?",
      "Do I need experience to trade?",
    ],
    audience: ["Beginners", "Curious investors"],
    searchIntent: "informational",
    aiSummary: "Comprehensive FAQ addressing common PSX and stock market concerns.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I start investing in PSX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open an account with a PSX broker, deposit funds, and start trading stocks listed on Pakistan Stock Exchange.",
          },
        },
      ],
    },
  ], 
};

/* ============================================================================
   CONTACT PAGE
   ============================================================================ */

const contactSEO: PageSEOData = {
  title: "Contact Stock Masters – Get in Touch with Our Investment Team",
  description:
    "Contact Stock Masters Pakistan. Send us a message, call, or email with your questions about investing, courses, or services.",
  pageType: SEO_PAGE_TYPES.Contact,
  keywords: [
    "contact stock masters",
    "stock market advice",
    "investment help",
    "customer support Pakistan",
  ], 
  aeo: {
    entities: ["Contact", "Stock Masters", "Customer Service"],
    questions: [
      "How do I contact Stock Masters?",
      "What's the response time?",
      "Do you offer phone support?",
    ],
    audience: ["Interested customers", "Potential clients"],
    searchIntent: "navigational",
    aiSummary: "Easy ways to get in contact with the Stock Masters team.",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Stock Masters",
    },
  ], 
}; 

/* ============================================================================
   EXPORT ALL PAGE SEO DATA
   ============================================================================ */

export const PAGE_SEO_DATA = {
  home: homeSEO,
  about: aboutSEO,
  services: servicesSEO,
  courses: coursesSEO,
  brokers: brokersSEO,
  websites: websitesSEO,
  pricing: pricingSEO,
  faq: faqSEO,
  contact: contactSEO, 
} satisfies Record<RouteKey, PageSEOData>;