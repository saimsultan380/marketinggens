import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { stats, stories } from "@/lib/site";

export function Proof() {
  return (
    <section id="results" className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      <div className="teal-glow pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-teal">
            Featured Insights
          </span>
          <h2 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-black sm:text-5xl lg:text-[56px]">
            Real businesses. Real{" "}
            <span className="text-heading-gradient">growth.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From first call to a fuller calendar.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-6 sm:gap-6">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl lg:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <Button size="lg" className="mt-8" asChild>
            <Link href="/results">
              Explore More
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
              <article className="group relative aspect-[3.8/5] overflow-hidden rounded-2xl border border-line/60 bg-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition duration-300 hover:shadow-[0_20px_40px_rgba(15,186,178,0.18)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/10 transition duration-300 group-hover:from-black/95 group-hover:via-black/55" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="inline-block rounded-md bg-teal px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs sm:text-[11px]">
                    {item.type}
                  </span>
                  <h3 className="mt-2.5 text-[13px] font-medium leading-snug text-white/95 sm:text-[14px]">
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
