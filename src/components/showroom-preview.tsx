'use client';

import { useState } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Button } from '@/components/ui/button';
import { PieceCard } from '@/components/piece-card';
import { getFeaturedPieces } from '@/lib/showroom3d';
import type { Piece } from '@/lib/showroom3d';

interface ShowroomPreviewClientProps {
  featuredPieces: Piece[];
}

function ShowroomPreviewClient({ featuredPieces }: ShowroomPreviewClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activePiece, setActivePiece] = useState<Piece | null>(null);

  const slides = activePiece
    ? [activePiece.image, ...(activePiece.gallery ?? [])].map((src) => ({ src }))
    : [];

  function handleImageClick(piece: Piece) {
    setActivePiece(piece);
    setLightboxIndex(0);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPieces.map((piece, index) => (
          <PieceCard
            key={piece.id}
            piece={piece}
            index={index}
            onImageClick={() => handleImageClick(piece)}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  );
}

export function ShowroomPreview() {
  const featuredPieces = getFeaturedPieces().slice(0, 3);

  return (
    <section
      id="impresion-3d"
      aria-labelledby="impresion-3d-title"
      className="py-24 sm:py-32 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            id="impresion-3d-title"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            Impresión 3D y Prototipado
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Diseño y fabricación de piezas funcionales y prototipos con impresión 3D FDM.
            Materiales PLA, PETG y PLA+ para proyectos técnicos y creativos.
          </p>
        </div>

        <ShowroomPreviewClient featuredPieces={featuredPieces} />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button asChild>
            <Link href="/impresion-3d">Ver showroom completo</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
