"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock,
  HelpCircle,
  Phone,
  ShieldCheck,
  Star,
  Target,
  Users,
  XCircle,
  Zap,
  TrendingUp,
  Award,
  Settings,
  MousePointerClick,
  CalendarCheck2,
} from "lucide-react";
import { useState } from "react";
import { AuditForm } from "@/components/audit-form";
import { Testimonials } from "@/components/home/testimonials";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { site, stats, testimonials } from "@/lib/site";

// Trust Signals Data
const trustBadges = [
  "100% Free Business Audit",
  "No Long-Term Contracts",
  "Exclusive Leads Only",
  "Google Certified Team",
];

const featuredLogos = [
  "Forbes",
  "Business Insider",
  "Yahoo Finance",
  "Mashable",
  "New York Weekly",
];

// Pain Points Comparison Data
const traditionalAgencyProblems = [
  "Paying for broad clicks from people who are just browsing",
  "High monthly agency retainers with zero booked calls",
  "Generic, slow websites where visitors leave without contacting you",
  "Shared lead lists resold to 5 local competitors at the same time",
];

const marketingGensSolutions = [
  "High-intent keyword targeting capturing urgent, ready-to-hire buyers",
  "Pay for performance mindset with transparent call and lead tracking",
  "Custom high-converting landing pages built specifically for bookings",
  "100% exclusive leads delivered direct to your phone and inbox",
];

// Core Benefits Data
const coreBenefits = [
  {
    icon: Target,
    title: "High-Intent Search Targeting",
    description:
      "We target local buyers who are actively searching for your exact services on Google right now, capturing urgent, ready-to-hire clients.",
    tag: "Targeted Audience",
  },
  {
    icon: Zap,
    title: "High-Converting Custom Landing Pages",
    description:
      "Every campaign gets a fast, mobile-optimized landing page engineered specifically to convert visitors into phone calls and booked appointments.",
    tag: "Mobile Optimized",
  },
  {
    icon: BarChart3,
    title: "Transparent Call & Lead Tracking",
    description:
      "Know exactly which ads drive phone calls, form fills, and revenue with clear, real-time reporting you can easily understand.",
    tag: "Real-Time ROI",
  },
  {
    icon: ShieldCheck,
    title: "Done-For-You Campaign Optimization",
    description:
      "Our team manages keyword bids, negative keywords, ad copy split-tests, and campaign updates so you can focus entirely on serving clients.",
    tag: "Zero Busywork",
  },
];

// Why Choose Us Differentiators
const differentiators = [
  {
    icon: Award,
    title: "Exclusive Leads Delivered Direct To You",
    description:
      "Every lead generated through your Google Ads campaign belongs 100% to your business. We never share or resell leads to competitors.",
  },
  {
    icon: Clock,
    title: "No Risk, No Long-Term Contracts",
    description:
      "We earn your business every month. You stay with us because your calendar stays full, not because you signed a restrictive contract.",
  },
  {
    icon: TrendingUp,
    title: "Plain-English Communication & Honest Advice",
    description:
      "No confusing marketing jargon or hidden fees. We explain campaign performance clearly and focus strictly on return on ad spend.",
  },
  {
    icon: Settings,
    title: "Complete Done-For-You Execution",
    description:
      "From keyword research and ad copywriting to landing page development and conversion tracking, we handle every detail from start to finish.",
  },
];

// How It Works Steps
const steps = [
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
];

// What Is Included Checklist
const includedFeatures = [
  "Comprehensive Keyword Research & Competitor Analysis",
  "High-Intent Search Campaign Setup & Structure",
  "Persuasive Ad Copywriting & Extensions Setup",
  "Custom Mobile-Responsive Conversion Landing Page",
  "Dynamic Call Tracking & Form Lead Notifications",
  "Negative Keyword Filtering To Block Wasted Spend",
  "Weekly Bid Management & Ad Performance Tuning",
  "Clear Monthly ROI & Lead Attribution Reports",
];

// High-Intent FAQ Items
const faqItems = [
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
];

