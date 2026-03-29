import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const ecosystemItems = [
  {
    name: 'Cows', gives: 'Milk & Dung Fertilizer', color: 'bg-amber-50', borderColor: 'border-amber-200',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-12 h-12"><ellipse cx="24" cy="28" rx="12" ry="9" stroke="currentColor" strokeWidth="2"/><circle cx="15" cy="22" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="14" cy="21.5" r="1" fill="currentColor"/><path d="M11 19L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M19 19L21 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 37V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M18 37V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 37V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M36 37V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  },
  {
    name: 'Hens', gives: 'Eggs & Pest Control', color: 'bg-orange-50', borderColor: 'border-orange-200',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-12 h-12"><ellipse cx="24" cy="30" rx="10" ry="8" stroke="currentColor" strokeWidth="2"/><circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="19" r="1" fill="currentColor"/><path d="M14 21L10 23L14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 14L24 10L20 10Z" fill="currentColor" opacity="0.6"/><path d="M34 30C34 30 38 28 36 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M18 38V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M30 38V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  },
  {
    name: 'Ducks', gives: 'Field Cleaning & Weeding', color: 'bg-blue-50', borderColor: 'border-blue-200',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-12 h-12"><ellipse cx="24" cy="30" rx="11" ry="8" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="20" r="6" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="19" r="1" fill="currentColor"/><path d="M12 22L7 24L12 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M35 30C35 30 39 28 38 33C37 36 35 34 35 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 42H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/></svg>),
  },
  {
    name: 'Soil', gives: 'Rich Nutrients & Life', color: 'bg-green-50', borderColor: 'border-green-200',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-12 h-12"><path d="M8 36H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M10 40H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 44H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M24 32V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M24 20C24 20 18 14 24 8C30 14 24 20 24 20Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/><path d="M24 24C24 24 30 20 32 24C28 26 24 24 24 24Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
]

export default function Philosophy() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="philosophy" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-deep/3" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">A Living <span className="text-green-deep">Ecosystem</span></h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">Every creature on our farm has a role. Together, they create a self-sustaining cycle of life that produces the purest food.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ecosystemItems.map((item, index) => (
            <motion.div key={item.name} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`${item.color} border ${item.borderColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group`}>
              <div className="text-green-deep mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-brown-earth mb-2">{item.name}</h3>
              <p className="text-brown-light text-sm">{item.gives}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-green-deep/5 via-green-deep/10 to-green-deep/5 rounded-3xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap text-lg md:text-xl font-medium text-brown-earth">
            {['Cows', 'Dung', 'Soil', 'Crops', 'Your Food'].map((item, i) => (
              <span key={item} className="flex items-center gap-3 md:gap-6">
                <span className={i === 4 ? 'text-green-deep font-bold' : ''}>{item}</span>
                {i < 4 && <svg className="w-6 h-6 text-green-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
              </span>
            ))}
          </div>
          <p className="text-brown-light mt-4 text-sm">The Circle of Life — No waste, no chemicals, just nature</p>
        </motion.div>
      </div>
    </section>
  )
}
