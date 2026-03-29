import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

export default function EmotionalClosing() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="relative px-6 md:px-16 lg:px-24 py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-earth via-brown-light to-brown-earth" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-3xl mx-auto relative text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 1 }}>
          <div className="space-y-4 mb-10">
            <motion.p variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">This isn't just food.</motion.p>
            <motion.p variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.5 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-beige leading-tight">This is what your grandparents ate.</motion.p>
            <motion.p variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.8 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">This is what your children deserve.</motion.p>
          </div>

          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 1.1 }}>
            <div className="w-20 h-0.5 bg-white/20 mx-auto mb-8" />
            <p className="text-white/70 text-lg mb-10 italic">"Eat food, not chemicals."</p>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brown-earth px-8 py-4 rounded-full font-semibold text-lg hover:bg-beige transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.767-6.183-2.06l-.432-.324-2.647.887.887-2.647-.324-.432A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Start Your Journey to Real Food
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
