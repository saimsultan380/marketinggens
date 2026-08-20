import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Local SEO & Map Pack Optimization | MarketingGens",
  description:
    "Dominate local Google search and Map Pack rankings to get nearby customers calling your business directly.",
};

export default function LocalSeoPage() {
  const data = servicesData["local-seo"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
