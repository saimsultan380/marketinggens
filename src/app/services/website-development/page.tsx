import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "High-Converting Website Development | MarketingGens",
  description:
    "Build lightning-fast, high-converting websites optimized specifically to capture leads.",
};

export default function WebsiteDevelopmentPage() {
  const data = servicesData["website-development"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
