import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { historias } from "../data/historias";

const TITULO = "Historias de Olula 2026 | Feria y Fiestas de Olula del Río";
const DESC =
  "Historias destacadas de Olula del Río en 2026: personas, deporte y vida del pueblo contadas en formato editorial.";

export const Route = createFileRoute("/historias/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/historias" },
    ],
    links: [{ rel: "canonical", href: "/historias" }],
  }),
  component: Historias,
});

function Historias() {
  return (
    <>
      <PageHero
        titulo="Historias de Olula 2026"
        script="gente de aquí"
        entradilla="Historias destacadas de vecinas y vecinos de Olula del Río durante 2026."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {historias.map((h) => (
            <li key={h.slug} className="tarjeta flex flex-col overflow-hidden">
              <img
                src={h.imagen}
                alt={h.imagenAlt}
                width={202}
                height={405}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-turquesa-dark">
                  {h.categoria}
                </p>
                <h2 className="titular mt-2 text-xl leading-tight">
                  {h.tituloTarjeta}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.textoBreve}
                </p>
                <Link
                  to="/historias/$slug"
                  params={{ slug: h.slug }}
                  className="mt-5 inline-flex min-h-11 items-center self-start rounded-full bg-magenta px-6 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                >
                  Leer historia
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
