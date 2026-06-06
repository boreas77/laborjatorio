import Link from "next/link";
import { BrandName } from "@/components/BrandName";

const searchSuggestions = [
  "Crear materiales",
  "Grabar podcasts",
  "Editar vídeo",
  "Organizar proyectos",
  "Vender cursos"
];

const needs = [
  {
    title: "Crear contenido",
    description: "Ideas, guiones, vídeos, podcasts y publicaciones que salen del cajón.",
    icon: "pen",
    href: "/inventario?q=crear%20contenido"
  },
  {
    title: "Crear materiales",
    description: "Fichas, PDFs, presentaciones y recursos que pueden entrar en clase.",
    icon: "layers",
    href: "/inventario?q=crear%20materiales"
  },
  {
    title: "Dar clases online",
    description: "Herramientas para explicar, grabar, acompañar y estar presente a distancia.",
    icon: "screen",
    href: "/inventario?q=clases%20online"
  },
  {
    title: "Conseguir estudiantes",
    description: "Visibilidad, confianza, comunicación y sistemas para que te encuentren.",
    icon: "users",
    href: "/inventario?q=conseguir%20estudiantes"
  },
  {
    title: "Vender y cobrar",
    description: "Cursos, pagos, correos, productos y ventas sin montar un circo técnico.",
    icon: "card",
    href: "/inventario?q=vender%20cobrar"
  },
  {
    title: "Ahorrar tiempo",
    description: "Automatizar, ordenar y quitarte tareas repetitivas de encima.",
    icon: "clock",
    href: "/inventario?q=ahorrar%20tiempo"
  },
  {
    title: "Construir mi web",
    description: "Páginas, presencia online, analítica y estructura digital.",
    icon: "browser",
    href: "/inventario?q=web"
  },
  {
    title: "Mi escritorio",
    description: "Equipo físico, cámara, sonido, pantalla y entorno de trabajo.",
    icon: "desk",
    href: "/inventario?q=escritorio"
  },
  {
    title: "Cuidarme",
    description: "Ergonomía, foco, pausas y cosas que ayudan a seguir trabajando.",
    icon: "heart",
    href: "/inventario?q=cuidarme"
  }
];

type NeedIconName = (typeof needs)[number]["icon"];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image" aria-hidden="true" />
        <div className="home-intro home-intro--compact">
          <h1>
            Has entrado al <BrandName />
          </h1>
        </div>
      </section>

      <section className="home-lede" aria-label="Introducción al Laborjatorio">
        <div className="home-lede__inner">
          <p>
            Aquí documento las herramientas que uso para <strong>enseñar español, crear
            contenido y gestionar mi negocio online</strong>. No las mejores del mercado
            según ningún ranking. Las mías. <strong>Las que me rodean mientras escribo
            esto</strong>.
          </p>
          <p>
            Algunas son imprescindibles. Otras son un experimento. Alguna la sigo usando
            aunque no te la recomendaría.
          </p>
          <p>
            Pero hablemos de lo importante. <strong>¿Qué necesitas?</strong>
          </p>
        </div>
      </section>

      <section className="home-search" aria-label="Búsqueda guiada de herramientas">
        <form className="home-search__box" action="/inventario">
          <label htmlFor="home-search-input">¿Qué estás buscando?</label>
          <div className="home-search__field">
            <input
              id="home-search-input"
              name="q"
              placeholder="Ej. subtítulos, IA, podcast, materiales, caos administrativo..."
              type="search"
            />
            <button type="submit">Buscar</button>
          </div>
          <div className="home-search__suggestions" aria-label="Sugerencias de búsqueda">
            {searchSuggestions.map((suggestion) => (
              <Link href={`/inventario?q=${encodeURIComponent(suggestion)}`} key={suggestion}>
                {suggestion}
              </Link>
            ))}
          </div>
        </form>
      </section>

      <section className="home-needs" aria-labelledby="home-needs-title">
        <div className="home-needs__inner">
          <div className="home-needs__header">
            <p className="eyebrow">Mapa de necesidades</p>
            <h2 id="home-needs-title">¿Qué necesitas resolver?</h2>
          </div>
          <div className="home-needs__grid">
            {needs.map((need) => (
              <Link className="home-need-card" href={need.href} key={need.title}>
                <NeedIcon name={need.icon} />
                <h3>{need.title}</h3>
                <p>{need.description}</p>
                <span>Entrar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-borja-cta" aria-labelledby="home-borja-cta-title">
        <div className="home-borja-cta__inner">
          <h2 id="home-borja-cta-title">Y esas son las herramientas que utilizo en mi día a día.</h2>
          <div className="home-borja-cta__photo" aria-label="Foto de Borja pendiente" />
          <div className="home-borja-cta__body">
            <p>
              Si quieres ver <strong>cómo las uso para ayudar a estudiantes y a otros
              profes</strong>, puedes comprobarlo aquí.
            </p>
            <a className="button button--primary" href="https://borjaprofe.com">
              Ir a Borjaprofe.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function NeedIcon({ name }: { name: NeedIconName }) {
  const commonProps = {
    "aria-hidden": true,
    className: "home-need-card__icon",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24"
  };

  switch (name) {
    case "pen":
      return (
        <svg {...commonProps}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...commonProps}>
          <path d="m12 3 9 5-9 5-9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );
    case "screen":
      return (
        <svg {...commonProps}>
          <rect height="13" rx="2" width="18" x="3" y="4" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "card":
      return (
        <svg {...commonProps}>
          <rect height="14" rx="2" width="20" x="2" y="5" />
          <path d="M2 10h20" />
          <path d="M7 15h3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "browser":
      return (
        <svg {...commonProps}>
          <rect height="16" rx="2" width="20" x="2" y="4" />
          <path d="M2 9h20" />
          <path d="M7 14h5" />
          <path d="M15 14h2" />
        </svg>
      );
    case "desk":
      return (
        <svg {...commonProps}>
          <rect height="8" rx="1.5" width="14" x="5" y="4" />
          <path d="M3 16h18" />
          <path d="M7 16v4" />
          <path d="M17 16v4" />
          <path d="M12 12v4" />
        </svg>
      );
    case "heart":
      return (
        <svg {...commonProps}>
          <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6a5 5 0 1 1 7.5 6.6Z" />
        </svg>
      );
  }
}
