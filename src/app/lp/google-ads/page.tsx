import type { Metadata } from "next";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Ads Lead Generation for Local Businesses | Free Audit",
  description:
    "Get a steady stream of qualified local leads and booked appointments with expert Google Ads management. Free business audit with zero pressure.",
  openGraph: {
    title: "Google Ads Management for Local Businesses | MarketingGens",
    description:
      "Convert search traffic into booked appointments with targeted Google Ads campaigns and high-converting landing pages.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly will I start receiving leads from Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads campaigns start generating traffic immediately after approval. Most local businesses start receiving phone calls and form submissions within 24 to 48 hours of campaign launch.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure the leads are qualified and local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use tight geo-location targeting, high-intent buyer keywords, and continuous negative keyword updates. This ensures your budget is spent only on prospects within your service area who need your services immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your landing pages convert better than my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard websites are designed to share general information, which often distracts visitors. Our landing pages are streamlined for single-action conversion, eliminating distractions and guiding visitors straight to booking an appointment or calling your phone.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a massive ad budget to get results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We structure campaigns to maximize efficiency regardless of budget size. During your free audit, we will recommend a realistic daily ad budget based on your local market competition and target goals.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any long-term contracts required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No long-term contracts are required. We operate on a month-to-month basis because we believe our results should keep you as a client, not a locked contract.",
      },
    },
    {
      "@type": "Question",
      name: "How do I track calls and leads generated from the campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You receive instant email and SMS notifications whenever a new lead submits a form. We also implement call tracking so you can see exact phone calls, call durations, and caller details in your dashboard.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Google Ads Lead Generation & Management",
  provider: {
    "@type": "Organization",
    name: site.name,
    url: "https://marketinggens.com",
    telephone: site.phone,
    email: site.email,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  description:
    "Done-for-you Google Ads campaign creation, keyword targeting, ad copywriting, and custom landing page development for local businesses.",
};

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLanding data={servicesData["google-ads"]} />
    </>
  );
}
