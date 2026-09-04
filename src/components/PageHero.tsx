import { Onda } from "./Deco";

export function PageHero({
  titulo,
  script,
  entradilla,
}: {
  titulo: string;
  script?: string;
  entradilla?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/60">
      <Onda className="absolute -top-2 left-0 h-10 w-[140%] opacity-40" color="var(--cielo)" />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:pt-16">
        {script && (
          <p className="manuscrita text-4xl text-magenta sm:text-5xl">{script}</p>
        )}
        <h1 className="titular mt-1 text-4xl sm:text-6xl">{titulo}</h1>
        {entradilla && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {entradilla}
          </p>
        )}
      </div>
      <Onda className="absolute -bottom-3 left-0 h-8 w-[140%] opacity-50" color="var(--amarillo)" flip />
    </section>
  );
}
