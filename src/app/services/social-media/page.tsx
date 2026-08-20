import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Social Media Marketing | MarketingGens",
  description:
    "Build brand awareness on Facebook and Instagram to convert local followers into booked clients.",
};

export default function SocialMediaPage() {
  const data = servicesData["social-media"];
  if (!data) notFound();
  return <ServicePageLanding data={data} />;
}
