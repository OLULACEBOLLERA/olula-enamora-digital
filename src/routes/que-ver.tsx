import { createFileRoute, Link } from "@tanstack/react-router";
import { enlaceMapa } from "../data/lugares";
import { PageHero } from "../components/PageHero";

const TITULO = "Qué ver en Olula del Río | Feria y Fiestas 2026";
const DESC =
  "Qué visitar en Olula del Río si vienes a la Feria 2026: Ciudad de la Cultura, Museo Casa Ibáñez, Mujer del Almanzora, iglesias, Vía Verde y entorno natural.";

export const Route = createFileRoute("/que-ver")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/que-ver" },
    ],
    links: [{ rel: "canonical", href: "/que-ver" }],
  }),
  component: QueVer,
});

const sitios = [
  {
    nombre: "Ciudad de la Cultura",
    etiqueta: "Arte contemporáneo · Museo, escultura y fotografía",
    texto:
      "El gran complejo cultural de Olula. Incluye el Museo Casa Ibáñez, una de las colecciones de arte contemporáneo más importantes de Andalucía, el Centro Pérez Siquier, primer museo de España dedicado íntegramente a un fotógrafo, y la monumental escultura Mujer del Almanzora: una cabeza colosal de 8 metros y unas 230 toneladas en mármol blanco de Macael, obra de Antonio López.",
  },
  {
    nombre: "Iglesia de San Sebastián (Iglesia Vieja)",
    etiqueta: "Patrimonio · Neoclásico · Siglo XVIII",
    texto:
      "El templo más antiguo conservado de la localidad y uno de los mejores ejemplos de arquitectura neoclásica de Almería. Diseñada por Ventura Rodríguez entre 1780 y 1789, con planta de cruz griega y cúpula vaída.",
  },
  {
    nombre: "Iglesia de la Asunción (Iglesia Nueva)",
    etiqueta: "Patrimonio · 1968 · Levantada por los vecinos",
    texto:
      "Diseñada por Ramón Montserrat Ballesté y construida entre 1960 y 1968 gracias al trabajo y las donaciones de los propios vecinos. Gran capacidad, uso generoso del mármol local y torre muy reconocible.",
  },
  {
    nombre: "Ermita del Cristo de la Buena Muerte",
    etiqueta: "Ermita · Cerro Almirez · Romería",
    texto:
      "A los pies del cerro Almirez, en la Sierra de las Estancias. En su plaza destaca el Cristo de la Buena Muerte, tallado en una sola pieza de mármol blanco de Macael. Cada segundo domingo de mayo se celebra su romería.",
  },
  {
    nombre: "Vía Verde del Almanzora",
    etiqueta: "Senderismo y ciclismo · Antigua vía férrea",
    texto:
      "Itinerario acondicionado sobre el antiguo ferrocarril Guadix-Almendricos. El tramo de Olula está asfaltado y es accesible a pie, en bici o en silla de ruedas, y conecta con Fines y Purchena.",
  },
  {
    nombre: "Piedra Ver de Olula",
    etiqueta: "Historia · Símbolo del pueblo",
    texto:
      "Roca emblemática donde se asienta el origen del pueblo. Conserva restos de una fortaleza y un aljibe medievales, además de indicios de ocupación desde la Edad del Bronce.",
  },
];

function QueVer() {
  return (
    <>
      <PageHero
        titulo="Qué ver en Olula"
        script="si vienes de fuera"
        entradilla="En Olula del Río, como en toda la Comarca del Mármol, la piedra está presente en aceras, plazas y edificios. Aprovecha la Feria para conocer el pueblo."
      />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <ul className="space-y-5">
          {sitios.map((s) => (
            <li key={s.nombre} className="tarjeta p-6">
              <p className="text-[11px] font-bold uppercase tracking-widest text-turquesa-dark">
                {s.etiqueta}
              </p>
              <h2 className="titular mt-1 text-2xl">{s.nombre}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
              <a
                href={enlaceMapa(s.nombre)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center rounded-full border-2 border-foreground px-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
              >
                📍 Cómo llegar
              </a>
            </li>
          ))}
        </ul>

        <div className="tarjeta mt-8 p-6">
          <h2 className="titular text-2xl">Gastronomía local</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Platos típicos del Valle del Almanzora: caldo de huevos, gazpacho,
            pucheros, embutidos y fritadas.
          </p>
          <Link
            to="/comercio"
            className="mt-4 inline-flex text-sm font-bold uppercase text-magenta hover:underline"
          >
            Ver bares y restaurantes →
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Fuentes: Turismo Almanzora, Ayuntamiento de Olula del Río y medios
          locales.
        </p>
      </section>
    </>
  );
}
