import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

const productTabs = [
  {
    key: 'island',
    label: '🏝️ Island Farm',
    sublabel: 'Grown on our Godavari island',
    products: [
      { name: 'Organic Rice', desc: 'Fragrant, unpolished, from our paddy fields', tag: 'Staple', emoji: '🌾' },
      { name: 'Fresh Vegetables', desc: 'Seasonal, hand-picked, delivered in hours', tag: 'Seasonal', emoji: '🥬' },
      { name: 'Pure A2 Cow Milk', desc: 'Free-grazing cows, unprocessed, real milk', tag: 'Daily', emoji: '🥛' },
      { name: 'Country Eggs', desc: 'Free-range hens that eat naturally', tag: 'Daily', emoji: '🥚' },
      { name: 'Mangoes', desc: 'Organic mangoes from our island trees', tag: 'Summer', emoji: '🥭' },
      { name: 'Coconuts', desc: 'Fresh tender coconuts from Konaseema', tag: 'Year-round', emoji: '🥥' },
    ],
  },
  {
    key: 'ghats',
    label: '⛰️ Eastern Ghats',
    sublabel: 'Sourced from tribal partners',
    intro: 'We partner with tribal communities in the Eastern Ghats — sourcing rare, wild, ancient foods that support livelihoods and protect forests.',
    products: [
      { name: 'Wild Forest Honey', desc: 'Collected by tribal communities from ancient forests. Raw, unprocessed, full of enzymes', tag: 'Seasonal', emoji: '🍯' },
      { name: 'Black Pepper', desc: 'Hand-picked wild pepper from highland plantations, sun-dried the traditional way', tag: 'Seasonal', emoji: '⚫' },
      { name: 'Turmeric & Spices', desc: 'High-curcumin turmeric grown in mineral-rich red soil valleys of the ghats', tag: 'Seasonal', emoji: '🟡' },
      { name: 'Coffee Beans', desc: 'Shade-grown from small tribal estates, slow-roasted, single-origin, rich and smooth', tag: 'Year-round', emoji: '☕' },
      { name: 'Millets & Grains', desc: 'Ragi, jowar, little millet — ancient grains grown using centuries-old methods', tag: 'Seasonal', emoji: '🌾' },
      { name: 'Herbal & Medicinal', desc: 'Rare herbs, dried flowers, medicinal roots — sustainably foraged from pristine forests', tag: 'Limited', emoji: '🌿' },
    ],
  },
  {
    key: 'seasonal',
    label: '📅 What\'s Fresh',
    sublabel: 'Current season availability',
    seasonal: true,
  },
]

const seasonalData = {
  kharif: { name: 'Kharif (Jun–Nov)', icon: '🌧️', items: ['Paddy Rice 🌾', 'Vegetables 🥬', 'Turmeric 🟡', 'Cow Milk 🥛', 'Country Eggs 🥚', 'Wild Honey 🍯'] },
  rabi: { name: 'Rabi (Nov–Mar)', icon: '❄️', items: ['Leafy Greens 🥗', 'Tomatoes 🍅', 'Black Pepper ⚫', 'Millets 🌾', 'Cow Milk 🥛', 'Herbs 🌿'] },
  summer: { name: 'Summer (Mar–Jun)', icon: '☀️', items: ['Mangoes 🥭', 'Drumstick 🟢', 'Coffee ☕', 'Wild Honey 🍯', 'Cow Milk 🥛', 'Coconuts 🥥'] },
}

const currentMonth = new Date().getMonth()
const currentSeason = currentMonth >= 5 && currentMonth <= 10 ? 'kharif' : currentMonth >= 2 && currentMonth <= 5 ? 'summer' : 'rabi'

export default function Products() {
  const { ref, isInView } = useScrollAnimation(0.1)
  const [activeTab, setActiveTab] = useState('island')
  const active = productTabs.find(t => t.key === activeTab)

  return (
    <section id="products" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-10">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-3 block">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Nature's <span className="text-green-deep">Bounty</span></h2>
          <p className="text-brown-light mt-3 text-lg max-w-xl mx-auto">Two pristine sources. Zero chemicals. Infinite care.</p>
        </motion.div>

        {/* Source tabs */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          {productTabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-left ${
                activeTab === tab.key ? 'bg-green-deep text-white shadow-lg scale-105' : 'bg-white text-brown-earth hover:shadow-md'
              }`}>
              <span className="block text-base font-semibold">{tab.label}</span>
              <span className={`text-xs ${activeTab === tab.key ? 'text-white/70' : 'text-brown-light'}`}>{tab.sublabel}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            {/* Intro text for ghats tab */}
            {active.intro && (
              <div className="mb-6 flex items-center gap-4 bg-amber-500/8 rounded-2xl p-5 border border-amber-500/15">
                <img src="/images/eastern-ghats.webp" alt="" className="w-16 h-16 rounded-xl object-cover shrink-0 hidden sm:block" />
                <p className="text-brown-light text-sm leading-relaxed"><strong className="text-brown-earth">Beyond our island farm:</strong> {active.intro}</p>
              </div>
            )}

            {active.seasonal ? (
              /* Seasonal calendar */
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(seasonalData).map(([key, season]) => (
                    <div key={key} className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
                      key === currentSeason ? 'border-green-deep bg-green-deep/5 shadow-md' : 'border-beige-dark/30 bg-beige-light/30'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl">{season.icon}</span>
                        {key === currentSeason && <span className="text-[10px] font-bold bg-green-deep text-white px-2 py-1 rounded-full uppercase">Now</span>}
                      </div>
                      <h4 className="font-bold text-brown-earth mb-3">{season.name}</h4>
                      <div className="space-y-2">
                        {season.items.map((item) => (
                          <p key={item} className="text-sm text-brown-light">{item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-beige-dark/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-brown-light text-sm italic">Availability depends on nature's rhythm</p>
                  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-deep text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-light transition-colors">
                    What's Fresh Today?
                  </a>
                </div>
              </div>
            ) : (
              /* Product grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {active.products.map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-400 hover:-translate-y-0.5 group">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                      <span className="text-[10px] font-semibold bg-beige-dark/30 text-brown-earth px-2.5 py-1 rounded-full">{item.tag}</span>
                    </div>
                    <h3 className="font-bold text-brown-earth mb-1">{item.name}</h3>
                    <p className="text-brown-light text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
