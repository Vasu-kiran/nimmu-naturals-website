import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

const testimonials = [
  { quote: "Tastes like food from our childhood. The rice has a fragrance I haven't experienced in decades.", name: 'Lakshmi Devi', location: 'Hyderabad', initials: 'LD' },
  { quote: "Finally, real organic food I can trust. Nimmu Naturals is the only brand where I can taste the difference.", name: 'Rajesh Kumar', location: 'Visakhapatnam', initials: 'RK' },
  { quote: "My children actually ask for more vegetables! That never happened with supermarket produce.", name: 'Priya Sharma', location: 'Rajahmundry', initials: 'PS' },
  { quote: "The wild honey from Eastern Ghats is unlike anything I've tasted. Pure liquid gold.", name: 'Anand Reddy', location: 'Vijayawada', initials: 'AR' },
  { quote: "We visited the farm and saw it ourselves. These people truly live what they preach.", name: 'Swathi Menon', location: 'Hyderabad', initials: 'SM' },
]

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation()
  const [active, setActive] = useState(0)

  const next = () => setActive((active + 1) % testimonials.length)
  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length)

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-gradient-to-br from-green-deep via-green-light to-green-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-3xl mx-auto relative">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-10">
          <span className="text-white/60 text-sm font-semibold tracking-wider uppercase mb-3 block">What People Say</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Voices of <span className="text-beige">Trust</span></h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/15 text-center">
              <svg className="w-10 h-10 text-white/15 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
              </svg>
              <p className="text-white text-lg md:text-xl leading-relaxed italic mb-8">"{testimonials[active].quote}"</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonials[active].initials}</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{testimonials[active].name}</p>
                  <p className="text-white/60 text-sm">{testimonials[active].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors" aria-label="Previous">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors" aria-label="Next">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
