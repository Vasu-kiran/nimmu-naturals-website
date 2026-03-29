import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

function AnimatedCounter({ target, suffix = '', isInView }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const numTarget = parseInt(target) || 0
    if (numTarget === 0) { setCount(0); return }

    const duration = 2000
    const steps = 60
    const increment = numTarget / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numTarget) {
        setCount(numTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <>{count}{suffix}</>
}

export default function OurStory() {
  const { ref, isInView } = useScrollAnimation()

  const stats = [
    { number: 100, suffix: '%', label: 'Organic', icon: '🌿' },
    { number: 0, suffix: '', label: 'Chemicals Used', icon: '🚫' },
    { number: 365, suffix: '', label: 'Days of Care', icon: '☀️' },
    { number: 500, suffix: '+', label: 'Families Served', icon: '👨‍👩‍👧‍👦' },
  ]

  return (
    <section id="story" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-deep/3 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brown-earth/3 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Our Story</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth leading-tight">
            A Story Written in <span className="text-green-deep">Soil</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.p variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-brown-earth/80 text-center leading-relaxed italic font-light">
            "In a village most maps forget, there is a piece of land surrounded by river, that has never seen chemical fertilizers."
          </motion.p>

          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.3 }} className="w-16 h-0.5 bg-green-deep/30 mx-auto" />

          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-6 text-brown-light text-lg leading-relaxed">
            <p>Gudapalli sits quietly in the heart of Konaseema, where the Godavari River splits into countless streams, creating islands of the richest alluvial soil in India. On one such island, <strong className="text-brown-earth">Nimmu Naturals was born</strong> — not in a boardroom, but in a field.</p>
            <p>It started with a simple question: <strong className="text-brown-earth">Why does our food no longer taste the way it did when we were children?</strong> The answer was heartbreaking — chemicals, pesticides, artificial everything. Food had become a product, not a gift from nature.</p>
            <p>So we went back. Back to the old ways. Back to listening to the land instead of forcing it. We let the cows roam free, invited the ducks back to the fields, planted seeds with patience, and began sourcing treasures from the ancient <strong className="text-brown-earth">Eastern Ghats</strong> through tribal partners who've farmed sustainably for centuries.</p>
            <p>Today, every grain, every vegetable, every drop of honey from Nimmu Naturals carries the promise of that first decision: <strong className="text-brown-earth">to grow food that heals, not harms.</strong></p>
          </motion.div>
        </div>

        {/* Animated stats */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-beige-light/50 rounded-2xl hover:bg-beige-light hover:shadow-md transition-all duration-500 group">
              <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
              <div className="text-3xl md:text-4xl font-bold text-green-deep mb-1">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-brown-light text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
