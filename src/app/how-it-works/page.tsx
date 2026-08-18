import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { steps } from "@/lib/site";

export const metadata: Metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl">
          From First Call to Full Calendar — Here&apos;s Exactly What Happens
        </h1>
        <ol className="mt-12 grid gap-5">
          {steps.map((item) => (
            <li key={item.step} className="rounded-2xl border border-line p-6">
              <p className="text-sm font-bold text-teal">{item.step}</p>
              <h2 className="mt-2 text-2xl font-bold text-black">{item.title}</h2>
              <p className="mt-2 text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
        <Button className="mt-10" asChild>
          <Link href="/audit">Start With a Free Evaluation</Link>
        </Button>
      </Container>
    </section>
  );
}
