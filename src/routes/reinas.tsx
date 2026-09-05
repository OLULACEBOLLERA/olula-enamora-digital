import { createFileRoute } from "@tanstack/react-router";
import { img } from "../data/imagenes";
import { PageHero } from "../components/PageHero";

const TITULO = "Reinas y Damas 2026 | Feria y Fiestas de Olula del Río";
const DESC =
  "Reinas y Damas de la Feria y Fiestas de Olula del Río 2026: Blanca Garre Fernández, Alba Simón Belmonte y sus damas infantiles y juveniles.";

export const Route = createFileRoute("/reinas")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESC },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/reinas" },
    ],
    links: [{ rel: "canonical", href: "/reinas" }],
  }),
  component: Reinas,
});

const infantiles = [
  { nombre: "Blanca Garre Fernández", titulo: "Reina Infantil", foto: "reina-infantil.jpg" },
  { nombre: "Lucía Sola Sáez", titulo: "Dama Infantil", foto: "dama-infantil-lucia.jpg" },
  {
    nombre: "Isabel María Carrión Martínez",
    titulo: "Dama Infantil",
    foto: "dama-infantil-isabel.jpg",
  },
];

const juveniles = [
  { nombre: "Alba Simón Belmonte", titulo: "Reina Juvenil", foto: "reina-juvenil.jpg" },
  { nombre: "Belén Rivera Lozano", titulo: "Dama Juvenil", foto: "dama-juvenil-belen.jpg" },
  { nombre: "Elena Parra Martínez", titulo: "Dama Juvenil", foto: "dama-juvenil-elena.jpg" },
];

function Tarjeta({ nombre, titulo, foto }: { nombre: string; titulo: string; foto: string }) {
  return (
    <li className="tarjeta overflow-hidden">
      <img
        src={img[foto]}
        alt={`${nombre}, ${titulo} de la Feria y Fiestas de Olula del Río 2026`}
        loading="lazy"
        className="aspect-[4/5] w-full object-contain bg-secondary"
      />
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-magenta">{titulo}</p>
        <h3 className="titular mt-1 text-xl">{nombre}</h3>
      </div>
    </li>
  );
}

function Reinas() {
  return (
    <>
      <PageHero
        titulo="Reinas y Damas 2026"
        script="nuestra representación"
        entradilla="Serán coronadas el jueves 17 de septiembre en el Espacio Escénico, tras el pregón de la Feria."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="titular text-2xl text-turquesa-dark">Infantiles</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {infantiles.map((p) => (
            <Tarjeta key={p.nombre} {...p} />
          ))}
        </ul>

        <h2 className="titular mt-14 text-2xl text-magenta">Juveniles</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {juveniles.map((p) => (
            <Tarjeta key={p.nombre} {...p} />
          ))}
        </ul>
      </section>
    </>
  );
}
