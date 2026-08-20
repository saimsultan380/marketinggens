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
            eyebrow="Who We Help"
            title="Discover our Impact Across Industries"
            body="Built for Businesses Like Yours — turning searchers and visitors into booked clients."
          />
        </FadeIn>

        <div className="mt-14 grid gap-x-16 gap-y-2 md:grid-cols-2">
          {industries.map((item, i) => {
            const Icon = iconMap[item.title] || Building2;
            const subtext = "subtext" in item ? (item.subtext as string) : null;

            return (
              <FadeIn key={item.title} delay={i * 0.03}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between border-b border-line py-5 transition hover:border-teal"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="h-5 w-5 shrink-0 text-teal transition duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="text-base font-bold text-black transition group-hover:text-teal sm:text-lg">
                        {item.title}
                      </h3>
                      {subtext ? (
                        <p className="mt-0.5 text-xs text-muted font-normal">
                          {subtext}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted transition duration-300 group-hover:translate-x-1 group-hover:text-teal" />
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 flex justify-center">
          <Button size="lg" asChild>
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
