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

export function AuditForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

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
        className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-[15px] outline-none focus:border-teal"
        {...register("industry")}
      >
        <option value="">Select one</option>
        <option>Local Business</option>
        <option>Restaurant</option>
        <option>Ecommerce</option>
        <option>Insurance</option>
        <option>Medical & Wellness</option>
        <option>Other</option>
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
