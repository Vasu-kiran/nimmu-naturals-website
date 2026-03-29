import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

const faqs = [
  { q: 'Is your food really 100% organic?', a: 'Yes, absolutely. We use no pesticides, no chemical fertilizers, and no artificial growth enhancers. Our farming relies entirely on natural methods — cow dung fertilizer, duck-based pest control, and composting.' },
  { q: 'How do you handle pest control without chemicals?', a: "Our ducks eat pests in the rice paddies, our hens control insects around the farm, and we use neem-based natural sprays for additional protection. Nature has its own pest control system — we just work with it." },
  { q: 'Where exactly is the farm located?', a: 'Our farm is in Gudapalli, Konaseema District, Andhra Pradesh — a beautiful region surrounded by the Godavari River. The river delta provides some of the richest, most fertile soil in India.' },
  { q: 'How do I place an order?', a: "Simply message us on WhatsApp! We'll share what's currently available (it depends on the season), you select what you want, and we harvest it fresh for you. No apps, no complicated process — just a direct conversation." },
  { q: 'Do you deliver outside Andhra Pradesh and Telangana?', a: "Currently we primarily deliver in AP and Telangana. For other locations, reach out to us — we're always exploring ways to bring our food to more families." },
  { q: 'Why does organic food cost more?', a: "Organic farming requires more labor, more time, and more care. We don't take shortcuts. But the real question is — what's the cost of eating chemicals every day? Investing in organic food is investing in your health." },
]

function FAQItem({ item, isOpen, toggle }) {
  return (
    <div className="border-b border-beige-dark/50 last:border-0">
      <button onClick={toggle} className="w-full py-6 flex items-center justify-between text-left group">
        <span className="text-lg font-medium text-brown-earth group-hover:text-green-deep transition-colors pr-4">{item.q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-green-deep text-white rotate-45' : 'bg-green-deep/10 text-green-deep'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" /></svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-6 text-brown-light leading-relaxed pr-12">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { ref, isInView } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Common Questions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Frequently <span className="text-green-deep">Asked</span></h2>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-3xl px-6 md:px-10 shadow-sm">
          {faqs.map((item, index) => (
            <FAQItem key={index} item={item} isOpen={openIndex === index} toggle={() => setOpenIndex(openIndex === index ? -1 : index)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
