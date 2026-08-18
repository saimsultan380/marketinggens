import { Cta } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Problem } from "@/components/home/problem";
import { Proof } from "@/components/home/proof";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { WhatWeDo } from "@/components/home/what-we-do";
import { WhoWeHelp } from "@/components/home/who-we-help";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <WhatWeDo />
      <WhoWeHelp />
      <HowItWorks />
      <Proof />
      <Testimonials />
      <Cta />
    </>
  );
}
