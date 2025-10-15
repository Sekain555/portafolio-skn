
import images from './placeholder-images.json';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: 'En producción' | 'En desarrollo' | 'MVP' | 'Prototipo' | 'Concepto';
  links: {
    repo?: string;
    demo?: string;
  };
  images: string[];
  description: string;
  features: string[];
};

const projectsData: Omit<Project, 'images'>[] = [
  {
    slug: 'rucaray',
    title: 'Sistema de Tickets de Soporte TI (Rucaray)',
    summary: 'Sistema corporativo para gestionar solicitudes y mantenimiento interno, mejorando la eficiencia operativa.',
    role: 'Desarrollador Full Stack principal, a cargo de la arquitectura e implementación completa del sistema.',
    stack: ['Angular', 'FastAPI', 'Ionic', 'MySQL/MariaDB', 'Python'],
    status: 'En producción',
    links: { repo: 'https://github.com/sekain/Rucaray-Ticket-System', demo: '#' },
    description: 'Sistema de Tickets Rucaray (STR) es una solución integral diseñada para optimizar la gestión de tickets de soporte técnico dentro de una organización. La plataforma permite a los usuarios crear, seguir y resolver incidencias de manera centralizada, mientras que los administradores pueden asignar tareas, monitorear el rendimiento y generar informes detallados. El sistema fue construido desde cero, con un enfoque en la escalabilidad y la facilidad de uso.',
    features: [
      'Creación y seguimiento de tickets en tiempo real.',
      'Asignación automática de tickets a técnicos disponibles.',
      'Dashboard de administrador con estadísticas clave.',
      'Sistema de notificaciones por correo electrónico.',
      'Autenticación basada en roles (usuario, técnico, admin).',
    ]
  },
  {
    slug: 'techflow',
    title: 'TechFlow / Kit Sertec',
    summary: 'Plataforma multicliente para control de servicios técnicos.',
    role: 'Arquitecto de software y desarrollador full-stack, liderando el diseño de una solución SaaS robusta.',
    stack: ['Ionic', 'Angular', 'Firebase', 'Firebase Realtime DB'],
    status: 'MVP',
    links: { repo: 'https://github.com/sekain/Kit-Sertec', demo: '#' },
    description: 'TechFlow es una plataforma como servicio (SaaS) orientada a empresas de mantenimiento y servicios técnicos. Permite registrar y monitorear reparaciones, garantizando la trazabilidad y la integridad de los datos. Está diseñada para ser una solución multicliente, donde cada empresa puede gestionar sus propios técnicos, clientes y equipos de forma aislada y segura.',
    features: [
      'Portal de cliente para visualización de estado de servicios.',
      'Gestión de técnicos, clientes y equipos por empresa.',
      'Generación de informes de servicio en PDF.',
      'Trazabilidad completa del ciclo de vida de una reparación.',
    ]
  },
  {
    slug: 'ride-in',
    title: 'Ride In',
    summary: 'Ecosistema IoT para motocicletas que incluye una app móvil, un dispositivo de sincronización y una consola de datos.',
    role: 'Diseño e integración completa del sistema hardware-software, desde el prototipado hasta la implementación.',
    stack: ['ESP32', 'Arduino', 'Firebase', 'Python', 'Ionic', 'Angular'],
    status: 'Prototipo',
    links: { repo: 'https://github.com/sekain/Ride-In', demo: '#' },
    description: 'Ride In es un proyecto ambicioso que busca transformar la experiencia de conducción de motocicletas. Consiste en un dispositivo IoT (Ride In Sync) que se instala en la moto para recopilar datos de telemetría, una aplicación móvil para el usuario final y una consola que reemplaza el tablero tradicional de las motos (Ride In Console) para la visualización y análisis de datos. El objetivo es mejorar la seguridad, el mantenimiento y la conexión entre moto y motociclista.',
    features: [
      'Telemetría en tiempo real (velocidad, ubicación, inclinación).',
      'Integración con la app móvil vía Bluetooth Low Energy (BLE).',
      'Consola de visualización de datos históricos y en tiempo real.',
      'Mantenimiento predictivo basado en el uso.',
      'Detección de caídas y envío de alertas (conceptual).',
    ]
  },
  {
    slug: 'contatrack',
    title: 'ContaTrack',
    summary: 'Plataforma contable web moderna diseñada específicamente para contadores y PYMEs en Chile.',
    role: 'Desarrollador Frontend, encargado de la experiencia de usuario (UX) y la implementación de microservicios contables.',
    stack: ['Vue 3', 'Vuetify', 'Firebase', 'Python', 'FastAPI'],
    status: 'Concepto',
    links: { repo: '#', demo: '#'},
    description: 'ContaTrack es una aplicación web que simplifica la contabilidad para profesionales y pequeñas empresas en Chile. La plataforma automatiza tareas repetitivas, se integra con servicios de impuestos internos (SII) y ofrece una interfaz limpia y moderna que facilita la gestión financiera. El desarrollo se centró en crear una experiencia de usuario intuitiva y en la correcta implementación de la lógica contable local.',
    features: [
      'Dashboard financiero con métricas clave.',
      'Libros contables automatizados (Compra, Venta, Diario).',
      'Interfaz de usuario responsiva y moderna con modo oscuro.',
      'Cálculo de impuestos mensuales (F29).',
      'Integración con el Servicio de Impuestos Internos de Chile (SII).',
    ]
  },
  {
    slug: 'ride-in-subsystems',
    title: 'Ride In Subsystems (Sync + Console)',
    summary: 'Componentes internos para visualización y sincronización de datos en el ecosistema Ride In.',
    role: 'Desarrollo embebido y prototipado de interfaz gráfica para dispositivos de bajo consumo.',
    stack: ['ESP32-S3', 'LVGL', 'SquareLine Studio', 'C++'],
    status: 'Prototipo',
    links: { repo: 'https://github.com/sekain/Ride-In-Console', demo: '#'},
    description: 'Este subproyecto se enfoca en los componentes de hardware del ecosistema Ride In. El "Ride In Sync" es el dispositivo central que recopila y transmite datos, mientras que la "Ride In Console" es una pantalla opcional para el manillar que muestra información en tiempo real. El desarrollo implicó programación de bajo nivel, optimización de consumo energético y diseño de interfaces gráficas para pantallas embebidas.',
    features: [
      'Comunicación BLE con la aplicación móvil.',
      'Lectura de sensores (acelerómetro, giroscopio, GPS).',
      'Interfaz gráfica de usuario creada con LVGL y SquareLine Studio.',
      'Bajo consumo de energía para autonomía extendida.',
      'Actualizaciones de firmware Over-The-Air (OTA).',
      'Diseño de PCB y carcasa impresa en 3D.',
    ]
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
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  return { prev, next };
}
