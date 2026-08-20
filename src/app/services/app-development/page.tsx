import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Custom App Development | MarketingGens",
  description:
    "Build custom web portals and mobile applications to automate client scheduling and operations.",
};

export default function AppDevelopmentPage() {
  const data = servicesData["app-development"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
