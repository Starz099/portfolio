import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "your-email@example.com",
      subject: `Portfolio Contact: ${validatedData.subject}`,
      replyTo: validatedData.email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${validatedData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #333; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            You can reply directly to this email to respond to ${validatedData.name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 },
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
