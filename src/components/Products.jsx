import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'
import { WHATSAPP_URL } from '../config/contact'

const productTabs = [
  {
    key: 'island',
    label: 'Island Farm',
    sublabel: 'Grown on our Godavari island',
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
    label: 'Eastern Ghats',
    sublabel: 'Sourced with tribal partners',
    intro: 'Beyond our island, we partner with tribal communities in the Eastern Ghats — sourcing rare, wild, ancient foods that support livelihoods and protect forests.',
    products: [
      { name: 'Wild Forest Honey', desc: 'Collected from ancient forests. Raw, unprocessed, full of enzymes.', tag: 'Seasonal' },
      { name: 'Black Pepper', desc: 'Hand-picked highland pepper, sun-dried the traditional way.', tag: 'Seasonal' },
      { name: 'Turmeric & Spices', desc: 'High-curcumin turmeric from mineral-rich valley soil.', tag: 'Seasonal' },
      { name: 'Coffee Beans', desc: 'Shade-grown, slow-roasted, single-origin from small estates.', tag: 'Year-round' },
      { name: 'Millets & Grains', desc: 'Ragi, jowar and little millet, grown by century-old methods.', tag: 'Seasonal' },
      { name: 'Herbal & Medicinal', desc: 'Rare herbs, dried flowers and roots, sustainably foraged.', tag: 'Limited' },
    ],
  },
  {
    key: 'seasonal',
    label: "What's Fresh",
    sublabel: 'In season right now',
    seasonal: true,
  },
]

const seasonalData = {
  kharif: { name: 'Kharif · Jun–Nov', items: ['Paddy rice', 'Vegetables', 'Turmeric', 'Cow milk', 'Country eggs', 'Wild honey'] },
  rabi: { name: 'Rabi · Nov–Mar', items: ['Leafy greens', 'Tomatoes', 'Black pepper', 'Millets', 'Cow milk', 'Herbs'] },
  summer: { name: 'Summer · Mar–Jun', items: ['Mangoes', 'Drumstick', 'Coffee', 'Wild honey', 'Cow milk', 'Coconuts'] },
}

const currentMonth = new Date().getMonth()
const currentSeason = currentMonth >= 5 && currentMonth <= 10 ? 'kharif' : currentMonth >= 2 && currentMonth <= 5 ? 'summer' : 'rabi'

export default function Products() {
  const { ref, isInView } = useScrollAnimation(0.1)
  const [activeTab, setActiveTab] = useState('island')
  const active = productTabs.find(t => t.key === activeTab)

  return (
    <section id="products" ref={ref} className="bg-white px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <Eyebrow className="text-green-deep/70 mb-5">02 — The harvest</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] font-medium">
            What we grow,
            <br /> and what we gather.
          </h2>
          <p className="mt-6 text-ink/65 text-lg leading-relaxed">
            Two pristine sources — our island farm and the forests of the Eastern Ghats.
            Everything free from synthetic chemicals.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-ink/12 mb-10">
          {productTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-4 -mb-px text-sm md:text-base tracking-wide border-b-2 transition-colors duration-200 ${
                activeTab === tab.key ? 'border-ink text-ink' : 'border-transparent text-ink/45 hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-ink/50 mb-8">{active.sublabel}</p>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease }}
          >
            {active.intro && (
              <div className="mb-10 flex flex-col sm:flex-row gap-5 items-start">
                <img src="/images/eastern-ghats.webp" alt="" className="w-full sm:w-44 h-32 object-cover shrink-0" />
                <p className="text-ink/65 leading-relaxed max-w-2xl">{active.intro}</p>
              </div>
            )}

            {active.seasonal ? (
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink/12">
                {Object.entries(seasonalData).map(([key, season]) => (
                  <div
                    key={key}
                    className={`p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-ink/12 ${
                      key === currentSeason ? 'bg-green-deep/[0.04]' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="font-[family-name:var(--font-heading)] text-xl text-ink font-medium">{season.name}</h4>
                      {key === currentSeason && (
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-green-deep">Now</span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {season.items.map((item) => (
                        <li key={item} className="text-sm text-ink/60">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/12 border border-ink/12">
                {active.products.map((item) => (
                  <div key={item.name} className="bg-white p-7 hover:bg-paper transition-colors duration-300">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl text-ink font-medium">{item.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-ink/40 shrink-0">{item.tag}</span>
                    </div>
                    <p className="text-sm text-ink/60 leading-relaxed mt-3">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-ink/12 pt-6">
              <p className="text-sm text-ink/50 italic">Availability follows nature&rsquo;s rhythm, not a catalogue.</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-green-deep hover:text-green-deep transition-colors"
              >
                Ask what&rsquo;s fresh today
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
