import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { outcomes } from "@/lib/site";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Deliver"
            title={
              <>
                Transform Your{" "}
                <span className="text-heading-gradient">Business.</span>
              </>
            }
            body="Everything You Need To Scale Revenue. Zero Technical Busywork For You."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:border-corporate-blue hover:shadow-xl hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-corporate-blue/10 text-corporate-blue font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <CheckCircle2 className="h-5 w-5 text-corporate-blue opacity-80" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-corporate-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
                    {item.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex justify-center">
          <Button size="lg" className="shadow-md font-bold" asChild>
            <Link href="/audit">
              Book Business Evaluation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
