export function AvisoAccesibilidad({ compacto = false }: { compacto?: boolean }) {
  return (
    <aside
      className={`rounded-2xl border-2 border-turquesa bg-turquesa/10 p-5 ${compacto ? "" : "sm:p-7"}`}
      aria-label="Hora de atención adaptada"
    >
      <p className="titular text-sm text-turquesa-dark">Feria para todas las personas</p>
      <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">
        Todos los días de Feria, de 20:00 a 21:00 h, habrá una hora de atención
        adaptada.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Durante esa hora se reducen luces y volumen en las atracciones para que
        las personas con sensibilidad sensorial puedan disfrutar de la Feria.
      </p>
    </aside>
  );
}
