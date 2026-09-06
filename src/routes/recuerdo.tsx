import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { anuario, recuerdo } from "../data/imagenes";
import { PageHero } from "../components/PageHero";

const TITULO = "Olula en el Recuerdo y Anuario 2026 | Feria de Olula del Río";
const DESC =
  "Fotografías históricas de Olula del Río y anuario fotográfico del Libro Oficial de la Feria y Fiestas 2026: un año entero de vida del pueblo en imágenes.";

export const Route = createFileRoute("/recuerdo")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/recuerdo" },
    ],
    links: [{ rel: "canonical", href: "/recuerdo" }],
  }),
  component: Recuerdo,
});

function Recuerdo() {
  const [ampliada, setAmpliada] = useState<string | null>(null);

  return (
    <>
      <PageHero
        titulo="Olula en el Recuerdo"
        script="nuestra memoria"
        entradilla="Fotografías antiguas del pueblo y el anuario fotográfico del año, tal y como se recogen en el Libro Oficial de la Feria 2026."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="titular text-2xl sm:text-3xl">Fotografías históricas</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Calles, ferias de antaño y vecinos de otras épocas. Toca cualquier
          imagen para verla más grande.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {recuerdo.map((src, i) => (
            <li key={src}>
              <button
                onClick={() => setAmpliada(src)}
                className="block w-full overflow-hidden rounded-xl border-2 border-foreground/10 transition-transform hover:-translate-y-1"
              >
                <img
                  src={src}
                  alt={`Fotografía histórica de Olula del Río incluida en el Libro Oficial 2026 (${i + 1})`}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>

        <h2 className="titular mt-16 text-2xl sm:text-3xl">Anuario fotográfico 2026</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Una selección del anuario del libro: fiestas, colegios, asociaciones,
          deporte y vida de barrio a lo largo del año.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {anuario.map((src, i) => (
            <li key={src}>
              <button
                onClick={() => setAmpliada(src)}
                className="block w-full overflow-hidden rounded-xl border-2 border-foreground/10 transition-transform hover:-translate-y-1"
              >
                <img
                  src={src}
                  alt={`Imagen del anuario fotográfico de Olula del Río 2026 (${i + 1})`}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {ampliada && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setAmpliada(null)}
        >
          <img
            src={ampliada}
            alt="Fotografía ampliada del libro de la Feria de Olula del Río 2026"
            className="max-h-[85dvh] w-auto max-w-full rounded-xl"
          />
          <button
            onClick={() => setAmpliada(null)}
            className="absolute right-4 top-4 min-h-11 rounded-full bg-background px-5 font-bold"
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}
