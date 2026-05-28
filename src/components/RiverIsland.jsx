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
    <section id="island" ref={ref} className="bg-paper py-16 md:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={show}
        transition={{ duration: 0.7, ease }}
        className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-8 items-end"
      >
        <div className="lg:col-span-8">
          <Eyebrow className="text-green-deep/70 mb-5">01 — The farm</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] font-medium">
            An organic farm on an island
            <br className="hidden md:block" /> in the river Godavari.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-ink/65 leading-relaxed">
            Wrapped by sacred river water on every side, the farm is naturally
            isolated — and that isolation is what keeps it truly organic.
          </p>
        </div>
      </motion.div>

      {/* Full-bleed image */}
      <motion.figure
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, ease }}
        className="mt-12 md:mt-16"
      >
        <img
          src="/images/godavari-river.jpg"
          alt="The river Godavari surrounding the island farm"
          className="w-full h-[55vh] md:h-[70vh] object-cover"
          loading="lazy"
        />
        <figcaption className="max-w-7xl mx-auto px-6 md:px-10 mt-3 text-xs text-ink/45 tracking-wide">
          The Godavari wraps the land on every side
        </figcaption>
      </motion.figure>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Pull quote */}
        <p className="font-[family-name:var(--font-heading)] italic text-2xl md:text-3xl text-ink/80 leading-snug max-w-3xl mt-16 md:mt-20">
          “Where the river wraps the land, that&rsquo;s where your food grows.”
        </p>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 sm:divide-x sm:divide-ink/10 border-t border-ink/10 pt-10">
          {islandFeatures.map((item, i) => (
            <div key={item.title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <span className="text-xs text-green-deep/60 tabular-nums">0{i + 1}</span>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-ink mt-2 font-medium">{item.title}</h3>
              <p className="text-sm text-ink/55 leading-relaxed mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Grown without */}
        <p className="mt-12 text-ink/60 leading-relaxed max-w-3xl">
          Grown without{' '}
          <span className="text-ink">synthetic pesticides, synthetic fertilizers, growth hormones</span>{' '}
          or artificial additives — the way food was meant to be.
        </p>
      </div>
    </section>
  )
}
