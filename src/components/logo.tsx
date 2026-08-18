import { cn } from "@/lib/cn";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden
      >
        <path
          d="M4 8.5L17 4l13 4.5v10.2c0 6.3-5.4 11.6-13 13.8C9.4 30.3 4 25 4 18.7V8.5z"
          fill="#0FBAB2"
        />
        <path
          d="M11 22V12h3.1l2.9 6.4L19.9 12H23v10h-2.3v-6.1L18.2 22h-2.4l-2.5-6.1V22H11z"
          fill="white"
        />
      </svg>
      <span
        className={cn(
          "text-[15px] font-bold tracking-tight",
          light ? "text-white" : "text-black",
        )}
      >
        MarketingGens
      </span>
    </span>
  );
}
