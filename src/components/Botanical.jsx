/** Small hand-drawn leaf — uses currentColor. */
export function LeafMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M12 21C5 16 5 8 12 3c7 5 7 13 0 18Z" strokeLinejoin="round" />
      <path d="M12 6v13" strokeLinecap="round" />
      <path d="M12 11c1.6-1.1 3-1.4 4.4-1.4M12 14c-1.6-1.1-3-1.4-4.4-1.4" strokeLinecap="round" />
    </svg>
  )
}

/** Eyebrow label with a leaf — keeps section intros botanical and consistent. */
export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] ${className}`}>
      <LeafMark className="w-3.5 h-3.5 shrink-0" />
      {children}
    </span>
  )
}
