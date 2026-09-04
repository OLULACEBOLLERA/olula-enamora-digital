/**
 * Artistas del cartel 2026 según el Libro Oficial. No se usan fotografías
 * de los artistas: sin material oficial libre de derechos se emplea una
 * solución gráfica tipográfica con los colores de la campaña.
 */

export type Artista = {
  nombre: string;
  tipo: string;
  dia: string;
  hora: string;
  lugar: string;
  local?: boolean;
  destacado?: boolean;
  color: "turquesa" | "magenta" | "amarillo" | "cielo";
};

export const artistas: Artista[] = [
  { nombre: "Déjà Vu", tipo: "Concierto", dia: "Jueves 17", hora: "23:00", lugar: "Plaza de la Paloma", local: true, color: "turquesa" },
  { nombre: "Tributo a Bruce Springsteen", tipo: "Concierto tributo", dia: "Jueves 17", hora: "01:00", lugar: "Plaza de la Paloma", color: "magenta" },
  { nombre: "Psycho Killers", tipo: "Concierto", dia: "Jueves 17", hora: "02:30", lugar: "Plaza de la Paloma", local: true, color: "amarillo" },
  { nombre: "Ritmo del Sur", tipo: "Feria del Mediodía", dia: "Viernes 18", hora: "15:00", lugar: "Carpa Avenida Almanzora", color: "cielo" },
  { nombre: "Antonio Guevara DJ", tipo: "Sesión deejays", dia: "Viernes 18", hora: "17:00", lugar: "Carpa Avenida Almanzora", color: "turquesa" },
  { nombre: "Essencial Rock", tipo: "Concierto", dia: "Viernes 18", hora: "23:00", lugar: "Plaza de la Paloma", color: "magenta" },
  { nombre: "Dúo Larios", tipo: "Carpa Nueva Juventud", dia: "Viernes 18", hora: "23:00", lugar: "Edificio de la Tercera Edad", color: "amarillo" },
  { nombre: "Orquesta Azahara", tipo: "Orquesta", dia: "Viernes 18", hora: "01:00", lugar: "Plaza de la Paloma", color: "cielo" },
  { nombre: "José de Rico", tipo: "Gran concierto", dia: "Viernes 18", hora: "03:30", lugar: "Plaza de la Paloma", destacado: true, color: "magenta" },
  { nombre: "La Camarilla", tipo: "Feria del Mediodía", dia: "Sábado 19", hora: "15:00", lugar: "Carpa Avenida Almanzora", local: true, color: "turquesa" },
  { nombre: "JC Humble", tipo: "Sesión deejays", dia: "Sábado 19", hora: "17:00", lugar: "Carpa Avenida Almanzora", color: "amarillo" },
  { nombre: "Orquesta Melodías", tipo: "Orquesta", dia: "Sábado 19", hora: "23:00", lugar: "Plaza de la Paloma", color: "cielo" },
  { nombre: "Carmen Mari Show", tipo: "Carpa Nueva Juventud", dia: "Sábado 19", hora: "23:00", lugar: "Edificio de la Tercera Edad", color: "magenta" },
  { nombre: "Juan Peña", tipo: "Gran concierto", dia: "Sábado 19", hora: "01:00", lugar: "Plaza de la Paloma", destacado: true, color: "turquesa" },
  { nombre: "Los Galgos", tipo: "Feria del Mediodía", dia: "Domingo 20", hora: "15:00", lugar: "Carpa Avenida Almanzora", local: true, color: "amarillo" },
  { nombre: "Ernesto DJ", tipo: "Sesión deejays", dia: "Domingo 20", hora: "17:00", lugar: "Carpa Avenida Almanzora", color: "cielo" },
  { nombre: "Los Bigardos", tipo: "Concierto", dia: "Domingo 20", hora: "20:00", lugar: "Plaza de la Paloma", local: true, color: "turquesa" },
  { nombre: "Los Mojinos Escozíos", tipo: "Gran concierto", dia: "Domingo 20", hora: "22:00", lugar: "Plaza de la Paloma", destacado: true, color: "magenta" },
];
