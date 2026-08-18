import type { Metadata } from "next";
import { AuditForm } from "@/components/audit-form";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Let&apos;s Talk About Growing Your Business
        </h1>
        <p className="mt-4 text-lg text-muted">
          Tell us a little about your business. We&apos;ll follow up to see if we
          can help.
        </p>
        <div className="mt-10">
          <AuditForm />
        </div>
      </Container>
    </section>
  );
}
