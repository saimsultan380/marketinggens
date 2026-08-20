import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";

export function Cta() {
  return (
    <section className="bg-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-teal/15 bg-[#f7fcfb] p-8 sm:p-12 md:p-14">
            <div
              className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal/8 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl text-left">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
                  Let&apos;s See How Many Customers You&apos;re{" "}
                  <span className="text-heading-gradient">Missing Out On.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  Book a free, no-obligation business evaluation. We&apos;ll tell you
                  honestly if we can help.
                </p>
              </div>
              <div className="flex shrink-0 flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/audit">
                    Book My Free Evaluation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
