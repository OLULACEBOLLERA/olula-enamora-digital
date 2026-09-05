import { createFileRoute } from "@tanstack/react-router";
import { img } from "../data/imagenes";
import { pregonera } from "../data/personas";
import { pregoneraBio } from "../data/textos";
import { PageHero } from "../components/PageHero";
import { enlaceMapa } from "../data/lugares";

const TITULO = "Pregonera 2026: Pilar Sáez Sorroche | Feria de Olula del Río";
const DESC =
  "Pilar Sáez Sorroche «Pili del Barrio» es la pregonera de la Feria y Fiestas de Olula del Río 2026. Pregón el jueves 17 de septiembre a las 20:00 h en el Espacio Escénico.";

export const Route = createFileRoute("/pregonera")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/pregonera" },
    ],
    links: [{ rel: "canonical", href: "/pregonera" }],
  }),
  component: Pregonera,
});

function Pregonera() {
  return (
    <>
      <PageHero titulo="Pregonera 2026" script="pili del barrio" />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[380px_1fr]">
        <figure className="lg:sticky lg:top-28 lg:self-start">
          <img
            src={img["pregonera.png"]}
            alt="Retrato oficial de Pilar Sáez Sorroche, pregonera de la Feria y Fiestas 2026"
            className="w-full rounded-3xl border-4 border-foreground bg-secondary object-contain"
          />
          <figcaption className="mt-4">
            <p className="titular text-2xl">{pregonera.nombre}</p>
            <p className="text-sm text-muted-foreground">{pregonera.cargo}</p>
            <a
              href={enlaceMapa("Espacio Escénico")}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-magenta px-5 text-sm font-bold uppercase text-white"
            >
              📍 {pregonera.acto}
            </a>
          </figcaption>
        </figure>

        <article className="max-w-2xl">
          {pregoneraBio.map((p, i) => (
            <p
              key={i}
              className={`text-base leading-relaxed text-foreground/85 ${i === 0 ? "text-lg font-semibold" : "mt-4"}`}
            >
              {p}
            </p>
          ))}
        </article>
      </section>
    </>
  );
}
