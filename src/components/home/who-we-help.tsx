import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  Dumbbell,
  HeartPulse,
  Home,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Utensils,
  Wrench,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { industries } from "@/lib/site";

const iconMap: Record<string, React.ElementType> = {
  "Local Businesses": Building2,
  "Restaurants & Food Services": Utensils,
  "Ecommerce & Retail": ShoppingBag,
  "Insurance Agencies": ShieldCheck,
  "Medical & Healthcare": Stethoscope,
  "Medical & Wellness Practices": HeartPulse,
  "Home Services & Contractors": Wrench,
  "Salons, Beauty & Spas": Scissors,
  "Fitness Centers & Gyms": Dumbbell,
  "Real Estate & Mortgage": Home,
  "Automotive & Repair Services": Car,
  "Professional & Legal Services": Briefcase,
};

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-white py-20 sm:py-28">
      <Container className="max-w-7xl">
        <FadeIn className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Industries We Scale"
            title={
              <>
                Discover Our Impact Across{" "}
                <span className="text-heading-gradient">Industries.</span>
              </>
            }
            body="Engineered for local service providers, practices, and e-commerce stores — turning searchers into booked revenue."
          />
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => {
            const Icon = iconMap[item.title] || Building2;
            const subtext = "subtext" in item ? (item.subtext as string) : null;

            return (
              <FadeIn key={item.title} delay={i * 0.02}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition duration-200 hover:border-corporate-blue hover:shadow-md hover:bg-blue-50/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-corporate-blue/10 text-corporate-blue transition duration-200 group-hover:bg-corporate-blue group-hover:text-white">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 transition group-hover:text-corporate-blue">
                        {item.title}
                      </h3>
                      {subtext ? (
                        <p className="mt-0.5 text-xs text-slate-500 font-normal">
                          {subtext}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition duration-200 group-hover:translate-x-1 group-hover:text-corporate-blue" />
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 flex justify-center">
          <Button size="lg" className="shadow-md font-bold" asChild>
            <Link href="/contact">
              Let&apos;s Talk Business
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
