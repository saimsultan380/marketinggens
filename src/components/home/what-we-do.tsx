import { FadeIn } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { outcomes } from "@/lib/site";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-24 h-[70%] opacity-50 teal-glow"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Do"
            title="Transform Your Business"
            body="We fill your calendar. You focus on running the business."
          />
        </FadeIn>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <p className="text-sm font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
