import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { artistas, gruposArtistas } from "../data/artistas";
import { PageHero } from "../components/PageHero";

const TITULO = "Artistas, orquestas y conciertos | Feria de Olula del Río 2026";
const DESC =
  "Cartel musical de la Feria de Olula del Río 2026: Los Mojinos Escozíos, José de Rico, Juan Peña, orquestas de verbena, DJs y grupos locales, con día, hora y lugar.";

export const Route = createFileRoute("/artistas")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/artistas" },
    ],
    links: [{ rel: "canonical", href: "/artistas" }],
  }),
  component: Artistas,
});

const fondos: Record<string, string> = {
  turquesa: "bg-turquesa",
  magenta: "bg-magenta",
  amarillo: "bg-amarillo",
  cielo: "bg-cielo",
};

function Artistas() {
  const [filtro, setFiltro] = useState<string>("todos");
  const lista = filtro === "todos" ? artistas : artistas.filter((a) => a.grupo === filtro);

  return (
    <>
      <PageHero
        titulo="Artistas y orquestas"
        script="el cartel"
        entradilla="Grandes conciertos, orquestas de verbena, sesiones de DJ y el talento de casa. Todo el cartel oficial de la Feria 2026."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar artistas">
          {[{ id: "todos", label: "Todos" }, ...gruposArtistas].map((g) => (
            <button
              key={g.id}
              onClick={() => setFiltro(g.id)}
              aria-pressed={filtro === g.id}
              className={`min-h-11 rounded-full px-5 text-sm font-bold uppercase tracking-wide transition-colors ${
                filtro === g.id
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((a) => (
            <li key={a.nombre} className="tarjeta aparece flex flex-col overflow-hidden">
              {/* Solución gráfica: sin fotografías de artistas sin derechos verificados */}
              <div
                className={`relative flex aspect-[16/10] items-end p-5 ${fondos[a.color]}`}
                aria-hidden="true"
              >
                <span className="trama-lunares absolute inset-0 text-white/25" />
                <span className="titular relative text-3xl leading-none text-white drop-shadow">
                  {a.nombre}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {a.tipo}
                  {a.local && " · Grupo local"}
                </p>
                <h2 className="titular mt-1 text-xl">{a.nombre}</h2>
                <p className="mt-1 text-sm font-semibold text-magenta">
                  {a.dia} · {a.hora} h
                </p>
                <p className="text-sm text-muted-foreground">{a.lugar}</p>
                {a.descripcion && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.descripcion}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
