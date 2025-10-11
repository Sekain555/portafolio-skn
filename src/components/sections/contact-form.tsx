"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState<ContactFormState, FormData>(
    submitContactForm,
    { message: "" }
  );

  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: state.message,
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              rows={5}
              required
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
