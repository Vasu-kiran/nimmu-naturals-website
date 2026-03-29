import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const reasons = [
  {
    title: 'Better Health', desc: 'Organic food is free from harmful chemicals that accumulate in your body over time. Protect your family.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M20 36C20 36 4 26 4 16C4 10 8 6 14 6C18 6 19.5 8 20 10C20.5 8 22 6 26 6C32 6 36 10 36 16C36 26 20 36 20 36Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/><path d="M14 18H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20 12V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  },
  {
    title: 'No Toxins', desc: 'Zero pesticide residue in your food. What you eat should nourish you, not slowly poison you.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2"/><path d="M12 12L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M16 20C16 20 18 16 20 16C22 16 24 20 24 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    title: 'Supports Soil', desc: 'Organic farming builds soil health instead of depleting it. Healthy soil means healthy food for generations.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M4 32H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M8 28H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/><path d="M12 24H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/><path d="M20 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20 12C20 12 15 8 20 4C25 8 20 12 20 12Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
  {
    title: 'Future Generations', desc: 'Every organic meal is a vote for the planet your children will inherit. Choose wisely today.',
    icon: (<svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2"/><path d="M12 24C12 24 16 16 20 14C24 16 28 24 28 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 14V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 10C20 10 17 7 20 5C23 7 20 10 20 10Z" fill="currentColor" opacity="0.3"/><path d="M8 28H32" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/></svg>),
  },
]

export default function WhyOrganic() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Why Organic Matters</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Eat Food, <span className="text-green-deep">Not Chemicals</span></h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">Choosing organic isn't just about taste — it's about choosing life over chemicals.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <motion.div key={item.title} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
              className="flex gap-5 bg-beige-light/50 rounded-2xl p-6 md:p-8 hover:bg-beige-light hover:shadow-md transition-all duration-500 group">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-green-deep/8 flex items-center justify-center text-green-deep group-hover:bg-green-deep group-hover:text-white transition-all duration-500">{item.icon}</div>
              <div><h3 className="text-xl font-bold text-brown-earth mb-2">{item.title}</h3><p className="text-brown-light leading-relaxed">{item.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
