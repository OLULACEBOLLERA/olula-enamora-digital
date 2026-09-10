# Historias de Olula 2026: Ana Belén Sánchez

Actualmente la web no tiene una sección de historias o actualidad (existen Prensa, Historia del pueblo y Galería, pero ninguna encaja). Se crea esa sección nueva, sin tocar nada de lo ya existente.

## Qué se añade

**1. Nueva sección "Historias de Olula 2026"**
- Página listado con tarjetas de historias destacadas. De momento, una tarjeta: la de Ana Belén Sánchez, con la categoría DEPORTE, el título, el texto breve, su fotografía y el botón "LEER HISTORIA".
- Enlace a la sección en el menú superior y en el pie, junto a los que ya hay.
- Un bloque discreto en la portada con esa misma tarjeta, para que la historia se vea desde la página de inicio.

**2. Página del artículo completo**
- Antetítulo "DEPORTE · HISTORIAS DE OLULA 2026", título y entradilla tal cual se han facilitado.
- Retrato editorial destacado con la fotografía subida de Ana Belén: vertical, cara completa, sin recortes que pierdan las gafas ni la expresión. En escritorio se muestra en columna junto al arranque del texto; en móvil, a ancho completo y entera.
- Pie de foto literal.
- Texto íntegro, sin resumir ni cambiar tono ni datos, con los mismos titulares de sección del original.
- Bloque final "Datos destacados" (nombre, origen, Chicago 2025 3:24, París 2026 3:29:55) en tarjeta al estilo del resto de la web.
- Bloque "Fuentes originales" con los tres enlaces externos visibles, que abren en pestaña nueva.

## Estilo

Se reutilizan los mismos componentes y estilos ya en uso (PageHero, tarjetas, colores turquesa/magenta/amarillo y las tipografías actuales). No se rediseña nada ni se modifican secciones existentes.

## Detalles técnicos

- La foto subida se publica como asset de CDN (`lovable-assets create`) y se añade a `src/data/imagenes.ts`; no se genera ninguna imagen con IA.
- Contenido en `src/data/historias.ts` (metadatos de tarjeta + cuerpo del artículo), para poder añadir más historias después.
- Rutas nuevas: `src/routes/historias.index.tsx` (listado) y `src/routes/historias.ana-belen-sanchez.tsx` (artículo), con `head()` propio: título, descripción, og:title, og:description y og:image/twitter:image apuntando a la URL absoluta de la foto. Se añade JSON-LD de tipo NewsArticle en el artículo.
- Enlaces añadidos en `SiteHeader.tsx`, `SiteFooter.tsx` y un bloque nuevo en `index.tsx`; nada más se modifica.
- Imagen con `loading="lazy"`, `alt` descriptivo y dimensiones para evitar saltos de maquetación.
- Comprobación final en móvil (390 px) de las dos páginas nuevas y del enlace desde la portada.
