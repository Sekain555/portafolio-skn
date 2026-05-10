import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaThreads, FaEnvelope } from "react-icons/fa6";


const socialLinksData = [
  {
    href: "https://github.com/Sekain555",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/skn555/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:antonio.rms30@gmail.com",
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
