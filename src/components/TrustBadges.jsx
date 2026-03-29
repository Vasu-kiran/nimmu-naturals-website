import { motion } from 'framer-motion'
import { useScrollAnimation } from './useScrollAnimation'

const badges = [
  { label: '100% Chemical Free', icon: '🧪', sublabel: 'Zero chemicals ever' },
  { label: 'Lab Tested', icon: '🔬', sublabel: 'Verified pure & safe' },
  { label: 'Pesticide Residue Free', icon: '🛡️', sublabel: 'Zero residue guaranteed' },
  { label: 'River Island Farm', icon: '🏝️', sublabel: 'Naturally protected' },
  { label: 'Eastern Ghats Sourced', icon: '⛰️', sublabel: 'Tribal partnerships' },
  { label: 'Farm Direct', icon: '🚜', sublabel: 'No middlemen' },
  { label: 'Harvest Fresh', icon: '📦', sublabel: 'Picked for your order' },
  { label: 'Family Owned', icon: '👨‍👩‍👧', sublabel: 'Since day one' },
]

export default function TrustBadges() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-10 md:py-14 bg-green-deep/[0.03] border-y border-green-deep/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{badge.icon}</span>
              <div>
                <p className="text-brown-earth font-semibold text-sm leading-tight">{badge.label}</p>
                <p className="text-brown-light text-xs">{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
