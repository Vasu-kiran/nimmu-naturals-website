import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'

const principles = [
  { title: 'Grown organically', desc: 'No synthetic chemicals or pesticides, ever.' },
  { title: 'Lab-tested', desc: 'Independently checked for purity and safety.' },
  { title: 'A river island', desc: 'Naturally isolated on the Godavari delta.' },
  { title: 'Farm-direct', desc: 'Family-run. Harvested fresh, no middlemen.' },
]

export default function TrustBadges() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-green-deep text-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <Eyebrow className="text-paper/55 mb-10">Our promise</Eyebrow>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-paper/20">
            {principles.map((p) => (
              <div key={p.title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-paper font-medium">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-paper/65 leading-relaxed max-w-[16rem]">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
