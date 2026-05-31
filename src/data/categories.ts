export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "IA y agentes",
    slug: "ia-y-agentes",
    description:
      "Herramientas para pensar, escribir, crear materiales, automatizar decisiones y construir asistentes útiles."
  },
  {
    name: "Creación de materiales",
    slug: "creacion-de-materiales",
    description:
      "Recursos para convertir ideas, textos, imágenes y actividades en materiales listos para clase."
  },
  {
    name: "Diseño e imagen",
    slug: "diseno-e-imagen",
    description:
      "Herramientas visuales para fichas, presentaciones, miniaturas, redes y productos educativos."
  },
  {
    name: "Audio y vídeo",
    slug: "audio-y-video",
    description:
      "Edición, grabación, subtítulos y contenido multimedia para profesores que crean contenido."
  },
  {
    name: "Equipo físico",
    slug: "equipo-fisico",
    description:
      "Hardware y accesorios reales para grabar clases, vídeos, podcasts y contenido online."
  },
  {
    name: "Organización",
    slug: "organizacion",
    description:
      "Sistemas para ordenar ideas, recursos, alumnos, proyectos, publicaciones y procesos."
  },
  {
    name: "Automatización",
    slug: "automatizacion",
    description:
      "Herramientas para ahorrar tareas repetitivas y conectar partes del trabajo docente o del negocio."
  },
  {
    name: "Marketing y ventas",
    slug: "marketing-y-ventas",
    description:
      "Recursos para newsletters, productos, embudos sencillos, analítica y comunicación con la audiencia."
  }
];
