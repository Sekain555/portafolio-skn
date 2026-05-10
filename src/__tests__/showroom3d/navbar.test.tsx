// Feature: showroom-3d — Tests unitarios para la Navbar modificada

import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/navbar';

// Reset mocks between tests
beforeEach(() => {
  (usePathname as jest.Mock).mockReturnValue('/');
});

/**
 * Test 1: navLinks contiene { href: "#impresion-3d", label: "Impresión 3D" } (Requisito 2.1)
 */
describe('Navbar — Requisito 2.1', () => {
  it('contiene un enlace con texto "Impresión 3D"', () => {
    const { getAllByRole } = render(<Navbar />);

    const links = getAllByRole('link', { name: 'Impresión 3D' });
    expect(links.length).toBeGreaterThan(0);
  });
});

/**
 * Test 2: "Impresión 3D" está posicionado entre "Servicios" y "Contacto" (Requisito 2.2)
 */
describe('Navbar — Requisito 2.2', () => {
  it('"Impresión 3D" aparece entre "Servicios" y "Contacto" en el nav de escritorio', () => {
    const { container } = render(<Navbar />);

    const desktopNav = container.querySelector('nav.hidden.md\\:flex') as HTMLElement;
    expect(desktopNav).toBeInTheDocument();

    const links = within(desktopNav).getAllByRole('link');
    const labels = links.map((l) => l.textContent ?? '');

    const idxServicios = labels.indexOf('Servicios');
    const idxImpresion = labels.indexOf('Impresión 3D');
    const idxContacto = labels.indexOf('Contacto');

    expect(idxServicios).toBeGreaterThanOrEqual(0);
    expect(idxImpresion).toBeGreaterThanOrEqual(0);
    expect(idxContacto).toBeGreaterThanOrEqual(0);

    expect(idxServicios).toBeLessThan(idxImpresion);
    expect(idxImpresion).toBeLessThan(idxContacto);
  });
});

/**
 * Test 3: enlace tiene clase activa cuando pathname === "/impresion-3d" (Requisito 2.3)
 */
describe('Navbar — Requisito 2.3', () => {
  it('el enlace "Impresión 3D" tiene aria-current="page" cuando pathname es "/impresion-3d"', () => {
    (usePathname as jest.Mock).mockReturnValue('/impresion-3d');

    const { container } = render(<Navbar />);

    const desktopNav = container.querySelector('nav.hidden.md\\:flex') as HTMLElement;
    const link = within(desktopNav).getByRole('link', { name: 'Impresión 3D' });

    const hasAriaCurrent = link.getAttribute('aria-current') === 'page';
    const hasActiveClass = link.classList.contains('text-primary');

    expect(hasAriaCurrent || hasActiveClass).toBe(true);
  });
});

/**
 * Test 4: enlace aparece en el menú móvil desplegable (Requisito 2.4)
 */
describe('Navbar — Requisito 2.4', () => {
  it('"Impresión 3D" aparece en el menú móvil al abrirlo', () => {
    const { getByRole, container } = render(<Navbar />);

    const toggleButton = getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    const mobileNav = container.querySelector('nav.flex.flex-col') as HTMLElement;
    expect(mobileNav).toBeInTheDocument();

    const link = within(mobileNav).getByRole('link', { name: 'Impresión 3D' });
    expect(link).toBeInTheDocument();
  });
});
