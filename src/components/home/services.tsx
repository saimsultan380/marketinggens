"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { serviceCards } from "@/lib/site";

const featured = serviceCards.slice(0, 3);
const extra = serviceCards.slice(3);

function ServiceCard({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: string;
}) {
  const slugMap: Record<string, string> = {
    "Google Ads": "google-ads",
    "Local SEO": "local-seo",
    "Social Media Marketing": "social-media",
    "Meta Ads": "meta-ads",
    "Email Marketing": "email-marketing",
    "Content Marketing": "content-marketing",
    "Website Development": "website-development",
    "App Development": "app-development",
    Shopify: "shopify",
  };
  const href = `/services/${slugMap[title] || title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link
      href={href}
      className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:min-h-[320px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25 transition duration-300 group-hover:from-black/95 group-hover:via-black/65" />
      
      <div className="relative z-10 flex flex-col items-start gap-2">
        <span className="rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider mb-1">
          High Performance Service
        </span>
        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-slate-200 sm:text-sm font-normal">
          {body}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-corporate-blue bg-corporate-blue px-4 py-1.5 text-xs font-bold text-white transition-all duration-300 group-hover:bg-bright-blue group-hover:border-bright-blue shadow-md">
          <span>Explore Service</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function Services() {
  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Our Growth Services"
            title={
              <>
                Google Ads, Marketing &{" "}
                <span className="text-heading-gradient">Growth.</span>
              </>
            }
            body="Ads, SEO, and social first. Websites, custom apps, and Shopify stores engineered for maximum conversions."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <ServiceCard title={item.title} body={item.body} image={item.image} />
            </FadeIn>
          ))}
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {extra.map((item) => (
                  <ServiceCard key={item.title} title={item.title} body={item.body} image={item.image} />
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-corporate-blue/40 bg-white px-8 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-corporate-blue hover:bg-corporate-blue hover:text-white"
          >
            {open ? "View Less Services" : "View All 9 Services"}
            {open ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </Container>
    </section>
  );
}
