import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const tabs = [
  {
    key: 'ecosystem',
    label: 'Living Ecosystem',
    icon: '🌱',
    content: {
      heading: 'A Farm That Works Like Nature',
      desc: 'Every creature on our farm has a role. Together, they create a self-sustaining cycle that produces the purest food.',
      items: [
        { name: 'Cows', role: 'Milk & dung fertilizer', icon: '🐄' },
        { name: 'Hens', role: 'Eggs & pest control', icon: '🐔' },
        { name: 'Ducks', role: 'Field cleaning & weeding', icon: '🦆' },
        { name: 'Soil', role: 'Rich nutrients from composting', icon: '🌍' },
      ],
      flow: ['Cows', 'Dung', 'Soil', 'Crops', 'Your Food'],
    },
  },
  {
    key: 'nodont',
    label: "What We Don't Use",
    icon: '🚫',
    content: {
      heading: "What We Leave Out Matters Most",
      desc: 'We believe the purity of your food is defined by what we refuse to use.',
      items: [
        { name: 'No Pesticides', role: 'Ducks & hens handle pests', icon: '❌' },
        { name: 'No Chemical Fertilizers', role: 'Cow dung & compost only', icon: '❌' },
        { name: 'No Artificial Anything', role: 'No hormones, no preservatives', icon: '❌' },
        { name: 'No Shortcuts', role: 'Nature takes time — we respect that', icon: '❌' },
      ],
      comparison: [
        { aspect: 'Pest Control', them: 'Chemical pesticides', us: 'Ducks & hens' },
        { aspect: 'Fertilizer', them: 'Synthetic chemicals', us: 'Cow dung & compost' },
        { aspect: 'Weed Control', them: 'Herbicides', us: 'Manual + duck grazing' },
        { aspect: 'Soil Health', them: 'Depleted over time', us: 'Richer every year' },
      ],
    },
  },
  {
    key: 'why',
    label: 'Why Organic',
    icon: '💚',
    content: {
      heading: 'Eat Food, Not Chemicals',
      desc: "Choosing organic isn't about trends — it's about choosing life over chemicals.",
      items: [
        { name: 'Better Health', role: 'Free from harmful chemicals that accumulate in your body', icon: '❤️' },
        { name: 'No Toxins', role: 'Zero pesticide residue — food that nourishes, not poisons', icon: '🛡️' },
        { name: 'Supports Soil', role: 'Builds soil health for generations, not depletes it', icon: '🌏' },
        { name: 'Future Generations', role: 'Every organic meal is a vote for your children\'s planet', icon: '👶' },
      ],
    },
  },
  {
    key: 'difference',
    label: 'Why Nimmu',
    icon: '⭐',
    content: {
      heading: 'The Nimmu Difference',
      desc: 'What makes us different from every other organic brand out there.',
      items: [
        { name: '100% Organic', role: 'Every product grown naturally — certified by nature itself', icon: '🌿' },
        { name: 'Direct from Farm', role: 'No middlemen, no warehouses — field to your doorstep', icon: '🏠' },
        { name: 'Full Transparency', role: 'Know exactly where your food comes from and how it grew', icon: '✅' },
        { name: 'Island + Ghats', role: 'Two pristine sources — river island farm & Eastern Ghats', icon: '🏝️' },
      ],
    },
  },
]

export default function OurPromise() {
  const { ref, isInView } = useScrollAnimation(0.1)
  const [activeTab, setActiveTab] = useState('ecosystem')
  const active = tabs.find(t => t.key === activeTab)

  return (
    <section id="philosophy" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-deep/3" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-10">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-3 block">Our Promise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">
            How We <span className="text-green-deep">Farm Different</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-green-deep text-white shadow-lg'
                  : 'bg-beige-light text-brown-earth hover:bg-beige-dark/40'
              }`}>
              <span className="text-base">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-brown-earth mb-2">{active.content.heading}</h3>
              <p className="text-brown-light max-w-xl mx-auto">{active.content.desc}</p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {active.content.items.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-beige-light/60 rounded-2xl p-5 text-center hover:bg-beige-light hover:shadow-md transition-all duration-300 group">
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h4 className="font-bold text-brown-earth text-sm mb-1">{item.name}</h4>
                  <p className="text-brown-light text-xs leading-relaxed">{item.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Ecosystem flow */}
            {active.content.flow && (
              <div className="bg-gradient-to-r from-green-deep/5 via-green-deep/10 to-green-deep/5 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap text-sm md:text-base font-medium text-brown-earth">
                  {active.content.flow.map((item, i) => (
                    <span key={item} className="flex items-center gap-2 md:gap-4">
                      <span className={i === active.content.flow.length - 1 ? 'text-green-deep font-bold' : ''}>{item}</span>
                      {i < active.content.flow.length - 1 && <span className="text-green-deep">→</span>}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Comparison table */}
            {active.content.comparison && (
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-beige-dark/30">
                <div className="grid grid-cols-3 bg-brown-earth text-white text-sm font-semibold">
                  <div className="p-3 md:p-4">Aspect</div>
                  <div className="p-3 md:p-4 text-center">Conventional</div>
                  <div className="p-3 md:p-4 text-center text-green-300">Nimmu Naturals</div>
                </div>
                {active.content.comparison.map((row, i) => (
                  <div key={row.aspect} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-beige-light/20' : ''}`}>
                    <div className="p-3 md:p-4 font-medium text-brown-earth">{row.aspect}</div>
                    <div className="p-3 md:p-4 text-center text-red-500/70">✗ {row.them}</div>
                    <div className="p-3 md:p-4 text-center text-green-deep">✓ {row.us}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
