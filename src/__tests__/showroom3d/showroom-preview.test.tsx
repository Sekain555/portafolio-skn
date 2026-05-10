import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShowroomPreview } from '@/components/showroom-preview';

// Mock yet-another-react-lightbox to avoid ESM issues in Jest
jest.mock('yet-another-react-lightbox', () => ({
  __esModule: true,
  default: () => null,
}));
jest.mock('yet-another-react-lightbox/styles.css', () => ({}));

describe('ShowroomPreview', () => {
  it('renderiza elemento con id="impresion-3d"', () => {
    render(<ShowroomPreview />);
    const section = document.getElementById('impresion-3d');
    expect(section).toBeInTheDocument();
  });

  it('CTA "Ver showroom completo" tiene href="/impresion-3d"', () => {
    render(<ShowroomPreview />);
    const link = screen.getByRole('link', { name: /ver showroom completo/i });
    expect(link).toHaveAttribute('href', '/impresion-3d');
  });

  it('CTA "Contactar" tiene href="/#contacto"', () => {
    render(<ShowroomPreview />);
    const link = screen.getByRole('link', { name: /contactar/i });
    expect(link).toHaveAttribute('href', '/#contacto');
  });
});
