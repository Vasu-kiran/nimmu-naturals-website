import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from './useScrollAnimation'

const ghatsProducts = [
  {
    name: 'Wild Forest Honey',
    desc: 'Collected by tribal communities from ancient forests deep in the Eastern Ghats. Raw, unprocessed, full of enzymes.',
    origin: 'Tribal Forests',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-amber-600">
        <path d="M24 6L28 16H36L30 22L32 32L24 26L16 32L18 22L12 16H20L24 6Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
        <ellipse cx="24" cy="36" rx="10" ry="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 34C18 34 20 40 24 40C28 40 30 34 30 34" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Black Pepper',
    desc: 'Hand-picked wild pepper from the ghats. Sun-dried the traditional way — bold, aromatic, no chemicals.',
    origin: 'Highland Plantations',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-gray-700">
        <path d="M24 8V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="14" r="3" fill="currentColor" opacity="0.6"/>
        <circle cx="28" cy="18" r="3" fill="currentColor" opacity="0.5"/>
        <circle cx="20" cy="24" r="3" fill="currentColor" opacity="0.6"/>
        <circle cx="28" cy="28" r="3" fill="currentColor" opacity="0.5"/>
        <circle cx="22" cy="34" r="3" fill="currentColor" opacity="0.4"/>
        <path d="M24 8C24 8 30 6 32 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M24 8C24 8 18 6 16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: 'Turmeric & Spices',
    desc: 'Grown in the mineral-rich red soil of the ghats. Naturally high curcumin content — medicine from nature.',
    origin: 'Red Soil Valleys',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-yellow-600">
        <path d="M16 40C16 40 14 28 18 20C22 12 24 8 24 8C24 8 26 12 30 20C34 28 32 40 32 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 40C20 40 19 32 22 26C24 22 24 18 24 18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
        <path d="M28 40C28 40 29 32 26 26" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
        <path d="M14 40H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="8" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: 'Coffee Beans',
    desc: 'Shade-grown coffee from small tribal estates in the ghats. Slow-roasted, single-origin, rich and smooth.',
    origin: 'Shade-Grown Estates',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-amber-800">
        <ellipse cx="24" cy="28" rx="12" ry="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M36 28C36 28 42 24 42 30C42 36 36 34 36 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 14V42" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M16 10C16 10 18 4 20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M24 8C24 8 26 2 28 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M32 12C32 12 34 6 36 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: 'Millets & Grains',
    desc: 'Ancient grains like ragi, jowar, and little millet — grown by tribal farmers using centuries-old methods.',
    origin: 'Tribal Farmlands',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-amber-700">
        <path d="M16 42V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 22C16 22 10 16 16 10C22 16 16 22 16 22Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 42V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 18C24 18 18 12 24 6C30 12 24 18 24 18Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 42V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 24C32 24 26 18 32 12C38 18 32 24 32 24Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 42H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Herbal & Medicinal',
    desc: 'Rare herbs, dried flowers, and medicinal roots foraged sustainably from the pristine ghats ecosystem.',
    origin: 'Forest Floor',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-green-700">
        <path d="M24 42V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 26C24 26 14 22 12 14C20 12 24 22 24 22" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" strokeLinecap="round"/>
        <path d="M24 22C24 22 34 18 36 10C28 8 24 18 24 18" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" strokeLinecap="round"/>
        <path d="M24 18C24 18 18 12 20 6C26 8 24 16 24 16" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" strokeLinecap="round"/>
        <circle cx="12" cy="14" r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="36" cy="10" r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="20" cy="6" r="2" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
]

export default function EasternGhats() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Mountain-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-deep via-[#2d5016] to-brown-earth" />

      {/* Mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" className="w-full">
          <path d="M0 200L0 120L100 80L200 100L300 50L400 90L500 30L600 70L700 20L800 60L900 40L1000 80L1100 50L1200 90L1300 60L1440 100V200H0Z" fill="#1B5E20" opacity="0.3"/>
          <path d="M0 200L0 150L120 110L250 130L380 80L500 120L650 60L780 100L900 70L1050 110L1200 80L1350 120L1440 90V200H0Z" fill="#1B5E20" opacity="0.2"/>
        </svg>
      </div>

      {/* Mist overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/3 to-transparent" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-8">
            <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.6, type: 'spring' }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/15">
              <span className="text-4xl">⛰️</span>
            </motion.div>
            <span className="text-green-300/80 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Beyond the Farm</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Treasures from the
              <br /><span className="text-amber-300">Eastern Ghats</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Beyond our island farm, we partner with tribal communities in the beautiful Eastern Ghats of Andhra Pradesh — sourcing rare, wild, and ancient foods that modern agriculture has forgotten.
            </p>
          </motion.div>

          {/* Two source badges */}
          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <div className="flex items-center gap-3 bg-blue-river/15 backdrop-blur-sm border border-blue-river/20 rounded-full px-6 py-3">
              <span className="text-xl">🏝️</span>
              <div>
                <p className="text-white font-semibold text-sm">Island Farm</p>
                <p className="text-white/50 text-xs">Grown on our Godavari farm</p>
              </div>
            </div>
            <svg className="w-6 h-6 text-white/30 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" /></svg>
            <div className="flex items-center gap-3 bg-amber-500/15 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3">
              <span className="text-xl">⛰️</span>
              <div>
                <p className="text-white font-semibold text-sm">Eastern Ghats</p>
                <p className="text-white/50 text-xs">Sourced from tribal partners</p>
              </div>
            </div>
          </motion.div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ghatsProducts.map((item, index) => (
              <motion.div
                key={item.name}
                variants={scaleIn}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/14 hover:border-white/20 transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <span className="text-[10px] font-semibold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full uppercase tracking-wider">{item.origin}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Emotional closing */}
          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center">
            <div className="bg-white/8 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-white/80 italic font-light leading-relaxed mb-6">
                "Every product we bring from the Eastern Ghats supports tribal livelihoods, protects ancient forests, and preserves food traditions that are thousands of years old."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-amber-400/30" />
                <span className="text-amber-300 text-sm font-medium tracking-wider uppercase">Fair Trade &bull; Sustainable &bull; Ancient</span>
                <div className="w-12 h-0.5 bg-amber-400/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
