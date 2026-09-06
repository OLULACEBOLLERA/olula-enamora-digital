import { createFileRoute, Link } from "@tanstack/react-router";
import { dias } from "../data/programa";
import { inaugurador } from "../data/personas";
import { enlaceMapa } from "../data/lugares";
import { PageHero } from "../components/PageHero";

const TITULO = "Feria del Mediodía 2026 | Feria y Fiestas de Olula del Río";
const DESC =
  "La Feria del Mediodía de Olula del Río 2026, del 18 al 20 de septiembre desde las 14:00 h en la Carpa de la Avenida Almanzora: música en directo y sesiones de DJ.";

export const Route = createFileRoute("/feria-del-mediodia")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/feria-del-mediodia" },
    ],
    links: [{ rel: "canonical", href: "/feria-del-mediodia" }],
  }),
  component: Mediodia,
});

function Mediodia() {
  const jornadas = dias
    .filter((d) => d.id !== "jueves-17")
    .map((d) => ({
      dia: d,
      actos: d.actos.filter((a) => a.lugar === "Carpa Avenida Almanzora"),
    }));

  return (
    <>
      <PageHero
        titulo="Feria del Mediodía"
        script="el corazón de la feria"
        entradilla="Del viernes 18 al domingo 20 de septiembre, desde las 14:00 h en la Carpa de la Avenida Almanzora y todo su entorno."
      />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="tarjeta p-6 sm:p-8">
          <p className="titular text-sm text-magenta">Inauguración · Viernes 18, 14:00 h</p>
          <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">{inaugurador.nombre}</p>
          <p className="mt-1 text-sm text-muted-foreground">{inaugurador.cargo}</p>
          <a
            href={enlaceMapa("Carpa Avenida Almanzora")}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center rounded-full border-2 border-foreground px-5 text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
          >
            📍 Cómo llegar a la Carpa
          </a>
        </div>

        {jornadas.map(({ dia, actos }) => (
          <div key={dia.id} className="mt-10">
            <h2 className="titular text-2xl">
              {dia.diaSemana} {dia.numero}
            </h2>
            <ul className="mt-4 space-y-3">
              {actos.map((a) => (
                <li
                  key={a.titulo}
                  className="tarjeta flex flex-wrap items-baseline gap-x-4 gap-y-1 p-5"
                >
                  <span className="titular text-2xl text-turquesa-dark">{a.hora}</span>
                  <span className="font-bold">{a.titulo}</span>
                  {a.artista && <span className="text-sm text-magenta">{a.artista}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="mt-10 text-sm text-muted-foreground">
          ¿Buscas el resto de actos?{" "}
          <Link to="/programa" className="font-bold text-magenta hover:underline">
            Consulta el programa completo
          </Link>
          .
        </p>
      </section>
    </>
  );
}
