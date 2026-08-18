import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
          About
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
          We&apos;re Not a Marketing Agency. We&apos;re Your Growth Partner.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          We work with local businesses, restaurants, ecommerce stores, insurance
          agencies, and medical practices. Our job is simple: more customers,
          more appointments, more growth.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          We only take clients we know we can help. If we can&apos;t grow your
          business, we&apos;ll tell you that on the first call.
        </p>
      </div>
    </section>
  );
}
