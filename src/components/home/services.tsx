"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { serviceCards } from "@/lib/site";

const featured = serviceCards.slice(0, 3);
const extra = serviceCards.slice(3);

function ServiceCard({ title, image }: { title: string; image: string }) {
  const href = `/services#${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link
      href={href}
      className="group relative block aspect-[5/3.2] overflow-hidden rounded-2xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/50 transition group-hover:bg-black/40" />
      <h3 className="absolute top-5 left-5 max-w-[90%] text-lg font-bold leading-tight text-white sm:text-xl">
        {title}
      </h3>
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
              <ServiceCard title={item.title} image={item.image} />
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
                  <ServiceCard key={item.title} title={item.title} image={item.image} />
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
