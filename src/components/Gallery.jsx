import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'

const galleryItems = [
  { id: 1, title: 'Wild Honeycomb', category: 'farm', aspect: 'portrait', desc: 'Fresh honeycomb from our coconut groves — raw, pure, alive.', image: '/images/honey.jpeg' },
  { id: 2, title: 'Cow Grazing Free', category: 'animals', aspect: 'portrait', desc: 'Our cows roaming the lush green island pastures.', image: '/images/cow-grazing.jpeg' },
  { id: 3, title: 'The Farmer & His Cow', category: 'people', aspect: 'portrait', desc: 'The bond between farmer and animal — this is real farming.', image: '/images/farmer-with-cow.jpeg' },
  { id: 4, title: 'Fresh Turmeric Harvest', category: 'farm', aspect: 'portrait', desc: 'Freshly harvested organic turmeric — vibrant and pure.', image: '/images/turmeric.jpeg' },
  { id: 5, title: 'River Godavari', category: 'nature', aspect: 'landscape', desc: 'The sacred Godavari with boats — our island in the distance.', image: '/images/godavari-river.jpg' },
  { id: 6, title: 'Eastern Ghats Sunset', category: 'nature', aspect: 'landscape', desc: 'Sunset over the Eastern Ghats, where our tribal partners source.', image: '/images/eastern-ghats.webp' },
  { id: 7, title: 'Ducks on the Farm', category: 'animals', aspect: 'portrait', desc: 'Our pest-control team, resting by the farm pond.', image: '/images/ducks-farm.jpeg' },
  { id: 8, title: 'Nimmu Naturals Honey', category: 'farm', aspect: 'portrait', desc: 'Our wild honey — pure, raw, straight from the hive.', image: '/images/honey-jar.jpeg' },
  { id: 9, title: 'Farm Stall', category: 'people', aspect: 'portrait', desc: 'Selling direct — no middlemen, just trust.', image: '/images/farm-stall.jpeg' },
  { id: 10, title: 'Organic Vegetable Field', category: 'farm', aspect: 'landscape', desc: 'Rows of organic vegetables on our island farm.', image: '/images/vegetables.jpeg' },
]

const categories = [
  { key: 'all', label: 'All' },
  { key: 'farm', label: 'Farm Life' },
  { key: 'animals', label: 'Animals' },
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
    <section id="gallery" ref={ref} className="bg-paper px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="grid lg:grid-cols-12 gap-8 items-end mb-12 md:mb-16"
        >
          <div className="lg:col-span-8">
            <Eyebrow className="text-green-deep/70 mb-5">03 — In pictures</Eyebrow>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] font-medium">
              See the real farm.
            </h2>
          </div>
          <p className="lg:col-span-4 text-ink/65 leading-relaxed">
            No stock photos. No filters. Just real moments from our farm and the Eastern Ghats.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-x-7 gap-y-2 border-b border-ink/12 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`pb-4 -mb-px text-sm tracking-wide border-b-2 transition-colors duration-200 ${
                activeCategory === cat.key ? 'border-ink text-ink' : 'border-transparent text-ink/45 hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/5] overflow-hidden text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute left-4 bottom-4 right-4 text-paper text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {item.title}
                </p>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/90 flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease }}
              className="bg-paper max-w-lg w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-80 object-cover" />
              <div className="p-7">
                <span className="text-[11px] font-semibold text-green-deep uppercase tracking-[0.2em]">{selectedItem.category}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-ink mt-2 mb-2 font-medium">{selectedItem.title}</h3>
                <p className="text-ink/65 leading-relaxed">{selectedItem.desc}</p>
                <button onClick={() => setSelectedItem(null)} className="mt-5 text-sm text-ink/50 hover:text-green-deep transition-colors">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
