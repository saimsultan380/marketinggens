import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <Container className="text-center">
        <h1 className="text-4xl font-bold text-black">Page not found</h1>
        <p className="mt-4 text-muted">Let&apos;s get you back to growing your business.</p>
        <Button className="mt-8" asChild>
          <Link href="/">Go home</Link>
        </Button>
      </Container>
    </section>
  );
}
