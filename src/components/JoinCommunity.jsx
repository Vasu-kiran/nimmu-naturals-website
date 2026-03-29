import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

export default function JoinCommunity() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-16 md:py-20 bg-gradient-to-r from-green-deep to-green-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-4xl mx-auto relative">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Join Our Farm Family
            </h3>
            <p className="text-white/80 leading-relaxed">
              Get weekly harvest updates, seasonal recipes, farm stories, and first access to fresh produce. Join our WhatsApp community — it's like having a farmer friend.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start text-white/60 text-sm">
              <span className="flex items-center gap-1">📱 Weekly updates</span>
              <span className="flex items-center gap-1">🌾 Harvest alerts</span>
              <span className="flex items-center gap-1">🍳 Farm recipes</span>
              <span className="flex items-center gap-1">📸 Farm stories</span>
            </div>
          </div>
          <div className="shrink-0">
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20join%20the%20Nimmu%20Naturals%20community" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-deep px-8 py-4 rounded-full font-bold text-lg hover:bg-beige hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
