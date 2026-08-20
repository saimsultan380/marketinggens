import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { problems } from "@/lib/site";

export function Problem() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionHeading
            eyebrow="The Problem"
            title="Your Business Deserves More Customers Than It's Getting"
            body="You did not open a business to spend your nights guessing at ads. You opened it to serve people, and the calendar still stays patchy."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className="space-y-4">
            {problems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-line bg-white px-5 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span className="text-[15px] leading-relaxed text-black">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-muted sm:text-base">
            If any of this sounds familiar, you are not alone, and it is not a &quot;you&quot; problem. It is a visibility and follow-up problem, and it is fixable.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
