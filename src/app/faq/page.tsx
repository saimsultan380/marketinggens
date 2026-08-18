import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  ["How fast will I see results?", "It depends on your industry and starting point. On the free audit, we'll tell you what a realistic timeline looks like for your business — not a generic promise."],
  ["Do I need to know anything about marketing or tech?", "No. You run the business. We handle the rest."],
  ["What if it doesn't work for my business?", "We only take clients we believe we can help. If we can't, we'll say so on the first call."],
  ["Is the audit really free?", "Yes. No charge, no obligation."],
  ["What industries do you work with?", "Local businesses, restaurants, ecommerce, insurance, and medical & wellness practices."],
  ["Do you require a long-term contract?", "We'll explain options on the audit call. No surprises, and no pressure to sign something you don't understand."],
];

export default function FaqPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Common Questions
        </h1>
        <div className="mt-12 space-y-8">
          {faqs.map(([q, a]) => (
            <div key={q}>
              <h2 className="text-xl font-bold text-black">{q}</h2>
              <p className="mt-2 text-muted">{a}</p>
            </div>
          ))}
        </div>
        <Button className="mt-10" asChild>
          <Link href="/audit">Get My Free Business Audit</Link>
        </Button>
      </Container>
    </section>
  );
}
