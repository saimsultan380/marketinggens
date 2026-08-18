import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { industries } from "@/lib/site";

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-white py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Who We Help"
            title={
              <>
                Built for{" "}
                <span className="text-teal">Businesses Like Yours</span>
              </>
            }
            body="Same goal every time: more of the right people calling, booking, and buying."
          />
        </FadeIn>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-line p-7 transition hover:border-teal hover:shadow-[0_12px_40px_rgba(15,186,178,0.12)]"
              >
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal">
                  See how we help
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
