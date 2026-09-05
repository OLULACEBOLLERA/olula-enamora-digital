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
  descripcion?: string;
  local?: boolean;
  destacado?: boolean;
  grupo: "grandes" | "orquestas" | "locales" | "mediodia" | "mayores";
  color: "turquesa" | "magenta" | "amarillo" | "cielo";
};

export const artistas: Artista[] = [
  {
    nombre: "Los Mojinos Escozíos",
    tipo: "Gran concierto",
    dia: "Domingo 20",
    hora: "22:00",
    lugar: "Plaza de la Paloma",
    descripcion:
      "Grupo de hard rock humorístico nacido en 1994. Liderados por El Sevilla, celebran su 30 aniversario poniendo el broche final a la Feria.",
    destacado: true,
    grupo: "grandes",
    color: "magenta",
  },
  {
    nombre: "José de Rico",
    tipo: "Gran concierto",
    dia: "Viernes 18",
    hora: "03:30",
    lugar: "Plaza de la Paloma",
    descripcion:
      "DJ y productor conocido por éxitos como «Rayos de sol». Electro latino y ritmos urbanos para la madrugada del viernes.",
    destacado: true,
    grupo: "grandes",
    color: "turquesa",
  },
  {
    nombre: "Juan Peña",
    tipo: "Gran concierto",
    dia: "Sábado 19",
    hora: "01:00",
    lugar: "Plaza de la Paloma",
    descripcion:
      "Cantante jerezano que mezcla flamenco, rumba y pop. Habitual de las grandes ferias de Andalucía.",
    destacado: true,
    grupo: "grandes",
    color: "amarillo",
  },
  {
    nombre: "Tributo a Bruce Springsteen",
    tipo: "Concierto tributo",
    dia: "Jueves 17",
    hora: "01:00",
    lugar: "Plaza de la Paloma",
    descripcion: "Los clásicos del Boss en directo para abrir la madrugada del jueves.",
    grupo: "grandes",
    color: "cielo",
  },

  {
    nombre: "Orquesta Azahara",
    tipo: "Orquesta",
    dia: "Viernes 18",
    hora: "01:00",
    lugar: "Plaza de la Paloma",
    descripcion:
      "Orquesta de verbena con gran repertorio de éxitos actuales y clásicos. Garantía de ambiente y baile.",
    grupo: "orquestas",
    color: "magenta",
  },
  {
    nombre: "Orquesta Melodías",
    tipo: "Orquesta",
    dia: "Sábado 19",
    hora: "23:00",
    lugar: "Plaza de la Paloma",
    descripcion:
      "Una de las orquestas más solicitadas del circuito de ferias. Versiones potentes y mucho ritmo.",
    grupo: "orquestas",
    color: "turquesa",
  },
  {
    nombre: "Essencial Rock",
    tipo: "Concierto",
    dia: "Viernes 18",
    hora: "23:00",
    lugar: "Plaza de la Paloma",
    descripcion:
      "Formación de rock con un directo enérgico y versiones de grandes clásicos y temas actuales.",
    grupo: "orquestas",
    color: "amarillo",
  },

  {
    nombre: "Déjà Vu",
    tipo: "Concierto",
    dia: "Jueves 17",
    hora: "23:00",
    lugar: "Plaza de la Paloma",
    descripcion:
      "Grupo local muy popular. Abren la programación musical de la Feria con un directo cercano y enérgico.",
    local: true,
    grupo: "locales",
    color: "turquesa",
  },
  {
    nombre: "Psycho Killers",
    tipo: "Concierto",
    dia: "Jueves 17",
    hora: "02:30",
    lugar: "Plaza de la Paloma",
    descripcion: "Grupo local de rock. Cierran la madrugada del jueves al viernes.",
    local: true,
    grupo: "locales",
    color: "magenta",
  },
  {
    nombre: "Los Bigardos",
    tipo: "Concierto",
    dia: "Domingo 20",
    hora: "20:00",
    lugar: "Plaza de la Paloma",
    descripcion:
      "Grupo local muy querido. Actúan el domingo antes del gran cierre de la Feria.",
    local: true,
    grupo: "locales",
    color: "amarillo",
  },
  {
    nombre: "La Camarilla",
    tipo: "Feria del Mediodía",
    dia: "Sábado 19",
    hora: "15:00",
    lugar: "Carpa Avenida Almanzora",
    descripcion: "Grupo local. Ambientan la tarde del sábado en la Feria del Mediodía.",
    local: true,
    grupo: "mediodia",
    color: "cielo",
  },
  {
    nombre: "Los Galgos",
    tipo: "Feria del Mediodía",
    dia: "Domingo 20",
    hora: "15:00",
    lugar: "Carpa Avenida Almanzora",
    descripcion: "Grupo local. Ponen la música de la tarde del domingo.",
    local: true,
    grupo: "mediodia",
    color: "magenta",
  },
  {
    nombre: "Ritmo del Sur",
    tipo: "Feria del Mediodía",
    dia: "Viernes 18",
    hora: "15:00",
    lugar: "Carpa Avenida Almanzora",
    descripcion: "Actuación que estrena la Feria del Mediodía tras la inauguración oficial.",
    grupo: "mediodia",
    color: "turquesa",
  },
  {
    nombre: "Antonio Guevara DJ",
    tipo: "Sesión deejays",
    dia: "Viernes 18",
    hora: "17:00",
    lugar: "Carpa Avenida Almanzora",
    grupo: "mediodia",
    color: "amarillo",
  },
  {
    nombre: "JC Humble",
    tipo: "Sesión deejays",
    dia: "Sábado 19",
    hora: "17:00",
    lugar: "Carpa Avenida Almanzora",
    grupo: "mediodia",
    color: "cielo",
  },
  {
    nombre: "Ernesto DJ",
    tipo: "Sesión deejays",
    dia: "Domingo 20",
    hora: "17:00",
    lugar: "Carpa Avenida Almanzora",
    grupo: "mediodia",
    color: "turquesa",
  },

  {
    nombre: "Dúo Larios",
    tipo: "Carpa Nueva Juventud",
    dia: "Viernes 18",
    hora: "23:00",
    lugar: "Edificio de la Tercera Edad",
    descripcion: "Actuación musical para nuestros mayores en la Carpa Nueva Juventud.",
    grupo: "mayores",
    color: "magenta",
  },
  {
    nombre: "Carmen Mari Show",
    tipo: "Carpa Nueva Juventud",
    dia: "Sábado 19",
    hora: "23:00",
    lugar: "Edificio de la Tercera Edad",
    descripcion: "Espectáculo musical en la Carpa Nueva Juventud del Edificio de la Tercera Edad.",
    grupo: "mayores",
    color: "amarillo",
  },
];

export const gruposArtistas = [
  { id: "grandes", label: "Grandes conciertos" },
  { id: "orquestas", label: "Orquestas y bandas" },
  { id: "locales", label: "Grupos locales" },
  { id: "mediodia", label: "Feria del Mediodía" },
  { id: "mayores", label: "Carpa Nueva Juventud" },
] as const;
