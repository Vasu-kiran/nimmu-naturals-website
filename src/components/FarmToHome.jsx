import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from './useScrollAnimation'

const steps = [
  { step: '01', title: 'Reach Out', desc: 'Message us on WhatsApp — tell us what you need', emoji: '💬' },
  { step: '02', title: 'Choose', desc: "We'll share what's fresh and ready from the farm", emoji: '🛒' },
  { step: '03', title: 'We Harvest', desc: 'Picked fresh for your order — no cold storage', emoji: '🌾' },
  { step: '04', title: 'Delivered', desc: 'Packed with care, delivered to your doorstep', emoji: '📦' },
]

export default function FarmToHome() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: How it works */}
          <motion.div variants={fadeInLeft} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }}>
            <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-3 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brown-earth mb-8">
              Farm to <span className="text-green-deep">Your Home</span>
            </h2>

            <div className="space-y-4">
              {steps.map((item, i) => (
                <motion.div key={item.step} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-green-deep/8 flex items-center justify-center text-xl group-hover:bg-green-deep/15 transition-colors">
                    {item.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-green-deep/30 text-xs font-bold">{item.step}</span>
                      <h3 className="font-bold text-brown-earth">{item.title}</h3>
                    </div>
                    <p className="text-brown-light text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-flex items-center gap-2 bg-green-deep text-white px-6 py-3 rounded-full font-semibold mt-8 hover:bg-green-light transition-all duration-300 hover:shadow-lg text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              Order on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: Traceability card */}
          <motion.div variants={fadeInRight} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-green-deep/10">
              <div className="bg-green-deep px-6 py-5">
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 16L14 22L24 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <h3 className="text-white font-bold">Product Traceability</h3>
                    <p className="text-white/60 text-xs">Know exactly where your food comes from</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: 'Product', value: 'Organic Rice (Sample)', icon: '🌾' },
                  { label: 'Harvest Date', value: 'DD/MM/YYYY', icon: '📅' },
                  { label: 'Location', value: 'Gudapalli, Konaseema', icon: '📍' },
                  { label: 'Method', value: '100% Natural / Organic', icon: '🌿' },
                  { label: 'Chemicals', value: 'None — Zero', icon: '✅' },
                  { label: 'Handled By', value: 'Farm Family', icon: '👨‍🌾' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 pb-3 border-b border-beige-dark/30 last:border-0 last:pb-0">
                    <span className="text-lg">{item.icon}</span>
                    <div className="min-w-0">
                      <span className="text-[10px] text-brown-light uppercase tracking-wider">{item.label}</span>
                      <p className="text-brown-earth font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-beige-light/50 px-6 py-3 text-center">
                <p className="text-green-deep text-xs font-medium">Verified Organic &bull; Nimmu Naturals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
