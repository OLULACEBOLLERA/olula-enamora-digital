/**
 * Localizaciones citadas en el Libro Oficial. No se usan coordenadas
 * inventadas: cada enlace abre una búsqueda del lugar real en Olula del Río.
 */

export type Lugar = {
  nombre: string;
  descripcion: string;
};

export const lugares: Lugar[] = [
  {
    nombre: "Espacio Escénico",
    descripcion: "Pregón y coronación de las Reinas y Damas.",
  },
  {
    nombre: "Carpa Avenida Almanzora",
    descripcion: "Sede de la Feria del Mediodía, del 18 al 20 de septiembre.",
  },
  {
    nombre: "Plaza de la Paloma",
    descripcion: "Conciertos y orquestas de noche y madrugada.",
  },
  {
    nombre: "Edificio de la Tercera Edad",
    descripcion: "Carpa Nueva Juventud, con actuaciones para nuestros mayores.",
  },
  {
    nombre: "Explanada Laborda, Barrio Santiago",
    descripcion: "Taller «Diseña tu sombrero».",
  },
  {
    nombre: "Recinto Ferial",
    descripcion: "Atracciones y Rute Burguer 04.",
  },
  {
    nombre: "Pabellón Municipal",
    descripcion: "Torneos de voleibol y baloncesto 3x3.",
  },
  {
    nombre: "Pistas Municipales",
    descripcion: "Torneos de tenis y pádel.",
  },
  {
    nombre: "Plaza del Ayuntamiento",
    descripcion: "Concierto de Alina-Coral Sentimento e inicio del pasacalle.",
  },
  {
    nombre: "Plaza Iglesia San Sebastián",
    descripcion: "Concierto de la Banda Municipal Amigos de la Música.",
  },
  {
    nombre: "Plaza San Luis",
    descripcion: "Mural «Olula es Tradición».",
  },
  {
    nombre: "C.E.I.P. Antonio Relaño",
    descripcion: "Ludum infantil, hinchables y fiesta de la espuma.",
  },
  {
    nombre: "Parque San Pablo",
    descripcion: "Salida del Día de la Bicicleta.",
  },
  {
    nombre: "Nave Polivalente",
    descripcion: "Los 90’s Olula Fest, sábado 26.",
  },
];

export function enlaceMapa(lugar: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${lugar}, Olula del Río, Almería`,
  )}`;
}
