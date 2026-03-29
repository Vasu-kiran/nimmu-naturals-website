import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const testimonials = [
  { quote: "Tastes like food from our childhood. The rice has a fragrance I haven't experienced in decades. This is what real food tastes like.", name: 'Lakshmi Devi', location: 'Hyderabad', initials: 'LD' },
  { quote: "Finally, real organic food I can trust. I've tried many 'organic' brands, but Nimmu Naturals is the only one where I can taste the difference.", name: 'Rajesh Kumar', location: 'Visakhapatnam', initials: 'RK' },
  { quote: "My children love the vegetables. They actually ask for more! That never happened with supermarket produce. Thank you for growing real food.", name: 'Priya Sharma', location: 'Rajahmundry', initials: 'PS' },
]

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">What People Say</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Voices of <span className="text-green-deep">Trust</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div key={item.name} variants={scaleIn} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 relative">
              <svg className="absolute top-6 right-6 w-10 h-10 text-green-deep/10" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/></svg>
              <p className="text-brown-light leading-relaxed italic mb-6">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-deep/10 flex items-center justify-center"><span className="text-green-deep font-bold text-sm">{item.initials}</span></div>
                <div><p className="font-semibold text-brown-earth">{item.name}</p><p className="text-brown-light text-sm">{item.location}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
