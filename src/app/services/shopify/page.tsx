import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Shopify E-Commerce Store Optimization | MarketingGens",
  description:
    "Build and optimize high-converting Shopify stores with streamlined checkouts to boost sales.",
};

export default function ShopifyPage() {
  const data = servicesData["shopify"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
