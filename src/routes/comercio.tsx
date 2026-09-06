import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categorias, comercios } from "../data/comercio";
import { PageHero } from "../components/PageHero";

const TITULO = "Guía comercial de Olula del Río | Feria y Fiestas 2026";
const DESC =
  "Guía comercial del Libro Oficial de la Feria de Olula del Río 2026: bares, tiendas, servicios y profesionales con teléfono directo y categoría.";

export const Route = createFileRoute("/comercio")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/comercio" },
    ],
    links: [{ rel: "canonical", href: "/comercio" }],
  }),
  component: Comercio,
});

function tel(t: string) {
  return `tel:+34${t.replace(/\s/g, "")}`;
}

function Comercio() {
  const [texto, setTexto] = useState("");
  const [cat, setCat] = useState("Todas");

  const lista = useMemo(() => {
    const q = texto.trim().toLowerCase();
    return comercios.filter((c) => {
      const okCat = cat === "Todas" || c.categoria === cat;
      const okTexto =
        !q ||
        c.nombre.toLowerCase().includes(q) ||
        c.categoria.toLowerCase().includes(q) ||
        (c.telefonos ?? []).some((t) => t.replace(/\s/g, "").includes(q.replace(/\s/g, "")));
      return okCat && okTexto;
    });
  }, [texto, cat]);

  return (
    <>
      <PageHero
        titulo="Empresas y comercios"
        script="que hacen posible la feria"
        entradilla="Sin su ayuda no serían posibles el programa ni la guía comercial. Busca por nombre o filtra por categoría; el teléfono se marca con un toque."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <label htmlFor="buscar" className="block text-sm font-bold uppercase tracking-wide">
          Buscar comercio
        </label>
        <input
          id="buscar"
          type="search"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nombre, categoría o teléfono"
          className="mt-2 h-12 w-full rounded-full border-2 border-border bg-background px-5 text-base outline-none focus:border-turquesa"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {["Todas", ...categorias].map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`min-h-11 rounded-full px-4 text-sm font-bold transition-colors ${
                cat === c
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {lista.length} comercios
        </p>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((c) => (
            <li key={c.nombre} className="tarjeta flex flex-col p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-turquesa-dark">
                {c.categoria}
              </p>
              <h2 className="mt-1 text-lg font-bold leading-snug">{c.nombre}</h2>
              {c.direccion && <p className="mt-1 text-sm text-muted-foreground">{c.direccion}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {(c.telefonos ?? []).map((t) => (
                  <a
                    key={t}
                    href={tel(t)}
                    className="inline-flex min-h-11 items-center rounded-full bg-magenta px-4 text-sm font-bold text-white"
                  >
                    📞 {t}
                  </a>
                ))}
                {c.web && (
                  <a
                    href={c.web}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border-2 border-foreground px-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
                  >
                    Web
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        {lista.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No hay comercios con esa búsqueda.
          </p>
        )}
      </section>
    </>
  );
}
