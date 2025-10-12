import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaThreads, FaEnvelope } from "react-icons/fa6";


const socialLinksData = [
  {
    href: "https://github.com/sekain",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/victor-sepulveda-developer/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.threads.net/@sekain.dev",
    icon: FaThreads,
    label: "Threads",
  },
  {
    href: "mailto:victor.sepulveda.c@outlook.com",
    icon: FaEnvelope,
    label: "Correo",
  }
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socialLinksData.map((link) => (
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
    </div>
  );
}
