import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-[15px] text-black outline-none transition placeholder:text-muted focus:border-teal",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] text-black outline-none transition placeholder:text-muted focus:border-teal",
        className,
      )}
      {...props}
    />
  );
}
