import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'

// Two 2×2 feature tiles plus eight tall tiles — packs with no gaps at 4, 3 and 2 columns.
const galleryItems = [
  { id: 5, title: 'River Godavari', desc: 'The Godavari with boats — our island in the distance.', image: '/images/godavari-river.jpg', span: 'col-span-2 row-span-2' },
  { id: 1, title: 'Wild honeycomb', desc: 'Fresh honeycomb from our coconut groves.', image: '/images/honey.jpeg', span: 'row-span-2' },
  { id: 4, title: 'Fresh turmeric harvest', desc: 'Freshly harvested organic turmeric.', image: '/images/turmeric.jpeg', span: 'row-span-2' },
  { id: 7, title: 'Ducks on the farm', desc: 'Our pest-control team, resting by the farm pond.', image: '/images/ducks-farm.jpeg', span: 'row-span-2' },
  { id: 2, title: 'A calf grazing', desc: 'Grazing freely on the island pasture.', image: '/images/farmer-with-cow.jpeg', span: 'row-span-2' },
  { id: 10, title: 'Vegetable field', desc: 'Rows of organic vegetables on our island farm.', image: '/images/vegetables.jpeg', span: 'col-span-2 row-span-2' },
  { id: 3, title: 'The farmer and his cow', desc: 'Out in the pasture on the island.', image: '/images/cow-grazing.jpeg', span: 'row-span-2' },
  { id: 9, title: 'Farm stall', desc: 'Selling direct, with no middlemen.', image: '/images/farm-stall.jpeg', span: 'row-span-2' },
  { id: 8, title: 'Nimmu Naturals honey', desc: 'Our wild honey, raw from the hive.', image: '/images/honey-jar.jpeg', span: 'row-span-2' },
  { id: 6, title: 'Eastern Ghats at sunset', desc: 'The hills where our tribal partners source.', image: '/images/eastern-ghats.webp', span: 'row-span-2' },
]

export default function Gallery() {
  const { ref, isInView } = useScrollAnimation(0.05)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (!selectedItem) return
    const onKey = (e) => e.key === 'Escape' && setSelectedItem(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedItem])

  return (
    <section id="gallery" ref={ref} className="bg-forest-deep text-ivory py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="grid lg:grid-cols-12 gap-10 items-end mb-16 md:mb-20"
        >
          <div className="lg:col-span-8">
            <Eyebrow className="text-brass-light mb-8">In pictures</Eyebrow>
            <h2 className="font-[family-name:var(--font-heading)] text-[2.6rem] md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em]">
              See the <span className="italic text-brass-light">real farm.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:pb-3 text-ivory/60 text-lg leading-relaxed">
            No stock photos. Every picture here was taken on our farm or in the Eastern Ghats.
          </p>
        </motion.div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-2 md:gap-3">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.05 * i, ease }}
              onClick={() => setSelectedItem(item)}
              className={`group relative overflow-hidden text-left ${item.span}`}
              aria-label={`Open photo: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span className="absolute left-0 bottom-0 bg-forest-deep px-4 py-2.5 text-[10px] uppercase tracking-[0.22em] text-ivory/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-forest-deep/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease }}
              className="max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full max-h-[75vh] object-contain" />
              <figcaption className="mt-6 flex items-start justify-between gap-6 text-ivory">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl">{selectedItem.title}</h3>
                  <p className="text-ivory/60 mt-2">{selectedItem.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-ivory/60 hover:text-brass-light transition-colors border-b border-current pb-1"
                >
                  Close
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
