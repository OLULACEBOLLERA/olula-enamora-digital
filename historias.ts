/** Historias editoriales de Olula 2026. */

export type Seccion = { titulo?: string; parrafos: string[] };

export type HuecoFoto = { titulo: string; descripcion: string };

export type Historia = {
  slug: string;
  categoria: string;
  antetitulo: string;
  titulo: string;
  tituloTarjeta: string;
  entradilla: string;
  textoBreve: string;
  imagen: string;
  imagenAlt: string;
  pieFoto: string;
  imagenAncho?: number;
  imagenAlto?: number;
  secciones: Seccion[];
  datos: { etiqueta: string; valor: string }[];
  fuentes: { medio: string; titulo: string; url: string }[];
  tituloFuentes?: string;
  /** Huecos reservados para fotos reales que se incorporarán más adelante. */
  huecosFoto?: HuecoFoto[];
};

// Cada historia vive en su propio archivo (historia-<slug>.ts).
// Para añadir una historia nueva:
//   1. Crea src/data/historia-mi-historia.ts siguiendo el mismo patrón
//      (mira historia-juanmi.ts como plantilla).
//   2. Impórtala aquí abajo.
//   3. Añádela al array `historias` (el orden del array es el orden
//      en que aparecen en /historias).
import { anaBelen } from "./historia-ana-belen";
import { juanmiMolina } from "./historia-juanmi";

export { anaBelen, juanmiMolina };

export const historias: Historia[] = [juanmiMolina, anaBelen];
