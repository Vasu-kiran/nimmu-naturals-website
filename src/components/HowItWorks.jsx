import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const steps = [
  {
    step: '01', title: 'Reach Out', desc: 'Message us on WhatsApp or call. Tell us what you need — we love hearing from you!',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><path d="M14 34L8 40V14C8 11.8 9.8 10 12 10H36C38.2 10 40 11.8 40 14V30C40 32.2 38.2 34 36 34H14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M18 20H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M18 26H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  },
  {
    step: '02', title: 'Choose Products', desc: "Browse our seasonal offerings. We'll tell you exactly what's fresh and ready from the farm.",
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><path d="M12 16L6 8H42L36 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="12" y="16" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2.5"/><path d="M20 16V12C20 9.8 21.8 8 24 8C26.2 8 28 9.8 28 12V16" stroke="currentColor" strokeWidth="2.5"/></svg>),
  },
  {
    step: '03', title: 'Fresh Harvest', desc: 'We harvest your order fresh. No cold storage, no warehouse sitting. Straight from the field.',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><path d="M24 8C24 8 16 16 16 28C16 36 20 40 24 42C28 40 32 36 32 28C32 16 24 8 24 8Z" stroke="currentColor" strokeWidth="2.5"/><path d="M24 16V36" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/><path d="M24 24L28 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/><path d="M24 28L20 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>),
  },
  {
    step: '04', title: 'Delivered Home', desc: 'Packed with care, delivered to your doorstep. Farm-fresh food, just the way nature intended.',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><rect x="4" y="20" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2.5"/><path d="M32 24H40L44 30V38H32" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><circle cx="14" cy="40" r="4" stroke="currentColor" strokeWidth="2.5"/><circle cx="38" cy="40" r="4" stroke="currentColor" strokeWidth="2.5"/></svg>),
  },
]

export default function HowItWorks() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Farm to <span className="text-green-deep">Your Home</span></h2>
          <p className="text-brown-light mt-4 text-lg">Simple, honest, direct.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div key={item.step} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }} className="relative text-center group">
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-green-deep/20 to-green-deep/5" />}
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-deep/8 flex items-center justify-center text-green-deep group-hover:bg-green-deep group-hover:text-white transition-all duration-500">{item.icon}</div>
                <span className="text-green-deep/40 text-4xl font-bold font-[family-name:var(--font-heading)]">{item.step}</span>
                <h3 className="text-xl font-bold text-brown-earth mt-2 mb-3">{item.title}</h3>
                <p className="text-brown-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.7 }} className="text-center mt-12">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-deep text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-light transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.767-6.183-2.06l-.432-.324-2.647.887.887-2.647-.324-.432A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
