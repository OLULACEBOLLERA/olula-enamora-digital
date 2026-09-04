/** Elementos gráficos de la campaña "Olula Enamora": ondas, rayas y lunares. */

export function Onda({
  className = "",
  color = "var(--turquesa)",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={className}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        d="M0 30 C 75 0, 150 60, 225 30 S 375 0, 450 30 S 600 60, 675 30 S 825 0, 900 30 S 1050 60, 1125 30 S 1200 15, 1200 30"
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CintaColores({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-2 w-full ${className}`} aria-hidden="true">
      <span className="flex-1 bg-turquesa" />
      <span className="flex-1 bg-magenta" />
      <span className="flex-1 bg-amarillo" />
      <span className="flex-1 bg-cielo" />
    </div>
  );
}

export function Lunares({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`trama-lunares pointer-events-none ${className}`}
    />
  );
}

export function ArcoRayas({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
      <defs>
        <pattern id="rayas" width="12" height="12" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width="5" height="12" fill="currentColor" />
        </pattern>
      </defs>
      <path d="M0 200 A 200 200 0 0 1 200 0 L 200 200 Z" fill="url(#rayas)" />
    </svg>
  );
}
