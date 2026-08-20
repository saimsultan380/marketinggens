import React from "react";

export interface ServiceData {
  slug: string;
  title: string;
  heroImage: string;
  badgeRating: string;
  badgeLeads: string;
  heroHeadline: React.ReactNode;
  heroSubheadline: string;
  trustBadges: string[];
  traditionalProblems: string[];
  ourSolutions: string[];
  coreBenefits: {
    icon: string;
    title: string;
    description: string;
    tag: string;
  }[];
  differentiators: {
    icon: string;
    title: string;
    description: string;
  }[];
  steps: {
    step: string;
    title: string;
    description: string;
    badge: string;
  }[];
  includedFeatures: string[];
  faqItems: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceData> = {
  "google-ads": {
    slug: "google-ads",
    title: "Google Ads Management",
    heroImage: "/service-google-ads.png",
    badgeRating: "4.9/5 Rating across 120+ local businesses",
    badgeLeads: "18,000+ Qualified leads delivered",
    heroHeadline: (
      <>
        Get More Qualified Leads & Booked Appointments For Your{" "}
        <span className="text-heading-gradient-light">Business.</span>
      </>
    ),
    heroSubheadline:
      "Stop wasting money on empty clicks. We build, launch, and manage high-converting Google Ads campaigns that fill your calendar with paying local clients without you lifting a finger on marketing.",
    trustBadges: [
      "100% Free Business Audit",
      "No Long-Term Contracts",
      "Exclusive Leads Only",
      "Google Certified Team",
    ],
    traditionalProblems: [
      "Paying for broad clicks from people who are just browsing",
      "High monthly agency retainers with zero booked calls",
      "Generic, slow websites where visitors leave without contacting you",
      "Shared lead lists resold to 5 local competitors at the same time",
    ],
    ourSolutions: [
      "High-intent keyword targeting capturing urgent, ready-to-hire buyers",
      "Pay for performance mindset with transparent call and lead tracking",
      "Custom high-converting landing pages built specifically for bookings",
      "100% exclusive leads delivered direct to your phone and inbox",
    ],
    coreBenefits: [
      {
        icon: "target",
        title: "High-Intent Search Targeting",
        description:
          "We target local buyers who are actively searching for your exact services on Google right now, capturing urgent, ready-to-hire clients.",
        tag: "Targeted Audience",
      },
      {
        icon: "zap",
        title: "High-Converting Custom Landing Pages",
        description:
          "Every campaign gets a fast, mobile-optimized landing page engineered specifically to convert visitors into phone calls and booked appointments.",
        tag: "Mobile Optimized",
      },
      {
        icon: "barchart",
        title: "Transparent Call & Lead Tracking",
        description:
          "Know exactly which ads drive phone calls, form fills, and revenue with clear, real-time reporting you can easily understand.",
        tag: "Real-Time ROI",
      },
      {
        icon: "shield",
        title: "Done-For-You Campaign Optimization",
        description:
          "Our team manages keyword bids, negative keywords, ad copy split-tests, and campaign updates so you can focus entirely on serving clients.",
        tag: "Zero Busywork",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "Exclusive Leads Delivered Direct To You",
        description:
          "Every lead generated through your Google Ads campaign belongs 100% to your business. We never share or resell leads to competitors.",
      },
      {
        icon: "clock",
        title: "No Risk, No Long-Term Contracts",
        description:
          "We earn your business every month. You stay with us because your calendar stays full, not because you signed a restrictive contract.",
      },
      {
        icon: "trending",
        title: "Plain-English Communication & Honest Advice",
        description:
          "No confusing marketing jargon or hidden fees. We explain campaign performance clearly and focus strictly on return on ad spend.",
      },
      {
        icon: "settings",
        title: "Complete Done-For-You Execution",
        description:
          "From keyword research and ad copywriting to landing page development and conversion tracking, we handle every detail from start to finish.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Claim Your Free Audit",
        description:
          "We analyze your market, competitors, and current online visibility to identify where you are losing potential customers today. No cost, no pitch deck.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Get Your Growth Blueprint",
        description:
          "If we can help you grow, we deliver a plain-English strategy outlining projected lead volume, target cost-per-lead, and campaign strategy.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Receive Booked Appointments",
        description:
          "We launch your Google Ads campaign, publish your high-converting landing page, and keep the leads flowing while you answer calls and serve clients.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Comprehensive Keyword Research & Competitor Analysis",
      "High-Intent Search Campaign Setup & Structure",
      "Persuasive Ad Copywriting & Extensions Setup",
      "Custom Mobile-Responsive Conversion Landing Page",
      "Dynamic Call Tracking & Form Lead Notifications",
      "Negative Keyword Filtering To Block Wasted Spend",
      "Weekly Bid Management & Ad Performance Tuning",
      "Clear Monthly ROI & Lead Attribution Reports",
    ],
    faqItems: [
      {
        question: "How quickly will I start receiving leads from Google Ads?",
        answer:
          "Google Ads campaigns start generating traffic immediately after approval. Most local businesses start receiving phone calls and form submissions within 24 to 48 hours of campaign launch.",
      },
      {
        question: "How do you ensure the leads are qualified and local?",
        answer:
          "We use tight geo-location targeting, high-intent buyer keywords, and continuous negative keyword updates. This ensures your budget is spent only on prospects within your service area who need your services immediately.",
      },
      {
        question: "What makes your landing pages convert better than my website?",
        answer:
          "Standard websites are designed to share general information, which often distracts visitors. Our landing pages are streamlined for single-action conversion, eliminating distractions and guiding visitors straight to booking an appointment or calling your phone.",
      },
      {
        question: "Do I need a massive ad budget to get results?",
        answer:
          "No. We structure campaigns to maximize efficiency regardless of budget size. During your free audit, we will recommend a realistic daily ad budget based on your local market competition and target goals.",
      },
      {
        question: "Are there any long-term contracts required?",
        answer:
          "No long-term contracts are required. We operate on a month-to-month basis because we believe our results should keep you as a client, not a locked contract.",
      },
      {
        question: "How do I track calls and leads generated from the campaign?",
        answer:
          "You receive instant email and SMS notifications whenever a new lead submits a form. We also implement call tracking so you can see exact phone calls, call durations, and caller details in your dashboard.",
      },
    ],
  },
  "local-seo": {
    slug: "local-seo",
    title: "Local SEO & Map Pack Optimization",
    heroImage: "/service-local-seo.png",
    badgeRating: "4.9/5 Rating on Local Google Rankings",
    badgeLeads: "Top 3 Map Pack Placements Achieved",
    heroHeadline: (
      <>
        Dominate Local Google Search & Fill Your{" "}
        <span className="text-heading-gradient-light">Schedule.</span>
      </>
    ),
    heroSubheadline:
      "Rank #1 on Google Maps and local search results when nearby clients look for your services. Drive organic phone calls, walk-ins, and consultation requests every single day.",
    trustBadges: [
      "Top 3 Map Pack Focus",
      "Google Business Profile Audit",
      "Local Citation Cleanup",
      "No Contract Commitment",
    ],
    traditionalProblems: [
      "Invisibly buried on page 2 or 3 of local Google search results",
      "Outdated business info causing lower Google Map rankings",
      "Losing nearby customers to competitors with higher review counts",
      "Paying SEO agencies for vague monthly blogs with no local calls",
    ],
    ourSolutions: [
      "Targeted Google Business Profile optimization for local Map Pack domination",
      "Accurate local citation building across 50+ major directories",
      "Strategic local review acquisition system to build dominant trust",
      "Hyper-local landing pages built specifically for your service area",
    ],
    coreBenefits: [
      {
        icon: "search",
        title: "Google Map Pack Domination",
        description:
          "We optimize your Google Business Profile to secure top positions in the 3-Pack map results where over 70% of local calls originate.",
        tag: "Map Rank #1",
      },
      {
        icon: "target",
        title: "Hyper-Local Keyword Targeting",
        description:
          "Capture high-intent searches matching your specific city, neighborhood, and service radius so you get local buyers nearby.",
        tag: "Local Buyers",
      },
      {
        icon: "star",
        title: "Automated Review Engine",
        description:
          "We help you gather consistent 5-star Google reviews from satisfied customers automatically to outshine local competitors.",
        tag: "Trust & Reviews",
      },
      {
        icon: "barchart",
        title: "Transparent Local Tracking",
        description:
          "Track direct phone calls, map direction clicks, and website visits with clean monthly reports focused strictly on local leads.",
        tag: "Call Attribution",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "100% Focused On Local Conversion",
        description:
          "We do not chase meaningless global keywords. Every SEO tactic we deploy is designed to bring local calls and booked jobs to your business.",
      },
      {
        icon: "clock",
        title: "Month-To-Month Flexibility",
        description:
          "No 12-month lock-in contracts. Our high-ranking local results keep you with us because your calendar stays full.",
      },
      {
        icon: "trending",
        title: "Long-Term Organic Compounding Growth",
        description:
          "Local SEO builds durable organic authority that delivers free, qualified customer inquiries for months and years to come.",
      },
      {
        icon: "settings",
        title: "Done-For-You Profile & Citation Management",
        description:
          "From address verification and photo updates to category optimization and citation syncing, we take care of everything.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Local Audit & Competitor Scan",
        description:
          "We audit your current Google Map rankings, address consistency, citations, and local competitor positioning to identify quick wins.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Profile & Citation Optimization",
        description:
          "We optimize your Google Business Profile categories, photos, services list, and clean up duplicate local citations.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Dominate & Scale Local Leads",
        description:
          "Your business climbs local search and Map Pack rankings, bringing a steady stream of nearby phone calls and customer visits.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Google Business Profile Complete Optimization",
      "Local Keyword Research & Intent Mapping",
      "Citation Audit & 50+ Directory Syncing",
      "Local Competitor Benchmarking & Monitoring",
      "Review Generation System Integration",
      "Google Maps Photo & Post Updates Management",
      "On-Page Geo-Targeted Schema Markup",
      "Monthly Local Ranking & Call Reports",
    ],
    faqItems: [
      {
        question: "How long does Local SEO take to show results?",
        answer:
          "While national SEO takes 6-12 months, Local SEO and Google Business Profile optimizations often show noticeable ranking and call increases within 30 to 90 days.",
      },
      {
        question: "Will Local SEO help my business show up on Google Maps?",
        answer:
          "Yes! Google Maps and the 3-Pack local map results are our primary focus for local business clients, as this is where high-intent searchers call first.",
      },
      {
        question: "What is the difference between Local SEO and regular SEO?",
        answer:
          "Regular SEO focuses on general website content. Local SEO specifically targets geographic search intent, Google Maps rankings, local business citations, and nearby customer calls.",
      },
      {
        question: "Do I need a physical address to rank locally?",
        answer:
          "Google requires a physical location or defined service area. If you serve clients at their locations (like contractors or plumbers), we configure your profile as a Service Area Business.",
      },
      {
        question: "How do reviews impact my Google Map rankings?",
        answer:
          "Google heavily weighs review quantity, star rating, and review frequency when choosing which businesses rank in the top 3 Map Pack results.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "No long-term contracts are required. We work on a flexible month-to-month basis.",
      },
    ],
  },
  "social-media": {
    slug: "social-media",
    title: "Social Media Marketing",
    heroImage: "/service-social-media.png",
    badgeRating: "4.9/5 Rating for Brand Engagement",
    badgeLeads: "Consistent Local Community Growth",
    heroHeadline: (
      <>
        Build Strong Local Awareness & Convert Followers Into{" "}
        <span className="text-heading-gradient-light">Clients.</span>
      </>
    ),
    heroSubheadline:
      "Turn your Facebook and Instagram profiles into active lead channels. We create persuasive social content, manage community interaction, and drive consistent local engagement.",
    trustBadges: [
      "Custom Graphic Design",
      "Full Content Management",
      "Targeted Local Focus",
      "Consistent Posting Schedule",
    ],
    traditionalProblems: [
      "Inconsistent posting with weeks of silence on your social pages",
      "Generic stock photos that fail to resonate with local clients",
      "Zero lead generation or inquiries from social channels",
      "Wasting hours trying to figure out what to post next",
    ],
    ourSolutions: [
      "Professional, branded social content tailored to your ideal customer",
      "Consistent, strategic posting schedule designed for maximum reach",
      "Community engagement strategies that turn followers into booked calls",
      "Complete hands-free content creation and management",
    ],
    coreBenefits: [
      {
        icon: "users",
        title: "Targeted Local Reach",
        description:
          "Position your business in front of local residents who are most likely to buy your products or book your services.",
        tag: "Local Community",
      },
      {
        icon: "layout",
        title: "Premium Branded Content",
        description:
          "High-quality visuals, graphics, and persuasive captions that position your business as the premium authority in your area.",
        tag: "High Authority",
      },
      {
        icon: "message",
        title: "Active Community Management",
        description:
          "Never miss an inquiry. We help monitor comments and messages to guide interested followers straight to booking.",
        tag: "Lead Capturing",
      },
      {
        icon: "barchart",
        title: "Clear Engagement Insights",
        description:
          "Understand how your social media presence is growing with simple monthly metrics focused on audience growth and inquiries.",
        tag: "Growth Metrics",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "Custom Designed For Your Brand",
        description:
          "No recycled template dumps. We design social graphics that match your exact brand identity and local voice.",
      },
      {
        icon: "clock",
        title: "Hands-Free Convenience",
        description:
          "Save 10+ hours a week. We take care of content planning, design, writing, and scheduling from start to finish.",
      },
      {
        icon: "trending",
        title: "Conversion-Oriented Strategy",
        description:
          "We do not just post for likes. Every piece of content is built to build trust and prompt followers to get in touch.",
      },
      {
        icon: "settings",
        title: "Multi-Platform Coverage",
        description:
          "We manage and optimize your presence across Facebook, Instagram, LinkedIn, and major local social platforms.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Brand & Audience Discovery",
        description:
          "We study your business, target audience, brand assets, and local competitors to build a custom social strategy.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Content Creation & Design",
        description:
          "Our team designs branded graphics, writes engaging captions, and organizes your monthly content calendar.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Publishing & Lead Generation",
        description:
          "We schedule posts, manage audience engagement, and direct social traffic straight to your website and booking calendar.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Monthly Content Calendar Planning & Strategy",
      "Custom Branded Graphic Design & Visual Assets",
      "Persuasive Caption Copywriting & Hashtag Optimization",
      "Multi-Platform Publishing (Facebook, Instagram, LinkedIn)",
      "Audience Engagement & Direct Message Lead Guidance",
      "Local Brand Awareness & Reach Optimization",
      "Highlight & Bio Profile Redesign",
      "Monthly Performance & Reach Reporting",
    ],
    faqItems: [
      {
        question: "Which social media platforms do you manage?",
        answer:
          "We manage Facebook, Instagram, LinkedIn, and Google Business updates depending on where your local clients spend their time.",
      },
      {
        question: "Do I need to provide photos and videos?",
        answer:
          "If you have high-resolution photos of your work or team, that is great! If not, our design team crafts custom branded visual graphics for your business.",
      },
      {
        question: "How often will content be posted on my channels?",
        answer:
          "We customize posting frequency based on your package, typically ranging from 3 to 5 high-impact posts per week.",
      },
      {
        question: "Will social media marketing generate direct leads for my business?",
        answer:
          "Yes. By combining trust-building content with clear calls-to-action, social media nurtures warm prospects into calling or booking an audit.",
      },
      {
        question: "Do I review content before it goes live?",
        answer:
          "Absolutely! We deliver a monthly content calendar for your review and approval before anything is published.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "No long-term contracts. We operate on a straightforward month-to-month basis.",
      },
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    heroImage: "/service-meta-ads.png",
    badgeRating: "4.9/5 Rating on Meta Lead Campaigns",
    badgeLeads: "High-ROI Social Ad Conversions",
    heroHeadline: (
      <>
        Capture Ready Buyers With High-Converting{" "}
        <span className="text-heading-gradient-light">Meta Ads.</span>
      </>
    ),
    heroSubheadline:
      "Target your exact demographic on Facebook and Instagram with high-converting visual ads that turn casual scrollers into paying local customers and instant leads.",
    trustBadges: [
      "Custom Creative Design",
      "Instant Lead Forms",
      "Demographic Targeting",
      "Month-To-Month Service",
    ],
    traditionalProblems: [
      "Boosting posts with zero strategy and burning ad budget",
      "Targeting broad audiences that have no interest in your service",
      "Boring ad visual copy that scrollers scroll right past",
      "No conversion tracking to see which ads actually bring revenue",
    ],
    ourSolutions: [
      "Precision demographic, interest, and local radius targeting",
      "High-converting ad creative and video graphics built to stop the scroll",
      "Native Meta Instant Lead Forms for seamless friction-free lead capture",
      "Real-time call and lead notifications straight to your inbox",
    ],
    coreBenefits: [
      {
        icon: "target",
        title: "Hyper-Targeted Audience Reach",
        description:
          "Target homeowners, parents, business owners, or specific age groups within your exact geographic radius.",
        tag: "Frictionless Targeting",
      },
      {
        icon: "zap",
        title: "Scroll-Stopping Visual Creatives",
        description:
          "Eye-catching image and video ads designed specifically to grab attention in crowded mobile feeds.",
        tag: "High Engagement",
      },
      {
        icon: "shield",
        title: "Instant On-Platform Lead Capture",
        description:
          "Allow prospects to submit their contact info directly inside Facebook or Instagram in just two taps.",
        tag: "Friction-Free",
      },
      {
        icon: "barchart",
        title: "Clear Cost-Per-Lead Tracking",
        description:
          "Know your exact cost per lead and return on ad spend with transparent reporting that shows real business outcomes.",
        tag: "Transparent ROI",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "100% Exclusive Prospects",
        description:
          "Every lead captured through your Meta Ad campaigns goes exclusively to your inbox. We never resell lead lists.",
      },
      {
        icon: "clock",
        title: "Zero Long-Term Lock-In",
        description:
          "Flexibility month-to-month. We focus on delivering immediate lead volume so you stay with us out of choice.",
      },
      {
        icon: "trending",
        title: "Continuous Creative A/B Testing",
        description:
          "We test multiple ad variations, headlines, and offers to constantly lower your cost-per-lead over time.",
      },
      {
        icon: "settings",
        title: "Full Campaign Setup & Management",
        description:
          "From audience research and ad creative production to lead sync integration and bid tuning, we handle everything.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Audience & Offer Strategy",
        description:
          "We analyze your ideal buyer profile and construct an irresistible offer that prompts immediate action.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Ad Creative Development",
        description:
          "Our team designs high-converting ad graphics, writes persuasive copy, and builds custom lead forms.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Launch & Lead Generation",
        description:
          "We launch your Meta Ads campaign and send real-time lead notifications straight to your sales team.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Custom Demographic & Radius Audience Building",
      "Persuasive Ad Copywriting & Creative Design",
      "Meta Instant Form Setup & Webhook Lead Syncing",
      "Retargeting Campaigns To Recapture Bouncing Visitors",
      "A/B Split-Testing Of Visual Assets & Headlines",
      "Meta Pixel & Conversion API Pixel Setup",
      "Weekly Campaign Optimization & Bid Tuning",
      "Monthly Lead & Cost-Per-Acquisition Reporting",
    ],
    faqItems: [
      {
        question: "How do Meta Ads differ from Google Ads?",
        answer:
          "Google Ads targets active search intent, while Meta Ads targets demographic interest and visual discovery, making them great for visually appealing services.",
      },
      {
        question: "What is an Instant Lead Form on Meta?",
        answer:
          "Instant Forms allow users on Facebook or Instagram to fill out their contact information directly inside the app without waiting for a website page to load.",
      },
      {
        question: "How quickly do Meta Ads start producing leads?",
        answer:
          "Most Meta campaigns start delivering inquiries within 24 to 48 hours after campaign launch and ad approval.",
      },
      {
        question: "What ad budget do I need to start on Meta?",
        answer:
          "We tailor daily budgets to your local market size, usually recommending a starting budget that allows for proper split-testing.",
      },
      {
        question: "Will I get notifications when a lead fills out a form?",
        answer:
          "Yes! Leads are synced in real-time straight to your email or CRM so you can follow up instantly.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "No long-term contracts. We operate on a month-to-month basis.",
      },
    ],
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Email Marketing & SMS Automation",
    heroImage: "/service-email-marketing.png",
    badgeRating: "4.9/5 Rating on Automated Follow-Ups",
    badgeLeads: "High Customer Lifetime Value Growth",
    heroHeadline: (
      <>
        Automate Smart Follow-Ups & Re-Engage Past{" "}
        <span className="text-heading-gradient-light">Clients.</span>
      </>
    ),
    heroSubheadline:
      "Turn cold leads into booked jobs and keep existing clients coming back automatically. Build smart email and SMS automated sequences that sell on autopilot.",
    trustBadges: [
      "Automated Drip Campaigns",
      "SMS Instant Alerts",
      "Database Reactivation",
      "No Contract Required",
    ],
    traditionalProblems: [
      "Forgetting to follow up with leads who didn't buy immediately",
      "Leaving thousands in revenue hidden in uncontacted email lists",
      "Manual follow-ups taking hours of staff time every week",
      "Boring text emails with low open rates and spam folder issues",
    ],
    ourSolutions: [
      "Automated multi-touch email & SMS nurture campaigns",
      "Database reactivation campaigns to turn old leads into fresh sales",
      "Instant automated SMS alerts when a new inquiry submits a form",
      "High-converting email design and copywriting tailored to your audience",
    ],
    coreBenefits: [
      {
        icon: "mail",
        title: "Automated Lead Nurturing",
        description:
          "Automatically educate and follow up with new leads so your business stays top-of-mind until they are ready to book.",
        tag: "Autopilot Follow-Up",
      },
      {
        icon: "zap",
        title: "Database Reactivation",
        description:
          "Unlock immediate revenue by running automated re-engagement campaigns to your past clients and older lead lists.",
        tag: "Instant Revenue",
      },
      {
        icon: "message",
        title: "SMS Fast Response Alerts",
        description:
          "Text new leads within 60 seconds of inquiry, dramatically boosting your booking speed and conversion rate.",
        tag: "Instant SMS",
      },
      {
        icon: "barchart",
        title: "Clear Open & Conversion Tracking",
        description:
          "Track email open rates, click-throughs, and direct revenue generated from your automated campaigns.",
        tag: "Open & Click Analytics",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "Custom Tailored Sequences",
        description:
          "We build bespoke email and SMS journeys customized to your sales cycle, pricing, and buyer behavior.",
      },
      {
        icon: "clock",
        title: "Hands-Off Automation",
        description:
          "Set up once, benefit continuously. Our automated systems work 24/7/365 while you focus on operations.",
      },
      {
        icon: "trending",
        title: "Maximum Deliverability Focus",
        description:
          "We configure custom domain authentication (SPF, DKIM, DMARC) so your messages land safely in the inbox, not spam.",
      },
      {
        icon: "settings",
        title: "Seamless CRM & Form Integration",
        description:
          "We connect your email and SMS systems directly to your website forms, landing pages, and booking tools.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "List & Workflow Strategy",
        description:
          "We audit your customer database, website forms, and sales pipeline to design automated follow-up workflows.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Copywriting & Automation Setup",
        description:
          "Our team writes persuasive email and SMS sequences, sets up domain authentication, and builds automation logic.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Automated Bookings & Growth",
        description:
          "Your automated sequences launch, converting cold leads into booked appointments on autopilot.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Custom Automated Email & SMS Sequence Copywriting",
      "Database Reactivation Campaign Setup",
      "Instant Lead Response SMS Automation",
      "SPF, DKIM, & DMARC Email Deliverability Setup",
      "Website Form & Booking Calendar Integrations",
      "Automated Review & Feedback Request Flows",
      "Audience Segmentation & List Hygiene Management",
      "Monthly Open Rate, Click Rate, & Sales Reports",
    ],
    faqItems: [
      {
        question: "What is database reactivation?",
        answer:
          "Database reactivation reaches out to your old leads or past clients with special automated offers, quickly generating cash flow without ad spend.",
      },
      {
        question: "Is SMS marketing compliant with regulations?",
        answer:
          "Yes! We build all SMS workflows with strict compliance (A2P 10DLC, opt-in disclosures, easy opt-out keywords).",
      },
      {
        question: "How quickly do leads receive automated messages?",
        answer:
          "Automated SMS and email responses are triggered within seconds of a lead submitting a form.",
      },
      {
        question: "What software do you use for email and SMS?",
        answer:
          "We integrate with your existing email software or set up a dedicated CRM platform designed for local lead generation.",
      },
      {
        question: "Will email marketing work for local businesses?",
        answer:
          "Absolutely. Regular nurture emails keep your brand top of mind when local clients need repeat services or referrals.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "No long-term contracts are required. We operate on a month-to-month basis.",
      },
    ],
  },
  "content-marketing": {
    slug: "content-marketing",
    title: "Content Marketing & Authority Building",
    heroImage: "/service-content-marketing.png",
    badgeRating: "4.9/5 Rating for Content Authority",
    badgeLeads: "Sustainable Organic Traffic Growth",
    heroHeadline: (
      <>
        Build Instant Credibility & Dominate Organic Search With{" "}
        <span className="text-heading-gradient-light">Strategic Content.</span>
      </>
    ),
    heroSubheadline:
      "Publish authoritative articles, buyer guides, and local resources that build instant trust with prospects and rank high on search engines.",
    trustBadges: [
      "Expert Content Writers",
      "SEO Keyword Optimization",
      "Brand Credibility Focus",
      "No Contract Required",
    ],
    traditionalProblems: [
      "Boring, generic AI blog posts that nobody reads or trusts",
      "Publishing content that fails to rank for high-value buyer searches",
      "Wasting hours writing articles that produce zero customer leads",
      "Inconsistent publishing schedules that hurt organic authority",
    ],
    ourSolutions: [
      "High-value, research-backed content written by industry specialists",
      "Targeted keyword strategy matching real buyer questions and needs",
      "Strategic call-to-action placement that turns readers into leads",
      "Done-for-you content planning, writing, optimization, and publishing",
    ],
    coreBenefits: [
      {
        icon: "layout",
        title: "Industry Authority & Trust",
        description:
          "Position your business as the recognized local expert with comprehensive guides and educational resources.",
        tag: "Market Leader",
      },
      {
        icon: "search",
        title: "Organic Search Visibility",
        description:
          "Rank for long-tail search queries that potential customers use when researching services before making a decision.",
        tag: "Organic Reach",
      },
      {
        icon: "target",
        title: "Lead-Driven Copywriting",
        description:
          "Every content piece is structured with clear conversion pathways to guide readers to request a consultation.",
        tag: "High Conversion",
      },
      {
        icon: "barchart",
        title: "Compounding Traffic Assets",
        description:
          "Great content continues to attract organic traffic and generate leads month after month without ad spend.",
        tag: "Long-Term Value",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "100% Human-Crafted Quality",
        description:
          "We craft thorough, engaging content written for real human readers, not low-quality automated AI slop.",
      },
      {
        icon: "clock",
        title: "Flexible Month-To-Month",
        description:
          "No restrictive long-term commitments. Our content strategy proves its value through search rankings and authority.",
      },
      {
        icon: "trending",
        title: "Full Funnel Alignment",
        description:
          "We align content topics with your paid ad campaigns, SEO strategy, and sales process for maximum synergy.",
      },
      {
        icon: "settings",
        title: "Complete Publishing & SEO Tuning",
        description:
          "We handle research, outlines, writing, image selection, formatting, internal linking, and CMS publishing.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Topic & Search Intent Research",
        description:
          "We identify the exact questions, comparisons, and terms your target clients search for online.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Content Creation & Optimization",
        description:
          "Our expert writers craft detailed, engaging content optimized for search engines and user conversion.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Publishing & Traffic Growth",
        description:
          "We publish optimized content to your website, attracting organic search visitors and generating leads.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Search Intent Keyword & Competitor Content Research",
      "Monthly High-Impact Article & Guide Creation",
      "On-Page SEO Optimization (Meta Data, Headings, Alt Text)",
      "Strategic Internal & External Link Structuring",
      "Conversion Call-to-Action Integration",
      "Stock Image Sourcing & Visual Formatting",
      "Direct CMS Publishing (WordPress, Next.js, Webflow)",
      "Monthly Organic Content & Search Ranking Reports",
    ],
    faqItems: [
      {
        question: "How does content marketing generate leads?",
        answer:
          "Content answers pre-purchase questions, builds trust, and presents your business as the logical solution with embedded CTA forms.",
      },
      {
        question: "Who writes the content?",
        answer:
          "Our team of professional copywriters write all content, ensuring accuracy, strong readability, and proper SEO structure.",
      },
      {
        question: "How often will new content be published?",
        answer:
          "We establish a steady publishing schedule (typically 2 to 4 high-value articles per month) based on your content strategy.",
      },
      {
        question: "Can I review articles before they are published?",
        answer:
          "Yes! You have full review and approval privileges for all draft content before publication.",
      },
      {
        question: "How long does it take for content to rank on Google?",
        answer:
          "Newly published articles generally begin indexing immediately and gain ranking momentum over 3 to 6 months.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "No long-term contracts are required. We operate on a flexible month-to-month basis.",
      },
    ],
  },
  "website-development": {
    slug: "website-development",
    title: "High-Converting Website Development",
    heroImage: "/service-website-development.png",
    badgeRating: "4.9/5 Rating for High Conversion Websites",
    badgeLeads: "Mobile-First Conversion Architecture",
    heroHeadline: (
      <>
        Build A Lightning-Fast Website Designed To Convert Visitors Into{" "}
        <span className="text-heading-gradient-light">Clients.</span>
      </>
    ),
    heroSubheadline:
      "Replace slow, outdated websites with a modern, high-converting digital storefront. Engineered for mobile speed, clear messaging, and maximum lead generation.",
    trustBadges: [
      "Custom Modern Design",
      "Mobile-First Speed",
      "Conversion Optimized",
      "SEO Friendly Setup",
    ],
    traditionalProblems: [
      "Slow loading speeds causing up to 50% of visitors to bounce",
      "Cluttered, confusing website layouts with no clear call-to-action",
      "Outdated design that damages business credibility and trust",
      "Websites built like digital brochures instead of lead generation tools",
    ],
    ourSolutions: [
      "Lightning-fast Next.js architecture built for instant page loads",
      "Streamlined user experience engineered for phone calls and bookings",
      "Clean, modern aesthetics tailored to position your brand as elite",
      "Fully responsive mobile layout optimized for tap-to-call conversion",
    ],
    coreBenefits: [
      {
        icon: "zap",
        title: "Ultra-Fast Page Load Speeds",
        description:
          "Optimized code structure ensuring sub-second load times that keep visitors engaged and rank high on Google.",
        tag: "Speed Score 95+",
      },
      {
        icon: "layout",
        title: "Conversion-Focused UX Design",
        description:
          "Strategic placement of lead forms, phone buttons, and trust badges designed to maximize consultation requests.",
        tag: "High Conversion",
      },
      {
        icon: "smartphone",
        title: "Mobile-First Perfection",
        description:
          "Over 65% of local traffic is mobile. We design seamless smartphone experiences with easy tap-to-call buttons.",
        tag: "Mobile Optimized",
      },
      {
        icon: "search",
        title: "SEO-Ready Architecture",
        description:
          "Clean code, semantic HTML5, and fast indexing setup to give your business an immediate organic advantage.",
        tag: "SEO Structure",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "Built For Growth, Not Just Looks",
        description:
          "We do not build pretty art projects. Every website we build is designed with one goal: generating leads for your business.",
      },
      {
        icon: "clock",
        title: "Fast Turnaround & Delivery",
        description:
          "Get your modern website built, tested, and launched without waiting months for slow traditional development agencies.",
      },
      {
        icon: "trending",
        title: "Full Ownership & Flexibility",
        description:
          "You own 100% of your website, code, domain, and content. No hostage fees or hidden monthly developer lock-ins.",
      },
      {
        icon: "settings",
        title: "Complete Done-For-You Build",
        description:
          "From wireframing, copywriting, and custom UI design to form setup and domain launch, we handle everything.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Discovery & Wireframe",
        description:
          "We analyze your offer, brand identity, and customer journey to map out a high-converting page layout.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Design & Development",
        description:
          "Our team builds your custom website using modern, ultra-fast frameworks, crafting crisp copy and visual assets.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Testing & Launch",
        description:
          "We conduct mobile testing, form validation, speed audits, and launch your site to start converting visitors into leads.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Custom Modern Website Design & UI Development",
      "Mobile-First Responsive Layout & Speed Optimization",
      "Persuasive Lead-Focused Copywriting Structure",
      "Integrated Contact Forms, Maps, & Tap-To-Call Buttons",
      "On-Page SEO Technical Setup & Meta Tags",
      "Google Analytics 4 & Conversion Tracking Setup",
      "SSL Certificate & Security Configuration",
      "Post-Launch Technical Support & Training",
    ],
    faqItems: [
      {
        question: "How long does it take to build a new website?",
        answer:
          "Most custom business websites are completed, tested, and launched within 2 to 4 weeks depending on page count.",
      },
      {
        question: "Will my website work well on mobile phones?",
        answer:
          "Yes! We design mobile-first, ensuring your site looks stunning and converts smoothly on all smartphone screens.",
      },
      {
        question: "Do I own my website once it is completed?",
        answer:
          "Yes. You have 100% full ownership of your site, domain, graphics, and code. No hostage fees or lock-ins.",
      },
      {
        question: "Can you help update content on my existing site?",
        answer:
          "We specialize in building modern, high-converting websites from the ground up, but we can also audit and overhaul existing sites.",
      },
      {
        question: "Will the new website help me rank on Google?",
        answer:
          "Yes! Our websites feature clean SEO code, fast load times, and structured data markup designed to rank higher on search engines.",
      },
      {
        question: "Are there any hidden monthly hosting fees?",
        answer:
          "No hidden fees. We set up ultra-fast modern hosting with full transparency.",
      },
    ],
  },
  "app-development": {
    slug: "app-development",
    title: "Custom App Development",
    heroImage: "/service-app-development.png",
    badgeRating: "4.9/5 Rating for Custom Web & Mobile Apps",
    badgeLeads: "Streamlined Business Automation",
    heroHeadline: (
      <>
        Automate Operations & Engage Clients With Custom{" "}
        <span className="text-heading-gradient-light">Applications.</span>
      </>
    ),
    heroSubheadline:
      "Build custom web portals, booking applications, and client management tools tailored to your exact business workflow. Remove manual busywork and deliver seamless user experiences.",
    trustBadges: [
      "Custom Web & Mobile",
      "Seamless API Sync",
      "Scalable Architecture",
      "Full Code Ownership",
    ],
    traditionalProblems: [
      "Off-the-shelf software with monthly fees that doesn't fit your process",
      "Manual scheduling and spreadsheet entry causing expensive staff errors",
      "Poor mobile experiences that frustrate clients trying to book services",
      "Disjointed tools that don't communicate with each other",
    ],
    ourSolutions: [
      "Bespoke application development built specifically for your operations",
      "Automated scheduling, notifications, and customer portal workflows",
      "Sleek mobile-first interfaces for iOS, Android, and web browsers",
      "Unified database architecture syncing all your business operations",
    ],
    coreBenefits: [
      {
        icon: "smartphone",
        title: "Custom Client Mobile Apps",
        description:
          "Give your clients an effortless way to book appointments, view status, and pay invoices directly from their phones.",
        tag: "Mobile UX",
      },
      {
        icon: "settings",
        title: "Operational Automation",
        description:
          "Automate repetitive tasks, appointment reminders, and lead dispatching to save dozens of admin hours weekly.",
        tag: "Auto Workflows",
      },
      {
        icon: "shield",
        title: "Secure & Scalable Tech Stack",
        description:
          "Built on modern enterprise frameworks that scale smoothly as your user base and business volume grow.",
        tag: "Enterprise Grade",
      },
      {
        icon: "barchart",
        title: "Custom Admin Dashboards",
        description:
          "Monitor real-time business performance, client activity, and team schedules in one centralized dashboard.",
        tag: "Real-Time Portal",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "Tailored 100% To Your Workflow",
        description:
          "We build applications around your business model, avoiding bloated generic software features you never use.",
      },
      {
        icon: "clock",
        title: "Agile Development Sprints",
        description:
          "We deliver functional application prototypes fast so you can test features and launch without long delays.",
      },
      {
        icon: "trending",
        title: "Full IP & Source Code Ownership",
        description:
          "You own 100% of the custom software source code, database, and intellectual property.",
      },
      {
        icon: "settings",
        title: "End-To-End Management",
        description:
          "From system architecture and UI design to backend development and cloud deployment, we handle every detail.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "System Architecture & Scope",
        description:
          "We map out your business requirements, user roles, database schema, and technical feature specifications.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "UI/UX & Code Development",
        description:
          "Our team designs intuitive user interfaces and writes clean, secure application code for web and mobile.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Testing & Cloud Deployment",
        description:
          "We conduct security testing, user acceptance audits, and deploy your custom app to secure cloud infrastructure.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Custom Web & Mobile Application Architecture",
      "Intuitive UI/UX Interface Design & Prototyping",
      "Frontend & Backend Development (React/Next.js/Node)",
      "Database Design & Cloud Deployment (PostgreSQL/Supabase)",
      "Third-Party API & Payment Gateway Integrations (Stripe)",
      "User Authentication, Roles, & Permission Systems",
      "Admin Analytics Dashboard & Reporting Tools",
      "Post-Launch Technical Maintenance & Feature Upgrades",
    ],
    faqItems: [
      {
        question: "What types of applications do you build?",
        answer:
          "We build custom web apps, client booking portals, internal management dashboards, customer portals, and mobile-friendly applications.",
      },
      {
        question: "Do I own the source code of my application?",
        answer:
          "Yes. You receive 100% full intellectual property and source code ownership upon completion.",
      },
      {
        question: "Can your custom apps integrate with my existing tools?",
        answer:
          "Yes! We build API integrations connecting your custom app with Stripe, QuickBooks, CRM tools, and email platforms.",
      },
      {
        question: "How long does custom app development take?",
        answer:
          "Project timelines depend on feature complexity, typically ranging from 4 to 8 weeks for core functional applications.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Yes. We offer technical maintenance and feature scaling packages to keep your app secure and updated.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "Development contracts are structured by milestone deliverables with zero ongoing hostage fees.",
      },
    ],
  },
  shopify: {
    slug: "shopify",
    title: "Shopify E-Commerce Store Optimization",
    heroImage: "/service-shopify.png",
    badgeRating: "4.9/5 Rating on E-Commerce Stores",
    badgeLeads: "High Conversion Checkout Architecture",
    heroHeadline: (
      <>
        Turn Window Shoppers Into Repeat Customers With A High-Converting{" "}
        <span className="text-heading-gradient-light">Shopify Store.</span>
      </>
    ),
    heroSubheadline:
      "Engineered for high conversion rates, fast mobile checkout, and seamless order growth. We build, redesign, and optimize Shopify stores that sell.",
    trustBadges: [
      "Custom Shopify Themes",
      "High Conversion Checkout",
      "Mobile Speed Optimized",
      "App & Pixel Integration",
    ],
    traditionalProblems: [
      "Low store conversion rates where visitors add to cart but abandon",
      "Slow, bloated Shopify themes causing high bounce rates",
      "Cluttered checkout process creating friction for mobile buyers",
      "Generic template design that fails to stand out from competitors",
    ],
    ourSolutions: [
      "Custom, mobile-first Shopify design optimized for instant conversions",
      "Frictionless checkout flow with dynamic upsells and cross-sells",
      "High-speed theme code optimization for rapid product loading",
      "Complete analytics and ad pixel integration to track revenue",
    ],
    coreBenefits: [
      {
        icon: "shoppingbag",
        title: "Conversion-Engineered Storefront",
        description:
          "Product pages designed to showcase value, display social proof, and drive high average order values.",
        tag: "High Conversion",
      },
      {
        icon: "smartphone",
        title: "Mobile Shopping Perfection",
        description:
          "Over 75% of ecommerce sales happen on smartphones. We optimize every mobile touchpoint for easy purchasing.",
        tag: "Mobile First",
      },
      {
        icon: "zap",
        title: "Streamlined One-Click Checkout",
        description:
          "Reduce cart abandonment with instant mobile payment options like Apple Pay, Shop Pay, and Google Pay.",
        tag: "Frictionless Pay",
      },
      {
        icon: "barchart",
        title: "E-Commerce Revenue Analytics",
        description:
          "Track product sales, customer retention, and ad ROI with clean dashboard reporting you can easily digest.",
        tag: "Sales Insights",
      },
    ],
    differentiators: [
      {
        icon: "award",
        title: "Custom Design Built For Sales",
        description:
          "We do not just install standard free templates. We craft high-converting Shopify storefronts tailored to your products.",
      },
      {
        icon: "clock",
        title: "Fast Project Delivery",
        description:
          "Get your store built, migrated, or redesigned quickly so you can start scaling ad campaigns and making sales.",
      },
      {
        icon: "trending",
        title: "Average Order Value Optimization",
        description:
          "We build strategic upsells, cross-sells, and bundle offers that increase your average revenue per customer.",
      },
      {
        icon: "settings",
        title: "Complete Shopify Management",
        description:
          "From inventory setup and theme customization to app integration and tracking pixels, we take care of everything.",
      },
    ],
    steps: [
      {
        step: "01",
        title: "Store Strategy & Wireframe",
        description:
          "We study your product catalog, ideal buyer journey, and branding to design a high-converting storefront layout.",
        badge: "Step 1",
      },
      {
        step: "02",
        title: "Shopify Build & Integration",
        description:
          "Our team develops your custom Shopify theme, uploads products, configures payment gateways, and installs tracking pixels.",
        badge: "Step 2",
      },
      {
        step: "03",
        title: "Testing & Store Launch",
        description:
          "We conduct checkout testing across mobile devices and launch your high-converting Shopify store.",
        badge: "Step 3",
      },
    ],
    includedFeatures: [
      "Custom Shopify Theme Design & Development",
      "Mobile-First Responsive Product Page Optimization",
      "One-Click Checkout & Payment Gateway Integration",
      "Cart Abandonment & Dynamic Upsell Configuration",
      "Meta Pixel, TikTok Pixel, & Google Analytics 4 Setup",
      "Product Catalog Migration & Variant Setup",
      "App Integration (Reviews, Email Capture, Subscriptions)",
      "Post-Launch Store Training & Technical Support",
    ],
    faqItems: [
      {
        question: "Can you help migrate my store from WordPress or Wix to Shopify?",
        answer:
          "Yes! We handle full catalog, customer data, and order history migrations to Shopify with zero downtime.",
      },
      {
        question: "Will my Shopify store load fast on mobile devices?",
        answer:
          "Yes! We clean up unnecessary app scripts and optimize image assets to ensure fast mobile page speeds.",
      },
      {
        question: "Can you set up automated cart abandonment emails?",
        answer:
          "Yes, we build automated email and SMS recovery flows that recapture lost sales automatically.",
      },
      {
        question: "Do I own my Shopify store once it is launched?",
        answer:
          "Yes, you have 100% full ownership and control over your Shopify account and store assets.",
      },
      {
        question: "How long does a custom Shopify build take?",
        answer:
          "Most Shopify store redesigns or new builds are completed within 2 to 3 weeks.",
      },
      {
        question: "Are there long-term contracts required?",
        answer:
          "No long-term contracts. Projects are built on a milestone basis with zero ongoing developer lock-ins.",
      },
    ],
  },
};
