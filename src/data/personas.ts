/**
 * Personas del Libro Oficial 2026: pregonera, reinas y damas, inaugurador
 * y corporación municipal. Solo datos publicados en el libro.
 */

export const pregonera = {
  nombre: "Pilar Sáez Sorroche",
  apodo: "Pili del Barrio",
  cargo: "Pregonera de la Feria y Fiestas 2026",
  acto: "Jueves 17 de septiembre, 20:00 h · Espacio Escénico",
};

export const inaugurador = {
  nombre: "D. Ramón Fernández-Pacheco Montereal",
  cargo:
    "Consejero de Agricultura, Pesca, Agua y Desarrollo Rural de la Junta de Andalucía",
  acto: "Viernes 18 de septiembre, 14:00 h · Carpa Avenida Almanzora",
};

export const alcalde = {
  nombre: "D. Antonio Martínez Pascual",
  cargo: "Alcalde-Presidente del Excmo. Ayuntamiento de Olula del Río",
};

export type Realeza = {
  nombre: string;
  titulo: string;
  grupo: "infantil" | "juvenil";
  foto: string;
};
