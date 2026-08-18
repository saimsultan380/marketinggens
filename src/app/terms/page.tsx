import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-black">Terms</h1>
        <p className="mt-6 leading-relaxed text-muted">
          The free audit is a conversation, not a contract. If we work together
          after that, we&apos;ll put the agreement in writing in plain English
          before anything starts.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Questions? Email hello@marketinggens.com.
        </p>
      </Container>
    </section>
  );
}
