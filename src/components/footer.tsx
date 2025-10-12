import Link from 'next/link';
import { SocialLinks } from '@/components/social-links';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Navegación</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4">
               <SocialLinks />
            </div>
          </div>
           <div className="flex flex-col items-start md:items-end text-left md:text-right">
             <p className="text-sm text-muted-foreground">
               © {currentYear} Víctor ‘Sekain’ Sepúlveda. Todos los derechos reservados.
            </p>
             <p className="text-xs text-muted-foreground/80 mt-1">
               Diseño y desarrollo por Sekain.
            </p>
             <p className="text-xs text-muted-foreground/80 mt-4">
               Construido con Next.js y Tailwind CSS. Desplegado en Firebase.
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
           <p>– Víctor ‘Sekain’ Sepúlveda –</p>
        </div>
      </div>
    </footer>
  );
}
