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
      "Herramientas para pensar mejor, escribir con menos barro mental y construir asistentes que no den vergüenza ajena."
  },
  {
    name: "Creación de materiales",
    slug: "creacion-de-materiales",
    description:
      "Recursos para convertir ideas, textos e imágenes en materiales que puedan entrar en clase sin pedir disculpas."
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
      "Edición, grabación, subtítulos y contenido multimedia para profes que no quieren pelearse con cada píxel."
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
      "Sistemas para que ideas, recursos, alumnos y proyectos no vivan todos en una mochila incendiada."
  },
  {
    name: "Productividad",
    slug: "productividad",
    description:
      "Herramientas para trabajar con menos fricción, menos caos y menos contraseñas apuntadas donde no toca."
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
