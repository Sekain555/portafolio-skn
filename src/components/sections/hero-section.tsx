import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThreadsIcon } from "@/components/icons/threads";

const socialLinks = [
  {
    href: "https://github.com/sekain",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/victor-sepulveda-developer/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.threads.net/@sekain.dev",
    icon: ThreadsIcon,
    label: "Threads",
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[calc(100vh-5rem)] min-h-[500px] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Víctor Sepúlveda
          </h1>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Full-Stack Developer crafting digital solutions that bridge ideas and reality.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="w-12 h-12"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
             <Button size="lg" asChild>
              <Link href="#contacto">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
