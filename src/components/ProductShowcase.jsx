import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const products = [
  {
    name: 'Organic Rice', desc: 'Fragrant, unpolished, grown naturally in our paddy fields surrounded by the Godavari', tag: 'Staple', source: 'island',
    color: 'from-amber-50 to-orange-50', iconBg: 'bg-amber-100',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-amber-700"><path d="M24 8C24 8 16 16 16 30C16 38 20 42 24 44C28 42 32 38 32 30C32 16 24 8 24 8Z" stroke="currentColor" strokeWidth="2"/><path d="M24 14V40" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/><path d="M24 20L28 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><path d="M24 26L20 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><path d="M24 32L28 29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/></svg>),
  },
  {
    name: 'Fresh Vegetables', desc: 'Seasonal, hand-picked, delivered within hours of harvest from our island fields', tag: 'Seasonal', source: 'island',
    color: 'from-green-50 to-emerald-50', iconBg: 'bg-green-100',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-green-700"><circle cx="24" cy="28" r="12" stroke="currentColor" strokeWidth="2"/><path d="M24 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M24 12C24 12 18 8 24 4C30 8 24 12 24 12Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
  {
    name: 'Pure A2 Cow Milk', desc: 'From free-grazing cows on our island. Unprocessed, unhomogenized, real milk', tag: 'Daily', source: 'island',
    color: 'from-blue-50 to-cyan-50', iconBg: 'bg-blue-100',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-blue-700"><path d="M16 14H32L34 20V38C34 40.2 32.2 42 30 42H18C15.8 42 14 40.2 14 38V20L16 14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 24H34" stroke="currentColor" strokeWidth="2"/><path d="M20 14V8H28V14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>),
  },
  {
    name: 'Country Eggs', desc: 'Free-range eggs from hens that roam our fields and eat naturally', tag: 'Daily', source: 'island',
    color: 'from-orange-50 to-amber-50', iconBg: 'bg-orange-100',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-orange-700"><ellipse cx="24" cy="28" rx="12" ry="16" stroke="currentColor" strokeWidth="2"/><ellipse cx="24" cy="28" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/></svg>),
  },
  {
    name: 'Wild Forest Honey', desc: 'Raw, unprocessed honey collected by tribal communities from ancient ghats forests', tag: 'Seasonal', source: 'ghats',
    color: 'from-yellow-50 to-amber-50', iconBg: 'bg-yellow-100',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-yellow-700"><ellipse cx="24" cy="30" rx="12" ry="10" stroke="currentColor" strokeWidth="2"/><path d="M18 28C18 28 20 34 24 34C28 34 30 28 30 28" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/><path d="M20 20L24 12L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    name: 'Turmeric & Spices', desc: 'High-curcumin turmeric and spices from the mineral-rich red soil of the ghats', tag: 'Seasonal', source: 'ghats',
    color: 'from-yellow-100/60 to-orange-50', iconBg: 'bg-amber-100',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-amber-700"><path d="M16 40C16 40 14 28 18 20C22 12 24 8 24 8C24 8 26 12 30 20C34 28 32 40 32 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14 40H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="8" r="3" fill="currentColor" opacity="0.3"/></svg>),
  },
]

export default function ProductShowcase() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="products" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-6">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Nature's <span className="text-green-deep">Bounty</span></h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">From our island farm and the Eastern Ghats — everything grown with love, patience, and zero chemicals.</p>
        </motion.div>

        {/* Source legend */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-6 mb-12 text-sm">
          <span className="flex items-center gap-1.5 text-brown-light"><span className="w-2.5 h-2.5 rounded-full bg-blue-river-dark" /> Island Farm</span>
          <span className="flex items-center gap-1.5 text-brown-light"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Eastern Ghats</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <motion.div key={item.name} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group border border-transparent hover:border-green-deep/10 relative overflow-hidden`}>
              {/* Source indicator line */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${item.source === 'island' ? 'bg-blue-river-dark/60' : 'bg-amber-500/60'}`} />

              <div className="flex items-start justify-between mb-4">
                <div className={`${item.iconBg} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-xs font-semibold bg-white/80 text-brown-earth px-3 py-1 rounded-full">{item.tag}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    item.source === 'island' ? 'bg-blue-river-dark/10 text-blue-river-dark' : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    {item.source === 'island' ? '🏝️ Island' : '⛰️ Ghats'}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-brown-earth mb-2">{item.name}</h3>
              <p className="text-brown-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10 text-brown-light italic">
          Products vary by season — nature decides, we follow. Contact us for current availability.
        </motion.p>
      </div>
    </section>
  )
}
