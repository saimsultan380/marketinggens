import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import {
  companyLinks,
  industries,
  legalLinks,
  serviceCards,
  site,
} from "@/lib/site";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
      {children}
    </p>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted transition hover:text-teal"
    >
      {label}
    </Link>
  );
}

function SocialIcon({ name }: { name: "linkedin" | "facebook" | "instagram" }) {
  const className = "h-4 w-4";
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.35 4.14.65c-.79.3-1.46.71-2.13 1.38A5.88 5.88 0 0 0 .65 4.14C.35 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.28 2.15.58 2.91.3.79.71 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.52 2.91.58C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.28 2.91-.58a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.52-1.64.58-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.28-2.15-.58-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.65c-.76-.3-1.64-.52-2.91-.58C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-white">
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-10 h-52 w-52 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            We don&apos;t sell marketing. We sell leads, appointments, and growth.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/audit">Get My Free Business Audit</Link>
          </Button>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: "https://www.linkedin.com", name: "linkedin" as const, label: "LinkedIn" },
              { href: "https://www.facebook.com", name: "facebook" as const, label: "Facebook" },
              { href: "https://www.instagram.com", name: "instagram" as const, label: "Instagram" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-black transition hover:border-teal hover:text-teal"
              >
                <SocialIcon name={item.name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <FooterHeading>Company</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Industries</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {industries.map((item) => (
              <li key={item.href}>
                <FooterLink
                  href={`/industries#${item.href.split("/").pop()}`}
                  label={item.title}
                />
              </li>
            ))}
            <li>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 text-sm font-semibold text-teal"
              >
                All industries
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>Services</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {serviceCards.slice(0, 6).map((item) => (
              <li key={item.title}>
                <FooterLink
                  href={`/services#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  label={item.title}
                />
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-teal"
              >
                All services
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <FooterHeading>Talk to us</FooterHeading>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2.5 text-sm text-muted hover:text-teal"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-start gap-2.5 text-sm text-muted hover:text-teal"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              {site.hours}
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              {site.location}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="relative flex flex-col gap-4 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
          <span className="hidden sm:inline">·</span>
          <p>Built for business owners who want more customers — not a tech lesson.</p>
        </div>
      </Container>
    </footer>
  );
}
