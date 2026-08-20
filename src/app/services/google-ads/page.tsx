import type { Metadata } from "next";
import { GoogleAdsLanding } from "@/components/landing/google-ads-landing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Ads Management for Local Businesses | MarketingGens",
  description:
    "High-converting Google Ads campaigns and custom landing pages designed to get local businesses more leads and booked appointments.",
};

export default function ServicesGoogleAdsPage() {
  return <GoogleAdsLanding />;
}
