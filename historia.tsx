import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";

const TITULO = "Historia de Olula del Río | Feria y Fiestas 2026";
const DESC =
  "Historia de Olula del Río: desde la prehistoria y Al-Ándalus hasta la repoblación, el despegue del mármol y la Olula cultural de hoy.";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/historia" },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
  component: Historia,
});

const etapas = [
  {
    titulo: "Prehistoria",
    texto:
      "Hay evidencias de poblamiento desde el Neolítico y la Edad del Cobre. El yacimiento más destacado es la Cueva de la Humosa, al pie de la Sierra de Olula.",
  },
  {
    titulo: "Época musulmana (Al-Ándalus)",
    texto:
      "El núcleo actual del pueblo nace en esta época, sobre la Piedra Ver de Olula, roca escarpada y fácil de defender que sigue siendo símbolo del pueblo y aparece en el escudo municipal. Quedan restos de urbanismo, torreones y un aljibe. La economía se basaba en la agricultura y en la cría del gusano de seda. En el siglo XIV, Ibn al-Jatib la menciona como «Goulula del Río».",
  },
  {
    titulo: "Conquista cristiana (1488)",
    texto:
      "Con las capitulaciones de los lugares del río Almanzora, Olula del Río, junto con Purchena y Urrácal, es entregada en señorío a Luis de la Cerda, duque de Medinaceli. En 1560 pasa a la Corona y después es vendida a Miguel Serrano.",
  },
  {
    titulo: "Rebelión de los moriscos (1568-1571)",
    texto:
      "Durante la Guerra de las Alpujarras el pueblo se suma a la rebelión morisca. Tras la derrota, la población morisca es encarcelada en la alcazaba de Purchena y quedan en Olula apenas cuatro familias cristianas.",
  },
  {
    titulo: "Repoblación (desde 1572)",
    texto:
      "Llegan unas 30 familias, la mayoría del Levante español. San Sebastián es proclamado patrón en 1568 y San Ildefonso se añade al culto en 1666. De esta época proceden las raíces de las fiestas de «Roscos y Carretillas».",
  },
  {
    titulo: "Época moderna y contemporánea",
    texto:
      "Hasta mediados del siglo XX el pueblo es fundamentalmente agrícola y ganadero. Desde los años 50 llega el despegue industrial del mármol y un fuerte crecimiento demográfico: de unos 1.800 habitantes en 1939 a más de 6.000 en la actualidad. En las últimas décadas destaca su apuesta cultural.",
  },
];

function Historia() {
  return (
    <>
      <PageHero
        titulo="Historia de Olula"
        script="de dónde venimos"
        entradilla="Un recorrido por los orígenes y la evolución del pueblo, desde la Piedra Ver hasta la capital cultural del Valle del Almanzora."
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <ol className="relative space-y-8 border-l-4 border-turquesa/40 pl-6">
          {etapas.map((e, i) => (
            <li key={e.titulo} className="relative">
              <span
                className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-magenta text-[11px] font-bold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h2 className="titular text-xl">{e.titulo}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-xs text-muted-foreground">
          Fuentes: Turismo Almanzora, Instituto de Estudios Almerienses y medios
          locales.
        </p>
      </section>
    </>
  );
}
