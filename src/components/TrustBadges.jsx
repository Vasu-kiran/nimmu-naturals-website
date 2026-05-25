import { motion } from 'framer-motion'
import { useScrollAnimation } from './useScrollAnimation'

const purityBadges = [
  { label: 'No Synthetic Chemicals', sublabel: 'Free from synthetic inputs', cross: true },
  { label: 'No Synthetic Pesticides', sublabel: 'Pest control the natural way', cross: true },
  { label: 'Lab Tested', sublabel: 'Verified pure & safe', cross: false },
]

const secondaryBadges = [
  { label: 'River Island Farm', icon: '🏝️' },
  { label: 'Eastern Ghats Sourced', icon: '⛰️' },
  { label: 'Farm Direct', icon: '🚜' },
  { label: 'Harvest Fresh', icon: '📦' },
  { label: 'Family Owned', icon: '👨‍👩‍👧' },
]

export default function TrustBadges() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-12 md:py-16 bg-green-deep/[0.03] border-y border-green-deep/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Featured purity badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {purityBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-green-deep/10 hover:shadow-md hover:border-green-deep/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${badge.cross ? 'bg-red-50' : 'bg-green-50'}`}>
                {badge.cross ? (
                  <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
                ) : (
                  <svg className="w-7 h-7 text-green-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                )}
              </div>
              <div>
                <p className="text-brown-earth font-bold text-base leading-tight">{badge.label}</p>
                <p className="text-brown-light text-xs mt-0.5">{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-4 border-t border-green-deep/10"
        >
          {secondaryBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
              className="flex items-center gap-2 text-brown-light hover:text-brown-earth transition-colors"
            >
              <span className="text-lg">{badge.icon}</span>
              <p className="font-medium text-sm">{badge.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
