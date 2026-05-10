export type Piece = {
  id: string;
  name: string;
  material: string;
  description: string; // máximo 120 caracteres
  image: string;       // ruta relativa a public/ o URL externa permitida
  tags: string[];      // categorías técnicas
  featured: boolean;   // true → aparece en la Preview_Section de la home
  gallery?: string[];  // imágenes adicionales para el lightbox
};

const pieces: Piece[] = [
  {
    id: "soporte-camara-v1",
    name: "Soporte de Cámara Articulado",
    material: "PLA",
    description: "Soporte articulado para cámara de acción con ajuste de ángulo en 3 ejes. Diseño compacto y resistente.",
    image: "https://picsum.photos/seed/soporte-camara/800/600",
    tags: ["PLA", "Funcional", "Prototipo"],
    featured: true,
    gallery: [
      "https://picsum.photos/seed/soporte-camara-g1/800/600",
      "https://picsum.photos/seed/soporte-camara-g2/800/600",
    ],
  },
  {
    id: "carcasa-electronica-v2",
    name: "Carcasa para Electrónica ESP32",
    material: "PETG",
    description: "Carcasa modular para placa ESP32 con ventilación lateral y acceso a puertos USB y GPIO.",
    image: "https://picsum.photos/seed/carcasa-esp32/800/600",
    tags: ["PETG", "Electrónica", "IoT", "Funcional"],
    featured: true,
    gallery: [
      "https://picsum.photos/seed/carcasa-esp32-g1/800/600",
      "https://picsum.photos/seed/carcasa-esp32-g2/800/600",
    ],
  },
  {
    id: "engranaje-mecanismo-v1",
    name: "Engranaje para Mecanismo Lineal",
    material: "PLA+",
    description: "Engranaje helicoidal de 32 dientes para mecanismo de transmisión lineal. Tolerancias ajustadas a 0.2mm.",
    image: "https://picsum.photos/seed/engranaje-lineal/800/600",
    tags: ["PLA+", "Mecánica", "Precisión"],
    featured: false,
    gallery: [
      "https://picsum.photos/seed/engranaje-lineal-g1/800/600",
    ],
  },
  {
    id: "organizador-escritorio-v1",
    name: "Organizador de Escritorio Modular",
    material: "PLA",
    description: "Sistema modular de organizadores para escritorio: porta-lápices, bandeja y soporte para cables.",
    image: "https://picsum.photos/seed/organizador-escritorio/800/600",
    tags: ["PLA", "Decorativo", "Modular"],
    featured: false,
    gallery: [
      "https://picsum.photos/seed/organizador-escritorio-g1/800/600",
      "https://picsum.photos/seed/organizador-escritorio-g2/800/600",
    ],
  },
];

export function getPieces(): Piece[] {
  return pieces;
}

export function getFeaturedPieces(): Piece[] {
  return pieces.filter((piece) => piece.featured === true);
}
