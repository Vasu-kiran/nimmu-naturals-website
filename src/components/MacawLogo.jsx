import { motion } from 'framer-motion'

/**
 * Stylized Macaw Logo for Nimmu Naturals
 * The macaw represents longevity (100+ year lifespan) and healthy, natural living.
 * Its vibrant plumage echoes the richness of organic produce.
 */
export default function MacawLogo({ size = 40, variant = 'color', animate = true, className = '' }) {
  const s = size
  const isLight = variant === 'light'
  const isMono = variant === 'mono'

  // Brand-aligned palette with tropical vibrancy
  const colors = {
    body: isLight ? '#ffffff' : isMono ? '#1B5E20' : '#E53935',        // Red body
    wing: isLight ? '#ffffffcc' : isMono ? '#2E7D32' : '#1B5E20',     // Deep green wing
    wingTip: isLight ? '#ffffffaa' : isMono ? '#1B5E20' : '#2E7D32',  // Green light wing tip
    tail: isLight ? '#ffffff99' : isMono ? '#5D4037' : '#FDD835',      // Golden yellow tail
    tailTip: isLight ? '#ffffff77' : isMono ? '#795548' : '#F57F17',   // Deeper gold
    beak: isLight ? '#ffffff' : isMono ? '#5D4037' : '#5D4037',        // Brown-earth beak
    eye: isLight ? '#ffffff' : '#1a1a1a',                               // Dark eye
    eyeRing: isLight ? '#ffffffcc' : isMono ? '#ffffff' : '#ffffff',   // White eye patch
    breast: isLight ? '#ffffffdd' : isMono ? '#388E3C' : '#FDD835',    // Yellow breast
    leaf: isLight ? '#ffffff88' : isMono ? '#2E7D32' : '#43A047',      // Leaf accent
  }

  const Wrapper = animate ? motion.div : 'div'
  const wrapperProps = animate ? {
    whileHover: { scale: 1.05 },
    transition: { type: 'spring', stiffness: 300 }
  } : {}

  return (
    <Wrapper {...wrapperProps} className={`inline-flex items-center justify-center ${className}`} style={{ width: s, height: s }}>
      <svg
        viewBox="0 0 100 100"
        width={s}
        height={s}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Nimmu Naturals - Macaw Logo"
      >
        {/* Background circle - subtle leaf shape */}
        <circle cx="50" cy="50" r="48" fill={isLight ? 'rgba(255,255,255,0.15)' : isMono ? '#1B5E20' : '#1B5E20'} />
        <circle cx="50" cy="50" r="44" fill={isLight ? 'rgba(255,255,255,0.08)' : isMono ? '#2E7D32' : '#1a3a1a'} />

        {/* Small decorative leaf behind the bird */}
        <path
          d="M25 65 Q30 50 40 55 Q30 60 25 65Z"
          fill={colors.leaf}
          opacity="0.5"
        />

        {/* Tail feathers - long, flowing, extends down-left */}
        <path
          d="M38 58 Q22 72 18 82 Q20 78 26 72 Q24 76 22 82 Q26 76 32 68 Q28 74 26 80 Q30 72 36 64Z"
          fill={colors.tail}
        />
        <path
          d="M36 60 Q20 70 16 80 Q22 72 28 66Z"
          fill={colors.tailTip}
        />
        {/* Blue tail accent */}
        <path
          d="M37 59 Q24 68 20 78 Q24 70 30 64Z"
          fill={isLight ? '#ffffffbb' : isMono ? '#1B5E20' : '#1565C0'}
        />

        {/* Body - plump, perching pose */}
        <ellipse cx="50" cy="50" rx="16" ry="20" fill={colors.body} transform="rotate(-10 50 50)" />

        {/* Breast / belly area */}
        <ellipse cx="52" cy="55" rx="10" ry="13" fill={colors.breast} transform="rotate(-5 52 55)" />

        {/* Wing - folded, covering the back */}
        <path
          d="M38 38 Q32 50 36 62 Q44 58 50 48 Q52 42 48 36Z"
          fill={colors.wing}
        />
        {/* Wing feather details */}
        <path
          d="M36 52 Q38 48 42 46 M36 56 Q40 52 44 50 M37 60 Q40 56 44 54"
          stroke={colors.wingTip}
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Wing tip feathers */}
        <path
          d="M34 58 Q30 64 28 68 Q34 62 36 60Z"
          fill={colors.wingTip}
        />

        {/* Head */}
        <circle cx="58" cy="32" r="12" fill={colors.body} />

        {/* White eye patch - characteristic macaw feature */}
        <path
          d="M60 28 Q66 26 68 30 Q68 34 64 35 Q60 34 59 30Z"
          fill={colors.eyeRing}
        />

        {/* Eye */}
        <circle cx="63" cy="30" r="2.5" fill={colors.eye} />
        <circle cx="63.8" cy="29.3" r="0.8" fill="white" />

        {/* Beak - curved, powerful macaw beak */}
        <path
          d="M68 32 Q74 30 74 34 Q73 37 69 36Z"
          fill={colors.beak}
        />
        {/* Upper beak hook */}
        <path
          d="M68 31 Q75 28 76 32 Q75 34 74 34 Q74 30 68 32Z"
          fill={isLight ? '#ffffffcc' : isMono ? '#795548' : '#4E342E'}
        />
        {/* Beak line */}
        <path
          d="M69 33 Q72 32 74 33"
          stroke={isLight ? '#ffffff55' : '#3E2723'}
          strokeWidth="0.5"
          fill="none"
        />

        {/* Head feathers - slight crest */}
        <path
          d="M52 24 Q54 18 58 20 Q54 22 53 24Z"
          fill={colors.body}
        />
        <path
          d="M55 22 Q58 16 62 19 Q58 20 56 23Z"
          fill={isLight ? '#ffffffdd' : isMono ? '#388E3C' : '#C62828'}
        />

        {/* Feet/perch - small detail at bottom */}
        <path
          d="M46 68 Q44 72 42 73 M46 68 Q46 72 44 74 M54 67 Q54 72 52 74 M54 67 Q56 72 54 74"
          stroke={isLight ? '#ffffff88' : isMono ? '#795548' : '#5D4037'}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Perch branch */}
        <path
          d="M30 70 Q50 66 75 72"
          stroke={isLight ? '#ffffff55' : isMono ? '#795548' : '#5D4037'}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Small leaf on branch */}
        <path
          d="M70 70 Q74 66 78 68 Q74 70 70 70Z"
          fill={colors.leaf}
        />

        {/* Subtle "N" letterform integrated into the wing pattern */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill={isLight ? '#ffffff' : '#ffffff'}
          opacity="0.9"
          fontFamily="Poppins, sans-serif"
        >
          N
        </text>
      </svg>
    </Wrapper>
  )
}

/**
 * Full brand mark with macaw + text
 */
export function MacawBrandMark({ size = 40, variant = 'color', scrolled = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <MacawLogo size={size} variant={variant} />
      <div className="flex flex-col leading-none">
        <span className={`text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] tracking-tight`}>
          <span className={scrolled ? 'text-green-deep' : 'text-white'}>Nimmu</span>
          <span className={scrolled ? 'text-brown-earth' : 'text-beige'}> Naturals</span>
        </span>
        <span className={`text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-medium ${scrolled ? 'text-brown-light/60' : 'text-white/50'}`}>
          Live long, live natural
        </span>
      </div>
    </div>
  )
}
