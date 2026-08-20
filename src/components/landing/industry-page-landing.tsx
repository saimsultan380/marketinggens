"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  ShieldCheck,
  Star,
  TrendingUp,
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
import type { IndustryData } from "@/lib/industries-data";

export function IndustryPageLanding({ data }: { data: IndustryData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-black overflow-hidden font-sans">
      {/* 1. INDUSTRY HERO SECTION */}
      <section className="relative overflow-hidden bg-black text-white py-14 sm:py-20 lg:py-24">
        {/* Background Image */}
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-90"
          sizes="100vw"
        />
        {/* Dark Overlays matching service pages hero */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />

        <Container className="relative z-10">
          {/* Top Floating Badges matching service pages */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
              <Star className="h-3.5 w-3.5 fill-bright-blue text-bright-blue" />
              <span>{data.badgeBenchmark}</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5 text-bright-blue" />
              <span>{data.badgeGrowth}</span>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[50px]">
                {data.heroHeadline}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl max-w-2xl font-normal">
                {data.heroSubheadline}
              </p>

              {/* Industry Benchmark Metrics Bar */}
              <div className="mt-8 grid grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 max-w-xl shadow-lg">
                {data.industryMetrics.map((metric) => (
                  <div key={metric.label} className="px-3 first:pl-1 last:pr-1 text-left">
                    <p className="text-lg font-bold text-white sm:text-xl tracking-tight">
                      {metric.value}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-bright-blue uppercase tracking-wide">
                      {metric.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-300 font-normal truncate">
                      {metric.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button size="lg" className="shadow-xl shadow-corporate-blue/30 hover:scale-[1.02] transition-transform duration-200 font-bold" asChild>
                  <a href="#audit-form">
                    Claim Free Industry Audit
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-corporate-blue hover:bg-corporate-blue hover:text-white hover:shadow-lg"
                >
                  <Phone className="h-4 w-4 text-bright-blue" />
                  <span>Call {site.phone}</span>
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-400 font-medium">
                ⚡ Free 15-minute consultation • Tailored for {data.title} • 100% privacy guaranteed
              </p>
            </div>

            {/* Right Form Column */}
            <div id="audit-form" className="lg:col-span-5 scroll-mt-24">
              <div className="relative rounded-3xl border border-white/20 bg-white p-6 lg:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                <div className="mb-4 text-left border-b border-slate-100 pb-3.5">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-corporate-blue/10 px-2.5 py-1 text-[11px] font-semibold text-corporate-blue uppercase tracking-wider mb-1.5">
                    {data.title} Strategy Audit
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Get Your Free {data.title} Audit
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-500 font-normal">
                    Discover how many qualified customers your business is missing in your area.
                  </p>
                </div>
                <AuditForm compact />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. INDUSTRY CHALLENGES (PROBLEM VS SOLUTION) */}
      <section className="bg-slate-50/70 py-20 sm:py-28 border-b border-slate-200/80">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Industry Realities"
              title={
                <>
                  Why Generic Marketing Fails{" "}
                  <span className="text-heading-gradient">{data.title}.</span>
                </>
              }
              body={`Standard cookie-cutter marketing agencies do not understand the daily operating realities of ${data.title.toLowerCase()}. Here is how we fix it.`}
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {data.challenges.map((item, i) => (
              <FadeIn key={item.problem} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl hover:border-corporate-blue">
                  <div>
                    {/* The Problem */}
                    <div className="rounded-2xl bg-red-50/70 p-4 border border-red-100">
                      <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider mb-1">
                        <XCircle className="h-4 w-4" /> Traditional Flaw
                      </div>
                      <p className="text-sm font-semibold text-slate-800 leading-snug">
                        {item.problem}
                      </p>
                    </div>

                    {/* The Solution */}
                    <div className="mt-4 rounded-2xl bg-blue-50/70 p-4 border border-blue-100">
                      <div className="flex items-center gap-2 text-corporate-blue font-bold text-xs uppercase tracking-wider mb-1">
                        <CheckCircle2 className="h-4 w-4" /> MarketingGens Engine
                      </div>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Proven Blueprint</span>
                    <span className="text-corporate-blue font-bold">Phase 0{i + 1}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. RECOMMENDED GROWTH STACK (INTERNAL SERVICE LINKS) */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Tailored Growth Stack"
              title={
                <>
                  Recommended Services For{" "}
                  <span className="text-heading-gradient">{data.title}.</span>
                </>
              }
              body="We combine these specialized services into a single, high-performing revenue machine for your business."
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {data.recommendedServices.map((service, i) => (
              <FadeIn key={service.serviceSlug} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:border-corporate-blue hover:shadow-xl hover:-translate-y-1">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-corporate-blue/10 text-corporate-blue font-bold text-sm mb-5 transition duration-300 group-hover:bg-corporate-blue group-hover:text-white">
                      0{i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-corporate-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
                      {service.whyNeeded}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href={`/services/${service.serviceSlug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-corporate-blue hover:text-bright-blue transition-colors group/link"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CASE STUDY & REAL RESULTS SHOWCASE */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-blue-50/40 py-20 sm:py-28 border-y border-slate-200/80">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-corporate-blue/20 bg-slate-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-bright-blue/15 blur-3xl" />
              
              <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-bright-blue/20 px-3.5 py-1 text-xs font-bold text-bright-blue border border-bright-blue/30 uppercase tracking-wider mb-4">
                    <TrendingUp className="h-3.5 w-3.5" /> Featured Industry Case Study
                  </div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {data.caseStudy.clientType}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-300 font-normal">
                    {data.caseStudy.story}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Button size="lg" className="shadow-md font-bold" asChild>
                      <Link href="/results">
                        View All Results & Case Studies
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-7 text-center shadow-lg">
                    <p className="text-xs font-semibold text-bright-blue uppercase tracking-wider">
                      Verified Client Benchmark
                    </p>
                    <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">
                      {data.caseStudy.resultMetric}
                    </p>
                    <p className="mt-2 text-xs text-slate-300 font-medium">
                      Measured over initial 90-day deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 5. 3-STEP PLAYBOOK */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Industry Playbook"
              title={
                <>
                  Our 3-Step Execution Plan For{" "}
                  <span className="text-heading-gradient">{data.title}.</span>
                </>
              }
              body="A transparent, hassle-free roadmap built to deliver booked appointments with zero tech headache."
            />
          </FadeIn>

          <ol className="mt-14 grid gap-8 lg:grid-cols-3">
            {data.playbookSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <li className="group h-full rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:border-corporate-blue hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-corporate-blue text-white font-bold text-sm shadow-md">
                      {step.number}
                    </span>
                    <span className="rounded-full bg-corporate-blue/10 px-3 py-1 text-xs font-bold text-corporate-blue uppercase tracking-wider">
                      Phase {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">{step.description}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* 6. TESTIMONIALS SLIDER */}
      <Testimonials />

      {/* 7. INDUSTRY FAQ */}
      <section className="bg-slate-50/70 py-20 sm:py-28 border-t border-slate-200/80">
        <Container className="max-w-4xl">
          <FadeIn>
            <SectionHeading
              align="center"
              eyebrow="Industry FAQ"
              title={
                <>
                  Questions About Scaling{" "}
                  <span className="text-heading-gradient">{data.title}?</span>
                </>
              }
              body="Clear, honest answers to common questions about our industry-specific marketing systems."
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

      {/* 8. FINAL CTA SECTION (MATCHES HOMEPAGE CTA STYLE) */}
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
                Ready to Grow Your{" "}
                <span className="text-heading-gradient">{data.title} Practice?</span>
              </h2>

              <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Book your free, no-obligation business evaluation today. We will show you exactly how many leads your business is missing out on in your area.
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
