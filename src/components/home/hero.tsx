"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { fadeUp, stagger } from "@/lib/motion";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[80svh] overflow-hidden sm:min-h-[calc(100svh-72px)] bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover filter brightness-90"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/65" />

      <Container className="relative flex min-h-[80svh] flex-col justify-center py-12 sm:min-h-[calc(100svh-72px)] sm:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-3xl text-left"
        >
          {/* Eyebrow Trust Badge */}
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
              <Star className="h-3.5 w-3.5 fill-bright-blue text-bright-blue" />
              <span>4.9/5 Rating across 120+ local businesses</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5 text-bright-blue" />
              <span>18,000+ Qualified leads delivered</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[34px] leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-[68px]"
          >
            More Customers.
            <br />
            <span className="text-heading-gradient-light">Predictably.</span> Every Month.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-200 sm:mt-6 sm:text-lg font-normal"
          >
            We help local service providers, healthcare clinics, restaurants, insurance brokers, and e-commerce stores capture high-intent buyers and turn them into booked revenue. Zero long-term contracts.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button size="lg" className="shadow-xl shadow-corporate-blue/25 hover:scale-[1.02] transition-transform duration-200 font-bold" asChild>
              <Link href="/audit">
                Get My Free Business Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-slate-300 font-medium sm:self-center">
              ⚡ Free 15-minute consultation • 100% Privacy
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Stat Counters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 sm:mt-16"
        >
          <div className="grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-6 sm:gap-8">
            {stats.map((item) => (
              <div key={item.label} className="text-left">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-medium leading-snug text-slate-300 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
