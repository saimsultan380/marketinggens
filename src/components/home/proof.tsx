import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { stats, stories } from "@/lib/site";

export function Proof() {
  return (
    <section id="results" className="relative overflow-hidden bg-slate-50/70 py-20 sm:py-28 lg:py-32 border-y border-slate-200/80">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full bg-corporate-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-corporate-blue border border-corporate-blue/20 mb-4">
            <TrendingUp className="h-3.5 w-3.5" /> Proven Track Record
          </div>
          
          <h2 className="text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[54px]">
            Real Businesses. Real{" "}
            <span className="text-heading-gradient">Growth.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg font-normal">
            From initial campaign launch to a consistently full calendar of booked appointments.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-slate-200/80 py-6 sm:gap-6">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <Button size="lg" className="mt-8 shadow-md font-bold" asChild>
            <Link href="/results">
              Explore Case Studies
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {stories.map((item, i) => (
            <FadeIn
              key={item.title}
              delay={i * 0.06}
              className={
                i % 3 === 1
                  ? "sm:translate-y-6"
                  : i % 3 === 2
                    ? "sm:translate-y-12"
                    : ""
              }
            >
              <article className="group relative aspect-[3.8/5] overflow-hidden rounded-2xl border border-slate-200/80 bg-black/5 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition duration-300 group-hover:from-black/95 group-hover:via-black/55" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="inline-block rounded-md bg-corporate-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs sm:text-[11px]">
                    {item.type}
                  </span>
                  <h3 className="mt-2.5 text-[13px] font-semibold leading-snug text-white/95 sm:text-[14px]">
                    {item.title}
                  </h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
