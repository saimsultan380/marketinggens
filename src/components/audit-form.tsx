"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/field";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  business: z.string().min(2, "Please enter your business name"),
  industry: z.string().min(1, "Please choose an industry"),
  phone: z.string().min(7, "Please enter a phone number"),
  time: z.string().min(1, "Please tell us when to call"),
});

type FormValues = z.infer<typeof schema>;

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  if (compact) {
    return (
      <form
        className="rounded-2xl border border-line p-4 sm:p-5 lg:p-7 bg-white shadow-xs"
        onSubmit={handleSubmit(() => {
          toast.success("Thanks — we'll be in touch shortly.");
          reset();
        })}
      >
        <div className="grid grid-cols-1 gap-3 lg:gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-black lg:text-sm">Your Name</label>
            <Input
              className="mt-1 h-10 lg:h-11 text-xs sm:text-sm"
              placeholder="John Doe"
              {...register("name")}
            />
            {errors.name ? (
              <p className="mt-0.5 text-xs text-teal">{errors.name.message}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-xs font-semibold text-black lg:text-sm">Phone Number</label>
            <Input
              className="mt-1 h-10 lg:h-11 text-xs sm:text-sm"
              type="tel"
              placeholder="(555) 000-0000"
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="mt-0.5 text-xs text-teal">{errors.phone.message}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-3 lg:mt-4 grid grid-cols-1 gap-3 lg:gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-black lg:text-sm">Business Name</label>
            <Input
              className="mt-1 h-10 lg:h-11 text-xs sm:text-sm"
              placeholder="Acme Co."
              {...register("business")}
            />
            {errors.business ? (
              <p className="mt-0.5 text-xs text-teal">{errors.business.message}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-xs font-semibold text-black lg:text-sm">Industry</label>
            <select
              className="mt-1 h-10 lg:h-11 w-full rounded-xl border border-black/15 bg-white px-3 text-xs sm:text-sm text-black outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 cursor-pointer"
              {...register("industry")}
            >
              <option value="" className="bg-white text-black py-2">Select industry</option>
              <option className="bg-white text-black py-2">Local Business</option>
              <option className="bg-white text-black py-2">Restaurant</option>
              <option className="bg-white text-black py-2">Ecommerce</option>
              <option className="bg-white text-black py-2">Insurance</option>
              <option className="bg-white text-black py-2">Medical & Wellness</option>
              <option className="bg-white text-black py-2">Other</option>
            </select>
            {errors.industry ? (
              <p className="mt-0.5 text-xs text-teal">{errors.industry.message}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-3 lg:mt-4">
          <label className="block text-xs font-semibold text-black lg:text-sm">Best Time To Call</label>
          <Input
            className="mt-1 h-10 lg:h-11 text-xs sm:text-sm"
            placeholder="e.g. Weekday mornings"
            {...register("time")}
          />
          {errors.time ? (
            <p className="mt-0.5 text-xs text-teal">{errors.time.message}</p>
          ) : null}
        </div>

        <Button type="submit" size="md" className="mt-5 w-full h-11 lg:h-12 text-sm font-bold" disabled={isSubmitting}>
          Book My Free Audit
        </Button>
        <p className="mt-2.5 text-center text-[11px] lg:text-xs text-muted">
          100% Free & Confidential. No pressure or sales pitches.
        </p>
      </form>
    );
  }

  return (
    <form
      className="rounded-2xl border border-line p-6 sm:p-8"
      onSubmit={handleSubmit(() => {
        toast.success("Thanks — we'll be in touch shortly.");
        reset();
      })}
    >
      <label className="block text-sm font-semibold">Name</label>
      <Input className="mt-2" {...register("name")} />
      {errors.name ? (
        <p className="mt-1 text-sm text-teal">{errors.name.message}</p>
      ) : null}

      <label className="mt-4 block text-sm font-semibold">Business name</label>
      <Input className="mt-2" {...register("business")} />
      {errors.business ? (
        <p className="mt-1 text-sm text-teal">{errors.business.message}</p>
      ) : null}

      <label className="mt-4 block text-sm font-semibold">Industry</label>
      <select
        className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-[15px] text-black outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 cursor-pointer"
        {...register("industry")}
      >
        <option value="" className="bg-white text-black py-2">Select one</option>
        <option className="bg-white text-black py-2">Local Business</option>
        <option className="bg-white text-black py-2">Restaurant</option>
        <option className="bg-white text-black py-2">Ecommerce</option>
        <option className="bg-white text-black py-2">Insurance</option>
        <option className="bg-white text-black py-2">Medical & Wellness</option>
        <option className="bg-white text-black py-2">Other</option>
      </select>
      {errors.industry ? (
        <p className="mt-1 text-sm text-teal">{errors.industry.message}</p>
      ) : null}

      <label className="mt-4 block text-sm font-semibold">Phone</label>
      <Input className="mt-2" type="tel" {...register("phone")} />
      {errors.phone ? (
        <p className="mt-1 text-sm text-teal">{errors.phone.message}</p>
      ) : null}

      <label className="mt-4 block text-sm font-semibold">Best time to call</label>
      <Input className="mt-2" placeholder="Weekday mornings" {...register("time")} />
      {errors.time ? (
        <p className="mt-1 text-sm text-teal">{errors.time.message}</p>
      ) : null}

      <Button type="submit" className="mt-6 w-full" disabled={isSubmitting}>
        Book My Free Evaluation
      </Button>
      <p className="mt-4 text-center text-sm text-muted">
        No obligation. If we can&apos;t help you grow, we&apos;ll tell you honestly.
      </p>
    </form>
  );
}
