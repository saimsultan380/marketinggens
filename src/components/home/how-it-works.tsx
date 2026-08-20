import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-blue-50/50 via-white to-blue-50/40 py-20 sm:py-28 border-y border-slate-200/80">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Proven 3-Step Process"
            title={
              <>
                Simple. No{" "}
                <span className="text-heading-gradient">Tech Headaches.</span>
              </>
            }
            body="Three straightforward steps. You focus on serving your clients. We handle customer acquisition."
          />
        </FadeIn>
        
        <ol className="mt-14 grid gap-8 lg:grid-cols-3">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.08}>
              <li className="group h-full rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:border-corporate-blue hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-corporate-blue text-white font-bold text-sm shadow-md">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-corporate-blue/10 px-3 py-1 text-xs font-bold text-corporate-blue uppercase tracking-wider">
                    Phase {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">{item.body}</p>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn className="mt-12 flex justify-center">
          <Button variant="outline" className="border-corporate-blue/40 text-slate-900 font-bold hover:bg-corporate-blue hover:text-white" asChild>
            <Link href="/how-it-works">
              See The Full Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
