import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Email Marketing & SMS Automation | MarketingGens",
  description:
    "Automate smart email and SMS follow-ups that turn prospects into booked clients on autopilot.",
};

export default function EmailMarketingPage() {
  const data = servicesData["email-marketing"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
