/**
 * Brand identity SVG patterns from Instituto Casa's visual identity manual.
 * Chevrons (V/^/>/< shapes) and L-corner patterns in brand colors.
 */

// Individual chevron shapes
export const ChevronDown = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 40 28" fill="none" className={className} aria-hidden="true">
    <path d="M4 4L20 20L36 4" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronUp = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 40 28" fill="none" className={className} aria-hidden="true">
    <path d="M4 24L20 8L36 24" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronRight = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 28 40" fill="none" className={className} aria-hidden="true">
    <path d="M4 4L20 20L4 36" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronLeft = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 28 40" fill="none" className={className} aria-hidden="true">
    <path d="M24 4L8 20L24 36" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// L-corner shape from the brand patterns
export const LCorner = ({ className = "", color = "currentColor", rotation = 0 }: { className?: string; color?: string; rotation?: number }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} style={{ transform: `rotate(${rotation}deg)` }} aria-hidden="true">
    <path d="M8 4V32H36" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Brand colors from identity manual
export const BRAND = {
  navy: "hsl(226.3, 100%, 22.4%)",      // --primary
  blue: "hsl(214.7, 92.1%, 39.8%)",      // --secondary / blue from manual
  orange: "hsl(24.7, 100%, 50%)",         // --accent / orange
  teal: "hsl(170.3, 51.7%, 45%)",         // teal/green from manual
  white: "hsl(0, 0%, 100%)",
};

/**
 * Chevron grid pattern — replicates the 3x3 alternating V/^ grid from the manual.
 * Used as decorative background element.
 */
export const ChevronGrid = ({ className = "", variant = "navy" }: { className?: string; variant?: "navy" | "orange" | "teal" | "mixed" }) => {
  const getColor = (row: number, col: number) => {
    if (variant === "mixed") {
      const colors = [BRAND.navy, BRAND.orange, BRAND.teal, BRAND.blue, BRAND.white];
      return colors[(row * 3 + col) % colors.length];
    }
    const base = variant === "navy" ? BRAND.navy : variant === "orange" ? BRAND.orange : BRAND.teal;
    return base;
  };

  const isUp = (row: number, col: number) => (row + col) % 2 === 0;

  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const color = getColor(row, col);
        return isUp(row, col) ? (
          <ChevronUp key={i} className="w-full h-auto" color={color} />
        ) : (
          <ChevronDown key={i} className="w-full h-auto" color={color} />
        );
      })}
    </div>
  );
};

/**
 * L-Corner grid pattern — replicates the colorful L-pattern from the manual.
 */
export const LCornerGrid = ({ className = "" }: { className?: string }) => {
  const patterns = [
    { color: BRAND.orange, rotation: 0 },
    { color: BRAND.teal, rotation: 90 },
    { color: BRAND.blue, rotation: 180 },
    { color: BRAND.white, rotation: 270 },
    { color: BRAND.teal, rotation: 180 },
    { color: BRAND.orange, rotation: 270 },
    { color: BRAND.white, rotation: 0 },
    { color: BRAND.blue, rotation: 90 },
    { color: BRAND.orange, rotation: 90 },
    { color: BRAND.white, rotation: 0 },
    { color: BRAND.teal, rotation: 270 },
    { color: BRAND.blue, rotation: 180 },
  ];

  return (
    <div className={`grid grid-cols-4 gap-1 ${className}`} aria-hidden="true">
      {patterns.map((p, i) => (
        <LCorner key={i} className="w-full h-auto" color={p.color} rotation={p.rotation} />
      ))}
    </div>
  );
};

/**
 * Horizontal chevron row — used for decorative dividers.
 */
export const ChevronDivider = ({ className = "", color = BRAND.orange }: { className?: string; color?: string }) => (
  <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <ChevronRight key={i} className="w-5 h-7" color={color} />
    ))}
  </div>
);
