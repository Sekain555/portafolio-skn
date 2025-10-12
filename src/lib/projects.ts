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

const projects: Project[] = [
  {
    slug: 'rucaray',
    title: 'Sistema de Tickets de Soporte TI (Rucaray)',
    summary: 'Sistema corporativo para gestionar solicitudes y mantenimiento interno, mejorando la eficiencia operativa.',
    role: 'Desarrollador Backend principal, a cargo de la arquitectura e implementación completa del sistema.',
    stack: ['Ionic', 'Angular', 'FastAPI', 'MySQL/MariaDB', 'Python'],
    status: 'En producción',
    links: { repo: '#', demo: '#' },
    images: ['/projects/rucaray/cover.png'],
    description: 'Rucaray es una solución integral diseñada para optimizar la gestión de tickets de soporte técnico dentro de una organización. La plataforma permite a los usuarios crear, seguir y resolver incidencias de manera centralizada, mientras que los administradores pueden asignar tareas, monitorear el rendimiento y generar informes detallados. El sistema fue construido desde cero, con un enfoque en la escalabilidad y la facilidad de uso.',
    features: [
      'Creación y seguimiento de tickets en tiempo real.',
      'Asignación automática de tickets a técnicos disponibles.',
      'Dashboard de administrador con estadísticas clave.',
      'Sistema de notificaciones por correo electrónico.',
      'Autenticación basada en roles (usuario, técnico, admin).',
      'Generación de informes de rendimiento y SLAs.',
    ]
  },
  {
    slug: 'techflow',
    title: 'TechFlow / ServiKit',
    summary: 'Plataforma multicliente para control de servicios técnicos con tecnología NFC para trazabilidad.',
    role: 'Arquitecto de software y desarrollador full-stack, liderando el diseño de una solución SaaS robusta.',
    stack: ['Ionic', 'Angular', 'Firebase', 'Python', 'FastAPI', 'Flask'],
    status: 'En desarrollo',
    links: { repo: '#', demo: '#' },
    images: ['/projects/techflow/cover.png'],
    description: 'TechFlow es una plataforma como servicio (SaaS) orientada a empresas de mantenimiento y servicios técnicos. Permite registrar y monitorear actividades en terreno utilizando etiquetas NFC, garantizando la trazabilidad y la integridad de los datos. La arquitectura multitenant asegura que los datos de cada cliente estén completamente aislados y seguros.',
    features: [
      'Arquitectura multicliente (Multi-tenant).',
      'Registro de actividades mediante tags NFC.',
      'Portal de cliente para visualización de servicios.',
      'API RESTful para integración con sistemas externos.',
      'Gestión de técnicos, clientes y equipos.',
      'Sincronización de datos offline-first para la app móvil.',
    ]
  },
  {
    slug: 'ride-in',
    title: 'Ride In',
    summary: 'Ecosistema IoT para motocicletas que incluye una app móvil, un dispositivo de sincronización y una consola de datos.',
    role: 'Diseño e integración completa del sistema hardware-software, desde el prototipado hasta la implementación.',
    stack: ['ESP32', 'Arduino', 'Firebase', 'Python'],
    status: 'En desarrollo',
    links: { repo: '#', demo: '#' },
    images: ['/projects/ride-in/cover.png'],
    description: 'Ride In es un proyecto ambicioso que busca transformar la experiencia de conducción de motocicletas. Consiste en un dispositivo IoT (Ride In Sync) que se instala en la moto para recopilar datos de telemetría, una aplicación móvil para el usuario final y una consola web para la visualización y análisis de datos. El objetivo es mejorar la seguridad, el mantenimiento y la conexión social entre motociclistas.',
    features: [
      'Telemetría en tiempo real (velocidad, ubicación, inclinación).',
      'Detección de caídas con alertas automáticas a contactos.',
      'Registro de rutas y estadísticas de viaje.',
      'Integración con la app móvil vía Bluetooth Low Energy (BLE).',
      'Consola de visualización de datos históricos.',
      'Mantenimiento predictivo basado en el uso.',
    ]
  },
  {
    slug: 'contatrack',
    title: 'ContaTrack',
    summary: 'Plataforma contable web moderna diseñada específicamente para contadores y PYMEs en Chile.',
    role: 'Desarrollador Frontend, encargado de la experiencia de usuario (UX) y la implementación de microservicios contables.',
    stack: ['Vue 3', 'Vuetify', 'Firebase', 'Python'],
    status: 'MVP',
    links: { repo: '#', demo: '#'},
    images: ['/projects/contatrack/cover.png'],
    description: 'ContaTrack es una aplicación web que simplifica la contabilidad para profesionales y pequeñas empresas en Chile. La plataforma automatiza tareas repetitivas, se integra con servicios de impuestos internos (SII) y ofrece una interfaz limpia y moderna que facilita la gestión financiera. El desarrollo se centró en crear una experiencia de usuario intuitiva y en la correcta implementación de la lógica contable local.',
    features: [
      'Dashboard financiero con métricas clave.',
      'Sincronización con el Servicio de Impuestos Internos (SII) de Chile.',
      'Creación y gestión de facturas, boletas y notas de crédito.',
      'Libros contables automatizados.',
      'Interfaz de usuario responsiva y moderna.',
      'Cálculo de impuestos mensuales (F29).',
    ]
  },
  {
    slug: 'ride-in-subsystems',
    title: 'Ride In Subsystems (Sync + Console)',
    summary: 'Componentes internos para visualización y sincronización de datos en el ecosistema Ride In.',
    role: 'Desarrollo embebido y prototipado de interfaz gráfica para dispositivos de bajo consumo.',
    stack: ['ESP32-S3', 'LVGL', 'SquareLine Studio', 'C++'],
    status: 'Prototipo',
    links: { repo: '#', demo: '#'},
    images: ['/projects/ride-in-subsystems/cover.png'],
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
  {
    slug: 'elite7fc',
    title: 'Elite7 FC',
    summary: 'Aplicación móvil experimental que gamifica el fútbol amateur, inspirada en elementos de anime y videojuegos.',
    role: 'Diseño funcional y de interfaz de usuario, explorando conceptos de gamificación.',
    stack: ['Angular', 'Ionic', 'Figma'],
    status: 'Concepto',
    links: { repo: '#', demo: '#'},
    images: ['/projects/elite7fc/cover.png'],
    description: 'Elite7 FC es un proyecto conceptual que busca aplicar mecánicas de videojuegos de rol (RPG) al fútbol amateur. Los jugadores pueden crear perfiles, unirse a equipos, registrar estadísticas de partidos y "subir de nivel" sus habilidades. La interfaz, diseñada en Figma, se inspira en la estética de animes deportivos populares, buscando crear una experiencia de usuario emocionante y única.',
    features: [
      'Creación de perfiles de jugador con arquetipos.',
      'Sistema de progresión y habilidades.',
      'Organización de partidos y torneos.',
      'Logros y recompensas por desempeño.',
      'Diseño de interfaz de usuario en Figma.',
      'Concepto de integración con wearables para seguimiento de actividad.',
    ]
  }
];

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
