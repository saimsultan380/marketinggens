import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { stats, testimonials } from "@/lib/site";

export const metadata: Metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl">
          We Don&apos;t Just Promise Growth. We Show It.
        </h1>
        <div className="mt-10 flex flex-wrap gap-10">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-bold text-black">{item.value}</p>
              <p className="mt-1 text-muted">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-line p-6"
            >
              <p className="flex-1 text-black">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-muted">
                {item.name} · {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
        <Button className="mt-10" asChild>
          <Link href="/audit">Get My Free Business Audit</Link>
        </Button>
      </Container>
    </section>
  );
}
