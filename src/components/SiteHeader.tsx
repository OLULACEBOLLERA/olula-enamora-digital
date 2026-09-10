import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CintaColores } from "./Deco";

const enlaces = [
  { to: "/", label: "Inicio" },
  { to: "/programa", label: "Programa" },
  { to: "/artistas", label: "Artistas" },
  { to: "/reinas", label: "Reinas y Damas" },
  { to: "/pregonera", label: "Pregonera" },
  { to: "/saluda", label: "Saluda" },
  { to: "/feria-del-mediodia", label: "Feria del Mediodía" },
  { to: "/actividades", label: "Actividades" },
  { to: "/comercio", label: "Comercio" },
  { to: "/recuerdo", label: "Olula en el Recuerdo" },
  { to: "/historias", label: "Historias 2026" },
  { to: "/que-ver", label: "Qué ver" },
  { to: "/historia", label: "Historia" },
  { to: "/galeria", label: "Fotos" },
  { to: "/prensa", label: "Prensa" },
  { to: "/objetos-perdidos", label: "Objetos perdidos" },
  { to: "/informacion", label: "Información" },
] as const;

export function SiteHeader() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <CintaColores />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setAbierto(false)}>
          <span className="titular text-lg leading-none sm:text-xl">Olula</span>
          <span className="manuscrita text-2xl text-magenta sm:text-3xl">en feria</span>
        </Link>

        <nav className="hidden lg:block" aria-label="Navegación principal">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-semibold uppercase tracking-wide">
            {enlaces.map((e) => (
              <li key={e.to}>
                <Link
                  to={e.to}
                  className="rounded-full px-2 py-1 text-foreground/70 transition-colors hover:text-magenta"
                  activeProps={{ className: "text-magenta" }}
                  activeOptions={{ exact: e.to === "/" }}
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-foreground px-4 text-sm font-bold uppercase text-background lg:hidden"
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>
      </div>

      {abierto && (
        <nav
          id="menu-movil"
          aria-label="Navegación principal móvil"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
            {enlaces.map((e) => (
              <li key={e.to}>
                <Link
                  to={e.to}
                  onClick={() => setAbierto(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wide text-foreground/80 hover:bg-secondary"
                  activeProps={{ className: "bg-secondary text-magenta" }}
                  activeOptions={{ exact: e.to === "/" }}
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
