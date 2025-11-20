"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Define the form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <Label htmlFor="subject">
            Subject <span className="text-destructive">*</span>
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="Project inquiry"
            aria-invalid={!!errors.subject}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="text-destructive text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Tell me about your project or question..."
            className="min-h-[150px] resize-y"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-destructive text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
          size="lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {/* Status Messages */}
        {submitStatus.type && (
          <div
            className={`mt-4 rounded-md border p-4 ${
              submitStatus.type === "success"
                ? "border-green-500 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950/30 dark:text-green-300"
                : "border-destructive bg-destructive/10 text-destructive"
            }`}
            role="alert"
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}
