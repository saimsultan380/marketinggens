import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="How It Works"
            title="Simple. No Tech Headaches."
            body="Three steps. You stay in your business. We bring the customers."
          />
        </FadeIn>
        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.08}>
              <li className="h-full rounded-2xl border border-line p-8">
                <p className="text-sm font-bold tracking-[0.18em] text-teal">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
        <FadeIn className="mt-10">
          <Button variant="outline" asChild>
            <Link href="/how-it-works">
              See the Full Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
