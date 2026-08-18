import type { Metadata } from "next";
import { AuditForm } from "@/components/audit-form";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Free Business Audit",
};

export default function AuditPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
            Free Business Audit
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Find Out How Many Customers You&apos;re Losing Right Now
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Free, no-pressure business evaluation. In 20 minutes, we&apos;ll show
            you exactly where you&apos;re losing leads — and whether we can fix it.
          </p>
        </div>
        <AuditForm />
      </Container>
    </section>
  );
}
