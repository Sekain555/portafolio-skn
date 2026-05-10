'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { PieceCard } from '@/components/piece-card';
import type { Piece } from '@/lib/showroom3d';

interface ShowroomGalleryProps {
  pieces: Piece[];
}

export function ShowroomGallery({ pieces }: ShowroomGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activePiece, setActivePiece] = useState<Piece | null>(null);

  if (pieces.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-12">
        No hay piezas disponibles en el showroom.
      </p>
    );
  }

  const slides = activePiece
    ? [activePiece.image, ...(activePiece.gallery ?? [])].map((src) => ({ src }))
    : [];

  function handleImageClick(piece: Piece, index: number) {
    setActivePiece(piece);
    setLightboxIndex(index);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pieces.map((piece, index) => (
          <PieceCard
            key={piece.id}
            piece={piece}
            index={index}
            onImageClick={() => handleImageClick(piece, 0)}
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
