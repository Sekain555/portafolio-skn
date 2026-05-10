'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Piece } from '@/lib/showroom3d';

interface PieceCardProps {
  piece: Piece;
  index: number;
  onImageClick: (index: number) => void;
}

export function PieceCard({ piece, index, onImageClick }: PieceCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-2xl border bg-card overflow-hidden flex flex-col">
      {/* Image — aspect ratio 4/3 */}
      <div
        className="relative w-full cursor-pointer overflow-hidden"
        style={{ paddingBottom: '75%' }}
        onClick={() => onImageClick(index)}
      >
        {imgError ? (
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <ImageOff className="h-8 w-8 text-muted-foreground" />
          </div>
        ) : (
          <Image
            src={piece.image}
            alt={piece.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-base leading-tight">{piece.name}</h3>
        <p className="text-sm text-muted-foreground font-medium">{piece.material}</p>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{piece.description}</p>
        <div className="flex flex-wrap gap-1 pt-1">
          {piece.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
