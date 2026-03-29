import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const reasons = [
  {
    title: '100% Organic', desc: 'Every product is grown naturally, without any chemicals or artificial inputs. Certified by nature itself.',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><path d="M24 4C24 4 38 14 38 28C38 36 32 44 24 44C16 44 10 36 10 28C10 14 24 4 24 4Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1"/><path d="M24 12V38" stroke="currentColor" strokeWidth="2" opacity="0.5"/><path d="M24 20L28 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M24 28L20 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    title: 'Direct from Farm', desc: 'No middlemen, no warehouses. Harvested fresh and delivered straight from our fields to your doorstep.',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><path d="M8 40L8 20L24 8L40 20V40H8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M18 40V28H30V40" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M24 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  },
  {
    title: 'Transparent Sourcing', desc: 'Know exactly where your food comes from, when it was harvested, and how it was grown. Full traceability.',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/><path d="M16 24L22 30L34 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    title: 'Healthy Living', desc: 'Food that nourishes your body and respects the earth. Eating well has never felt this good.',
    icon: (<svg viewBox="0 0 48 48" fill="none" className="w-8 h-8"><path d="M24 42C24 42 6 30 6 18C6 12 10 8 16 8C20 8 23 10 24 14C25 10 28 8 32 8C38 8 42 12 42 18C42 30 24 42 24 42Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.1"/></svg>),
  },
]

export default function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="why-us" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">The Nimmu <span className="text-green-deep">Difference</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <motion.div key={item.title} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-transparent hover:border-green-deep/10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-green-deep/8 flex items-center justify-center text-green-deep group-hover:bg-green-deep group-hover:text-white transition-all duration-500">{item.icon}</div>
              <h3 className="text-lg font-bold text-brown-earth mb-3">{item.title}</h3>
              <p className="text-brown-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
