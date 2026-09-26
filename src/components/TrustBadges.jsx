import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'

const principles = [
  { title: 'Grown organically', desc: 'No synthetic chemicals or pesticides, ever.' },
  { title: 'Lab-tested', desc: 'Independently checked for purity and safety.' },
  { title: 'A river island', desc: 'Naturally isolated on the Godavari delta.' },
  { title: 'Farm-direct', desc: 'Family-run. Harvested fresh, no middlemen.' },
]

const numerals = ['I', 'II', 'III', 'IV']

export default function TrustBadges() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-forest text-ivory border-t border-ivory/10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4"
      >
        {principles.map((p, i) => (
          <div
            key={p.title}
            className={`py-10 md:py-14 pr-6 lg:px-8 lg:first:pl-0 border-ivory/10 ${
              i % 2 === 0 ? 'border-r' : 'pl-6'
            } ${i < 2 ? 'border-b lg:border-b-0' : ''} lg:border-r lg:last:border-r-0`}
          >
            <span className="font-[family-name:var(--font-heading)] italic text-brass-light text-sm">{numerals[i]}.</span>
            <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-ivory mt-3">{p.title}</h3>
            <p className="mt-2 text-sm text-ivory/55 leading-relaxed max-w-[16rem]">{p.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
