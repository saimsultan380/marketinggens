"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock,
  Layout,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { AuditForm } from "@/components/audit-form";
import { Testimonials } from "@/components/home/testimonials";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { site } from "@/lib/site";
import type { ServiceData } from "@/lib/services-data";

const iconMap: Record<string, any> = {
  target: Target,
  zap: Zap,
  barchart: BarChart3,
  shield: ShieldCheck,
  award: Award,
  clock: Clock,
  trending: TrendingUp,
  settings: Settings,
  search: Search,
  star: Star,
  users: Users,
  layout: Layout,
  message: MessageSquare,
  mail: Mail,
  smartphone: Smartphone,
  shoppingbag: ShoppingBag,
};

function renderIcon(name: string) {
  const IconComp = iconMap[name.toLowerCase()] || Target;
  return <IconComp className="h-6 w-6" />;
}

const featuredLogos = [
  "Forbes",
  "Business Insider",
  "Yahoo Finance",
  "Mashable",
  "New York Weekly",
];

export function ServicePageLanding({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-black overflow-hidden font-sans">
      {/* 1. HERO SECTION WITH SERVICE CARD BACKGROUND IMAGE & HUMAN AGENCY STYLING */}
      <section className="relative overflow-hidden bg-black text-white py-14 sm:py-20 lg:py-24">
        {/* Background Image */}
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-95"
          sizes="100vw"
        />
        {/* Dark Overlays for optimal image depth & high contrast */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />

        <Container className="relative z-10">
          {/* Top Floating Badges */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
              <Star className="h-3.5 w-3.5 fill-sky-400 text-sky-400" />
              <span>{data.badgeRating}</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
              <span>{data.badgeLeads}</span>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                {data.heroHeadline}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl max-w-2xl font-normal">
                {data.heroSubheadline}
              </p>

              {/* Trust Features Checklist */}
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-xl">
                {data.trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-sky-400" />
                    <span className="text-xs font-semibold text-slate-100 sm:text-sm">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button size="lg" className="shadow-xl shadow-corporate-blue/30 hover:scale-[1.02] transition-transform duration-200 font-bold" asChild>
                  <a href="#audit-form">
                    Claim Free Business Audit
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-corporate-blue hover:bg-corporate-blue hover:text-white hover:shadow-lg"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  <span>Call {site.phone}</span>
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-400 font-medium">
                ⚡ Free 15-minute consultation • No obligation • 100% privacy guaranteed
              </p>
            </div>

            {/* Right Form Column */}
            <div id="audit-form" className="lg:col-span-5 scroll-mt-24">
              <div className="relative rounded-3xl border border-white/20 bg-white p-6 lg:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
                <div className="mb-4 text-left border-b border-slate-100 pb-3.5">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-corporate-blue/10 px-2.5 py-1 text-[11px] font-semibold text-corporate-blue uppercase tracking-wider mb-1.5">
                    Free Instant Evaluation
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Get Your Free Growth Audit
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 font-normal">
                    Discover how many qualified leads your business is missing out on today.
                  </p>
                </div>
                <AuditForm compact />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. TRUST & CREDIBILITY BAR */}
      <section className="border-y border-slate-200/80 bg-slate-50/70 py-10">
        <Container>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
              Featured In & Trusted By Local Industry Leaders
            </p>

            {/* Featured Media Logos */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
              {featuredLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-base font-bold tracking-tight text-slate-800 sm:text-lg hover:text-corporate-blue transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. VISUAL COMPARISON SECTION (PRO HUMAN AGENCY UI) */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="The Agency Difference"
              title={
                <>
                  Stop Wasted Spend. Start Generating{" "}
                  <span className="text-heading-gradient">Real Customers.</span>
                </>
              }
              body="See why local businesses switch from traditional agencies to MarketingGens high-converting acquisition engine."
            />
          </FadeIn>

          {/* Visual Comparison Grid */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Left Card: Traditional Agencies */}
            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl border border-red-200/80 bg-gradient-to-b from-red-50/50 to-white p-8 sm:p-10 shadow-sm relative">
                <div className="flex items-center gap-3.5 border-b border-red-100 pb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-600 shadow-sm">
                    <XCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Traditional Marketing Agencies</h3>
                    <p className="text-xs text-red-600 font-semibold">The Slow & Expensive Old Way</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {data.traditionalProblems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <span className="text-sm leading-relaxed text-slate-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right Card: MarketingGens Solution */}
            <FadeIn delay={0.2}>
              <div className="h-full rounded-3xl border-2 border-corporate-blue bg-gradient-to-b from-blue-50/60 to-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 rounded-bl-2xl bg-corporate-blue px-4 py-1.5 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                  Proven Agency System
                </div>

                <div className="flex items-center gap-3.5 border-b border-corporate-blue/15 pb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-corporate-blue text-white shadow-md">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">MarketingGens Acquisition Engine</h3>
                    <p className="text-xs text-corporate-blue font-semibold">The High-Converting Modern Way</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {data.ourSolutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-corporate-blue" />
                      <span className="text-sm font-semibold leading-relaxed text-slate-900">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Callout Action Bar */}
          <FadeIn className="mt-12">
            <div className="rounded-3xl border border-corporate-blue/20 bg-gradient-to-r from-blue-50/60 via-white to-blue-50/60 p-8 text-center shadow-sm">
              <p className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg max-w-3xl mx-auto">
                Ready to stop burning money on ineffective marketing and start filling your calendar with booked clients?
              </p>
              <div className="mt-6 flex justify-center">
                <Button size="lg" className="shadow-md hover:scale-[1.02] transition-transform font-bold" asChild>
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

      {/* 4. SOLUTION / BENEFITS SECTION */}
      <section className="bg-slate-50/70 py-20 sm:py-28 border-y border-slate-200/80">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Core Advantages"
              title={
                <>
                  A Complete Lead Generation Engine Built For{" "}
                  <span className="text-heading-gradient">Maximum ROI.</span>
                </>
              }
              body="We build a predictable system designed from initial discovery straight to calendar booking."
            />
          </FadeIn>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.coreBenefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:border-corporate-blue hover:shadow-xl hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-corporate-blue/10 text-corporate-blue transition duration-300 group-hover:bg-corporate-blue group-hover:text-white group-hover:scale-105 shadow-xs">
                        {renderIcon(benefit.icon)}
                      </div>
                      <span className="rounded-full bg-corporate-blue/5 border border-corporate-blue/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-corporate-blue">
                        {benefit.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-normal">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-1.5 text-xs font-bold text-corporate-blue">
                    <span>Engineered For Conversions</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Why Work With Us"
              title={
                <>
                  Built Different From Traditional{" "}
                  <span className="text-heading-gradient">Ad Agencies.</span>
                </>
              }
              body="We measure success strictly by phone calls, booked appointments, and revenue — not vanity metrics."
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {data.differentiators.map((diff, i) => (
              <FadeIn key={diff.title} delay={i * 0.05}>
                <div className="group flex items-start gap-5 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:border-corporate-blue hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-corporate-blue text-white shadow-md transition-transform group-hover:scale-105">
                    {renderIcon(diff.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {diff.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 font-normal">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-blue-50/40 py-20 sm:py-28 border-y border-slate-200/80">
        <Container>
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Transparent 3-Step Process"
              title={
                <>
                  Simple. Transparent. Zero{" "}
                  <span className="text-heading-gradient">Tech Headaches.</span>
                </>
              }
              body="Three clear steps to turn online traffic into a full calendar of qualified local clients."
            />
          </FadeIn>

          <ol className="mt-14 grid gap-8 lg:grid-cols-3 relative">
            {data.steps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.08}>
                <li className="group relative h-full rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:border-corporate-blue hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-corporate-blue text-white font-bold text-sm shadow-md">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-corporate-blue/10 px-3 py-1 text-xs font-bold text-corporate-blue uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* 7. SERVICE DETAILS CHECKLIST */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Complete Package"
              title={
                <>
                  Everything Included In Your{" "}
                  <span className="text-heading-gradient">{data.title}.</span>
                </>
              }
              body="A complete done-for-you service so you never have to deal with technical setups or missed leads."
            />
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.includedFeatures.map((feature, i) => (
              <FadeIn key={feature} delay={i * 0.03}>
                <div className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition duration-200 hover:border-corporate-blue hover:bg-blue-50/40">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-corporate-blue/10 text-corporate-blue transition group-hover:bg-corporate-blue group-hover:text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {feature}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. AUTOMATED TESTIMONIALS SLIDER */}
      <Testimonials />

      {/* 9. FAQ SECTION */}
      <section className="bg-slate-50/70 py-20 sm:py-28 border-t border-slate-200/80">
        <Container className="max-w-4xl">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Frequently Asked Questions"
              title={
                <>
                  Got Questions? We Have{" "}
                  <span className="text-heading-gradient">Honest Answers.</span>
                </>
              }
              body="Everything you need to know before booking your free business growth evaluation."
            />
          </FadeIn>

          <div className="mt-12 space-y-4">
            {data.faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={item.question} delay={idx * 0.03}>
                  <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200 hover:border-corporate-blue shadow-xs">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900 sm:text-lg cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-corporate-blue transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4 bg-blue-50/30">
                        {item.answer}
                      </div>
                    ) : null}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 10. FINAL CTA SECTION (MATCHES HOMEPAGE CTA STYLE) */}
      <section className="bg-white pt-12 pb-20 sm:pt-16 sm:pb-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-teal/15 bg-[#f7fcfb] p-8 sm:p-12 md:p-16 text-center shadow-sm">
              <div
                className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal/8 blur-3xl"
                aria-hidden
              />
              <h2 className="relative z-10 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Ready to Fill Your Calendar With{" "}
                <span className="text-heading-gradient">Qualified Leads?</span>
              </h2>

              <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Book your free, no-obligation business evaluation today. We will show you exactly how many leads your business is missing out on.
              </p>

              <div className="relative mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="shadow-md hover:scale-[1.02] transition-transform font-bold" asChild>
                  <a href="#audit-form">
                    Book My Free Evaluation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-corporate-blue/30 bg-white px-7 text-sm font-semibold text-slate-900 transition hover:border-corporate-blue hover:bg-corporate-blue hover:text-white"
                >
                  <Phone className="h-4 w-4 text-corporate-blue" />
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
