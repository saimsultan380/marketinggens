import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-black">Privacy</h1>
        <p className="mt-6 leading-relaxed text-muted">
          We collect the information you share on our forms — like your name,
          business name, and phone number — so we can follow up about a free
          business audit. We don&apos;t sell your information.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Questions? Email hello@marketinggens.com.
        </p>
      </Container>
    </section>
  );
}
