export type NeedCategoryIcon =
  | "browser"
  | "card"
  | "clock"
  | "desk"
  | "heart"
  | "layers"
  | "pen"
  | "screen"
  | "users";

export type NeedCategory = {
  title: string;
  slug: string;
  description: string;
  icon: NeedCategoryIcon;
  toolSlugs: string[];
};

export const needCategories: NeedCategory[] = [
  {
    title: "Crear contenido",
    slug: "crear-contenido",
    description: "Ideas, guiones, vídeos, podcasts y publicaciones que salen del cajón.",
    icon: "pen",
    toolSlugs: [
      "chatgpt",
      "opusclip",
      "davinci-resolve-editor-video-gratis-profesores",
      "kommodo",
      "happyscribe",
      "metricool",
      "audacity",
      "spotify-for-podcasters",
      "squoosh",
      "filtro-antipop-innogear",
      "logitech-c920",
      "acer-nitro-5"
    ]
  },
  {
    title: "Crear materiales",
    slug: "crear-materiales",
    description: "Fichas, PDFs, presentaciones y recursos que pueden entrar en clase.",
    icon: "layers",
    toolSlugs: ["chatgpt", "canva", "ilovepdf", "happyscribe", "squoosh", "notion"]
  },
  {
    title: "Dar clases online",
    slug: "dar-clases-online",
    description: "Herramientas para explicar, grabar, acompañar y estar presente a distancia.",
    icon: "screen",
    toolSlugs: [
      "kommodo",
      "logitech-c920",
      "acer-nitro-5",
      "standing-desk-maidesite",
      "silla-oficina-malla",
      "inphic-pm6",
      "filtro-antipop-innogear",
      "ilovepdf",
      "notion",
      "chatgpt"
    ]
  },
  {
    title: "Conseguir estudiantes",
    slug: "conseguir-estudiantes",
    description: "Visibilidad, confianza, comunicación y sistemas para que te encuentren.",
    icon: "users",
    toolSlugs: [
      "metricool",
      "mailpoet",
      "opusclip",
      "canva",
      "squoosh",
      "spotify-for-podcasters",
      "happyscribe"
    ]
  },
  {
    title: "Vender y cobrar",
    slug: "vender-y-cobrar",
    description: "Cursos, pagos, correos, productos y ventas sin montar un circo técnico.",
    icon: "card",
    toolSlugs: ["mailpoet", "metricool", "canva", "ilovepdf", "lastpass"]
  },
  {
    title: "Ahorrar tiempo",
    slug: "ahorrar-tiempo",
    description: "Automatizar, ordenar y quitarte tareas repetitivas de encima.",
    icon: "clock",
    toolSlugs: [
      "chatgpt",
      "ilovepdf",
      "happyscribe",
      "metricool",
      "mailpoet",
      "lastpass",
      "notion",
      "squoosh"
    ]
  },
  {
    title: "Construir mi web",
    slug: "construir-mi-web",
    description: "Páginas, presencia online, analítica y estructura digital.",
    icon: "browser",
    toolSlugs: ["mailpoet", "metricool", "squoosh", "lastpass", "ilovepdf", "canva"]
  },
  {
    title: "Mi escritorio",
    slug: "mi-escritorio",
    description: "Equipo físico, cámara, sonido, pantalla y entorno de trabajo.",
    icon: "desk",
    toolSlugs: [
      "standing-desk-maidesite",
      "silla-oficina-malla",
      "inphic-pm6",
      "ventilador-recargable-silencioso",
      "filtro-antipop-innogear",
      "logitech-c920",
      "acer-nitro-5"
    ]
  },
  {
    title: "Cuidarme",
    slug: "cuidarme",
    description: "Ergonomía, foco, pausas y cosas que ayudan a seguir trabajando.",
    icon: "heart",
    toolSlugs: [
      "petit-bambou",
      "standing-desk-maidesite",
      "silla-oficina-malla",
      "ventilador-recargable-silencioso",
      "inphic-pm6"
    ]
  }
];

export function getNeedCategoryBySlug(slug: string) {
  return needCategories.find((need) => need.slug === slug);
}
