import * as fc from 'fast-check';
import { getPieces, getFeaturedPieces } from '@/lib/showroom3d';

// Feature: showroom-3d, Property 1: Campos completos en todas las piezas
describe('Propiedad 1 — Campos completos en todas las piezas', () => {
  it('todas las piezas tienen campos requeridos y description ≤ 120 chars', () => {
    const pieces = getPieces();
    fc.assert(
      fc.property(fc.constantFrom(...pieces), (piece) => {
        expect(piece.id).toBeTruthy();
        expect(piece.name).toBeTruthy();
        expect(piece.material).toBeTruthy();
        expect(piece.description.length).toBeGreaterThan(0);
        expect(piece.description.length).toBeLessThanOrEqual(120);
        expect(piece.image).toBeTruthy();
        expect(piece.tags.length).toBeGreaterThan(0);
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: showroom-3d, Property 2: Piezas destacadas aparecen en la preview
describe('Propiedad 2 — Piezas destacadas aparecen en la preview', () => {
  it('getFeaturedPieces retorna exactamente las piezas con featured=true', () => {
    const allPieces = getPieces();
    fc.assert(
      fc.property(fc.constantFrom(...allPieces), (piece) => {
        const featured = getFeaturedPieces();
        const isInFeatured = featured.some((p) => p.id === piece.id);
        expect(isInFeatured).toBe(piece.featured);
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: showroom-3d, Property 4: Invariante de longitud de descripción
describe('Propiedad 4 — Invariante de longitud de descripción', () => {
  it('description de cualquier pieza tiene entre 1 y 120 caracteres', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1 }),
          name: fc.string({ minLength: 1 }),
          material: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1, maxLength: 120 }),
          image: fc.string({ minLength: 1 }),
          tags: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
          featured: fc.boolean(),
        }),
        (piece) => {
          expect(piece.description.length).toBeGreaterThan(0);
          expect(piece.description.length).toBeLessThanOrEqual(120);
        }
      ),
      { numRuns: 100 }
    );
  });
});
