import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackToTopButton } from "@/components/back-to-top";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Víctor ‘Sekain’ Sepúlveda — Portafolio de Desarrollo",
    template: "%s | Víctor ‘Sekain’ Sepúlveda",
  },
  description:
    "Ingeniero y programador chileno que fusiona la informática con la creatividad del arte, la música y el desarrollo de sistemas.",
  keywords: [
    "Víctor Sepúlveda",
    "Sekain",
    "portafolio",
    "desarrollador",
    "programador",
    "ingeniero",
    "desarrollo web",
    "desarrollo móvil",
    "FastAPI",
    "Python",
    "Angular",
    "Ionic",
    "Vue",
    "Next.js",
    "IoT",
    "ESP32",
    "Firebase",
  ],
  openGraph: {
    title: "Víctor ‘Sekain’ Sepúlveda — Portafolio",
    description: "Ingeniero y programador que fusiona tecnología y creatividad.",
    url: siteUrl,
    siteName: "Portafolio de Víctor Sepúlveda",
    images: [
      {
        url: "/og-image.png", // Asegúrate de tener una imagen en /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Víctor Sepúlveda - Portafolio de Desarrollo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Víctor ‘Sekain’ Sepúlveda — Portafolio",
    description: "Ingeniero y programador que fusiona tecnología y creatividad.",
    creator: "@sekain_dev", // Reemplaza con tu handle de Twitter si tienes
    images: ["/og-image.png"], // La misma imagen que Open Graph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Víctor Sepúlveda",
  "alternateName": "Sekain",
  "url": siteUrl,
  "sameAs": [
    "https://github.com/sekain",
    "https://www.linkedin.com/in/victor-sepulveda-developer/",
    "https://www.threads.net/@sekain.dev"
  ],
  "jobTitle": "Ingeniero de Software y Desarrollador Full-Stack",
  "knowsAbout": ["Python", "FastAPI", "Angular", "Ionic", "Vue.js", "Next.js", "Firebase", "IoT", "ESP32", "SQL", "TypeScript"],
  "image": `${siteUrl}/profile-picture.jpg`, // Asegúrate de tener una foto de perfil en /public/profile-picture.jpg
  "alumniOf": "Universidad de Talca",
  "gender": "male",
  "nationality": "Chilean"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
