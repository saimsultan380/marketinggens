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
  const href =
    title === "Google Ads"
      ? "/services/google-ads"
      : `/services#${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link
      href={href}
      className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl p-6 transition sm:min-h-[300px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30 transition duration-300 group-hover:from-black/95 group-hover:via-black/70" />
      <div className="relative z-10 flex flex-col items-start gap-2">
        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-white/85 sm:text-sm">
          {body}
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-teal bg-transparent px-4 py-1.5 text-xs font-semibold text-white transition duration-300 group-hover:bg-teal group-hover:text-white">
          Learn More
          <ArrowRight className="h-3.5 w-3.5" />
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
            eyebrow="Services"
            title={
              <>
                Google Ads, Marketing &{" "}
                <span className="text-teal">Growth</span>
              </>
            }
            body="Ads, SEO, and social first. Websites, apps, and Shopify when you need them."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {extra.map((item) => (
                  <ServiceCard key={item.title} title={item.title} body={item.body} image={item.image} />
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-teal px-7 text-sm font-semibold text-black transition hover:bg-teal hover:text-white"
          >
            {open ? "View Less Services" : "View More Services"}
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
