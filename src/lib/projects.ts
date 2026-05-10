import images from "./placeholder-images.json";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: "En producción" | "En desarrollo" | "MVP" | "Prototipo" | "Concepto";
  links: {
    repo?: string | string[];
    demo?: string;
  };
  images: string[];
  description: string;
  features: string[];
};

const projectsData: Omit<Project, "images">[] = [
  {
    slug: "tacticaltray",
    title: "TacticalTray",
    summary:
      "Monitor de sistema para Windows con Nox, el agente de Nightfall Tactics. Animaciones desbloqueables según el uso acumulado.",
    role: "Fork y extensión de RunCat365. Responsable de la integración del personaje Nox y el desarrollo del sistema de progresión por kilómetros.",
    stack: ["C#", ".NET 9.0", "Windows Forms", "Python"],
    status: "En producción",
    links: {
      repo: "https://github.com/Sekain555/tacticaltray",
    },
    description:
      "TacticalTray es un fork de RunCat365 que reemplaza al gato original por Nox, el agente sigiloso del videojuego Nightfall Tactics. Vive en la barra de tareas de Windows y anima a Nox a distintas velocidades según la carga del CPU, GPU o memoria. El proyecto incorpora un sistema de desbloqueo de animaciones basado en kilómetros acumulados de uso, conectando la herramienta con el universo narrativo del juego.",
    features: [
      "Monitoreo en tiempo real de CPU, GPU, memoria, temperatura, almacenamiento y red.",
      "Personaje Nox con animaciones en modo claro (azul cian) y oscuro (blanco radiante con glow).",
      "Sistema de desbloqueo de animaciones por kilómetros acumulados de uso.",
      "Compatibilidad con temas claro y oscuro del sistema Windows.",
      "Velocidad de animación configurable según fuente de carga (CPU, GPU o memoria).",
      "Proyecto open source bajo licencia Apache 2.0, fork de RunCat365.",
    ],
  },
  {
    slug: "rucaray",
    title: "Sistema de Tickets de Soporte TI (Rucaray)",
    summary:
      "Sistema corporativo para gestionar solicitudes y mantenimiento interno, mejorando la eficiencia operativa.",
    role: "Desarrollador Full Stack principal, a cargo de la arquitectura e implementación completa del sistema.",
    stack: ["Angular", "Ionic", "FastAPI", "MySQL/MariaDB", "Python"],
    status: "En producción",
    links: {
      repo: [
        "https://github.com/Sekain555/ticket-soporte-ti-rucaray",
        "https://github.com/Sekain555/ticket-soporte-ti-rucaray-backend",
      ],
    },
    description:
      "Sistema de Tickets Rucaray (STR) es una solución integral diseñada para optimizar la gestión de tickets de soporte técnico dentro de una organización. La plataforma permite a los usuarios crear, seguir y resolver incidencias de manera centralizada, mientras que los administradores pueden asignar tareas, monitorear el rendimiento y generar informes detallados. El sistema fue construido desde cero, con un enfoque en la escalabilidad y la facilidad de uso.",
    features: [
      "Creación y seguimiento de tickets en tiempo real.",
      "Asignación automática de tickets a técnicos disponibles.",
      "Dashboard de administrador con estadísticas clave.",
      "Sistema de notificaciones por correo electrónico.",
      "Autenticación basada en roles (usuario, técnico, admin).",
    ],
  },
  {
    slug: "techflow",
    title: "TechFlow",
    summary: "Plataforma multicliente para control de servicios técnicos.",
    role: "Arquitecto de software y desarrollador full-stack, liderando el diseño de una solución SaaS robusta.",
    stack: ["Angular", "Ionic", "Firebase", "Firebase Realtime DB"],
    status: "MVP",
    links: { repo: "https://github.com/Sekain555/tech-flow" },
    description:
      "TechFlow es una plataforma como servicio (SaaS) orientada a empresas de mantenimiento y servicios técnicos. Permite registrar y monitorear reparaciones, garantizando la trazabilidad y la integridad de los datos. Está diseñada para ser una solución multicliente, donde cada empresa puede gestionar sus propios técnicos, clientes y equipos de forma aislada y segura.",
    features: [
      "Portal de cliente para visualización de estado de servicios.",
      "Gestión de técnicos, clientes y equipos por empresa.",
      "Generación de informes de servicio en PDF.",
      "Trazabilidad completa del ciclo de vida de una reparación.",
    ],
  },
  {
    slug: "motrix",
    title: "Motrix",
    summary:
      "Plataforma SaaS multitenant para gestión de talleres de motos. Órdenes de trabajo, clientes y motos en un solo lugar.",
    role: "Arquitecto y desarrollador full-stack, a cargo del diseño del sistema multitenant, esquema de base de datos y desarrollo del MVP.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
    status: "En desarrollo",
    links: {
      repo: "https://github.com/Sekain555/motrix",
    },
    description:
      "Motrix es una plataforma SaaS diseñada para talleres de motocicletas en Chile. Permite gestionar clientes, motos y órdenes de trabajo de forma centralizada, con aislamiento multitenant desde el día uno mediante Row Level Security (RLS) de Supabase. El proyecto nace de la experiencia acumulada en TechFlow, adoptando un stack moderno con Next.js App Router y Supabase como BaaS, organizado en un monorepo con Turborepo para escalar hacia un portal de cliente en el futuro.",
    features: [
      "Arquitectura multitenant con aislamiento por RLS desde el primer commit.",
      "Gestión completa de clientes, motos y órdenes de trabajo (OT).",
      "Autenticación con Supabase Auth y creación automática de tenant en el registro.",
      "Monorepo con Turborepo y pnpm para escalar a múltiples apps.",
      "Deploy en Vercel con base de datos PostgreSQL en Supabase Cloud.",
    ],
  },
  {
    slug: "ride-in",
    title: "Ride In",
    summary:
      "Ecosistema IoT para motocicletas que incluye una app móvil, un dispositivo de sincronización y una consola de datos.",
    role: "Diseño e integración completa del sistema hardware-software, desde el prototipado hasta la implementación.",
    stack: ["Arduino", "ESP32", "Thunkable X", "Firebase"],
    status: "Prototipo",
    links: { repo: "https://github.com/Sekain555/ride-in" },
    description:
      "Ride In es un proyecto ambicioso que busca transformar la experiencia de conducción de motocicletas. Consiste en un dispositivo IoT (Ride In Sync) que se instala en la moto para recopilar datos de telemetría, una aplicación móvil para el usuario final y una consola que reemplaza el tablero tradicional de las motos (Ride In Console) para la visualización y análisis de datos. El objetivo es mejorar la seguridad, el mantenimiento y la conexión entre moto y motociclista.",
    features: [
      "Telemetría en tiempo real (velocidad, ubicación, inclinación).",
      "Integración con la app móvil vía Bluetooth Low Energy (BLE).",
      "Consola de visualización de datos históricos y en tiempo real.",
      "Mantenimiento predictivo basado en el uso.",
      "Detección de caídas y envío de alertas (conceptual).",
    ],
  },
  {
    slug: "contatrack",
    title: "ContaTrack",
    summary:
      "Plataforma contable web moderna diseñada específicamente para contadores y PYMEs en Chile.",
    role: "Desarrollador Frontend, encargado de la experiencia de usuario (UX) y la implementación de microservicios contables.",
    stack: ["Vue 3", "Vuetify", "Firebase"],
    status: "Concepto",
    links: { repo: "https://github.com/Sekain555/contatrack" },
    description:
      "ContaTrack es una aplicación web que simplifica la contabilidad para profesionales y pequeñas empresas en Chile. La plataforma automatiza tareas repetitivas, se integra con servicios de impuestos internos (SII) y ofrece una interfaz limpia y moderna que facilita la gestión financiera. El desarrollo se centró en crear una experiencia de usuario intuitiva y en la correcta implementación de la lógica contable local.",
    features: [
      "Dashboard financiero con métricas clave.",
      "Libros contables automatizados (Compra, Venta, Diario).",
      "Interfaz de usuario responsiva y moderna con modo oscuro.",
      "Cálculo de impuestos mensuales (F29).",
    ],
  },
];

const projects: Project[] = projectsData.map((p) => {
  const projectImages = (images.projects as any)[p.slug];
  return {
    ...p,
    images: projectImages.images,
  };
});

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  return { prev, next };
}
