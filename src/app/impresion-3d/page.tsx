import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ShowroomGallery } from "@/components/showroom-gallery";
import { Button } from "@/components/ui/button";
import { getPieces } from "@/lib/showroom3d";

export const metadata: Metadata = {
  title: "Impresión 3D y Prototipado | Víctor Sepúlveda",
  description:
    "Servicio de impresión 3D FDM y prototipado técnico. Piezas funcionales en PLA, PETG y PLA+ para proyectos de ingeniería, IoT y diseño.",
  openGraph: {
    title: "Impresión 3D y Prototipado | Víctor Sepúlveda",
    description:
      "Servicio de impresión 3D FDM y prototipado técnico. Piezas funcionales en PLA, PETG y PLA+ para proyectos de ingeniería, IoT y diseño.",
    type: "website",
  },
};

export default function ImpresionPage() {
  const pieces = getPieces();

  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Impresión 3D", href: "/impresion-3d" },
        ]}
      />

      {/* Hero section */}
      <section className="mb-16">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4">
          Impresión 3D y Prototipado
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Fabricación de piezas funcionales y prototipos mediante impresión 3D FDM.
          Desde soportes y carcasas hasta mecanismos y piezas de precisión.
        </p>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Capacidades técnicas
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>Materiales: PLA, PETG, PLA+</li>
            <li>Precisión: capas de 0.1 a 0.2 mm</li>
            <li>Tipos: piezas funcionales, prototipos, carcasas, mecanismos</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <ShowroomGallery pieces={pieces} />
      </section>

      {/* CTA section */}
      <section className="text-center py-12 border-t">
        <h2 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Cuéntame sobre tu idea y te ayudo a hacerla realidad con impresión 3D.
        </p>
        <Button asChild size="lg">
          <Link href="/#contacto">Solicitar cotización</Link>
        </Button>
      </section>
    </main>
  );
}
