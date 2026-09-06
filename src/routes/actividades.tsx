import { createFileRoute } from "@tanstack/react-router";
import { actividadesPrevias } from "../data/programa";
import { enlaceMapa } from "../data/lugares";
import { PageHero } from "../components/PageHero";

const TITULO = "Actividades previas de Feria | Olula del Río 2026";
const DESC =
  "Actividades previas de la Feria de Olula del Río 2026: Rute Burguer 04, Día de la Bicicleta, talleres, torneos deportivos, conciertos, Astronoches y Los 90's Olula Fest.";

export const Route = createFileRoute("/actividades")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/actividades" },
    ],
    links: [{ rel: "canonical", href: "/actividades" }],
  }),
  component: Actividades,
});

function Actividades() {
  const fechas = [...new Set(actividadesPrevias.map((a) => a.fecha))];

  return (
    <>
      <PageHero
        titulo="Actividades de Feria"
        script="antes de la feria"
        entradilla="Desde el 2 de septiembre y hasta el 26, el pueblo entero se prepara: gastronomía, deporte, música, talleres y tradición."
      />

      <section className="mx-auto max-w-4xl px-4 py-12">
        {fechas.map((fecha) => (
          <div key={fecha} className="mb-10">
            <h2 className="titular text-xl text-turquesa-dark sm:text-2xl">{fecha}</h2>
            <ul className="mt-4 space-y-4">
              {actividadesPrevias
                .filter((a) => a.fecha === fecha)
                .map((a) => (
                  <li key={a.titulo} className="tarjeta p-5 sm:p-6">
                    <h3 className="text-lg font-bold leading-snug">{a.titulo}</h3>
                    {a.hora && (
                      <p className="mt-1 text-sm font-semibold text-magenta">{a.hora}</p>
                    )}
                    {a.detalle && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {a.detalle}
                      </p>
                    )}
                    {(a.organiza || a.colabora) && (
                      <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                        {a.organiza && <>Organiza: {a.organiza}. </>}
                        {a.colabora && <>Colabora: {a.colabora}.</>}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {a.lugar && (
                        <a
                          href={enlaceMapa(a.lugar)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center rounded-full border-2 border-foreground px-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
                        >
                          📍 {a.lugar}
                        </a>
                      )}
                      {a.telefono && (
                        <a
                          href={`tel:+34${a.telefono.replace(/\s/g, "")}`}
                          className="inline-flex min-h-11 items-center rounded-full bg-magenta px-4 text-sm font-bold text-white"
                        >
                          📞 {a.telefono}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
