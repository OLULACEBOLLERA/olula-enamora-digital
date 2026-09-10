import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { historias } from "../data/historias";

export const Route = createFileRoute("/historias/$slug")({
  loader: ({ params }) => {
    const historia = historias.find((h) => h.slug === params.slug);
    if (!historia) throw notFound();
    return { historia };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Historia no disponible | Olula del Río 2026" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const h = loaderData.historia;
    const titulo = `${h.titulo} | Historias de Olula 2026`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: h.entradilla },
        { property: "og:title", content: titulo },
        { property: "og:description", content: h.entradilla },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/historias/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/historias/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: h.titulo,
            description: h.entradilla,
            articleSection: h.categoria,
          }),
        },
      ],
    };
  },
  notFoundComponent: HistoriaNoEncontrada,
  component: HistoriaDetalle,
});

function HistoriaNoEncontrada() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="titular text-3xl">Esa historia no existe</h1>
      <Link
        to="/historias"
        className="mt-6 inline-flex text-sm font-bold uppercase text-magenta hover:underline"
      >
        Ver todas las historias →
      </Link>
    </section>
  );
}

function HistoriaDetalle() {
  const { historia: h } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-turquesa-dark">
        {h.antetitulo}
      </p>
      <h1 className="titular mt-3 text-3xl leading-[1.05] sm:text-5xl">
        {h.titulo}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {h.entradilla}
      </p>

      <div className="mt-10 gap-10 lg:grid lg:grid-cols-[320px_1fr] lg:items-start">
        <figure className="mx-auto max-w-sm lg:sticky lg:top-24 lg:mx-0 lg:max-w-none">
          <img
            src={h.imagen}
            alt={h.imagenAlt}
            width={202}
            height={405}
            className="w-full rounded-3xl border-4 border-foreground object-contain shadow-xl"
          />
          <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
            {h.pieFoto}
          </figcaption>
        </figure>

        <div className="mt-10 lg:mt-0">
          {h.secciones.map((s, i) => (
            <section key={s.titulo ?? i} className="mb-8">
              {s.titulo && (
                <h2 className="titular mb-3 text-2xl sm:text-3xl">{s.titulo}</h2>
              )}
              {s.parrafos.map((p) => (
                <p key={p} className="mb-4 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="tarjeta p-6 sm:p-7">
            <h2 className="titular text-xl">Datos destacados</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {h.datos.map((d) => (
                <div key={d.etiqueta} className="rounded-2xl bg-secondary/60 p-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-turquesa-dark">
                    {d.etiqueta}
                  </dt>
                  <dd className="mt-1 text-base font-bold">{d.valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="tarjeta mt-6 p-6 sm:p-7">
            <h2 className="titular text-xl">Fuentes originales</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {h.fuentes.map((f) => (
                <li key={f.url}>
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-magenta hover:underline"
                  >
                    {f.medio} — {f.titulo} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/historias"
            className="mt-8 inline-flex text-sm font-bold uppercase text-magenta hover:underline"
          >
            ← Todas las historias de Olula 2026
          </Link>
        </div>
      </div>
    </article>
  );
}
