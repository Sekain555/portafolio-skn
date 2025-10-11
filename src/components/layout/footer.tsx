import Link from "next/link";
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
  { href: "mailto:contacto@vsepulveda.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Víctor Sepúlveda (Sekain). All rights reserved.
          </p>
          <p className="text-xs mt-1">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
