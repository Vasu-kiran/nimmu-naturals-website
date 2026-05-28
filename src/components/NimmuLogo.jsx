/**
 * Nimmu Naturals wordmark logo.
 * Single-colour SVG so the parent controls colour via `currentColor`
 * (e.g. Tailwind text-* classes) and size via `h-* w-auto`.
 */
export default function NimmuLogo({ className = '', title = 'Nimmu Naturals' }) {
  return (
    <svg
      viewBox="0 0 340 240"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>

      {/* NIMMU */}
      <text
        x="170"
        y="98"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="84"
        letterSpacing="-1"
      >
        NIMMU
      </text>

      {/* NATURALS */}
      <text
        x="170"
        y="152"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="40"
        letterSpacing="8"
      >
        NATURALS
      </text>

      {/* Smile swoosh — thick in the middle, tapering to points */}
      <path d="M58 174 Q170 250 282 174 Q170 198 58 174 Z" />

      {/* Trademark mark */}
      <circle cx="312" cy="22" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text
        x="312"
        y="27"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="13"
      >
        TM
      </text>
    </svg>
  )
}
