import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
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

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center scroll-mt-20"
    >
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Víctor Sepúlveda (Sekain)
          </h1>
          <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Ingeniero y programador chileno que fusiona la informática con la creatividad del arte, la música y el desarrollo de sistemas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="w-12 h-12 rounded-full"
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
             <Button size="lg" asChild className="rounded-full">
              <Link href="#contacto">
                Contáctame
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
