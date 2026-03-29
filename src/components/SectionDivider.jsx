export function LeafDivider({ flip = false, from = '#FAFAF0', to = '#FFFFFF' }) {
  return (
    <div className={`relative h-16 md:h-24 ${flip ? 'rotate-180' : ''}`} style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}>
      <svg viewBox="0 0 1440 80" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
        <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill={to} />
      </svg>
      {/* Floating leaf accent */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-green-deep/15" viewBox="0 0 40 40" fill="currentColor">
        <path d="M20 2C20 2 35 10 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 10 20 2 20 2Z"/>
      </svg>
    </div>
  )
}

export function WaveDivider({ from = '#FFFFFF', to = '#FAFAF0' }) {
  return (
    <div className="relative h-12 md:h-20" style={{ background: from }}>
      <svg viewBox="0 0 1440 60" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
        <path d="M0 30C180 50 360 10 540 30C720 50 900 10 1080 30C1260 50 1440 30 1440 30V60H0V30Z" fill={to} />
      </svg>
    </div>
  )
}

export function OrganicDivider() {
  return (
    <div className="relative py-8 md:py-12 bg-transparent overflow-hidden">
      <div className="flex items-center justify-center gap-4">
        <div className="h-px bg-gradient-to-r from-transparent via-green-deep/20 to-transparent flex-1 max-w-[200px]" />
        <svg className="w-6 h-6 text-green-deep/20" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 2C20 2 35 10 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 10 20 2 20 2Z"/>
        </svg>
        <div className="h-px bg-gradient-to-r from-transparent via-green-deep/20 to-transparent flex-1 max-w-[200px]" />
      </div>
    </div>
  )
}
