import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

export default function SoilToSoul() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="relative px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-deep via-green-light to-green-deep" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M20 0C20 0 30 8 30 20C30 28 25 35 20 38C15 35 10 28 10 20C10 8 20 0 20 0Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 1 }}>
          <span className="text-white/60 text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">From Soil to Soul</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Every seed carries a promise —<br /><span className="text-beige">not to the market, but to you.</span>
          </h2>
          <div className="w-20 h-0.5 bg-white/30 mx-auto mb-8" />
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            When soil is healthy, the food is pure. When the food is pure, the body heals. When the body heals, the soul is at peace. That's our journey — from soil to soul.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {['Healthy Soil', 'Pure Food', 'Happy Body', 'Peaceful Soul'].map((item, i) => (
              <motion.div key={item} variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                <span className="text-white font-medium">{item}</span>
                {i < 3 && <svg className="w-5 h-5 text-white/40 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
