import type { ReactNode } from "react";

/* ---------- Logo ---------- */
export function Logo({ className = "" }: { className?: string }) {
  return <img src="/kobikan-logo.svg" alt="KobiKan" className={`h-8 w-auto ${className}`} />;
}

/* ---------- CTA Button ---------- */
export function CtaButton({
  children,
  onClick,
  size = "md",
  variant = "primary",
}: {
  children: ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "white" | "outline";
}) {
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  const variants = {
    primary: "bg-[color:var(--color-brand)] text-white hover:brightness-110",
    white: "bg-white text-[color:var(--color-dark)] hover:bg-white/90",
    outline: "border border-white/25 text-white hover:border-white/60",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-none font-semibold tracking-tight transition-all focus-ring ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

/* ---------- Section label (mono, hairline tick) ---------- */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-brand)]">
      <span className="h-px w-6 bg-[color:var(--color-brand)]" />
      {children}
    </span>
  );
}

/* ---------- Corner registration ticks ---------- */
export function SpecCorners({ className = "", inset = "0.75rem" }: { className?: string; inset?: string }) {
  const corner = "absolute h-3 w-3 border-current opacity-40";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`${corner} border-t border-l`} style={{ top: inset, left: inset }} />
      <span className={`${corner} border-t border-r`} style={{ top: inset, right: inset }} />
      <span className={`${corner} border-b border-l`} style={{ bottom: inset, left: inset }} />
      <span className={`${corner} border-b border-r`} style={{ bottom: inset, right: inset }} />
    </div>
  );
}

/* ---------- Mono ID chip (spec-sheet identifier) ---------- */
export function MonoId({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-[0.2em] opacity-50 ${className}`}
    >
      {children}
    </span>
  );
}
