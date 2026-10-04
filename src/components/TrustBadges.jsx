import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'

const principles = [
  { title: 'Grown organically', desc: 'No synthetic chemicals or pesticides, ever.' },
  { title: 'Lab-tested', desc: 'Independently checked for purity and safety.' },
  { title: 'A river island', desc: 'Naturally isolated on the Godavari delta.' },
  { title: 'Farm-direct', desc: 'Family-run. Harvested fresh, no middlemen.' },
]

export default function TrustBadges() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-forest text-ivory">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {principles.map((p) => (
          <div key={p.title} className="bg-ivory/[0.06] border border-ivory/10 rounded-2xl p-5 md:p-7">
            <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-ivory">{p.title}</h3>
            <p className="mt-2 text-sm text-ivory/55 leading-relaxed max-w-[16rem]">{p.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
