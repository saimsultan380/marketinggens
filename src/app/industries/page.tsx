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
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-line p-7 hover:border-corporate-blue transition duration-200 shadow-xs hover:shadow-md bg-white hover:bg-blue-50/20 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-corporate-blue transition-colors">{item.title}</h2>
                <p className="mt-3 text-sm text-slate-600 font-normal leading-relaxed">{item.body}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-corporate-blue">
                <span>View Industry Blueprint</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
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
