// Feature: showroom-3d — Tests unitarios para la página dedicada /impresion-3d

import React from 'react';
import { render } from '@testing-library/react';

// Mock yet-another-react-lightbox (used inside ShowroomGallery)
jest.mock('yet-another-react-lightbox', () => ({
  __esModule: true,
  default: () => null,
}));

// Mock yet-another-react-lightbox/styles.css (CSS import)
jest.mock('yet-another-react-lightbox/styles.css', () => ({}), { virtual: true });

import { metadata } from '@/app/impresion-3d/page';
import ImpresionPage from '@/app/impresion-3d/page';

/**
 * Test 1: metadata exporta title, description y openGraph (Requisito 3.7)
 */
describe('metadata de /impresion-3d', () => {
  it('exporta title y description como strings no vacíos', () => {
    expect(typeof metadata.title).toBe('string');
    expect((metadata.title as string).length).toBeGreaterThan(0);

    expect(typeof metadata.description).toBe('string');
    expect((metadata.description as string).length).toBeGreaterThan(0);
  });

  it('exporta openGraph con title y description', () => {
    expect(metadata.openGraph).toBeDefined();
    expect(typeof metadata.openGraph!.title).toBe('string');
    expect((metadata.openGraph!.title as string).length).toBeGreaterThan(0);
    expect(typeof metadata.openGraph!.description).toBe('string');
    expect((metadata.openGraph!.description as string).length).toBeGreaterThan(0);
  });
});

/**
 * Test 2: CTA final apunta a /#contacto sin target="_blank" (Requisito 5.2)
 */
describe('ImpresionPage — CTA final', () => {
  it('el enlace "Solicitar cotización" apunta a /#contacto y no abre en nueva pestaña', () => {
    const { getByRole } = render(<ImpresionPage />);

    const link = getByRole('link', { name: /solicitar cotización/i });

    expect(link).toHaveAttribute('href', '/#contacto');
    expect(link).not.toHaveAttribute('target', '_blank');
  });
});
