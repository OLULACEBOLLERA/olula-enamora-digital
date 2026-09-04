/**
 * Guía comercial — empresas y comercios anunciados en el Libro Oficial de la
 * Feria y Fiestas de Olula del Río 2026.
 *
 * `estado` es un control de calidad INTERNO (no se muestra al visitante):
 *  - "libro"      : dato tal cual aparece en el libro oficial
 *  - "verificado" : además coincide con la web o el perfil oficial del negocio
 *  - "pendiente"  : falta contrastar algún dato secundario (dirección o web)
 */

export type Estado = "libro" | "verificado" | "pendiente";

export type Comercio = {
  nombre: string;
  categoria: string;
  telefonos?: string[];
  direccion?: string;
  web?: string;
  nota?: string;
  estado: Estado;
};

export const categorias = [
  "Hostelería y restauración",
  "Alimentación",
  "Salud y bienestar",
  "Belleza y peluquería",
  "Hogar, construcción y ferretería",
  "Educación y academias",
  "Servicios profesionales",
  "Transporte y taxis",
  "Ocio, eventos y sonido",
  "Comercio y regalo",
] as const;

export const comercios: Comercio[] = [
  // Hostelería
  { nombre: "Reina Bistro Bar", categoria: "Hostelería y restauración", telefonos: ["622 062 201"], web: "https://reinabistrobar.com", estado: "verificado" },
  { nombre: "El Barrio Tapas", categoria: "Hostelería y restauración", telefonos: ["690 073 833"], estado: "libro" },
  { nombre: "Rustir Bar", categoria: "Hostelería y restauración", telefonos: ["601 995 853"], estado: "libro" },
  { nombre: "El Bule Burger", categoria: "Hostelería y restauración", telefonos: ["675 053 854"], estado: "libro" },
  { nombre: "Zingara", categoria: "Hostelería y restauración", telefonos: ["639 940 612"], estado: "libro" },
  { nombre: "Laif", categoria: "Hostelería y restauración", telefonos: ["950 442 112"], estado: "libro" },
  { nombre: "La Tasca de Isabel", categoria: "Hostelería y restauración", telefonos: ["678 527 667"], estado: "libro" },
  { nombre: "Bar Espacio Escénico", categoria: "Hostelería y restauración", telefonos: ["685 996 943"], estado: "libro" },
  { nombre: "Bar Marichón", categoria: "Hostelería y restauración", telefonos: ["665 984 665"], estado: "libro" },
  { nombre: "Taber City", categoria: "Hostelería y restauración", telefonos: ["647 674 905", "600 950 167"], estado: "libro" },
  { nombre: "Álbero", categoria: "Hostelería y restauración", telefonos: ["639 940 612"], estado: "libro" },
  { nombre: "Pizzería Serrano", categoria: "Hostelería y restauración", telefonos: ["645 244 123"], estado: "libro" },
  { nombre: "Route 66", categoria: "Hostelería y restauración", telefonos: ["628 819 063"], estado: "libro" },
  { nombre: "La Jaima", categoria: "Hostelería y restauración", telefonos: ["600 560 067"], estado: "libro" },
  { nombre: "El Guiño Cultural", categoria: "Hostelería y restauración", telefonos: ["601 655 227"], web: "https://elguinoculturalbar.es", estado: "verificado" },
  { nombre: "Casa Lazaró", categoria: "Hostelería y restauración", telefonos: ["950 441 066", "692 170 894"], estado: "libro" },
  { nombre: "La Taberna de Rasa", categoria: "Hostelería y restauración", telefonos: ["602 533 329"], estado: "libro" },

  // Alimentación
  { nombre: "AE Pescados Plaza", categoria: "Alimentación", telefonos: ["656 730 071"], estado: "libro" },
  { nombre: "Hiper Almanzora", categoria: "Alimentación", telefonos: ["950 442 012"], estado: "libro" },
  { nombre: "Frutas Paco · Súper Olula", categoria: "Alimentación", telefonos: ["678 683 612"], estado: "libro" },
  { nombre: "SPAR Olula del Río", categoria: "Alimentación", telefonos: ["950 937 772"], estado: "libro" },
  { nombre: "Carnicería Lola", categoria: "Alimentación", telefonos: ["950 440 151"], estado: "libro" },
  { nombre: "Carnicería Paco", categoria: "Alimentación", telefonos: ["670 768 975"], estado: "libro" },
  { nombre: "Carnicería Armuña", categoria: "Alimentación", telefonos: ["950 441 387", "950 420 798"], estado: "libro" },
  { nombre: "Carnicería Guevara", categoria: "Alimentación", telefonos: ["617 211 631"], estado: "libro" },
  { nombre: "La Cocina de Mariajo", categoria: "Alimentación", telefonos: ["635 811 294"], estado: "libro" },
  { nombre: "Estambul", categoria: "Alimentación", telefonos: ["601 654 746"], estado: "libro" },
  { nombre: "Panadería Mariana", categoria: "Alimentación", telefonos: ["950 441 797", "651 194 763"], estado: "libro" },
  { nombre: "Panadería Pérez", categoria: "Alimentación", telefonos: ["950 441 722"], estado: "libro" },

  // Salud
  { nombre: "Farmacia (950 44 12 58)", categoria: "Salud y bienestar", telefonos: ["950 441 258"], estado: "libro" },
  { nombre: "Farmacia (950 44 10 10)", categoria: "Salud y bienestar", telefonos: ["950 441 010"], estado: "libro" },
  { nombre: "Óptica Almería", categoria: "Salud y bienestar", telefonos: ["618 320 633"], estado: "libro" },
  { nombre: "McNamara y Tapiachacón", categoria: "Salud y bienestar", telefonos: ["663 885 616"], estado: "libro" },
  { nombre: "Fisioclinic", categoria: "Salud y bienestar", telefonos: ["950 443 810"], estado: "libro" },
  { nombre: "Centro de Salud de Olula del Río", categoria: "Salud y bienestar", telefonos: ["950 639 505", "950 639 506"], estado: "verificado" },

  // Belleza
  { nombre: "Peluquería Aura", categoria: "Belleza y peluquería", telefonos: ["950 441 656", "658 905 451"], estado: "libro" },
  { nombre: "Peluquería Marisa", categoria: "Belleza y peluquería", telefonos: ["610 503 449"], estado: "libro" },
  { nombre: "Peluquería Raíces", categoria: "Belleza y peluquería", telefonos: ["639 636 536"], estado: "libro" },
  { nombre: "Peluquería Terry", categoria: "Belleza y peluquería", telefonos: ["656 236 813"], estado: "libro" },
  { nombre: "Urban Color", categoria: "Belleza y peluquería", telefonos: ["950 441 111"], estado: "libro" },
  { nombre: "Marx Imagen", categoria: "Belleza y peluquería", telefonos: ["677 776 070"], estado: "libro" },

  // Hogar y construcción
  { nombre: "Eduardo Ayala · Hierros", categoria: "Hogar, construcción y ferretería", telefonos: ["950 443 881", "950 441 501"], web: "https://hierrosayala.es", estado: "verificado" },
  { nombre: "Maderas Rubio", categoria: "Hogar, construcción y ferretería", telefonos: ["950 440 137"], estado: "libro" },
  { nombre: "Maderas Framado", categoria: "Hogar, construcción y ferretería", telefonos: ["950 441 625", "607 390 823"], estado: "libro" },
  { nombre: "Bricolula", categoria: "Hogar, construcción y ferretería", telefonos: ["950 441 234", "639 307 864"], estado: "libro" },
  { nombre: "Montajes Eléctricos Romar", categoria: "Hogar, construcción y ferretería", telefonos: ["950 513 399", "606 415 146"], estado: "libro" },
  { nombre: "Agromi", categoria: "Hogar, construcción y ferretería", telefonos: ["950 441 025"], estado: "libro" },
  { nombre: "Gonzalo Martín · Auto Recambios", categoria: "Hogar, construcción y ferretería", telefonos: ["950 441 825"], estado: "libro" },

  // Educación
  { nombre: "Academia Andreu", categoria: "Educación y academias", telefonos: ["659 557 934"], estado: "libro" },
  { nombre: "My English School", categoria: "Educación y academias", telefonos: ["747 750 577"], estado: "libro" },
  { nombre: "Academia Marbel", categoria: "Educación y academias", telefonos: ["671 994 637"], estado: "libro" },

  // Servicios profesionales
  { nombre: "Asesur", categoria: "Servicios profesionales", telefonos: ["950 441 808"], estado: "libro" },
  { nombre: "Inma Lucas", categoria: "Servicios profesionales", telefonos: ["615 045 250", "850 983 007"], estado: "libro" },
  { nombre: "María José Andreu · Procuradora", categoria: "Servicios profesionales", telefonos: ["950 442 410", "687 449 901"], web: "https://andreuprocuradora.com", estado: "verificado" },
  { nombre: "Raúl Escobar", categoria: "Servicios profesionales", telefonos: ["950 440 332", "603 402 806"], estado: "libro" },

  // Transporte
  { nombre: "Taxi Francisco Silva", categoria: "Transporte y taxis", telefonos: ["950 441 814", "610 994 548"], estado: "libro" },
  { nombre: "Taxi Juan Carlos Garrido", categoria: "Transporte y taxis", telefonos: ["950 441 357", "616 197 676"], estado: "libro" },

  // Ocio y eventos
  { nombre: "Olucarpa", categoria: "Ocio, eventos y sonido", telefonos: ["950 441 818", "670 871 390"], web: "https://olucarpa.com", estado: "verificado" },
  { nombre: "Indalo Producciones", categoria: "Ocio, eventos y sonido", telefonos: ["950 916 401", "670 062 000"], web: "https://indaloproducciones.com", estado: "verificado" },

  // Comercio y regalo
  { nombre: "Joyería Altamira", categoria: "Comercio y regalo", telefonos: ["950 441 516", "638 066 720"], estado: "libro" },
  { nombre: "K-Chè", categoria: "Comercio y regalo", telefonos: ["687 792 934"], estado: "libro" },
  { nombre: "Euro Bazar Carmen", categoria: "Comercio y regalo", telefonos: ["635 447 874"], estado: "libro" },
];

export const telefonosInteres = [
  { nombre: "Ayuntamiento de Olula del Río", telefono: "950 441 000" },
  { nombre: "Centro de Salud", telefono: "950 639 505" },
  { nombre: "Emergencias", telefono: "112" },
  { nombre: "Guardia Civil", telefono: "062" },
];
