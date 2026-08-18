import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { serviceCards } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Everything You Need to Grow. Nothing You Have to Manage.
        </h1>
        <div className="mt-12 grid gap-5">
          {serviceCards.map((item) => (
            <div
              key={item.title}
              id={item.title.toLowerCase().replace(/\s+/g, "-")}
              className="rounded-2xl border border-line p-6 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-black">{item.title}</h2>
              <p className="mt-2 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <Button className="mt-10" asChild>
          <Link href="/audit">Not sure what you need? We&apos;ll tell you for free.</Link>
        </Button>
      </Container>
    </section>
  );
}
