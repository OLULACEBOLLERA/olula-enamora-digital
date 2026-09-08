import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { dias } from "../data/programa";
import { enlaceMapa } from "../data/lugares";
import { PageHero } from "../components/PageHero";
import { AvisoAccesibilidad } from "../components/AvisoAccesibilidad";

const TITULO = "Programa oficial día a día | Feria de Olula del Río 2026";
const DESC =
  "Programa por días de la Feria y Fiestas de Olula del Río 2026: pregón, coronación, Feria del Mediodía, orquestas, conciertos y fuegos artificiales, con hora y lugar.";

export const Route = createFileRoute("/programa")({
  validateSearch: (search: Record<string, unknown>): { dia?: string } =>
    typeof search["dia"] === "string" ? { dia: search["dia"] } : {},
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/programa" },
    ],
    links: [{ rel: "canonical", href: "/programa" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Festival",
          name: "Feria y Fiestas de Olula del Río 2026",
          startDate: "2026-09-17",
          endDate: "2026-09-20",
          location: {
            "@type": "Place",
            name: "Olula del Río",
            address: "Olula del Río, Almería, España",
          },
          organizer: {
            "@type": "Organization",
            name: "Excmo. Ayuntamiento de Olula del Río",
          },
        }),
      },
    ],
  }),
  component: Programa,
});

const etiquetas: Record<string, { texto: string; clase: string }> = {
  musica: { texto: "Música", clase: "bg-magenta/12 text-magenta" },
  institucional: { texto: "Acto oficial", clase: "bg-turquesa/15 text-turquesa-dark" },
  infantil: { texto: "Infantil", clase: "bg-amarillo/25 text-foreground" },
  tradicion: { texto: "Tradición", clase: "bg-cielo/30 text-turquesa-dark" },
  deporte: { texto: "Deporte", clase: "bg-secondary text-foreground" },
  mayores: { texto: "Nuestros mayores", clase: "bg-amarillo/25 text-foreground" },
};

function Programa() {
  const { dia } = Route.useSearch();
  const navigate = useNavigate({ from: "/programa" });
  const activo = dias.find((d) => d.id === dia) ?? dias[0]!;

  return (
    <>
      <PageHero
        titulo="Programa oficial"
        script="día a día"
        entradilla="Del jueves 17 al domingo 20 de septiembre de 2026. Elige un día y consulta cada acto con su hora, su lugar y cómo llegar."
      />

      <div className="sticky top-[60px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div
          className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3"
          role="tablist"
          aria-label="Días de feria"
        >
          {dias.map((d) => {
            const seleccionado = d.id === activo.id;
            return (
              <button
                key={d.id}
                role="tab"
                aria-selected={seleccionado}
                onClick={() => navigate({ search: { dia: d.id }, replace: true })}
                className={`flex min-h-14 shrink-0 flex-col items-center justify-center rounded-2xl px-5 transition-colors ${
                  seleccionado
                    ? "bg-foreground text-background"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/70"
                }`}
              >
                <span className="titular text-xl leading-none">{d.numero}</span>
                <span className="text-[11px] font-bold uppercase tracking-wide">
                  {d.diaSemana}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="titular text-3xl sm:text-4xl">
          {activo.diaSemana} {activo.numero} de {activo.mes}
        </h2>
        <p className="mt-2 text-muted-foreground">{activo.lema}</p>

        <ol className="mt-8 space-y-4">
          {[...activo.actos]
            .sort((a, b) => a.orden - b.orden)
            .map((acto) => {
              const et = acto.etiqueta ? etiquetas[acto.etiqueta] : undefined;
              return (
                <li
                  key={`${acto.hora}-${acto.titulo}`}
                  className="tarjeta aparece grid gap-3 p-5 sm:grid-cols-[110px_1fr] sm:p-6"
                >
                  <div className="flex items-start gap-3 sm:flex-col sm:gap-1">
                    <span className="titular text-2xl text-turquesa-dark sm:text-3xl">
                      {acto.hora}
                    </span>
                    {et && (
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${et.clase}`}
                      >
                        {et.texto}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-snug sm:text-xl">{acto.titulo}</h3>
                    {acto.artista && (
                      <p className="mt-1 text-sm font-semibold text-magenta">{acto.artista}</p>
                    )}
                    {acto.detalle && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {acto.detalle}
                      </p>
                    )}
                    {acto.lugar && (
                      <a
                        href={enlaceMapa(acto.lugar)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-foreground px-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
                      >
                        <span aria-hidden="true">📍</span> {acto.lugar}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
        </ol>

        <div className="mt-10">
          <AvisoAccesibilidad />
        </div>
      </section>
    </>
  );
}
