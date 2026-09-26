import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'

const islandFeatures = [
  { title: 'Natural isolation', desc: 'Surrounded by the Godavari, shielded from synthetic runoff.' },
  { title: 'Fertile delta soil', desc: 'Rich alluvial silt — no artificial fertilizers needed.' },
  { title: 'Mild microclimate', desc: 'Steady temperature and humidity, all year round.' },
]

export default function RiverIsland() {
  const { ref, isInView } = useScrollAnimation(0.1)
  const show = isInView ? { opacity: 1, y: 0 } : {}

  return (
    <section id="island" ref={ref} className="bg-ivory pt-24 md:pt-36 pb-24 md:pb-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show}
        transition={{ duration: 0.7, ease }}
        className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-end"
      >
        <div className="lg:col-span-8">
          <Eyebrow className="text-brass mb-8">The farm</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-[2.6rem] md:text-6xl lg:text-7xl text-ink leading-[1.02] tracking-[-0.03em]">
            An organic farm on an island in the <span className="italic">river Godavari.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:pb-3">
          <p className="text-ink/65 text-lg leading-relaxed">
            Wrapped by sacred river water on every side, the farm is naturally
            isolated — and that isolation is what keeps it truly organic.
          </p>
        </div>
      </motion.div>

      {/* Full-bleed image */}
      <motion.figure
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease }}
        className="mt-16 md:mt-24"
      >
        <img
          src="/images/godavari-river.jpg"
          alt="The river Godavari surrounding the island farm"
          className="w-full h-[55vh] md:h-[88vh] object-cover"
          loading="lazy"
        />
        <figcaption className="max-w-7xl mx-auto px-6 md:px-10 mt-4 flex justify-between text-[11px] uppercase tracking-[0.22em] text-ink/45">
          <span>The Godavari wraps the land on every side</span>
          <span className="hidden sm:inline">Konaseema</span>
        </figcaption>
      </motion.figure>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Features */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12 lg:gap-x-20">
          {islandFeatures.map((item, i) => (
            <div key={item.title} className="border-t border-ink/15 pt-8">
              <span className="font-[family-name:var(--font-heading)] italic text-brass text-lg">0{i + 1}</span>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-[1.75rem] text-ink mt-4">{item.title}</h3>
              <p className="text-ink/60 leading-relaxed mt-3">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Grown without */}
        <p className="mt-20 md:mt-28 font-[family-name:var(--font-heading)] text-2xl md:text-4xl text-ink/45 leading-snug max-w-4xl tracking-[-0.01em]">
          Grown without{' '}
          <span className="text-ink">synthetic pesticides, synthetic fertilizers, growth hormones</span>{' '}
          or artificial additives.
        </p>
      </div>
    </section>
  )
}
