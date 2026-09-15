import { createFileRoute } from "@tanstack/react-router";
import { enlaceMapa, lugares } from "../data/lugares";
import { telefonosInteres } from "../data/comercio";
import { PageHero } from "../components/PageHero";
import { AvisoAccesibilidad } from "../components/AvisoAccesibilidad";

const TITULO = "Información práctica y lugares | Feria de Olula del Río 2026";
const DESC =
  "Lugares de la Feria de Olula del Río 2026, hora de atención adaptada, teléfonos de interés y cómo llegar a cada escenario.";

export const Route = createFileRoute("/informacion")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/informacion" },
    ],
    links: [{ rel: "canonical", href: "/informacion" }],
  }),
  component: Informacion;
});

function Informacion() {
  return (
    <>
      <PageHero
        titulo="Información"
        script="para que no te pierdas"
        entradilla="Dónde ocurre cada cosa, teléfonos útiles y la hora de atención adaptada de la Feria."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <AvisoAccesibilidad />

        <h2 className="titular mt-14 text-2xl sm:text-3xl">Lugares de la Feria</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lugares.map((l) => (
            <li key={l.nombre} className="tarjeta flex flex-col p-5">
              <h3 className="text-lg font-bold leading-snug">{l.nombre}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{l.descripcion}</p>
              <a
                href={enlaceMapa(l.nombre)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border-2 border-foreground px-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
              >
                📍 Cómo llegar
              </a>
            </li>
          ))}
        </ul>

        <h2 className="titular mt-14 text-2xl sm:text-3xl">Teléfonos de interés</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {telefonosInteres.map((t) => (
            <li key={t.nombre} className="tarjeta p-5">
              <p className="text-sm text-muted-foreground">{t.nombre}</p>
              <a
                href={`tel:+34${t.telefono.replace(/\s/g, "")}`}
                className="titular mt-1 block text-2xl text-magenta"
              >
                {t.telefono}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
