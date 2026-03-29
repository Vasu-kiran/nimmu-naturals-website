import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const seasons = [
  {
    name: 'Kharif (Jun–Nov)',
    key: 'kharif',
    icon: '🌧️',
    color: 'bg-green-deep',
    items: [
      { name: 'Paddy Rice', source: 'island', emoji: '🌾' },
      { name: 'Vegetables', source: 'island', emoji: '🥬' },
      { name: 'Turmeric', source: 'ghats', emoji: '🟡' },
      { name: 'Cow Milk', source: 'island', emoji: '🥛' },
      { name: 'Country Eggs', source: 'island', emoji: '🥚' },
      { name: 'Wild Honey', source: 'ghats', emoji: '🍯' },
    ],
  },
  {
    name: 'Rabi (Nov–Mar)',
    key: 'rabi',
    icon: '❄️',
    color: 'bg-blue-river-dark',
    items: [
      { name: 'Leafy Greens', source: 'island', emoji: '🥗' },
      { name: 'Tomatoes', source: 'island', emoji: '🍅' },
      { name: 'Black Pepper', source: 'ghats', emoji: '⚫' },
      { name: 'Millets', source: 'ghats', emoji: '🌾' },
      { name: 'Cow Milk', source: 'island', emoji: '🥛' },
      { name: 'Herbs', source: 'ghats', emoji: '🌿' },
    ],
  },
  {
    name: 'Summer (Mar–Jun)',
    key: 'summer',
    icon: '☀️',
    color: 'bg-amber-600',
    items: [
      { name: 'Mangoes', source: 'island', emoji: '🥭' },
      { name: 'Drumstick', source: 'island', emoji: '🟢' },
      { name: 'Coffee Beans', source: 'ghats', emoji: '☕' },
      { name: 'Wild Honey', source: 'ghats', emoji: '🍯' },
      { name: 'Cow Milk', source: 'island', emoji: '🥛' },
      { name: 'Country Eggs', source: 'island', emoji: '🥚' },
    ],
  },
]

const currentMonth = new Date().getMonth()
const defaultSeason = currentMonth >= 5 && currentMonth <= 10 ? 'kharif' : currentMonth >= 10 || currentMonth <= 2 ? 'rabi' : 'summer'

export default function SeasonalAvailability() {
  const { ref, isInView } = useScrollAnimation()
  const [activeSeason, setActiveSeason] = useState(defaultSeason)
  const activeData = seasons.find(s => s.key === activeSeason)

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">What's Fresh Now</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">
            Seasonal <span className="text-green-deep">Harvest Calendar</span>
          </h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">
            We grow what nature intends for each season. No forced farming, no greenhouses — just honest seasonal food.
          </p>
        </motion.div>

        {/* Season tabs */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          {seasons.map((season) => (
            <button
              key={season.key}
              onClick={() => setActiveSeason(season.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeSeason === season.key
                  ? `${season.color} text-white shadow-lg scale-105`
                  : 'bg-white text-brown-earth hover:bg-beige-dark/30 shadow-sm'
              }`}
            >
              <span>{season.icon}</span>
              {season.name}
              {season.key === defaultSeason && activeSeason !== season.key && (
                <span className="w-2 h-2 rounded-full bg-green-deep animate-pulse-gentle" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Current season indicator */}
        {activeSeason === defaultSeason && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-green-deep/10 text-green-deep px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-deep animate-pulse-gentle" />
              Currently in season
            </span>
          </motion.div>
        )}

        {/* Products grid */}
        <motion.div
          key={activeSeason}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activeData.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-beige-light/50 hover:bg-beige-light hover:shadow-sm transition-all duration-300 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-brown-earth text-sm truncate">{item.name}</p>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                    item.source === 'island' ? 'text-blue-river-dark' : 'text-amber-600'
                  }`}>
                    {item.source === 'island' ? '🏝️ Island Farm' : '⛰️ Eastern Ghats'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-beige-dark/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brown-light text-sm italic">Availability depends on nature's rhythm. WhatsApp us for today's fresh list.</p>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-deep text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-light transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              What's Fresh Today?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
