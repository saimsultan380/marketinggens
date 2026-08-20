export const site = {
  name: "MarketingGens",
  tagline: "More customers. Predictably. Every month.",
  description:
    "We get local businesses, restaurants, ecommerce stores, insurance, medical and healthcare agencies more leads and booked appointments. Free business audit, no pressure.",
  email: "hello@marketinggens.com",
  phone: "(800) 555-0148",
  hours: "Mon–Fri, 9am–6pm ET",
  location: "Serving businesses across the US",
};

export const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/audit", label: "Free Business Audit" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export const navLinks = [
  {
    href: "/industries",
    label: "Industries",
    children: [
      { href: "/industries/local-businesses", label: "Local Businesses" },
      { href: "/industries/restaurants", label: "Restaurants" },
      { href: "/industries/ecommerce", label: "Ecommerce" },
      { href: "/industries/insurance", label: "Insurance" },
      { href: "/industries/medical", label: "Medical & Wellness" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/google-ads", label: "Google Ads" },
      { href: "/services#local-seo", label: "Local SEO" },
      { href: "/services#social-media-marketing", label: "Social Media Marketing" },
      { href: "/services#meta-ads", label: "Meta Ads" },
      { href: "/services#email-marketing", label: "Email Marketing" },
    ],
  },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const industries = [
  {
    href: "/industries/local-businesses",
    title: "Local Businesses",
    body: "Get your phone ringing and your calendar full — from home services to salons to gyms.",
  },
  {
    href: "/industries/restaurants",
    title: "Restaurants & Food Services",
    body: "Bring new diners through the door and keep regulars coming back.",
  },
  {
    href: "/industries/ecommerce",
    title: "Ecommerce & Retail",
    body: "More traffic, more orders, more repeat buyers — without wasting ad spend.",
  },
  {
    href: "/industries/insurance",
    title: "Insurance Agencies",
    body: "Talk to people who are actually looking for coverage — not cold names on a list.",
  },
  {
    href: "/industries/medical",
    title: "Medical & Healthcare",
    subtext: "(Dentists, Aesthetics/Med Spas, Private Doctors, Elder Care)",
    body: "Dentists, Aesthetics/Med Spas, Private Doctors, Elder Care.",
  },
  {
    href: "/industries/medical",
    title: "Medical & Wellness Practices",
    body: "Fill appointment slots with patients who are ready to book.",
  },
  {
    href: "/industries/local-businesses",
    title: "Home Services & Contractors",
    subtext: "(HVAC, Plumbing, Roofing, Electricians)",
    body: "Book high-ticket jobs for HVAC, plumbing, roofing, and remodeling.",
  },
  {
    href: "/industries/local-businesses",
    title: "Salons, Beauty & Spas",
    body: "Fill your appointment chairs with regular clients who keep returning.",
  },
  {
    href: "/industries/local-businesses",
    title: "Fitness Centers & Gyms",
    body: "Drive new gym memberships and personal training consultations.",
  },
  {
    href: "/industries/local-businesses",
    title: "Real Estate & Mortgage",
    body: "Connect with buyers and sellers actively seeking agents and loan officers.",
  },
  {
    href: "/industries/local-businesses",
    title: "Automotive & Repair Services",
    body: "Keep auto repair bays full with drivers who need local service.",
  },
  {
    href: "/industries/local-businesses",
    title: "Professional & Legal Services",
    body: "Attract qualified legal, accounting, and consulting clients.",
  },
];

export const outcomes = [
  {
    title: "Get Found First",
    body: "Show up when local customers search for what you offer. (Local SEO and Google Business Profile optimization)",
  },
  {
    title: "Get Booked Automatically",
    body: "Turn website visitors into booked appointments, even while you sleep. (Automated booking and follow-up systems)",
  },
  {
    title: "Get Steady Leads",
    body: "A predictable flow of new customer inquiries every month. (Google Ads, Meta Ads, and lead gen campaigns)",
  },
  {
    title: "Get Repeat Customers",
    body: "Stay top of mind so customers come back. (Email and SMS automation, retargeting)",
  },
  {
    title: "Get Real Answers",
    body: "Know exactly what is working and what is not, in plain language. (Reporting and analytics)",
  },
];

export const serviceCards = [
  {
    title: "Google Ads",
    body: "Target high-intent local buyers actively searching for your services to generate instant calls and booked appointments.",
    image: "/service-google-ads.png",
  },
  {
    title: "Local SEO",
    body: "Dominate local Google search and Map Pack rankings so nearby clients find your business first and call directly.",
    image: "/service-local-seo.png",
  },
  {
    title: "Social Media Marketing",
    body: "Build strong brand awareness on Facebook & Instagram to drive local engagement and consistently convert viewers into leads.",
    image: "/service-social-media.png",
  },
  {
    title: "Meta Ads",
    body: "High-converting Facebook & Instagram ad campaigns engineered to capture qualified leads rather than empty clicks.",
    image: "/service-meta-ads.png",
  },
  {
    title: "Email Marketing",
    body: "Automate smart email & SMS follow-ups that turn prospects into booked clients and keep past customers returning.",
    image: "/service-email-marketing.png",
  },
  {
    title: "Content Marketing",
    body: "Publish strategic content that builds instant credibility, boosts organic search reach, and prompts visitors to request consultations.",
    image: "/service-content-marketing.png",
  },
  {
    title: "Website Development",
    body: "Build lightning-fast, high-converting websites optimized specifically to capture lead info and fill your booking calendar.",
    image: "/service-website-development.png",
  },
  {
    title: "App Development",
    body: "Custom web & mobile applications designed to automate client scheduling, remove busywork, and enhance customer experience.",
    image: "/service-app-development.png",
  },
  {
    title: "Shopify",
    body: "High-converting Shopify stores optimized with streamlined checkouts to turn window shoppers into repeat orders.",
    image: "/service-shopify.png",
  },
];

export const steps = [
  {
    step: "01",
    title: "Free Audit",
    body: "We look at where you are losing customers today. No cost, no pitch deck.",
  },
  {
    step: "02",
    title: "Custom Growth Plan",
    body: "If we can help, you get a plain-English plan with real numbers, not jargon.",
  },
  {
    step: "03",
    title: "We Deliver Leads",
    body: "Our team sets it up and keeps it running. You take the calls and serve the customers.",
  },
];

export const problems = [
  "Walk-ins come in waves, then nothing for days",
  "Appointment slots sit empty and you cannot figure out why",
  "Competitors show up first when people search for you on Google",
  "You are stuck relying on word of mouth to grow",
  "You do not have the time or patience to learn marketing yourself",
];

export const stats = [
  { value: "120+", label: "Businesses helped" },
  { value: "18k+", label: "Leads delivered" },
  { value: "4.9", label: "Average client rating" },
];

export const stories = [
  {
    type: "Case Study",
    title: "Local dental office filled 40+ new patient slots in 60 days",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Results",
    title: "Neighborhood restaurant went from slow Tuesdays to waitlists",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Case Study",
    title: "Home services company booked a full week of jobs from one campaign",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Results",
    title: "Insurance agency replaced bad shared leads with real conversations",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Case Study",
    title: "Ecommerce shop cut wasted ad spend and lifted repeat orders",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Results",
    title: "Med spa turned website visits into booked consultations",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "I don't have time for marketing. They just made the phone ring. That's all I wanted.",
    name: "Dana R.",
    role: "Owner, neighborhood salon",
    rating: 5,
  },
  {
    quote:
      "We were tired of paying for clicks that never turned into tables. Now we see new faces every week.",
    name: "Marcus T.",
    role: "Restaurant owner",
    rating: 5,
  },
  {
    quote:
      "They told us honestly what would work. No fluff. The calendar is fuller than it was last year.",
    name: "Priya S.",
    role: "Private practice manager",
    rating: 5,
  },
  {
    quote:
      "We stopped buying junk leads. The people who call now actually want a quote.",
    name: "James K.",
    role: "Insurance agency owner",
    rating: 5,
  },
  {
    quote:
      "Ad spend used to disappear. Now we see orders — and customers coming back for a second buy.",
    name: "Elena M.",
    role: "Ecommerce shop owner",
    rating: 5,
  },
  {
    quote:
      "My crew is busy in the field. I needed the phone to ring without me living on a laptop.",
    name: "Omar H.",
    role: "Home services owner",
    rating: 5,
  },
  {
    quote:
      "Empty chair time was the problem. New patients are booking, and the schedule feels steady.",
    name: "Sofia L.",
    role: "Dental practice owner",
    rating: 5,
  },
  {
    quote:
      "No jargon, no runaround. They said they'd fill the calendar, and that's what happened.",
    name: "Chris W.",
    role: "Gym owner",
    rating: 5,
  },
];

export const featuredIn = [
  "Forbes",
  "Business Insider",
  "New York Weekly",
  "Mashable",
  "Khaleej Times",
  "Yahoo Finance",
];

export type MarqueeItem = {
  name: string;
  href?: string;
  /** Optional logo in /public. Falls back to a text wordmark. */
  logo?: string;
};

export const marqueeRows: MarqueeItem[][] = [
  [
    { name: "Local Businesses", href: "/industries/local-businesses" },
    { name: "Restaurants", href: "/industries/restaurants" },
    { name: "Ecommerce", href: "/industries/ecommerce" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Medical & Wellness", href: "/industries/medical" },
    { name: "Dentists", href: "/industries/medical" },
    { name: "Med Spas", href: "/industries/medical" },
    { name: "Home Services", href: "/industries/local-businesses" },
    { name: "Salons", href: "/industries/local-businesses" },
    { name: "Gyms", href: "/industries/local-businesses" },
    { name: "Private Doctors", href: "/industries/medical" },
    { name: "Assisted Living", href: "/industries/medical" },
  ],
  [
    { name: "Neighborhood Retail", href: "/industries/local-businesses" },
    { name: "Food & Dining", href: "/industries/restaurants" },
    { name: "Online Stores", href: "/industries/ecommerce" },
    { name: "Insurance Agencies", href: "/industries/insurance" },
    { name: "Dental Offices", href: "/industries/medical" },
    { name: "Aesthetic Clinics", href: "/industries/medical" },
    { name: "Elder Care", href: "/industries/medical" },
    { name: "HVAC & Plumbing", href: "/industries/local-businesses" },
    { name: "Auto Services", href: "/industries/local-businesses" },
    { name: "Wellness Practices", href: "/industries/medical" },
    { name: "Cafes", href: "/industries/restaurants" },
    { name: "Beauty & Spas", href: "/industries/local-businesses" },
  ],
];
