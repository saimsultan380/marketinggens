import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { industries } from "@/lib/site";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl">
          We Know Your Industry. We Know What Gets You Customers.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Pick your business type. We&apos;ll show you how we fill the calendar.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {industries.map((item) => (
            <Link
              key={item.title}
              id={item.href.split("/").pop()}
              href="/audit"
              className="rounded-2xl border border-line p-7 hover:border-teal scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-black">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
        <Button className="mt-10" asChild>
          <Link href="/audit">
            Get My Free Business Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
