// Feature: showroom-3d, Property 3: PieceCard renderiza todos los campos requeridos

import React from 'react';
import { render, within } from '@testing-library/react';
import * as fc from 'fast-check';
import { PieceCard } from '@/components/piece-card';
import type { Piece } from '@/lib/showroom3d';

/**
 * Arbitrary for a non-blank string (at least one non-whitespace character).
 * Strings are trimmed so getByText can match the normalized DOM text.
 */
const nonBlankString = (maxLength: number): fc.Arbitrary<string> =>
  fc
    .string({ minLength: 1, maxLength })
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

/**
 * Arbitrary generator for valid Piece objects.
 * - All text fields have at least one visible character (no whitespace-only strings).
 * - description is constrained to ≤ 120 chars as per the data model.
 */
const arbitraryPiece: fc.Arbitrary<Piece> = fc.record({
  id: nonBlankString(50),
  name: nonBlankString(80),
  material: nonBlankString(40),
  description: nonBlankString(120),
  image: fc.constant('/pieces/test/cover.jpg'),
  tags: fc.array(nonBlankString(20), { minLength: 1, maxLength: 5 }),
  featured: fc.boolean(),
  gallery: fc.option(
    fc.array(fc.constant('/pieces/test/gallery-1.jpg'), { minLength: 0, maxLength: 3 }),
    { nil: undefined }
  ),
});

/**
 * **Validates: Requirements 3.3, 4.1**
 *
 * Property 3: PieceCard renders all required fields (name, material, description)
 * for any valid arbitrary Piece object.
 */
describe('PieceCard — Propiedad 3', () => {
  it('renderiza nombre, material y descripción para cualquier pieza válida', () => {
    fc.assert(
      fc.property(arbitraryPiece, (piece) => {
        const { container, unmount } = render(
          <PieceCard piece={piece} index={0} onImageClick={jest.fn()} />
        );
        try {
          const scope = within(container);
          // Use function matcher to handle whitespace normalization edge cases
          const hasText = (text: string) =>
            scope.getAllByText((_, el) => el?.textContent?.includes(text) ?? false).length > 0;
          expect(hasText(piece.name)).toBe(true);
          expect(hasText(piece.material)).toBe(true);
          expect(hasText(piece.description)).toBe(true);
        } finally {
          unmount();
        }
      }),
      { numRuns: 100 }
    );
  });
});

// Unit tests for PieceCard — Requisitos 4.2 y 4.4

import { fireEvent } from '@testing-library/react';

const samplePiece: Piece = {
  id: 'test-piece',
  name: 'Engranaje Helicoidal',
  material: 'PLA',
  description: 'Engranaje de precisión para prototipo mecánico.',
  image: '/pieces/test-piece/cover.jpg',
  tags: ['mecánica', 'prototipo'],
  featured: false,
};

describe('PieceCard — Tests unitarios', () => {
  it('llama onImageClick con el índice correcto al hacer clic en la imagen (Requisito 4.2)', () => {
    const onImageClick = jest.fn();
    const { container } = render(
      <PieceCard piece={samplePiece} index={3} onImageClick={onImageClick} />
    );

    const imageContainer = container.querySelector('.cursor-pointer') as HTMLElement;
    fireEvent.click(imageContainer);

    expect(onImageClick).toHaveBeenCalledTimes(1);
    expect(onImageClick).toHaveBeenCalledWith(3);
  });

  it('muestra el placeholder ImageOff cuando la imagen falla (Requisito 4.4)', () => {
    const { container, queryByRole } = render(
      <PieceCard piece={samplePiece} index={0} onImageClick={jest.fn()} />
    );

    const img = container.querySelector('img') as HTMLImageElement;
    fireEvent.error(img);

    // img should no longer be in the DOM
    expect(queryByRole('img')).not.toBeInTheDocument();

    // placeholder div with bg-muted should be present
    const placeholder = container.querySelector('.bg-muted');
    expect(placeholder).toBeInTheDocument();
  });
});
