"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative sticky top-0 z-50 border-b border-line bg-white">
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="MarketingGens home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-black hover:text-teal"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-0 top-full z-20 min-w-52 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-line bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-black hover:bg-teal/10 hover:text-teal"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-black hover:text-teal",
                  pathname === link.href && "text-teal",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Let&apos;s Talk Business</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/audit">Get My Free Business Audit</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-black lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-full z-50 lg:hidden"
          >
            <button
              type="button"
              className="fixed inset-0 top-[72px] bg-black/40"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div className="relative max-h-[calc(100svh-72px)] overflow-y-auto border-t border-line bg-white shadow-lg">
              <Container className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold uppercase tracking-wide"
                    >
                      {link.label}
                    </Link>
                    {"children" in link && link.children ? (
                      <div className="mt-2 flex flex-col gap-2 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-sm text-muted"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                <Button asChild className="mt-2">
                  <Link href="/audit">Get My Free Business Audit</Link>
                </Button>
              </Container>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
