import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const galleryItems = [
  { id: 1, title: 'Wild Honeycomb', category: 'farm', aspect: 'portrait', color: 'from-amber-200/40 to-yellow-200/40', icon: '🍯', desc: 'Fresh honeycomb from our coconut groves — raw, pure, alive', image: '/images/honey.jpeg' },
  { id: 2, title: 'Cow Grazing Free', category: 'animals', aspect: 'portrait', color: 'from-green-200/40 to-emerald-200/40', icon: '🐄', desc: 'Our cows roaming freely on the lush green island pastures', image: '/images/cow-grazing.jpeg' },
  { id: 3, title: 'The Farmer & His Cow', category: 'people', aspect: 'portrait', color: 'from-green-100/40 to-amber-100/40', icon: '👨‍🌾', desc: 'The bond between farmer and animal — this is real farming', image: '/images/farmer-with-cow.jpeg' },
  { id: 4, title: 'Fresh Turmeric Harvest', category: 'farm', aspect: 'portrait', color: 'from-yellow-200/40 to-orange-200/40', icon: '🟡', desc: 'Freshly harvested organic turmeric — vibrant, powerful, pure', image: '/images/turmeric.jpeg' },
  { id: 5, title: 'River Godavari', category: 'nature', aspect: 'landscape', color: 'from-blue-200/40 to-cyan-200/40', icon: '🌊', desc: 'The sacred Godavari river with boats — our island farm in the distance', image: '/images/godavari-river.jpg' },
  { id: 6, title: 'Eastern Ghats Sunset', category: 'nature', aspect: 'landscape', color: 'from-indigo-300/40 to-amber-200/40', icon: '⛰️', desc: 'Breathtaking sunset over the Eastern Ghats mountains — where our tribal partners source treasures', image: '/images/eastern-ghats.webp' },
  { id: 7, title: 'Ducks on the Farm', category: 'animals', aspect: 'portrait', color: 'from-teal-200/40 to-blue-200/40', icon: '🦆', desc: 'Our pest control team — ducks resting by the farm pond', image: '/images/ducks-farm.jpeg' },
  { id: 8, title: 'Nimmu Naturals Honey', category: 'farm', aspect: 'portrait', color: 'from-amber-200/40 to-yellow-100/40', icon: '🍯', desc: 'Our branded wild honey jar — pure, raw, straight from the hive', image: '/images/honey-jar.jpeg' },
  { id: 9, title: 'Farm Stall', category: 'people', aspect: 'portrait', color: 'from-pink-100/40 to-amber-100/40', icon: '🏪', desc: 'Selling our organic products directly — no middlemen, just trust', image: '/images/farm-stall.jpeg' },
  { id: 10, title: 'Organic Vegetable Field', category: 'farm', aspect: 'landscape', color: 'from-green-100/40 to-lime-100/40', icon: '🥬', desc: 'Rows of organic vegetables growing on our island farm', image: '/images/vegetables.jpeg' },
]

const categories = [
  { key: 'all', label: 'All' },
  { key: 'farm', label: 'Farm Life' },
  { key: 'animals', label: 'Our Animals' },
  { key: 'nature', label: 'Nature' },
  { key: 'people', label: 'People' },
]

export default function Gallery() {
  const { ref, isInView } = useScrollAnimation(0.05)
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Farm Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">
            See the <span className="text-green-deep">Real Farm</span>
          </h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">
            No stock photos. No filters. Just real moments from our farm and the Eastern Ghats.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-green-deep text-white shadow-lg'
                  : 'bg-beige-dark/30 text-brown-light hover:bg-beige-dark/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid - masonry-style */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`${item.aspect === 'portrait' ? 'row-span-2' : ''} cursor-pointer group`}
                onClick={() => setSelectedItem(item)}
              >
                <div className={`rounded-2xl h-full min-h-[180px] ${item.aspect === 'portrait' ? 'min-h-[380px]' : 'min-h-[180px]'} relative overflow-hidden border border-gray-100 group-hover:border-green-deep/20 group-hover:shadow-xl transition-all duration-500 ${item.image ? '' : `bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-6`}`}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  ) : (
                    <>
                      <span className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                      <p className="text-brown-earth/60 text-xs font-medium text-center">{item.title}</p>
                    </>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-green-deep/0 group-hover:bg-green-deep/70 transition-all duration-500 flex items-end rounded-2xl">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/70 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className={`${selectedItem.image ? 'h-80' : 'h-64'} flex items-center justify-center overflow-hidden ${selectedItem.image ? '' : `bg-gradient-to-br ${selectedItem.color}`}`}>
                {selectedItem.image ? (
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-8xl">{selectedItem.icon}</span>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-green-deep uppercase tracking-wider">{selectedItem.category}</span>
                <h3 className="text-2xl font-bold text-brown-earth mt-1 mb-2">{selectedItem.title}</h3>
                <p className="text-brown-light">{selectedItem.desc}</p>
                <button onClick={() => setSelectedItem(null)} className="mt-4 text-sm text-brown-light hover:text-green-deep transition-colors">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
