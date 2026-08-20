import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Content Marketing & Authority Building | MarketingGens",
  description:
    "Build authority and boost organic search reach with strategic, human-crafted content.",
};

export default function ContentMarketingPage() {
  const data = servicesData["content-marketing"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
