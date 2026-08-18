"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";
import { testimonials } from "@/lib/site";

const AUTO_MS = 5000;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-teal text-teal" : "fill-line text-line",
          )}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  quote,
  name,
  role,
  rating,
}: (typeof testimonials)[number]) {
  return (
    <blockquote className="flex h-full min-h-[260px] w-full flex-col rounded-2xl border border-line bg-white p-6 sm:p-7">
      <Stars rating={rating} />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-black sm:text-base">
        “{quote}”
      </p>
      <footer className="mt-6 flex items-center gap-3">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-teal/12 text-sm font-bold text-teal"
          aria-hidden
        >
          {initials(name)}
        </span>
        <div>
          <p className="text-sm font-bold text-black">{name}</p>
          <p className="text-sm text-muted">{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  const labelId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const programmatic = useRef(false);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const maxIndex = Math.max(0, testimonials.length - perView);
  const pageCount = maxIndex + 1;

  const measure = useCallback(() => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    if (!track || !first) return;
    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const step = first.offsetWidth + gap;
    const nextPerView = Math.max(
      1,
      Math.round((track.clientWidth + gap) / step),
    );
    setPerView(nextPerView);
  }, []);

  const scrollToIndex = useCallback((next: number, smooth = true) => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const card = track?.children[next] as HTMLElement | undefined;
    if (!track || !first || !card) return;
    programmatic.current = true;
    track.scrollTo({
      left: card.offsetLeft - first.offsetLeft,
      behavior: smooth ? "smooth" : "auto",
    });
    window.setTimeout(() => {
      programmatic.current = false;
    }, smooth ? 650 : 50);
  }, []);

  const goTo = useCallback(
    (next: number, smooth = true) => {
      const clamped = Math.min(Math.max(next, 0), maxIndex);
      setIndex(clamped);
      scrollToIndex(clamped, smooth);
    },
    [maxIndex, scrollToIndex],
  );

  const goNext = useCallback(() => {
    goTo(index >= maxIndex ? 0 : index + 1, index < maxIndex);
  }, [goTo, index, maxIndex]);

  const goPrev = useCallback(() => {
    goTo(index <= 0 ? maxIndex : index - 1, index > 0);
  }, [goTo, index, maxIndex]);

  useLayoutEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || !inView || pageCount <= 1) return;
    const timer = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [goNext, inView, pageCount, paused, reduceMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      if (programmatic.current) return;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const first = track.children[0] as HTMLElement | undefined;
        if (!first) return;
        const styles = getComputedStyle(track);
        const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
        const step = first.offsetWidth + gap;
        const next = Math.round(track.scrollLeft / step);
        setIndex(Math.min(Math.max(next, 0), maxIndex));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, [maxIndex]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[58%] opacity-40 teal-glow"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              titleId={labelId}
              eyebrow="Reviews"
              title={
                <>
                  What business owners{" "}
                  <span className="text-heading-gradient">actually say</span>
                </>
              }
              body="Straight talk from shops, restaurants, clinics, and agencies that wanted more customers — not another marketing lecture."
            />
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-2xl border border-line bg-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <Stars rating={5} />
                  <p className="text-sm font-bold text-black">4.9 / 5</p>
                </div>
                <p className="mt-1 text-xs text-muted">From client reviews</p>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={goPrev}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-black transition hover:border-teal hover:text-teal"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-black transition hover:border-teal hover:text-teal"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 touch-pan-x sm:gap-5"
            role="region"
            aria-roledescription="carousel"
            aria-labelledby={labelId}
            tabIndex={0}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                goNext();
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goPrev();
              }
            }}
          >
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="flex w-[85%] shrink-0 snap-start snap-always sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]"
                aria-roledescription="slide"
                aria-label={`${item.name}, ${item.role}`}
              >
                <ReviewCard {...item} />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 sm:justify-center">
          <button
            type="button"
            onClick={goPrev}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-black transition hover:border-teal hover:text-teal sm:hidden"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  i === index
                    ? "w-7 bg-teal"
                    : "w-2.5 bg-line hover:bg-teal/50",
                )}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-black transition hover:border-teal hover:text-teal sm:hidden"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
