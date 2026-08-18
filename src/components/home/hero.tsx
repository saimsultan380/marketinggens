"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { fadeUp, stagger } from "@/lib/motion";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[78svh] overflow-hidden sm:min-h-[calc(100svh-72px)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/35 to-black/70" />

      <Container className="relative flex min-h-[78svh] flex-col justify-center py-10 sm:min-h-[calc(100svh-72px)] sm:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-3xl text-left"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[32px] leading-[1.08] font-bold tracking-tight text-white sm:text-6xl lg:text-[68px]"
          >
            More Customers.
            <br />
            Predictably. Every Month.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 sm:mt-6 sm:text-lg"
          >
            We help local businesses, restaurants, ecommerce stores, and
            insurance agencies get a steady stream of leads and booked
            appointments — without you lifting a finger on marketing.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
            <Button size="lg" asChild>
              <Link href="/audit">
                Get My Free Business Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 sm:mt-16"
        >
          <div className="grid max-w-xl grid-cols-3 gap-3 border-t border-white/20 pt-5 sm:gap-8">
            {stats.map((item) => (
              <div key={item.label} className="text-left">
                <p className="text-xl font-bold tracking-tight text-white sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/75 sm:text-sm">
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
