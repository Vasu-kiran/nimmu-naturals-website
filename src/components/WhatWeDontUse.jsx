import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const dontUseItems = [
  { label: 'No Pesticides', desc: 'Our ducks and hens handle pests naturally' },
  { label: 'No Chemical Fertilizers', desc: 'Cow dung and compost feed our soil' },
  { label: 'No Artificial Anything', desc: 'No growth hormones, no preservatives' },
  { label: 'No Shortcuts', desc: 'Nature takes time — we respect that' },
]

const comparison = [
  { aspect: 'Pest Control', conventional: 'Chemical pesticides', ours: 'Ducks & hens eat pests' },
  { aspect: 'Fertilizer', conventional: 'Synthetic chemicals', ours: 'Cow dung & natural compost' },
  { aspect: 'Weed Control', conventional: 'Herbicides', ours: 'Manual & duck grazing' },
  { aspect: 'Soil Health', conventional: 'Depleted over time', ours: 'Gets richer every year' },
]

export default function WhatWeDontUse() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-gradient-to-b from-red-50/30 to-beige-light">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-red-600/80 text-sm font-semibold tracking-wider uppercase mb-4 block">Trust Builder</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">What We <span className="text-red-600/80">DON'T</span> Use</h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">We believe what you leave out is just as important as what you put in.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dontUseItems.map((item, index) => (
            <motion.div key={item.label} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center border border-red-100 hover:border-red-200 hover:shadow-lg transition-all duration-500 group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <h3 className="font-bold text-brown-earth text-lg mb-2">{item.label}</h3>
              <p className="text-brown-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.5 }} className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-brown-earth text-white font-semibold">
            <div className="p-4 md:p-6 text-sm md:text-base">Aspect</div>
            <div className="p-4 md:p-6 text-sm md:text-base text-center">Conventional</div>
            <div className="p-4 md:p-6 text-sm md:text-base text-center text-green-300">Nimmu Naturals</div>
          </div>
          {comparison.map((row, i) => (
            <div key={row.aspect} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-beige-light/30' : 'bg-white'}`}>
              <div className="p-4 md:p-6 font-medium text-brown-earth text-sm md:text-base">{row.aspect}</div>
              <div className="p-4 md:p-6 text-center text-red-500/80 text-sm md:text-base flex items-center justify-center gap-1">
                <span className="hidden sm:inline">&#10007;</span> {row.conventional}
              </div>
              <div className="p-4 md:p-6 text-center text-green-deep text-sm md:text-base flex items-center justify-center gap-1">
                <span className="hidden sm:inline">&#10003;</span> {row.ours}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
