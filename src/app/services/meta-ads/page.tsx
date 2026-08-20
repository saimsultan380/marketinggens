import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram) | MarketingGens",
  description:
    "Target ready buyers with high-converting Facebook and Instagram ad campaigns engineered for leads.",
};

export default function MetaAdsPage() {
  const data = servicesData["meta-ads"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
