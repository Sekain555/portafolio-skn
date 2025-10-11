"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message must be no more than 500 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data.",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  console.log("Form data received:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Message:", parsed.data.message);

  // Here you would typically send an email or save to a database
  // For this example, we'll just simulate a success response

  return { message: "Thank you for your message! I will get back to you soon." };
}
