import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";

const TITULO = "Galería de vecinos | Feria y Fiestas de Olula del Río 2026";
const DESC =
  "Galería de fotos de los vecinos durante la Feria de Olula del Río 2026. Comparte tus imágenes de las carrozas, los conciertos y la Feria del Mediodía.";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <>
      <PageHero
        titulo="Fotos de la feria"
        script="la feria la hacéis vosotros"
        entradilla="Un espacio para que los vecinos compartan sus mejores fotos de estos días."
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="tarjeta p-6 sm:p-8">
          <p className="titular text-xl">Todavía no está abierta</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            La subida de fotos con moderación se activará antes de la Feria.
            Mientras tanto, puedes ver el anuario fotográfico del año y las
            imágenes históricas del pueblo.
          </p>
          <Link
            to="/recuerdo"
            className="mt-5 inline-flex min-h-12 items-center rounded-full bg-magenta px-6 text-sm font-bold uppercase tracking-wide text-white"
          >
            Ver Olula en el Recuerdo
          </Link>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Todas las fotos pasarán por moderación. Las imágenes ofensivas podrán
          denunciarse y se ocultarán hasta su revisión.
        </p>
      </section>
    </>
  );
}
