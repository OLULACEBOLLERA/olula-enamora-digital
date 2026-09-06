import { createFileRoute } from "@tanstack/react-router";
import { img } from "../data/imagenes";
import { alcalde, inaugurador } from "../data/personas";
import { corporacion, obrasSaluda, saludaParrafos, saludaVivas } from "../data/textos";
import { PageHero } from "../components/PageHero";

const TITULO = "Saluda del Alcalde y Corporación | Feria de Olula del Río 2026";
const DESC =
  "Saluda de D. Antonio Martínez Pascual, Alcalde de Olula del Río, en el Libro Oficial de la Feria y Fiestas 2026, junto a la Corporación Municipal.";

export const Route = createFileRoute("/saluda")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/saluda" },
    ],
    links: [{ rel: "canonical", href: "/saluda" }],
  }),
  component: Saluda,
});

function Saluda() {
  return (
    <>
      <PageHero titulo="Saluda del Alcalde" script="feria y fiestas 2026" />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[340px_1fr]">
        <figure className="lg:sticky lg:top-28 lg:self-start">
          <img
            src={img["alcalde.png"]}
            alt="Retrato oficial de D. Antonio Martínez Pascual, Alcalde de Olula del Río"
            className="w-full rounded-3xl border-4 border-foreground bg-secondary object-contain"
          />
          <figcaption className="mt-4">
            <p className="titular text-xl">{alcalde.nombre}</p>
            <p className="text-sm text-muted-foreground">{alcalde.cargo}</p>
          </figcaption>
        </figure>

        <article className="max-w-2xl">
          {saludaParrafos.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed text-foreground/85 ${
                i === 0 ? "titular text-xl text-magenta" : "mt-4 text-base"
              }`}
            >
              {p}
            </p>
          ))}

          <div className="mt-8 rounded-2xl bg-secondary p-6">
            <h2 className="titular text-lg">Obras y proyectos en marcha</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85">
              {obrasSaluda.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <p className="titular mt-8 space-y-1 text-xl text-turquesa-dark">
            {saludaVivas.map((v) => (
              <span key={v} className="block">
                {v}
              </span>
            ))}
          </p>
        </article>
      </section>

      <section className="border-t border-border bg-secondary/50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="titular text-3xl">Inaugurador de la Feria del Mediodía</h2>
          <div className="tarjeta mt-6 max-w-3xl p-6">
            <p className="titular text-xl">{inaugurador.nombre}</p>
            <p className="mt-2 text-sm text-muted-foreground">{inaugurador.cargo}</p>
            <p className="mt-3 text-sm font-semibold text-magenta">{inaugurador.acto}</p>
          </div>

          <h2 className="titular mt-14 text-3xl">Corporación Municipal</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {corporacion.map((c) => (
              <li key={c.nombre} className="tarjeta p-5">
                <p className="font-bold leading-snug">{c.nombre}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.cargo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
