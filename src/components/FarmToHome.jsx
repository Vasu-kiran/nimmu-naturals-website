import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const steps = [
  { step: '01', title: 'Reach Out', desc: 'Message us on WhatsApp — tell us what you need', emoji: '💬', color: 'bg-green-500' },
  { step: '02', title: 'Choose', desc: "We share what's fresh and ready from the farm", emoji: '🛒', color: 'bg-blue-river' },
  { step: '03', title: 'We Harvest', desc: 'Picked fresh for your order — no cold storage', emoji: '🌾', color: 'bg-amber-500' },
  { step: '04', title: 'Delivered', desc: 'Packed with care, delivered to your doorstep', emoji: '📦', color: 'bg-brown-earth' },
]

const traceItems = [
  { label: 'Product', value: 'Organic Rice', icon: '🌾' },
  { label: 'Harvest', value: 'Picked fresh for you', icon: '📅' },
  { label: 'Location', value: 'Gudapalli, Konaseema', icon: '📍' },
  { label: 'Method', value: '100% Natural / Organic', icon: '🌿' },
  { label: 'Chemicals', value: 'None — Zero', icon: '✅' },
  { label: 'Handled By', value: 'Farm Family', icon: '👨‍🌾' },
]

export default function FarmToHome() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-deep/3 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-earth/3 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-14">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">
            Farm to <span className="text-green-deep">Your Home</span>
          </h2>
          <p className="text-brown-light mt-3 max-w-lg mx-auto">Simple, honest, direct. No apps, no middlemen — just a WhatsApp message away.</p>
        </motion.div>

        {/* Steps — horizontal on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((item, i) => (
            <motion.div key={item.step} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-green-deep/20 to-green-deep/5 z-0" />
              )}
              <div className="relative z-10">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${item.color}/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {item.emoji}
                </div>
                <span className="text-green-deep/30 text-xs font-bold">{item.step}</span>
                <h3 className="font-bold text-brown-earth mt-1 mb-1 text-sm">{item.title}</h3>
                <p className="text-brown-light text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom: Product photos + Traceability side by side */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.5 }}>
          <div className="bg-beige-light/50 rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Left: Real product photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                  <img src="/images/honey-jar.jpeg" alt="Nimmu Naturals branded honey jar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                  <img src="/images/farm-stall.jpeg" alt="Nimmu Naturals farm stall with products" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="col-span-2 text-center text-brown-light text-xs italic mt-1">Real products. Real people. No stock photos.</p>
              </div>

              {/* Right: Compact traceability */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-green-deep flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-earth text-sm">Product Traceability</h3>
                    <p className="text-brown-light text-[10px]">Every product comes with full transparency</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {traceItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 shadow-sm">
                      <span className="text-base">{item.icon}</span>
                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] text-brown-light uppercase tracking-wider font-semibold">{item.label}</span>
                        <p className="text-brown-earth font-medium text-xs">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-green-deep text-[10px] font-semibold mt-3 tracking-wider uppercase">Verified Organic &bull; Nimmu Naturals</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.7 }} className="text-center mt-10">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-deep text-white px-7 py-3.5 rounded-full font-semibold hover:bg-green-light transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
