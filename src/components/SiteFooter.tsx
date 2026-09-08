import { Link } from "@tanstack/react-router";
import { CintaColores } from "./Deco";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-foreground text-background">
      <CintaColores />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="titular text-2xl">Feria y Fiestas</p>
          <p className="manuscrita text-4xl text-amarillo">Olula en feria</p>
          <p className="mt-3 text-sm text-background/70">
            Olula del Río · Del 17 al 20 de septiembre de 2026
          </p>
        </div>
        <div>
          <h2 className="titular text-sm text-turquesa">La Feria</h2>
          <ul className="mt-3 space-y-2 text-sm text-background/80">
            <li><Link to="/programa" search={{ dia: undefined }} className="hover:text-amarillo">Programa por días</Link></li>
            <li><Link to="/artistas" className="hover:text-amarillo">Artistas y conciertos</Link></li>
            <li><Link to="/feria-del-mediodia" className="hover:text-amarillo">Feria del Mediodía</Link></li>
            <li><Link to="/actividades" className="hover:text-amarillo">Actividades previas</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="titular text-sm text-turquesa">Protagonistas</h2>
          <ul className="mt-3 space-y-2 text-sm text-background/80">
            <li><Link to="/reinas" className="hover:text-amarillo">Reinas y Damas</Link></li>
            <li><Link to="/pregonera" className="hover:text-amarillo">Pregonera</Link></li>
            <li><Link to="/saluda" className="hover:text-amarillo">Saluda del Alcalde</Link></li>
            <li><Link to="/recuerdo" className="hover:text-amarillo">Olula en el Recuerdo</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="titular text-sm text-turquesa">Contacto</h2>
          <ul className="mt-3 space-y-2 text-sm text-background/80">
            <li>
              Ayuntamiento de Olula del Río{" "}
              <a href="tel:+34950441000" className="block font-semibold text-background hover:text-amarillo">
                950 441 000
              </a>
            </li>
            <li><Link to="/comercio" className="hover:text-amarillo">Guía comercial</Link></li>
            <li><Link to="/informacion" className="hover:text-amarillo">Información y lugares</Link></li>
            <li><Link to="/que-ver" className="hover:text-amarillo">Qué ver en Olula</Link></li>
            <li><Link to="/historia" className="hover:text-amarillo">Historia del pueblo</Link></li>
            <li><Link to="/galeria" className="hover:text-amarillo">Fotos de la feria</Link></li>
            <li><Link to="/prensa" className="hover:text-amarillo">Prensa</Link></li>
            <li><Link to="/objetos-perdidos" className="hover:text-amarillo">Objetos perdidos</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15 py-5 text-center text-xs text-background/60">
        Contenido oficial del Libro de la Feria y Fiestas de Olula del Río 2026 ·
        Excmo. Ayuntamiento de Olula del Río
      </div>
    </footer>
  );
}
