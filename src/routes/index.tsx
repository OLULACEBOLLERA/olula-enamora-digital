import { createFileRoute, Link } from "@tanstack/react-router";
import { dias } from "../data/programa";
import { artistas } from "../data/artistas";
import { img } from "../data/imagenes";
import { AvisoAccesibilidad } from "../components/AvisoAccesibilidad";
import { ArcoRayas, CintaColores, Onda } from "../components/Deco";

const TITULO = "Feria y Fiestas de Olula del Río 2026 | Programa Oficial";
const DESC =
  "Programa oficial de la Feria y Fiestas de Olula del Río 2026, del 17 al 20 de septiembre: conciertos, Feria del Mediodía, pregón, reinas y damas y actividades previas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  const destacados = artistas.filter((a) => a.destacado);

  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <ArcoRayas className="pointer-events-none absolute -left-24 top-24 h-72 w-72 text-cielo/40" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-16">
          <div className="aparece">
            <p className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-background">
              Del 17 al 20 de septiembre
            </p>
            <h1 className="mt-5">
              <span className="titular block text-[13vw] leading-[0.85] sm:text-6xl lg:text-7xl">
                Feria y Fiestas
              </span>
              <span className="manuscrita mt-1 block text-[16vw] leading-none text-magenta sm:text-7xl lg:text-8xl">
                Olula enamora
              </span>
              <span className="titular mt-2 block text-3xl text-turquesa-dark sm:text-4xl">
                Olula del Río · 2026
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cuatro días de pregón, carrozas, Feria del Mediodía, orquestas y
              grandes conciertos. Toda la programación oficial del libro de
              feria, en tu bolsillo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programa"
                className="inline-flex min-h-12 items-center rounded-full bg-magenta px-7 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Ver el programa
              </Link>
              <Link
                to="/artistas"
                className="inline-flex min-h-12 items-center rounded-full border-2 border-foreground px-7 text-base font-bold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                Artistas
              </Link>
            </div>
          </div>

          <figure className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amarillo" aria-hidden="true" />
            <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-turquesa" aria-hidden="true" />
            <img
              src={img["portada.jpg"]}
              width={1190}
              height={1684}
              alt="Ilustración de la portada del Libro Oficial de la Feria y Fiestas de Olula del Río 2026"
              className="relative w-full rounded-3xl border-4 border-foreground object-cover shadow-2xl"
            />
            <figcaption className="relative mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Portada del Libro Oficial de la Feria 2026
            </figcaption>
          </figure>
        </div>
        <CintaColores />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="manuscrita text-4xl text-turquesa-dark">cuatro días</p>
            <h2 className="titular text-3xl sm:text-4xl">El programa, día a día</h2>
          </div>
          <Link to="/programa" className="text-sm font-bold uppercase tracking-wide text-magenta hover:underline">
            Programa completo →
          </Link>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dias.map((d, i) => (
            <li key={d.id}>
              <Link
                to="/programa"
                search={{ dia: d.id }}
                className="tarjeta group flex h-full flex-col p-5 transition-transform hover:-translate-y-1"
              >
                <span
                  className="titular text-6xl"
                  style={{
                    color: ["var(--turquesa)", "var(--magenta)", "var(--amarillo)", "var(--cielo)"][i],
                  }}
                >
                  {d.numero}
                </span>
                <span className="titular text-lg">{d.diaSemana}</span>
                <span className="mt-2 text-sm text-muted-foreground">{d.lema}</span>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-magenta">
                  {d.actos.length} actos
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-foreground py-16 text-background">
        <Onda className="absolute top-0 left-0 h-10 w-[140%] opacity-60" color="var(--magenta)" />
        <div className="mx-auto max-w-6xl px-4">
          <p className="manuscrita text-4xl text-amarillo">no te los pierdas</p>
          <h2 className="titular text-3xl sm:text-4xl">Los grandes conciertos</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {destacados.map((a) => (
              <li
                key={a.nombre}
                className="rounded-2xl border border-background/20 bg-background/5 p-6 transition-colors hover:bg-background/10"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-turquesa">
                  {a.dia} · {a.hora}
                </p>
                <p className="titular mt-2 text-2xl">{a.nombre}</p>
                <p className="mt-2 text-sm text-background/70">{a.lugar}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 lg:grid-cols-2">
        <AvisoAccesibilidad />
        <div className="tarjeta p-6 sm:p-7">
          <p className="titular text-sm text-magenta">Feria del Mediodía</p>
          <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">
            Del viernes 18 al domingo 20, desde las 14:00 h en la Carpa de la
            Avenida Almanzora.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Inaugura D. Ramón Fernández-Pacheco Montereal, Consejero de
            Agricultura, Pesca, Agua y Desarrollo Rural de la Junta de
            Andalucía.
          </p>
          <Link
            to="/feria-del-mediodia"
            className="mt-4 inline-flex text-sm font-bold uppercase tracking-wide text-magenta hover:underline"
          >
            Ver el mediodía →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="titular text-3xl sm:text-4xl">Protagonistas de 2026</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-3">
          <li className="tarjeta overflow-hidden">
            <img
              src={img["reina-juvenil.jpg"]}
              alt="Alba Simón Belmonte, Reina Juvenil de la Feria y Fiestas 2026"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="p-5">
              <p className="titular text-xl">Reinas y Damas</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Coronación el jueves 17 en el Espacio Escénico.
              </p>
              <Link to="/reinas" className="mt-3 inline-flex text-sm font-bold uppercase text-magenta hover:underline">
                Conócelas →
              </Link>
            </div>
          </li>
          <li className="tarjeta overflow-hidden">
            <img
              src={img["pregonera.png"]}
              alt="Pilar Sáez Sorroche, pregonera de la Feria y Fiestas 2026"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="p-5">
              <p className="titular text-xl">Pregonera</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pilar Sáez Sorroche, «Pili del Barrio».
              </p>
              <Link to="/pregonera" className="mt-3 inline-flex text-sm font-bold uppercase text-magenta hover:underline">
                El pregón →
              </Link>
            </div>
          </li>
          <li className="tarjeta overflow-hidden">
            <img
              src={img["alcalde.png"]}
              alt="D. Antonio Martínez Pascual, Alcalde de Olula del Río"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="p-5">
              <p className="titular text-xl">Saluda del Alcalde</p>
              <p className="mt-1 text-sm text-muted-foreground">
                D. Antonio Martínez Pascual.
              </p>
              <Link to="/saluda" className="mt-3 inline-flex text-sm font-bold uppercase text-magenta hover:underline">
                Leer el saluda →
              </Link>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
