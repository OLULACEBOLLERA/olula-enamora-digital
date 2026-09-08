import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";

const TITULO = "Prensa y noticias | Feria y Fiestas de Olula del Río 2026";
const DESC =
  "Noticias y menciones en medios sobre la Feria y Fiestas de Olula del Río 2026, además de los canales oficiales del Ayuntamiento.";

export const Route = createFileRoute("/prensa")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/prensa" },
    ],
    links: [{ rel: "canonical", href: "/prensa" }],
  }),
  component: Prensa,
});

function Prensa() {
  return (
    <>
      <PageHero
        titulo="Prensa y noticias"
        script="la feria en los medios"
        entradilla="Aquí se irán recogiendo los artículos y menciones que se publiquen sobre la Feria y Fiestas 2026."
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="tarjeta p-6 sm:p-8">
          <p className="titular text-xl">Todavía no hay artículos recogidos</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            No publicamos aquí ninguna noticia que no esté verificada. En cuanto
            aparezcan piezas en medios sobre la Feria 2026, se enlazarán en esta
            página con su medio y su fecha.
          </p>
        </div>

        <div className="tarjeta mt-6 p-6 sm:p-8">
          <h2 className="titular text-xl">Canales oficiales</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            La información oficial de la Feria la publica el Excmo. Ayuntamiento
            de Olula del Río. Para consultas, puedes llamar al{" "}
            <a href="tel:+34950441000" className="font-bold text-magenta">
              950 441 000
            </a>
            .
          </p>
          <Link
            to="/programa"
            className="mt-5 inline-flex text-sm font-bold uppercase text-magenta hover:underline"
          >
            Ver el programa oficial →
          </Link>
        </div>
      </section>
    </>
  );
}
