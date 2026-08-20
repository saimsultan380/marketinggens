import { CheckCircle2, XCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { problems } from "@/lib/site";

export function Problem() {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-28 border-y border-slate-200/80">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionHeading
            eyebrow="The Common Struggle"
            title={
              <>
                Your Business Deserves More{" "}
                <span className="text-heading-gradient">Customers.</span>
              </>
            }
            body="You did not open a business to spend your nights guessing at ads. You opened it to serve clients, but traditional marketing keeps burning budget."
          />
          
          <div className="mt-8 rounded-2xl border border-corporate-blue/20 bg-white p-6 shadow-sm">
            <h4 className="text-base font-bold text-slate-900">
              The Reality Of Frustrating Lead Generation
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              If your current marketing feels like throwing money into a black hole with zero clarity on sales, it is not a &quot;you&quot; problem. It is a system flaw, and we fix it completely.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-5 flex items-center justify-between">
              <span>Why Old Marketing Methods Fail</span>
              <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">Common Traps</span>
            </h3>

            <ul className="space-y-4">
              {problems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:border-corporate-blue/30"
                >
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-sm font-medium leading-relaxed text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
