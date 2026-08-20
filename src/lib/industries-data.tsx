import React from "react";

export interface IndustryData {
  slug: string;
  title: string;
  heroImage: string;
  badgeBenchmark: string;
  badgeGrowth: string;
  heroHeadline: React.ReactNode;
  heroSubheadline: string;
  industryMetrics: {
    label: string;
    value: string;
    sub: string;
  }[];
  challenges: {
    problem: string;
    solution: string;
  }[];
  recommendedServices: {
    serviceSlug: string;
    title: string;
    whyNeeded: string;
  }[];
  caseStudy: {
    clientType: string;
    resultMetric: string;
    story: string;
  };
  playbookSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  faqItems: {
    question: string;
    answer: string;
  }[];
}

export const industriesData: Record<string, IndustryData> = {
  "local-businesses": {
    slug: "local-businesses",
    title: "Local Businesses",
    heroImage: "/service-local-seo.png",
    badgeBenchmark: "Local Market Leader Strategy",
    badgeGrowth: "+240% Average Increase in Local Inquiries",
    heroHeadline: (
      <>
        Fill Your Local Calendar With{" "}
        <span className="text-heading-gradient-light">Ready-to-Hire</span> Customers.
      </>
    ),
    heroSubheadline:
      "Stop losing local searchers to big competitors. We deploy proven local SEO, Google Map Pack optimization, and geo-targeted ads that bring nearby buyers directly to your front door.",
    industryMetrics: [
      { label: "Avg Cost Per Lead", value: "$18 - $35", sub: "Verified local inquiries" },
      { label: "Map Pack Visibility", value: "Top 3 Rank", sub: "Targeted ZIP codes" },
      { label: "Conversion Rate", value: "32%", sub: "Callers to appointments" },
    ],
    challenges: [
      {
        problem: "Invisible on Google Maps when local clients search for immediate service",
        solution: "Dominate Google Map Pack 3-Pack rankings for your high-intent local search terms",
      },
      {
        problem: "Shared leads from directory sites resold to 5 competitors simultaneously",
        solution: "100% exclusive direct calls generated from your own dedicated campaigns",
      },
      {
        problem: "Wasting budget on clicks outside your active service territory",
        solution: "Hyper-targeted radius geo-fencing so every dollar reaches nearby buyers",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "local-seo",
        title: "Local SEO & Map Pack Domination",
        whyNeeded: "Build organic dominance on Google Search and Maps so nearby customers call you first.",
      },
      {
        serviceSlug: "google-ads",
        title: "High-Intent Google Ads",
        whyNeeded: "Capture immediate local demand from buyers searching for same-day service.",
      },
      {
        serviceSlug: "website-development",
        title: "High-Converting Mobile Website",
        whyNeeded: "Turn mobile map searchers into instant phone callers with 1-click booking.",
      },
    ],
    caseStudy: {
      clientType: "Local Multi-Location Provider",
      resultMetric: "148 New Calls / Mo",
      story: "Optimized Google Business Profiles and localized paid search across 3 zip codes, reducing cost-per-lead by 42%.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Local Market & Competitor Audit",
        description: "We map your top 5 local competitors and uncover high-volume buyer keywords in your exact area.",
      },
      {
        number: "02",
        title: "Google Map Pack & Ads Acceleration",
        description: "We optimize your profile citations, local reviews strategy, and launch hyper-targeted search ads.",
      },
      {
        number: "03",
        title: "Predictable Appointment Inflow",
        description: "Phone calls and direct inquiries hit your desk while we continuously refine conversion performance.",
      },
    ],
    faqItems: [
      {
        question: "How long does it take for a local business to see new inquiries?",
        answer:
          "Paid search ads deliver inbound phone calls within 24 to 48 hours of launch. Local SEO Map Pack improvements typically show significant movement within 30 to 60 days.",
      },
      {
        question: "Do you guarantee exclusive leads for local businesses?",
        answer:
          "Yes! Every phone call and form fill generated through your custom funnel is 100% exclusive to your business.",
      },
    ],
  },

  restaurants: {
    slug: "restaurants",
    title: "Restaurants & Food Services",
    heroImage: "/service-content.png",
    badgeBenchmark: "Hospitality Revenue Engine",
    badgeGrowth: "+310% Monthly Table Bookings",
    heroHeadline: (
      <>
        Pack Your Dining Room & Scale{" "}
        <span className="text-heading-gradient-light">Direct Orders.</span>
      </>
    ),
    heroSubheadline:
      "Eliminate heavy delivery app commissions. We build high-converting local campaigns, Meta visual ads, and automated VIP loyalty systems that keep tables filled and direct orders soaring.",
    industryMetrics: [
      { label: "Commission Saved", value: "30%", sub: "vs Third-party apps" },
      { label: "Direct Online Orders", value: "+185%", sub: "First 60 days" },
      { label: "Customer LTV", value: "4.2x", sub: "Via automated repeat offers" },
    ],
    challenges: [
      {
        problem: "Paying 25%-30% commissions to third-party delivery delivery platforms",
        solution: "Drive customers to your own commission-free direct ordering system",
      },
      {
        problem: "Slow weeknight dinner slots with empty tables and high labor overhead",
        solution: "Targeted localized weekday promotions that fill seats during off-peak hours",
      },
      {
        problem: "One-time diners who never return or leave positive feedback",
        solution: "Automated SMS/Email loyalty rewards that incentivize repeat weekend visits",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "social-media",
        title: "Social Media & Meta Ads",
        whyNeeded: "Showcase mouth-watering dish visuals to local foodies within a 5-mile radius.",
      },
      {
        serviceSlug: "local-seo",
        title: "Google Map Pack & Review Booster",
        whyNeeded: "Ensure your restaurant shows up top when hungry locals search 'best dinner near me'.",
      },
      {
        serviceSlug: "email-marketing",
        title: "VIP Loyalty & Email Automation",
        whyNeeded: "Turn one-time diners into loyal regulars with birthday and weekend specials.",
      },
    ],
    caseStudy: {
      clientType: "Upscale Bistro & Catering",
      resultMetric: "$38k Direct Revenue",
      story: "Launched localized Meta video ads and direct reservation funnels, shifting 60% of takeout orders off third-party apps.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Visual Menu & Geo Campaign Setup",
        description: "We create high-converting visual ad creatives targeting food enthusiasts within driving distance.",
      },
      {
        number: "02",
        title: "Direct Order & Reservation Funnel",
        description: "We streamline your website for instant table reservations and zero-commission pickup orders.",
      },
      {
        number: "03",
        title: "Automated VIP Guest Retention",
        description: "Guests automatically join your VIP club, driving repeat dining visits month after month.",
      },
    ],
    faqItems: [
      {
        question: "Can you help reduce our dependence on Grubhub/DoorDash?",
        answer:
          "Yes! We build direct online ordering systems that encourage customers to order directly from your website, saving thousands in commissions.",
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    title: "Ecommerce & Retail",
    heroImage: "/service-shopify.png",
    badgeBenchmark: "High-ROAS Ecom Scaling",
    badgeGrowth: "4.8x Average Return On Ad Spend",
    heroHeadline: (
      <>
        Scale E-commerce Sales With{" "}
        <span className="text-heading-gradient-light">Predictable ROAS.</span>
      </>
    ),
    heroSubheadline:
      "Stop burning budget on unoptimized ads. We combine Google Shopping, Meta Retargeting, and Shopify CRO to scale your monthly store revenue profitably.",
    industryMetrics: [
      { label: "Target ROAS", value: "4.5x - 7.2x", sub: "Across Meta & Google" },
      { label: "Cart Abandonment", value: "-35%", sub: "Via automated SMS flows" },
      { label: "Repeat Purchase", value: "28%", sub: "90-day customer retention" },
    ],
    challenges: [
      {
        problem: "Rising Customer Acquisition Costs (CAC) eating up profit margins",
        solution: "Precision Meta & Google Shopping campaigns focused strictly on profitable MER & ROAS",
      },
      {
        problem: "High website visitor traffic but low add-to-cart conversion rates",
        solution: "Custom Shopify CRO landing pages optimized for frictionless checkout",
      },
      {
        problem: "Abandoned carts leaving thousands of dollars in uncaptured revenue",
        solution: "Multi-touch SMS and email recovery sequences that convert 15%+ of drop-offs",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "shopify",
        title: "Shopify Store & CRO Optimization",
        whyNeeded: "Transform product pages into lightning-fast, high-converting checkout engines.",
      },
      {
        serviceSlug: "meta-ads",
        title: "Meta Ads & Creative Testing",
        whyNeeded: "Test high-performing UGC ads that lower CAC and scale daily orders.",
      },
      {
        serviceSlug: "email-marketing",
        title: "Klaviyo Email & SMS Automation",
        whyNeeded: "Recover abandoned carts and drive repeat revenue from existing buyers.",
      },
    ],
    caseStudy: {
      clientType: "Direct-To-Consumer Apparel Brand",
      resultMetric: "$142,000 / Mo Revenue",
      story: "Scales from $30k to $142k/mo in 5 months by optimizing Shopify checkout speed and implementing dynamic retargeting.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Conversion Store Audit & CAC Benchmark",
        description: "We analyze your store analytics, checkout friction points, and product margin targets.",
      },
      {
        number: "02",
        title: "Multi-Channel Ad Scale & Creative Testing",
        description: "We launch dynamic catalog ads, UGC videos, and Google Shopping campaigns.",
      },
      {
        number: "03",
        title: "Retention & Automated Repeat Buyers",
        description: "Klaviyo email flows keep customers coming back for new product launches and replenishment.",
      },
    ],
    faqItems: [
      {
        question: "Do you specialize in Shopify and WooCommerce?",
        answer:
          "Yes, we build and optimize custom e-commerce stores on Shopify, Shopify Plus, and WooCommerce.",
      },
    ],
  },

  insurance: {
    slug: "insurance",
    title: "Insurance Agencies",
    heroImage: "/service-meta-ads.png",
    badgeBenchmark: "High-Intent Policy Lead System",
    badgeGrowth: "+180 Exclusive Policy Leads / Mo",
    heroHeadline: (
      <>
        Generate Exclusive Policy Leads{" "}
        <span className="text-heading-gradient-light">Ready to Switch.</span>
      </>
    ),
    heroSubheadline:
      "Tired of cold lead lists sold to 10 other agents? We build exclusive lead generation funnels for Auto, Home, Commercial, and Life insurance agents looking to grow book of business.",
    industryMetrics: [
      { label: "Cost Per Quote", value: "$22 - $45", sub: "Qualified policy quotes" },
      { label: "Lead Exclusivity", value: "100%", sub: "Never shared or resold" },
      { label: "Bind Rate", value: "24%", sub: "From quote to bound policy" },
    ],
    challenges: [
      {
        problem: "Buying shared vendor leads resold to competing local agents",
        solution: "100% exclusive branded leads delivered instantly to your agency CRM",
      },
      {
        problem: "Prospects ghosting quotes after receiving price estimates",
        solution: "Automated SMS/Email follow-up sequences that lock in phone consultations",
      },
      {
        problem: "High churn rate at annual policy renewal periods",
        solution: "Proactive client retention and multi-policy cross-sell campaigns",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "google-ads",
        title: "Google Search Ads for Insurance",
        whyNeeded: "Target drivers and homeowners actively searching 'best auto insurance quote near me'.",
      },
      {
        serviceSlug: "meta-ads",
        title: "Meta Ads Lead Generation",
        whyNeeded: "Target local homeowners and business owners with compelling coverage comparisons.",
      },
      {
        serviceSlug: "email-marketing",
        title: "Quote Nurture & Cross-Sell Email",
        whyNeeded: "Automatically cross-sell home insurance to auto clients and follow up on quotes.",
      },
    ],
    caseStudy: {
      clientType: "Independent Insurance Agency",
      resultMetric: "215 Bound Policies / Qtr",
      story: "Replaced shared vendor lead buys with exclusive Google & Meta campaign funnels, doubling annual written premium.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Policy Target & Geography Mapping",
        description: "We identify your target policy types (Auto, Home, Commercial, Life) and preferred ZIP codes.",
      },
      {
        number: "02",
        title: "Exclusive Quote Funnel Launch",
        description: "We launch custom quote landing pages that collect key underwriting details before sending leads.",
      },
      {
        number: "03",
        title: "Instant Lead Alerts & CRM Sync",
        description: "Leads sync directly to your phone and agency management software in real time.",
      },
    ],
    faqItems: [
      {
        question: "Are these leads exclusive to my insurance agency?",
        answer:
          "100% exclusive. Every lead generated from your campaigns goes directly to your agency and no one else.",
      },
    ],
  },

  medical: {
    slug: "medical",
    title: "Medical & Healthcare",
    heroImage: "/service-app-dev.png",
    badgeBenchmark: "HIPAA Compliant Practice Growth",
    badgeGrowth: "50+ New High-Value Patients / Mo",
    heroHeadline: (
      <>
        Fill Practice Appointment Slots With{" "}
        <span className="text-heading-gradient-light">Qualified Patients.</span>
      </>
    ),
    heroSubheadline:
      "HIPAA-compliant marketing engineered for dental practices, private doctors, med spas, and healthcare clinics looking for high-value treatments and consultations.",
    industryMetrics: [
      { label: "New Patients", value: "45 - 80 / mo", sub: "Targeted procedure leads" },
      { label: "Show-Up Rate", value: "88%", sub: "With automated SMS reminders" },
      { label: "Average Patient LTV", value: "$3,400", sub: "Annual treatment value" },
    ],
    challenges: [
      {
        problem: "High no-show rates for initial patient consultations",
        solution: "Automated 2-way SMS reminder flows and instant appointment confirmation",
      },
      {
        problem: "Relying strictly on word-of-mouth while local competitors dominate search",
        solution: "Top Google Map Pack ranking for lucrative procedures like implants, Invisalign, and aesthetics",
      },
      {
        problem: "Strict HIPAA privacy compliance requirements for digital ads and forms",
        solution: "100% HIPAA-compliant form routing, encrypted data capture, and tracking",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "local-seo",
        title: "Medical Local SEO & Map Rankings",
        whyNeeded: "Ensure your clinic appears at the top when patients search 'best clinic near me'.",
      },
      {
        serviceSlug: "google-ads",
        title: "High-Intent Medical Google Ads",
        whyNeeded: "Capture high-value procedure searches like dental implants, cosmetic treatments, and specialists.",
      },
      {
        serviceSlug: "website-development",
        title: "HIPAA Compliant Patient Website",
        whyNeeded: "Provide seamless online booking, patient forms, and mobile accessibility.",
      },
    ],
    caseStudy: {
      clientType: "Cosmetic & General Dental Clinic",
      resultMetric: "+64 New Patients / Mo",
      story: "Shifted strategy to high-value treatment landing pages, generating $78k in new patient production within 90 days.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Treatment & Procedure Audit",
        description: "We identify your highest-margin treatments (implants, clear aligners, aesthetics, consultations).",
      },
      {
        number: "02",
        title: "HIPAA Compliant Funnel Build",
        description: "We deploy secure, high-converting patient booking pages and search ad campaigns.",
      },
      {
        number: "03",
        title: "Automated Patient Scheduling",
        description: "Patients book directly into your practice management workflow with zero staff friction.",
      },
    ],
    faqItems: [
      {
        question: "Is your digital marketing HIPAA-compliant?",
        answer:
          "Yes. We strictly utilize encrypted form handlers, compliant tracking protocols, and secure data handling.",
      },
    ],
  },

  wellness: {
    slug: "wellness",
    title: "Medical & Wellness Practices",
    heroImage: "/service-social.png",
    badgeBenchmark: "Wellness Patient Acquisition",
    badgeGrowth: "+210% Consultations Booked",
    heroHeadline: (
      <>
        Attract High-Value Wellness &{" "}
        <span className="text-heading-gradient-light">Med Spa Clients.</span>
      </>
    ),
    heroSubheadline:
      "Scale cash-pay wellness services, IV therapy, hormone optimization, weight loss, and aesthetic consultations with premium visual branding and direct booking funnels.",
    industryMetrics: [
      { label: "Cost Per Booking", value: "$28 - $50", sub: "High-value consults" },
      { label: "Cash Pay Conversion", value: "35%", sub: "Consultation to package" },
      { label: "Package LTV", value: "$2,800+", sub: "Recurring wellness plans" },
    ],
    challenges: [
      {
        problem: "Low conversion rates on cash-pay wellness treatment offers",
        solution: "High-end aesthetic landing pages showcasing video transformation proof and clear pricing options",
      },
      {
        problem: "Price-shopping clients who bounce off standard informational websites",
        solution: "Strategic consultation funnels that pre-qualify clients before they speak with your team",
      },
      {
        problem: "One-time package buyers with low 90-day retention",
        solution: "Automated VIP membership nurturing flows that turn single visits into recurring monthly care",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "social-media",
        title: "Meta Ads & Visual Showcases",
        whyNeeded: "Run stunning before/after aesthetic and wellness video ads to local audiences.",
      },
      {
        serviceSlug: "google-ads",
        title: "Google Ads for Specialty Wellness",
        whyNeeded: "Target high-intent searches for weight loss, hormone therapy, and IV hydration.",
      },
      {
        serviceSlug: "email-marketing",
        title: "Membership Nurturing Email & SMS",
        whyNeeded: "Keep existing patients engaged with monthly wellness package renewals.",
      },
    ],
    caseStudy: {
      clientType: "Med Spa & Wellness Center",
      resultMetric: "$54,000 New Package Sales",
      story: "Launched targeted Meta video ads for weight loss & aesthetic packages, filling consult slots 3 weeks out.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Service Package Positioning",
        description: "We package your wellness offerings into compelling, high-perceived-value consultation offers.",
      },
      {
        number: "02",
        title: "Visual Ad & Landing Page Launch",
        description: "We launch premium visual campaigns across Instagram, Facebook, and Google Search.",
      },
      {
        number: "03",
        title: "Automated Reminders & Upsells",
        description: "Smart follow-ups reduce consult no-shows and promote ongoing monthly membership plans.",
      },
    ],
    faqItems: [
      {
        question: "Do you help with cash-pay treatments vs insurance?",
        answer:
          "Yes! We specialize in cash-pay aesthetic, weight loss, and wellness packages where margins are highest.",
      },
    ],
  },

  "home-services": {
    slug: "home-services",
    title: "Home Services & Contractors",
    heroImage: "/service-local-seo.png",
    badgeBenchmark: "High-Ticket Contractor Leads",
    badgeGrowth: "120+ Exclusive Calls / Mo",
    heroHeadline: (
      <>
        Keep Your Crew Busy With{" "}
        <span className="text-heading-gradient-light">High-Ticket Jobs.</span>
      </>
    ),
    heroSubheadline:
      "HVAC, Plumbing, Roofing, Electricians, and Remodelers — we build high-converting search campaigns and Google Map Pack systems that deliver emergency calls and big-ticket estimates directly to your dispatch team.",
    industryMetrics: [
      { label: "Cost Per Call", value: "$25 - $55", sub: "Emergency & service calls" },
      { label: "Job Ticket Value", value: "$1,800 - $12,500", sub: "Average project size" },
      { label: "Dispatch Conversion", value: "48%", sub: "Call to estimate booked" },
    ],
    challenges: [
      {
        problem: "Paying third-party lead brokers for shared leads that 4 contractors race to call",
        solution: "100% exclusive direct phone calls from homeowners who need your service right now",
      },
      {
        problem: "Slow shoulder seasons with idle trucks and crew payroll overhead",
        solution: "On-demand Google Ads campaigns you can ramp up instantly when schedules open",
      },
      {
        problem: "Losing local job estimates to competitors with more 5-star Google reviews",
        solution: "Automated SMS review generation system that builds your 5-star reputation on autopilot",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "google-ads",
        title: "Google Local Search & LSA Ads",
        whyNeeded: "Be the first phone call when a homeowner's AC breaks down or roof leaks.",
      },
      {
        serviceSlug: "local-seo",
        title: "Contractor Local SEO & Google Maps",
        whyNeeded: "Dominate search rankings across your entire city and surrounding suburbs.",
      },
      {
        serviceSlug: "website-development",
        title: "High-Converting Dispatch Website",
        whyNeeded: "Built for instant phone taps, quick photo quotes, and fast estimate requests.",
      },
    ],
    caseStudy: {
      clientType: "HVAC & Plumbing Contractor",
      resultMetric: "$210,000 Added Revenue",
      story: "Dominated local Google Map Pack across 4 target suburbs, increasing monthly emergency dispatches by 160%.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Service Territory & Emergency Keyword Map",
        description: "We map out your top-revenue services (replacements, repairs, installs) and target towns.",
      },
      {
        number: "02",
        title: "Exclusive Call Campaign Launch",
        description: "We launch call-only ads and high-converting quote request landing pages for your trucks.",
      },
      {
        number: "03",
        title: "Dispatch Growth & Review Automation",
        description: "Calls route directly to your phones while automated SMS requests build 5-star Google reviews.",
      },
    ],
    faqItems: [
      {
        question: "Can I target specific zip codes for high-ticket remodeling jobs?",
        answer:
          "Absolutely. We can target exact neighborhoods, zip codes, and household income brackets.",
      },
    ],
  },

  "beauty-spas": {
    slug: "beauty-spas",
    title: "Salons, Beauty & Spas",
    heroImage: "/service-content.png",
    badgeBenchmark: "Chair & Appointment Booster",
    badgeGrowth: "95% Monthly Chair Utilization",
    heroHeadline: (
      <>
        Keep Every Salon Chair &{" "}
        <span className="text-heading-gradient-light">Treatment Room Full.</span>
      </>
    ),
    heroSubheadline:
      "Attract consistent repeat clients for hair, lash, brow, facial, and spa services. We turn casual social scrollers into loyal monthly appointment holders.",
    industryMetrics: [
      { label: "Cost Per Booking", value: "$12 - $22", sub: "New client appointment" },
      { label: "Rebooking Rate", value: "68%", sub: "Automatic 4-week rebook" },
      { label: "Client LTV", value: "$1,450", sub: "Annual service spend" },
    ],
    challenges: [
      {
        problem: "Last-minute cancellations leaving empty service chairs and lost revenue",
        solution: "Automated deposit requirements and SMS waitlist fill systems",
      },
      {
        problem: "Relying on organic Instagram posts that reach less than 5% of local followers",
        solution: "Targeted Meta ad funnels reaching thousands of local women within 5 miles",
      },
      {
        problem: "Clients booking once for a promo and never booking a second visit",
        solution: "Automated 4-week rebooking SMS reminders and package loyalty perks",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "social-media",
        title: "Meta Ads & Stylist Portfolios",
        whyNeeded: "Showcase stunning transformations and client reviews directly in local social feeds.",
      },
      {
        serviceSlug: "local-seo",
        title: "Local Google Maps & Salon Search",
        whyNeeded: "Show up #1 when local clients search 'best hair salon near me' or 'lash extensions near me'.",
      },
      {
        serviceSlug: "email-marketing",
        title: "SMS Booking & Rebooking Automation",
        whyNeeded: "Automatically prompt clients to rebook their 4-week appointment before they leave.",
      },
    ],
    caseStudy: {
      clientType: "Luxury Boutique Salon & Lash Bar",
      resultMetric: "112 New Bookings / Mo",
      story: "Built visual Instagram ad campaigns paired with automated SMS rebooking, achieving 94% chair utilization.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Portfolio & Offer Curation",
        description: "We select your highest-performing transformation photos and introductory package offers.",
      },
      {
        number: "02",
        title: "Local Social & Search Campaign",
        description: "We deploy targeted Instagram visual ads and Google Map Pack optimization.",
      },
      {
        number: "03",
        title: "Automated Rebooking Retention",
        description: "Automated SMS sequences keep your client calendar full 4 to 6 weeks in advance.",
      },
    ],
    faqItems: [
      {
        question: "Can your system integrate with vagaro, Boulevard, or Mindbody?",
        answer:
          "Yes! We send clients directly to your online booking software or custom high-converting booking pages.",
      },
    ],
  },

  fitness: {
    slug: "fitness",
    title: "Fitness Centers & Gyms",
    heroImage: "/service-meta-ads.png",
    badgeBenchmark: "Member Acquisition Engine",
    badgeGrowth: "+85 New Gym Memberships / Mo",
    heroHeadline: (
      <>
        Drive New Gym Memberships &{" "}
        <span className="text-heading-gradient-light">Personal Training Clients.</span>
      </>
    ),
    heroSubheadline:
      "Scale monthly recurring revenue for boutique studios, CrossFit boxes, 24/7 gyms, and personal training facilities with low-cost trial funnels and membership automation.",
    industryMetrics: [
      { label: "Cost Per Trial Lead", value: "$8 - $16", sub: "7-day trial signup" },
      { label: "Trial to Member", value: "42%", sub: "Conversion to monthly" },
      { label: "Avg Member Retention", value: "14 Months", sub: "Recurring monthly dues" },
    ],
    challenges: [
      {
        problem: "High gym membership churn during summer and holiday months",
        solution: "Continuous year-round trial lead funnels that replace cancelled memberships automatically",
      },
      {
        problem: "Leads signing up for free trial passes but never stepping foot in the gym",
        solution: "Instant 5-minute SMS & phone call outreach sequences that book orientation tours",
      },
      {
        problem: "Struggling to sell high-ticket personal training packages",
        solution: "Dedicated transformation consultation funnels for 1-on-1 and small group training",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "meta-ads",
        title: "Meta Ads & Gym Trial Campaigns",
        whyNeeded: "Run video ad tours and 7-day trial offers to fitness seekers within a 3-mile radius.",
      },
      {
        serviceSlug: "local-seo",
        title: "Fitness Local SEO & Map Rankings",
        whyNeeded: "Be the top result when locals search 'gym near me' or 'personal trainer near me'.",
      },
      {
        serviceSlug: "email-marketing",
        title: "Member Onboarding & SMS Automation",
        whyNeeded: "Nurture new trial signups with automated text reminders so they show up for day one.",
      },
    ],
    caseStudy: {
      clientType: "24/7 Fitness Center & Training Studio",
      resultMetric: "94 New Monthly Members",
      story: "Launched 7-Day Pass Meta campaign paired with automated SMS follow-up, achieving a 48% trial-to-member conversion rate.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Trial Offer & Facility Showcase",
        description: "We package your trial passes, free assessment offers, or transformation challenges.",
      },
      {
        number: "02",
        title: "Hyper-Local Social Ad Campaign",
        description: "We launch geo-targeted video ads highlighting your equipment, trainers, and community.",
      },
      {
        number: "03",
        title: "Speed-to-Lead SMS Automation",
        description: "Trial signups receive instant automated SMS messages to schedule their first workout.",
      },
    ],
    faqItems: [
      {
        question: "How do you help get trial signups to actually walk through the door?",
        answer:
          "Our automated SMS system contacts new leads within 60 seconds of signing up, locking in tour times.",
      },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    title: "Real Estate & Mortgage",
    heroImage: "/service-website-dev.png",
    badgeBenchmark: "High-Intent Buyer & Seller Pipeline",
    badgeGrowth: "15+ Qualified Client Consults / Mo",
    heroHeadline: (
      <>
        Connect With Active Home Buyers &{" "}
        <span className="text-heading-gradient-light">Motivated Sellers.</span>
      </>
    ),
    heroSubheadline:
      "Stop chasing cold leads or paying for generic portal listings. We build exclusive home valuation funnels, buyer matching campaigns, and mortgage lead systems for top producers.",
    industryMetrics: [
      { label: "Cost Per Seller Lead", value: "$35 - $65", sub: "Exclusive home valuation" },
      { label: "Avg Commission", value: "$9,500+", sub: "Per closed deal" },
      { label: "Pipeline ROI", value: "11x", sub: "Annual commission return" },
    ],
    challenges: [
      {
        problem: "Paying thousands per month to major real estate portals for non-exclusive buyer clicks",
        solution: "Your own branded buyer & seller lead generation campaigns delivering exclusive inquiries",
      },
      {
        problem: "Home valuation leads filling out forms but refusing to take phone calls",
        solution: "Dynamic multi-step property valuation landing pages that pre-qualify seller timeline",
      },
      {
        problem: "Long sales cycles where leads cool off over 3 to 6 months",
        solution: "Automated market update email and SMS drip campaigns that keep you top of mind until closing",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "google-ads",
        title: "Google Search Ads for Real Estate",
        whyNeeded: "Target buyers and sellers actively searching 'sell my home fast in [city]' or 'realtor near me'.",
      },
      {
        serviceSlug: "meta-ads",
        title: "Meta Seller Valuation & Listing Ads",
        whyNeeded: "Run hyper-targeted local Facebook & Instagram ads for home valuations and open houses.",
      },
      {
        serviceSlug: "website-development",
        title: "Exclusive IDX & Listing Funnel Website",
        whyNeeded: "Custom landing pages engineered to capture home valuation and pre-approval requests.",
      },
    ],
    caseStudy: {
      clientType: "Top-Producing Real Estate Team",
      resultMetric: "$184,000 GCI Closed",
      story: "Deploys custom home seller valuation campaign, closing 14 listings in 6 months at an 11x ROI on ad spend.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Target Market & Price Point Selection",
        description: "We define your ideal listing price points, target subdivisions, and loan officer partnerships.",
      },
      {
        number: "02",
        title: "Home Seller & Buyer Funnel Launch",
        description: "We deploy high-converting home valuation pages and exclusive search ad campaigns.",
      },
      {
        number: "03",
        title: "Long-Term Drip & Instant Lead Alerts",
        description: "Leads trigger immediate phone notifications while long-term drips nurture future listings.",
      },
    ],
    faqItems: [
      {
        question: "Can I target specific neighborhoods or school districts?",
        answer:
          "Yes! We customize geo-targeting to focus on your preferred subdivisions, zip codes, and luxury corridors.",
      },
    ],
  },

  automotive: {
    slug: "automotive",
    title: "Automotive & Repair Services",
    heroImage: "/service-google-ads.png",
    badgeBenchmark: "Auto Service Bay Optimization",
    badgeGrowth: "140+ Monthly Repair Appointments",
    heroHeadline: (
      <>
        Keep Every Auto Service Bay Full With{" "}
        <span className="text-heading-gradient-light">Local Drivers.</span>
      </>
    ),
    heroSubheadline:
      "Auto repair shops, detailers, tire centers, and transmission specialists — we capture drivers searching for immediate repairs and routine maintenance in your local area.",
    industryMetrics: [
      { label: "Cost Per Call", value: "$16 - $32", sub: "Local driver phone calls" },
      { label: "Avg Repair Ticket", value: "$480 - $1,400", sub: "Per repair order" },
      { label: "Bay Utilization", value: "92%", sub: "Consistent daily workflow" },
    ],
    challenges: [
      {
        problem: "Drivers searching for emergency brake or engine repair choosing nearby chain stores first",
        solution: "Top Google Map Pack ranking and search ads that make your shop the top local choice",
      },
      {
        problem: "Inconsistent service bay schedule with busy Mondays but quiet Thursdays",
        solution: "Predictable daily stream of scheduled appointments and diagnostic call-ins",
      },
      {
        problem: "One-time oil change customers never returning for major service items",
        solution: "Automated maintenance reminder emails and SMS alerts based on 3-month service intervals",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "google-ads",
        title: "Google Search Ads for Auto Repair",
        whyNeeded: "Capture urgent drivers searching 'brake repair near me', 'check engine light', or 'mechanic near me'.",
      },
      {
        serviceSlug: "local-seo",
        title: "Auto Repair Local SEO & Google Maps",
        whyNeeded: "Dominate local map pack rankings for all major automotive service keywords.",
      },
      {
        serviceSlug: "email-marketing",
        title: "Automated Maintenance Reminder SMS",
        whyNeeded: "Send automated text alerts for oil changes, tire rotations, and seasonal tune-ups.",
      },
    ],
    caseStudy: {
      clientType: "Independent 6-Bay Auto Repair Shop",
      resultMetric: "+$32,000 / Mo Revenue",
      story: "Captured urgent repair search traffic on Google, increasing average monthly repair orders by 38%.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Service Radius & Specialty Mapping",
        description: "We map your service radius and identify high-margin services (transmission, engine, brakes, AC).",
      },
      {
        number: "02",
        title: "Urgent Search Campaign Launch",
        description: "We launch call-focused Google Search ads and optimize your Google Business Profile.",
      },
      {
        number: "03",
        title: "Scheduled Bays & Maintenance Retention",
        description: "Phone calls route direct to your service desk while automated SMS reminders keep bays full.",
      },
    ],
    faqItems: [
      {
        question: "Can we focus specifically on high-margin repairs rather than just oil changes?",
        answer:
          "Yes! We build campaigns targeting high-ticket services like brake replacement, transmission work, and diagnostic repairs.",
      },
    ],
  },

  legal: {
    slug: "legal",
    title: "Professional & Legal Services",
    heroImage: "/service-email-marketing.png",
    badgeBenchmark: "High-Value Case & Retainer Pipeline",
    badgeGrowth: "25+ Qualified Consultations / Mo",
    heroHeadline: (
      <>
        Attract High-Value Legal Cases &{" "}
        <span className="text-heading-gradient-light">Retainer Clients.</span>
      </>
    ),
    heroSubheadline:
      "Law firms, accounting practices, and business consultants — we build authoritative digital campaigns that establish trust and convert high-intent legal and professional inquiries.",
    industryMetrics: [
      { label: "Cost Per Signed Case", value: "$180 - $450", sub: "Qualified legal retainers" },
      { label: "Avg Case Value", value: "$4,500 - $35,000+", sub: "Retainer & fee value" },
      { label: "Consultation Show", value: "85%", sub: "Pre-screened prospects" },
    ],
    challenges: [
      {
        problem: "Spending heavily on billboards or radio with no way to measure actual ROI",
        solution: "Transparent digital search campaigns where every phone call and lead is tracked to revenue",
      },
      {
        problem: "Unqualified phone calls taking up valuable billable time for partners",
        solution: "Pre-qualifying intake landing pages that screen out irrelevant cases before consultation",
      },
      {
        problem: "Losing lucrative cases to rival law firms ranking higher on Google",
        solution: "Dominant search engine presence for high-intent practice area keywords",
      },
    ],
    recommendedServices: [
      {
        serviceSlug: "google-ads",
        title: "Google Search Ads for Law Firms",
        whyNeeded: "Be the first firm prospective clients call when facing an urgent legal or financial issue.",
      },
      {
        serviceSlug: "local-seo",
        title: "Legal Local SEO & Authority Building",
        whyNeeded: "Rank at the top of Google for competitive practice area terms in your city.",
      },
      {
        serviceSlug: "content-marketing",
        title: "Practice Area Content & Authority",
        whyNeeded: "Build deep domain trust with detailed legal guides and case result breakdowns.",
      },
    ],
    caseStudy: {
      clientType: "Personal Injury & Family Law Firm",
      resultMetric: "$310,000 Attorney Fees",
      story: "Built targeted search campaign and intake funnel, generating 19 new signed client retainers in 90 days.",
    },
    playbookSteps: [
      {
        number: "01",
        title: "Practice Area & Case Targeting",
        description: "We define your primary practice areas, target case values, and geographic jurisdiction.",
      },
      {
        number: "02",
        title: "Pre-Qualifying Intake Funnel Launch",
        description: "We launch custom intake landing pages that capture vital case details automatically.",
      },
      {
        number: "03",
        title: "Direct Attorney Consultations",
        description: "Qualified, pre-screened legal inquiries connect directly with your firm's intake team.",
      },
    ],
    faqItems: [
      {
        question: "Can your intake forms pre-qualify cases before we speak to prospects?",
        answer:
          "Yes! We build custom multi-step intake forms that filter out non-qualifying cases based on your criteria.",
      },
    ],
  },
};
