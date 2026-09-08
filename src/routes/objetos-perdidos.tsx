import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";

const TITULO = "Objetos perdidos | Feria y Fiestas de Olula del Río 2026";
const DESC =
  "Qué hacer si pierdes o encuentras algo durante la Feria de Olula del Río 2026: contacta con la Policía Local o el Ayuntamiento.";

export const Route = createFileRoute("/objetos-perdidos")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/objetos-perdidos" },
    ],
    links: [{ rel: "canonical", href: "/objetos-perdidos" }],
  }),
  component: ObjetosPerdidos,
});

const contactos = [
  { nombre: "Policía Local", telefono: "677 443 370" },
  { nombre: "Ayuntamiento de Olula del Río", telefono: "950 441 000" },
  { nombre: "Guardia Civil", telefono: "950 440 144" },
];

function ObjetosPerdidos() {
  return (
    <>
      <PageHero
        titulo="Objetos perdidos"
        script="¿se te ha caído algo?"
        entradilla="Si pierdes o encuentras algo durante la Feria, estos son los teléfonos a los que llamar."
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <ul className="grid gap-4 sm:grid-cols-2">
          {contactos.map((c) => (
            <li key={c.nombre} className="tarjeta p-5">
              <p className="text-sm text-muted-foreground">{c.nombre}</p>
              <a
                href={`tel:+34${c.telefono.replace(/\s/g, "")}`}
                className="titular mt-1 block text-2xl text-magenta"
              >
                {c.telefono}
              </a>
            </li>
          ))}
        </ul>

        <div className="tarjeta mt-8 p-6">
          <h2 className="titular text-xl">Consejos</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>Si encuentras documentación o una cartera, entrégala en el Ayuntamiento o a la Policía Local.</li>
            <li>Apunta dónde y a qué hora perdiste el objeto: facilita mucho la búsqueda.</li>
            <li>Para niños perdidos en el recinto, avisa de inmediato a la Policía Local o a cualquier trabajador de la Feria.</li>
          </ul>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          El tablón de avisos en la web para publicar objetos perdidos se
          habilitará cuando esté disponible la moderación de contenidos.
        </p>
      </section>
    </>
  );
}
