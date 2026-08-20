import { cn } from "@/lib/cn";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-corporate-blue",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  titleClassName,
  titleId,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
  titleClassName?: string;
  titleId?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2
        id={titleId}
        className={cn(
          "text-3xl leading-[1.12] font-bold tracking-tight text-black sm:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{body}</p>
      ) : null}
    </div>
  );
}
