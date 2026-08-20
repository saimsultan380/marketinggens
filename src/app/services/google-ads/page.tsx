import type { Metadata } from "next";
import { ServicePageLanding } from "@/components/landing/service-page-landing";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Google Ads Management for Local Businesses | MarketingGens",
  description:
    "High-converting Google Ads campaigns and custom landing pages designed to get local businesses more leads and booked appointments.",
};

export default function ServicesGoogleAdsPage() {
  return <ServicePageLanding data={servicesData["google-ads"]} />;
}