export function GoogleAdsLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE & GRAPHIC OVERLAYS */}
      <section className="relative overflow-hidden bg-black text-white py-14 sm:py-20 lg:py-24">
        {/* Background Image */}
        <Image
          src="/google ads bg.jpg"
          alt="Google Ads Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Overlays for optimal readability - Pure Black */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/75" />

        <Container className="relative z-10">
          {/* Top Floating Badges */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xs px-3.5 py-1 text-xs font-medium text-white/90">
              <Star className="h-3.5 w-3.5 fill-teal text-teal" />
              <span>4.9/5 Rating across 120+ local businesses</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xs px-3.5 py-1 text-xs font-medium text-white/90">
              <CheckCircle2 className="h-3.5 w-3.5 text-teal" />
              <span>18,000+ Qualified leads delivered</span>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                Get More Qualified Leads & Booked Appointments For Your Business
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl max-w-2xl">
                Stop wasting money on empty clicks. We build, launch, and manage high-converting Google Ads campaigns that fill your calendar with paying local clients without you lifting a finger on marketing.
              </p>

              {/* Trust Features Checklist (Clean text without card containers) */}
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-xl">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                    <span className="text-xs font-semibold text-white/90 sm:text-sm">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button size="lg" className="shadow-lg shadow-teal/30 hover:scale-[1.02] transition-transform" asChild>
                  <a href="#audit-form">
                    Claim Free Business Audit
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:border-teal hover:bg-teal hover:text-white"
                >
                  <Phone className="h-4 w-4 text-teal" />
                  <span>Call {site.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div id="audit-form" className="lg:col-span-5 scroll-mt-24">
              <div className="relative rounded-2xl border border-white/20 bg-white p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                <div className="mb-3 text-left border-b border-line pb-3">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-teal/10 px-2.5 py-0.5 text-[11px] font-bold text-teal uppercase tracking-wider mb-1">
                    Free Evaluation
                  </div>
                  <h2 className="text-lg font-bold text-black sm:text-xl">
                    Get Your Free Business Audit
                  </h2>
                  <p className="mt-0.5 text-xs text-muted">
                    Discover how many qualified leads your business is missing out on. Zero pressure.
                  </p>
                </div>
                <AuditForm compact />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. TRUST & CREDIBILITY BAR WITH GRAPHIC STAT CARDS */}
      <section className="border-y border-line bg-[#fafcfc] py-12">
        <Container>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
              Featured In & Trusted By Industry Leaders
            </p>

            {/* Featured Media Logos */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
              {featuredLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-base font-extrabold tracking-tight text-black sm:text-lg hover:text-teal transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>

            {/* Key Performance Stats Graphics Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((item, idx) => (
                <div
                  key={item.label}
                  className="group relative rounded-2xl border border-line bg-white p-6 shadow-xs transition hover:border-teal hover:shadow-md"
                >
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-3xl font-extrabold text-black sm:text-4xl group-hover:text-teal transition-colors">
                      {item.value}
                    </p>
                    {idx === 0 && <Users className="h-6 w-6 text-teal opacity-60" />}
                    {idx === 1 && <MousePointerClick className="h-6 w-6 text-teal opacity-60" />}
                    {idx === 2 && <Star className="h-6 w-6 fill-teal text-teal opacity-60" />}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-muted sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. VISUAL COMPARISON SECTION (PROBLEM VS SOLUTION GRAPHIC) */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="The PPC Reality"
              title="Stop Wasted Spend. Start Generating Real Customers."
              body="See the difference between traditional agency ad setups and MarketingGens dedicated lead generation engine."
            />
          </FadeIn>

          {/* Visual Comparison Grid */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Left Card: Traditional Agencies (Red Accent) */}
            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl border border-red-200 bg-red-50/30 p-8 sm:p-10 shadow-xs relative">
                <div className="flex items-center gap-3 border-b border-red-200 pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <XCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">Traditional Ad Agencies</h3>
                    <p className="text-xs text-red-600 font-semibold">The Expensive Old Way</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {traditionalAgencyProblems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <span className="text-sm leading-relaxed text-black/80">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right Card: MarketingGens Solution (Corporate Blue Accent) */}
            <FadeIn delay={0.2}>
              <div className="h-full rounded-3xl border-2 border-corporate-blue bg-light-blue p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 rounded-bl-2xl bg-corporate-blue px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                  Proven System
                </div>

                <div className="flex items-center gap-3 border-b border-corporate-blue/20 pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-corporate-blue text-white shadow-md">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">MarketingGens Lead Engine</h3>
                    <p className="text-xs text-corporate-blue font-semibold">The High-Converting Way</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {marketingGensSolutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-corporate-blue" />
                      <span className="text-sm font-medium leading-relaxed text-black">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Callout Action Bar */}
          <FadeIn className="mt-12">
            <div className="rounded-3xl border border-corporate-blue/20 bg-light-blue p-8 text-center shadow-xs">
              <p className="text-base font-medium leading-relaxed text-black sm:text-lg max-w-3xl mx-auto">
                If you are ready to eliminate wasted ad spend and start turning searchers into booked appointments, let us evaluate your market for free.
              </p>
              <div className="mt-6 flex justify-center">
                <Button size="lg" className="shadow-md" asChild>
                  <a href="#audit-form">
                    Fix My Lead Generation Today
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 4. SOLUTION / BENEFITS SECTION WITH GRAPHIC CARDS */}
      <section className="bg-[#fcfdfe] py-20 sm:py-28 border-y border-line">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Solution"
              title="A Complete Lead Generation Engine Built For ROI"
              body="We do not just run ads. We build a predictable system designed from search to calendar booking."
            />
          </FadeIn>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={benefit.title} delay={i * 0.06}>
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-7 shadow-xs transition duration-300 hover:border-teal hover:shadow-[0_16px_40px_rgba(15,186,178,0.15)] hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal transition duration-300 group-hover:bg-teal group-hover:text-white group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-teal/5 border border-teal/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                          {benefit.tag}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-black">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {benefit.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-line/60 pt-4 flex items-center gap-1 text-xs font-bold text-teal">
                      <span>Designed for Conversions</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Strategic CTA */}
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <a href="#audit-form">
                Get My Custom Growth Plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* 5. WHY CHOOSE US SECTION WITH VISUAL FEATURE CARDS */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Why MarketingGens"
              title="Built Different From Traditional Ad Agencies"
              body="We measure success by phone calls, booked appointments, and revenue, not vanity ad impressions."
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {differentiators.map((diff, i) => {
              const Icon = diff.icon;
              return (
                <FadeIn key={diff.title} delay={i * 0.05}>
                  <div className="group flex items-start gap-5 rounded-3xl border border-line bg-white p-8 shadow-xs transition duration-300 hover:border-teal hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal text-white shadow-md transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">
                        {diff.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Strategic Mid-Page CTA */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild>
              <a href="#audit-form">
                Request Free Audit Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-teal px-6 text-sm font-semibold text-teal transition hover:bg-teal hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us Direct: {site.phone}</span>
            </a>
          </div>
        </Container>
      </section>

      {/* 6. HOW IT WORKS SECTION WITH VISUAL CONNECTORS */}
      <section className="bg-[#f7fcfb] py-20 sm:py-28 border-y border-teal/10 relative">
        <Container>
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Simple 3-Step Process"
              title="Simple. Transparent. Zero Tech Headaches."
              body="Three easy steps to turn search engine traffic into a full calendar of qualified clients."
            />
          </FadeIn>

          <ol className="mt-14 grid gap-8 lg:grid-cols-3 relative">
            {steps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.08}>
                <li className="group relative h-full rounded-3xl border border-line bg-white p-8 shadow-xs transition duration-300 hover:border-teal hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal text-white font-extrabold text-sm shadow-md">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* 7. SERVICE DETAILS SECTION WITH CHECKLIST GRAPHICS */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="What Is Included"
              title="Everything Included In Your Google Ads Campaign"
              body="Complete done-for-you service so you never have to worry about ad setups, landing pages, or tracking."
            />
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatures.map((feature, i) => (
              <FadeIn key={feature} delay={i * 0.04}>
                <div className="group flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-xs transition hover:border-teal hover:bg-[#f7fcfb]">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-black">
                    {feature}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <a href="#audit-form">
                Start My Google Ads Campaign
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* 8. AUTOMATED TESTIMONIALS SLIDER */}
      <Testimonials />

      {/* 9. FAQ SECTION WITH ANIMATED ACCORDIONS */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-4xl">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Frequently Asked Questions"
              title="Got Questions? We Have Honest Answers."
              body="Everything you need to know before getting started with your Google Ads audit."
            />
          </FadeIn>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={item.question} delay={idx * 0.03}>
                  <div className="rounded-2xl border border-line bg-white overflow-hidden transition hover:border-teal">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left font-bold text-black sm:text-lg cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-teal transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="px-6 pb-6 text-sm leading-relaxed text-muted border-t border-line/50 pt-4 bg-[#f9fcfb]">
                        {item.answer}
                      </div>
                    ) : null}
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted">
              Have a specific question not listed here?{" "}
              <a
                href="#audit-form"
                className="font-bold text-teal hover:underline"
              >
                Ask us directly on your free audit call.
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* 10. FINAL CTA SECTION (PRIMARY NAVY MAJOR SECTION) */}
      <section className="bg-primary-navy py-20 sm:py-28 text-white relative">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-8 sm:p-12 md:p-16 text-center shadow-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-bright-blue uppercase tracking-wider mb-4 border border-white/10">
                <CalendarCheck2 className="h-4 w-4" /> Claim Your Growth Audit
              </div>

              <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Ready to Fill Your Calendar With Qualified Leads?
              </h2>

              <p className="relative mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                Book your free, no-obligation business evaluation today. We will show you exactly how many leads your business is missing out on and how to capture them predictably.
              </p>

              <div className="relative mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="shadow-lg hover:scale-[1.02] transition-transform" asChild>
                  <a href="#audit-form">
                    Book My Free Evaluation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-bright-blue hover:border-bright-blue hover:text-white"
                >
                  <Phone className="h-4 w-4 text-bright-blue" />
                  <span>Call {site.phone}</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
