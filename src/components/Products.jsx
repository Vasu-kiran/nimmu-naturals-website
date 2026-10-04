import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'
import { WHATSAPP_URL } from '../config/contact'

const sources = [
  {
    key: 'island',
    label: 'From the island',
    sublabel: 'Grown on our Godavari island',
    image: '/images/vegetables.jpeg',
    alt: 'Rows of cauliflower growing in red soil on the island farm',
    products: [
      { name: 'Organic Rice', desc: 'Fragrant, unpolished, from our own paddy fields.', tag: 'Staple' },
      { name: 'Fresh Vegetables', desc: 'Seasonal, hand-picked, delivered within hours.', tag: 'Seasonal' },
      { name: 'Pure A2 Cow Milk', desc: 'Free-grazing cows, unprocessed, real milk.', tag: 'Daily' },
      { name: 'Country Eggs', desc: 'Free-range hens that forage naturally.', tag: 'Daily' },
      { name: 'Mangoes', desc: 'Organic mangoes from our island trees.', tag: 'Summer' },
      { name: 'Coconuts', desc: 'Tender coconuts from the Konaseema groves.', tag: 'Year-round' },
    ],
  },
  {
    key: 'ghats',
    label: 'From the Eastern Ghats',
    sublabel: 'Sourced with tribal partners',
    image: '/images/eastern-ghats.webp',
    alt: 'Sunset over the hills of the Eastern Ghats',
    intro: 'Beyond our island, we partner with tribal communities in the Eastern Ghats for foods that grow wild in the hills.',
    products: [
      { name: 'Wild Forest Honey', desc: 'Collected from ancient forests. Raw and unprocessed.', tag: 'Seasonal' },
      { name: 'Black Pepper', desc: 'Hand-picked highland pepper, sun-dried the traditional way.', tag: 'Seasonal' },
      { name: 'Turmeric & Spices', desc: 'High-curcumin turmeric from mineral-rich valley soil.', tag: 'Seasonal' },
      { name: 'Coffee Beans', desc: 'Shade-grown, single-origin from small estates.', tag: 'Year-round' },
      { name: 'Millets & Grains', desc: 'Ragi, jowar and little millet.', tag: 'Seasonal' },
      { name: 'Herbal & Medicinal', desc: 'Herbs, dried flowers and roots, sustainably foraged.', tag: 'Limited' },
    ],
  },
]

const seasonalData = {
  kharif: { name: 'Kharif', months: 'Jun – Nov', items: ['Paddy rice', 'Vegetables', 'Turmeric', 'Cow milk', 'Country eggs', 'Wild honey'] },
  rabi: { name: 'Rabi', months: 'Nov – Mar', items: ['Leafy greens', 'Tomatoes', 'Black pepper', 'Millets', 'Cow milk', 'Herbs'] },
  summer: { name: 'Summer', months: 'Mar – Jun', items: ['Mangoes', 'Drumstick', 'Coffee', 'Wild honey', 'Cow milk', 'Coconuts'] },
}

const currentMonth = new Date().getMonth()
const currentSeason = currentMonth >= 5 && currentMonth <= 10 ? 'kharif' : currentMonth >= 2 && currentMonth <= 5 ? 'summer' : 'rabi'

function SourceColumn({ source, isInView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
    >
      <div className="overflow-hidden rounded-3xl">
        <img
          src={source.image}
          alt={source.alt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="mt-8 flex items-baseline justify-between gap-4">
        <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ink tracking-[-0.02em]">
          {source.label}
        </h3>
        <span className="text-sm text-brass shrink-0 hidden sm:inline">{source.sublabel}</span>
      </div>
      {source.intro && <p className="mt-4 text-ink/60 leading-relaxed max-w-lg">{source.intro}</p>}

      <ul className="mt-8 border-t border-ink/15">
        {source.products.map((item) => (
          <li key={item.name} className="group py-5 border-b border-ink/15">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-[family-name:var(--font-heading)] text-xl md:text-[1.4rem] text-ink group-hover:text-brass transition-colors duration-300">
                {item.name}
              </p>
              <span className="text-sm text-ink/40 shrink-0">{item.tag}</span>
            </div>
            <p className="text-sm text-ink/55 leading-relaxed mt-1.5">{item.desc}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Products() {
  const { ref, isInView } = useScrollAnimation(0.05)
  const season = seasonalData[currentSeason]

  return (
    <section id="products" ref={ref} className="bg-ivory pt-24 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="grid lg:grid-cols-12 gap-10 items-end mb-16 md:mb-24"
        >
          <div className="lg:col-span-8">
            <Eyebrow className="text-brass mb-8">The harvest</Eyebrow>
            <h2 className="font-[family-name:var(--font-heading)] text-[2.6rem] md:text-6xl lg:text-7xl text-ink leading-[1.02] tracking-[-0.015em]">
              What we grow,
              <br /> and what we gather.
            </h2>
          </div>
          <p className="lg:col-span-4 lg:pb-3 text-ink/65 text-lg leading-relaxed">
            Two sources — our island farm and the forests of the Eastern Ghats.
            Everything free from synthetic chemicals.
          </p>
        </motion.div>

        {/* Two sources, side by side */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-16 xl:gap-24">
          {sources.map((s, i) => (
            <SourceColumn key={s.key} source={s} isInView={isInView} delay={0.1 + i * 0.1} />
          ))}
        </div>

        {/* In season now */}
        <div className="mt-24 md:mt-32 bg-forest text-ivory rounded-3xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 md:p-12 lg:border-r border-ivory/10">
            <p className="text-sm text-brass-light">In season now</p>
            <p className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl mt-5 tracking-[-0.02em]">
              {season.name}
            </p>
            <p className="font-[family-name:var(--font-heading)] text-ivory/55 text-xl mt-2">{season.months}</p>
          </div>
          <div className="lg:col-span-7 p-8 md:p-12 pt-0 md:pt-0 lg:pt-12 flex flex-col justify-between gap-10">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {season.items.map((item) => (
                <li key={item} className="text-ivory/80 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass-light shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-ivory/10 pt-6">
              <p className="text-sm text-ivory/50">Availability follows the season, not a catalogue.</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center bg-brass-light text-forest px-6 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-ivory transition-colors duration-300"
              >
                Ask what&rsquo;s fresh today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
