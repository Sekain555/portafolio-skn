// Feature: showroom-3d — Tests unitarios para ShowroomGallery (Requisito 4.5)

import React from 'react';
import { render } from '@testing-library/react';
import { ShowroomGallery } from '@/components/showroom-gallery';
import type { Piece } from '@/lib/showroom3d';

// Mock yet-another-react-lightbox to avoid browser API issues in jsdom
jest.mock('yet-another-react-lightbox', () => ({
  __esModule: true,
  default: () => null,
}));

const samplePieces: Piece[] = [
  {
    id: 'soporte-camara-v1',
    name: 'Soporte de Cámara Articulado',
    material: 'PLA',
    description: 'Soporte articulado para cámara de acción con ajuste de ángulo en 3 ejes.',
    image: 'https://picsum.photos/seed/soporte-camara/800/600',
    tags: ['PLA', 'Funcional'],
    featured: true,
  },
];

describe('ShowroomGallery — Tests unitarios', () => {
  it('el grid tiene clases grid-cols-1 md:grid-cols-2 lg:grid-cols-3 (Requisito 4.5)', () => {
    const { container } = render(<ShowroomGallery pieces={samplePieces} />);

    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });

  it('renderiza mensaje vacío cuando pieces es array vacío', () => {
    const { getByText } = render(<ShowroomGallery pieces={[]} />);

    expect(
      getByText('No hay piezas disponibles en el showroom.')
    ).toBeInTheDocument();
  });
});
