import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from './useScrollAnimation'

function AnimatedCounter({ target, suffix = '', isInView }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)
  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true
    const numTarget = parseInt(target) || 0
    if (numTarget === 0) { setCount(0); return }
    const steps = 60
    const increment = numTarget / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numTarget) { setCount(numTarget); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [isInView, target])
  return <>{count}{suffix}</>
}

export default function OurStory() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <section id="story" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-deep/3 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brown-earth/3 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative">
        {/* Farmer + Story combined */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-16">
          {/* Farmer image */}
          <motion.div variants={fadeInLeft} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="lg:col-span-2">
            <div className="relative">
              <div className="rounded-3xl aspect-[4/5] overflow-hidden shadow-xl">
                <img
                  src="/images/farmer-with-cow.jpeg"
                  alt="Nimmu Naturals farmer with cow on the island farm"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-green-deep/10 rounded-full -z-10" />
              <div className="absolute -top-3 -left-3 w-14 h-14 bg-brown-earth/10 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Story text */}
          <motion.div variants={fadeInRight} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3">
            <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-3 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth leading-tight mb-5">
              A Story Written <span className="text-green-deep">in Soil</span>
            </h2>
            <p className="text-xl text-brown-earth/70 italic font-light mb-6 border-l-4 border-green-deep/20 pl-5">
              "In a village most maps forget, there is a piece of land surrounded by river, that has never seen chemical fertilizers."
            </p>
            <div className="space-y-4 text-brown-light leading-relaxed">
              <p>Gudapalli sits in the heart of Konaseema, where the Godavari River creates islands of the richest alluvial soil in India. On one such island, <strong className="text-brown-earth">Nimmu Naturals was born</strong> — not in a boardroom, but in a field.</p>
              <p>It started with a question: <strong className="text-brown-earth">Why does food no longer taste like our childhood?</strong> The answer was chemicals. So we went back to the old ways — cows roam free, ducks patrol the paddies, and our tribal partners in the <strong className="text-brown-earth">Eastern Ghats</strong> farm the way they have for centuries.</p>
              <p>Every grain, every drop of honey carries one promise: <strong className="text-brown-earth">to grow food that heals, not harms.</strong></p>
            </div>
          </motion.div>
        </div>

        {/* Animated stats strip */}
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: 100, suffix: '%', label: 'Organic', icon: '🌿' },
            { number: 0, suffix: '', label: 'Chemicals Used', icon: '🚫' },
            { number: 365, suffix: '', label: 'Days of Care', icon: '☀️' },
            { number: 500, suffix: '+', label: 'Families Served', icon: '👨‍👩‍👧‍👦' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 bg-beige-light/50 rounded-2xl hover:bg-beige-light hover:shadow-sm transition-all duration-300 group">
              <span className="text-xl mb-1 block group-hover:scale-110 transition-transform">{stat.icon}</span>
              <div className="text-2xl md:text-3xl font-bold text-green-deep"><AnimatedCounter target={stat.number} suffix={stat.suffix} isInView={isInView} /></div>
              <div className="text-brown-light text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
