import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPageLanding } from "@/components/landing/industry-page-landing";
import { industriesData } from "@/lib/industries-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = industriesData[slug];

  if (!data) {
    return {
      title: "Industry Not Found | MarketingGens",
    };
  }

  return {
    title: `${data.title} Lead Generation & Marketing Strategy | MarketingGens`,
    description: `Engineered growth blueprint, high-converting ad funnels, and local customer acquisition for ${data.title.toLowerCase()}.`,
  };
}

export default async function IndustrySlugPage({ params }: Props) {
  const { slug } = await params;
  const data = industriesData[slug];

  if (!data) {
    notFound();
  }

  return <IndustryPageLanding data={data} />;
}
