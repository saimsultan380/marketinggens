import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { stats, stories } from "@/lib/site";

export function Proof() {
  return (
    <section id="results" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="teal-glow pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-teal">
            Featured Insights
          </p>
          <h2 className="mt-4 text-4xl leading-[1.12] font-bold tracking-tight text-black sm:text-5xl">
            Real businesses. Real{" "}
            <span className="text-heading-gradient">growth.</span>
          </h2>
          <p className="mt-4 text-lg text-muted">From first call to a fuller calendar.</p>
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-bold text-black">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
          <Button variant="gradient" className="mt-8" asChild>
            <Link href="/results">
              Explore More
              <ArrowRight className="h-4 w-4" />
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
                  ? "sm:translate-y-8"
                  : i % 3 === 2
                    ? "sm:translate-y-16"
                    : ""
              }
            >
              <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 18vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/15" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="inline-flex rounded-full bg-teal px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white sm:text-[11px]">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-[13px] font-bold leading-snug text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:text-sm">
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
