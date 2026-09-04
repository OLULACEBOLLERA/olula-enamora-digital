/**
 * Programa oficial — transcrito del Libro Oficial de la Feria y Fiestas
 * de Olula del Río 2026 ("OLULA ENAMORA"). No añadir datos no verificados.
 */

export type Acto = {
  hora: string;
  /** Orden interno para ordenar la madrugada después de la noche */
  orden: number;
  titulo: string;
  detalle?: string;
  lugar?: string;
  artista?: string;
  etiqueta?: "musica" | "institucional" | "infantil" | "tradicion" | "deporte" | "mayores";
};

export type Dia = {
  id: string;
  diaSemana: string;
  numero: string;
  mes: string;
  /** Fecha ISO del día natural */
  fecha: string;
  lema: string;
  actos: Acto[];
};

export const dias: Dia[] = [
  {
    id: "jueves-17",
    diaSemana: "Jueves",
    numero: "17",
    mes: "septiembre",
    fecha: "2026-09-17",
    lema: "Pregón, coronación y pasacalle de carrozas",
    actos: [
      {
        hora: "20:00",
        orden: 2000,
        titulo: "Pregón de la Feria 2026",
        artista: "Pilar Sáez Sorroche",
        detalle: "Pregón a cargo de nuestra pregonera, Pilar Sáez Sorroche “Pili del Barrio”.",
        lugar: "Espacio Escénico",
        etiqueta: "institucional",
      },
      {
        hora: "A continuación",
        orden: 2010,
        titulo: "Coronación de las Reinas y las Damas de las Fiestas 2026",
        lugar: "Espacio Escénico",
        etiqueta: "institucional",
      },
      {
        hora: "A continuación",
        orden: 2020,
        titulo: "Pasacalle de carrozas",
        detalle:
          "Con el acompañamiento de la Escuela de Baile de Olula del Río “Trini Villegas”. Recorrido: Plaza del Ayuntamiento · Iglesia Vieja · Cuatro Esquinas · Calle García Lorca · Calle Granada · Avenida Almanzora.",
        etiqueta: "tradicion",
      },
      {
        hora: "23:00",
        orden: 2300,
        titulo: "Concierto de Déjà Vu",
        artista: "Déjà Vu",
        detalle: "Grupo musical local.",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
      {
        hora: "01:00",
        orden: 2500,
        titulo: "Concierto tributo a Bruce Springsteen",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
      {
        hora: "02:30",
        orden: 2650,
        titulo: "Concierto de Psycho Killers",
        artista: "Psycho Killers",
        detalle: "Grupo musical local.",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
    ],
  },
  {
    id: "viernes-18",
    diaSemana: "Viernes",
    numero: "18",
    mes: "septiembre",
    fecha: "2026-09-18",
    lema: "Se inaugura la Feria del Mediodía",
    actos: [
      {
        hora: "14:00",
        orden: 1400,
        titulo: "Inauguración de la Feria del Mediodía",
        artista: "D. Ramón Fernández-Pacheco Montereal",
        detalle:
          "A cargo de D. Ramón Fernández-Pacheco Montereal, Consejero de Agricultura, Pesca, Agua y Desarrollo Rural de la Junta de Andalucía.",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "institucional",
      },
      {
        hora: "15:00",
        orden: 1500,
        titulo: "Actuación de Ritmo del Sur",
        artista: "Ritmo del Sur",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "musica",
      },
      {
        hora: "17:00",
        orden: 1700,
        titulo: "Sesión deejays",
        artista: "Antonio Guevara DJ",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "musica",
      },
      {
        hora: "23:00",
        orden: 2300,
        titulo: "Concierto de Essencial Rock",
        artista: "Essencial Rock",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
      {
        hora: "23:00",
        orden: 2301,
        titulo: "Actuación musical del Dúo Larios",
        artista: "Dúo Larios",
        detalle: "Carpa Nueva Juventud · Tercera Edad.",
        lugar: "Edificio de la Tercera Edad",
        etiqueta: "mayores",
      },
      {
        hora: "01:00",
        orden: 2500,
        titulo: "Actuación musical de la Orquesta Azahara",
        artista: "Orquesta Azahara",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
      {
        hora: "03:30",
        orden: 2750,
        titulo: "Gran concierto de José de Rico",
        artista: "José de Rico",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
    ],
  },
  {
    id: "sabado-19",
    diaSemana: "Sábado",
    numero: "19",
    mes: "septiembre",
    fecha: "2026-09-19",
    lema: "Mediodía, orquesta y castillo de fuegos",
    actos: [
      {
        hora: "14:00",
        orden: 1400,
        titulo: "Feria del Mediodía",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "tradicion",
      },
      {
        hora: "15:00",
        orden: 1500,
        titulo: "Actuación de La Camarilla",
        artista: "La Camarilla",
        detalle: "Grupo musical local.",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "musica",
      },
      {
        hora: "17:00",
        orden: 1700,
        titulo: "Sesión deejays",
        artista: "JC Humble",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "musica",
      },
      {
        hora: "23:00",
        orden: 2300,
        titulo: "Actuación musical de la Orquesta Melodías",
        artista: "Orquesta Melodías",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
      {
        hora: "23:00",
        orden: 2301,
        titulo: "Actuación musical Carmen Mari Show",
        artista: "Carmen Mari Show",
        detalle: "Carpa Nueva Juventud · Tercera Edad.",
        lugar: "Edificio de la Tercera Edad",
        etiqueta: "mayores",
      },
      {
        hora: "01:00",
        orden: 2500,
        titulo: "Castillo de fuegos artificiales",
        etiqueta: "tradicion",
      },
      {
        hora: "01:00",
        orden: 2501,
        titulo: "Gran concierto de Juan Peña",
        artista: "Juan Peña",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
    ],
  },
  {
    id: "domingo-20",
    diaSemana: "Domingo",
    numero: "20",
    mes: "septiembre",
    fecha: "2026-09-20",
    lema: "Último mediodía y Los Mojinos Escozíos",
    actos: [
      {
        hora: "14:00",
        orden: 1400,
        titulo: "Feria del Mediodía",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "tradicion",
      },
      {
        hora: "15:00",
        orden: 1500,
        titulo: "Actuación de Los Galgos",
        artista: "Los Galgos",
        detalle: "Grupo musical local.",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "musica",
      },
      {
        hora: "17:00",
        orden: 1700,
        titulo: "Sesión deejays",
        artista: "Ernesto DJ",
        lugar: "Carpa Avenida Almanzora",
        etiqueta: "musica",
      },
      {
        hora: "20:00",
        orden: 2000,
        titulo: "Actuación de Los Bigardos",
        artista: "Los Bigardos",
        detalle: "Grupo musical local.",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
      {
        hora: "22:00",
        orden: 2200,
        titulo: "Gran concierto de Los Mojinos Escozíos",
        artista: "Los Mojinos Escozíos",
        lugar: "Plaza de la Paloma",
        etiqueta: "musica",
      },
    ],
  },
];

export type ActividadPrevia = {
  fecha: string;
  titulo: string;
  hora?: string;
  lugar?: string;
  detalle?: string;
  telefono?: string;
  organiza?: string;
  colabora?: string;
};

export const actividadesPrevias: ActividadPrevia[] = [
  {
    fecha: "Del 2 al 6 de septiembre",
    titulo: "Rute Burguer 04",
    hora: "20:00 h",
    lugar: "Recinto Ferial de Olula del Río",
    detalle: "Las mejores búrguer te esperan. Almería Burguer Tour.",
    organiza: "Sabores Almería / Concejalía de Fiestas Mayores",
    colabora: "Diputación de Almería",
  },
  {
    fecha: "Domingo 6 de septiembre",
    titulo: "Día de la Bicicleta",
    lugar: "Salida desde el Parque San Pablo",
    organiza: "Concejalía de Deportes",
  },
  {
    fecha: "Martes 8 de septiembre",
    titulo: "Diseña tu sombrero",
    hora: "20:00 h",
    lugar: "Explanada Laborda, Barrio Santiago",
    detalle: "Taller de pintura impartido por Eva Urán.",
    telefono: "666 512 444",
    organiza: "Concejalía de Fiestas Mayores",
  },
  {
    fecha: "Martes 8 de septiembre",
    titulo: "Inicio del torneo de pádel y tenis",
    hora: "A partir de las 19:00 h",
    lugar: "Pistas Municipales",
    organiza: "Concejalía de Deportes",
  },
  {
    fecha: "Miércoles 9 de septiembre",
    titulo: "¡Ven a mover tu cuerpo! Master class de zumba y bachata",
    hora: "20:00 h",
    lugar: "Plaza de la Paloma",
    detalle:
      "Escuela Municipal de Baile dirigida por Trini Villegas. Actividad gratuita para todos los públicos.",
  },
  {
    fecha: "Jueves 10 de septiembre",
    titulo: "Concierto de Alina-Coral Sentimento",
    hora: "19:00 h",
    lugar: "Plaza del Ayuntamiento",
    detalle: "Alumnos y alumnas de la Escuela de Canto.",
    organiza: "Concejalía de Cultura",
  },
  {
    fecha: "Viernes 11 de septiembre",
    titulo: "Concierto de Feria de la Banda Municipal Amigos de la Música",
    hora: "20:00 h",
    lugar: "Plaza Iglesia San Sebastián",
    organiza: "Concejalía de Fiestas Mayores",
  },
  {
    fecha: "Viernes 11 de septiembre",
    titulo: "VII Jornadas Astronoches",
    detalle: "Plazas limitadas. Inscripciones e información en el teléfono indicado.",
    telefono: "695 263 759",
    organiza: "Concejalía de Juventud",
    colabora: "Instituto Andaluz de la Juventud",
  },
  {
    fecha: "Sábado 12 de septiembre",
    titulo: "Mural «Olula es Tradición»",
    hora: "Hora por determinar",
    lugar: "Plaza San Luis",
    detalle: "“Nuestras tradiciones, nuestra cultura local”.",
    organiza: "Concejalía de Juventud",
    colabora: "Instituto Andaluz de la Juventud",
  },
  {
    fecha: "Sábado 12 de septiembre",
    titulo: "Torneo de voleibol",
    hora: "A partir de las 16:00 h",
    lugar: "Pabellón Municipal",
    organiza: "Concejalía de Deportes",
  },
  {
    fecha: "Domingo 13 de septiembre",
    titulo: "Torneo de petanca",
    hora: "09:00 h",
    lugar: "Campo de Petanca Municipal",
    organiza: "Concejalía de Deportes",
  },
  {
    fecha: "Lunes 14 de septiembre",
    titulo: "Ludum infantil de hinchables y fiesta de la espuma",
    hora: "De 18:00 a 21:00 h",
    lugar: "C.E.I.P. Antonio Relaño",
    organiza: "Concejalía de Fiestas Mayores",
  },
  {
    fecha: "Miércoles 16 de septiembre",
    titulo: "Pasacalles La Carpa Teatro",
    hora: "18:30 h",
    lugar: "Desde el Ayuntamiento hasta el C.E.I.P. Antonio Relaño",
    organiza: "Concejalía de Fiestas Mayores",
    colabora: "Diputación de Almería",
  },
  {
    fecha: "Miércoles 16 de septiembre",
    titulo: "Torneo de baloncesto 3x3",
    hora: "A partir de las 18:30 h",
    lugar: "Pabellón Municipal",
    organiza: "Concejalía de Deportes",
  },
  {
    fecha: "Miércoles 16 de septiembre",
    titulo: "Finales de los torneos de tenis y pádel",
    hora: "A partir de las 18:30 h",
    lugar: "Pistas Municipales",
    organiza: "Concejalía de Deportes",
  },
  {
    fecha: "Miércoles 16 de septiembre",
    titulo: "Día del Niño",
    detalle: "Descuento en las atracciones de feria.",
  },
  {
    fecha: "Sábado 26 de septiembre",
    titulo: "Los 90’s Olula Fest",
    hora: "A partir de las 17:00 h",
    lugar: "Nave Polivalente",
    organiza: "Concejalía de Fiestas Mayores",
    colabora: "Diputación de Almería",
  },
];
