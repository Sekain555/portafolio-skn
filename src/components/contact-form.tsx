"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"success" | "error" | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("La respuesta del servidor no fue exitosa.");
      }

      const result = await response.json();
      if (result.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        throw new Error(result.error || "Ocurrió un error desconocido.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="shadow-lg rounded-2xl w-full">
      <CardHeader>
        <CardTitle className="text-xl">Envíame un mensaje</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@correo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus === "success" && (
              <Alert variant="default" className="border-green-500/50 text-green-800 dark:text-green-300 [&>svg]:text-green-600 dark:[&>svg]:text-green-400" role="status" aria-live="polite">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>¡Mensaje enviado!</AlertTitle>
                <AlertDescription>
                  Gracias por contactarme. Te responderé a la brevedad.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert variant="destructive" role="alert" aria-live="assertive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error al enviar</AlertTitle>
                <AlertDescription>
                  Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.
                </AlertDescription>
              </Alert>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
