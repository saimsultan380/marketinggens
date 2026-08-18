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
          <div className="relative overflow-hidden rounded-3xl border border-teal/10 bg-[#f7fcfb] px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 rounded-full bg-teal/8 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal/6 blur-3xl"
              aria-hidden
            />
            <h2 className="relative text-3xl font-bold tracking-tight text-black sm:text-5xl">
              Let&apos;s See How Many Customers You&apos;re Missing Out On
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-muted">
              Book a free, no-obligation business evaluation. We&apos;ll tell you
              honestly if we can help.
            </p>
            <Button size="lg" className="relative mt-8" asChild>
              <Link href="/audit">
                Book My Free Evaluation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
