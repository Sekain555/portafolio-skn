import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 sm:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                <p className="mt-4 text-muted-foreground">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
