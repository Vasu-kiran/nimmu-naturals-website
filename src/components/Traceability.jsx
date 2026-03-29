import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

export default function Traceability() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Know Your Food</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Complete <span className="text-green-deep">Transparency</span></h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">Every product from Nimmu Naturals comes with full traceability. You know exactly where your food comes from.</p>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-green-deep/10">
            <div className="bg-green-deep px-8 py-6">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 16L14 22L24 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div>
                  <h3 className="text-white font-bold text-lg">Product Traceability Card</h3>
                  <p className="text-white/70 text-sm">Nimmu Naturals Verified</p>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-5">
              {[
                { label: 'Product', value: 'Organic Rice (Sample)', icon: '🌾' },
                { label: 'Harvest Date', value: 'DD/MM/YYYY', icon: '📅' },
                { label: 'Farm Location', value: 'Gudapalli, Konaseema, AP', icon: '📍' },
                { label: 'Farming Method', value: '100% Natural / Organic', icon: '🌿' },
                { label: 'Chemicals Used', value: 'None — Zero', icon: '✅' },
                { label: 'Handled By', value: 'Farm Family', icon: '👨‍🌾' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 pb-4 border-b border-beige-dark/50 last:border-0 last:pb-0">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="text-xs text-brown-light uppercase tracking-wider">{item.label}</span>
                    <p className="text-brown-earth font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-beige-light/50 px-8 py-4 text-center">
              <p className="text-green-deep text-sm font-medium">Verified Organic &bull; Nimmu Naturals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
