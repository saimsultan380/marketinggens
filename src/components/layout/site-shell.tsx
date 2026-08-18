import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Link
        href="/audit"
        className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 rounded-l-lg bg-teal px-3 py-4 text-[11px] font-bold tracking-[0.16em] text-white uppercase [writing-mode:vertical-rl] lg:inline-flex"
      >
        Get My Free Audit
      </Link>
    </>
  );
}
