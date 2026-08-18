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
    <section className="relative h-[58svh] min-h-[400px] max-h-[500px] overflow-hidden sm:h-[calc(100svh-72px)] sm:min-h-[560px] sm:max-h-none">
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
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-transparent" />

      <Container className="relative flex h-full flex-col justify-center pt-10 pb-20 sm:pt-20 sm:pb-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl lg:text-[68px]"
          >
            More Customers.
            <br />
            Predictably. Every Month.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            We help local businesses, restaurants, ecommerce stores, and
            insurance agencies get a steady stream of leads and booked
            appointments — without you lifting a finger on marketing.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
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
          className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8"
        >
          <div className="grid grid-cols-3 gap-3 border-t border-white/20 pt-4 sm:max-w-xl sm:gap-8 sm:pt-5">
            {stats.map((item) => (
              <div key={item.label}>
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
