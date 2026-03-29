import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const experiences = [
  { title: 'Walk the Fields', desc: 'Feel the soil beneath your feet, see the paddy swaying in the breeze, and understand how nature does the work.', icon: '👣', time: 'Morning' },
  { title: 'Meet the Animals', desc: 'Feed the cows, watch the ducks patrol the paddies, collect eggs from the hens — feel the farm come alive.', icon: '🐄', time: 'Morning' },
  { title: 'Farm-Fresh Meal', desc: 'Eat a meal cooked entirely from what was harvested that morning. You\'ll taste the difference instantly.', icon: '🍛', time: 'Afternoon' },
  { title: 'River Boat Ride', desc: 'Experience the Godavari up close. See our island farm from the water and understand why this location is magical.', icon: '🛶', time: 'Afternoon' },
  { title: 'Harvest Together', desc: 'Roll up your sleeves and harvest seasonal produce with us. Take home what you pick — straight from field to bag.', icon: '🌾', time: 'Evening' },
  { title: 'Sunset Stories', desc: 'End the day with tea, snacks, and stories under the trees. Learn the old farming ways from people who live them.', icon: '🌅', time: 'Evening' },
]

export default function VisitFarm() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige to-beige-light" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-deep/5 rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-river/5 rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Invitation */}
            <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }}
              className="lg:col-span-2 lg:sticky lg:top-28">
              <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Experience It Yourself</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth leading-tight mb-6">
                Come Visit
                <br /><span className="text-green-deep">Our Farm</span>
              </h2>
              <p className="text-brown-light text-lg leading-relaxed mb-6">
                We don't just want you to buy our food — we want you to <strong className="text-brown-earth">see where it grows</strong>. Walk our fields. Meet our animals. Taste the difference with your own senses.
              </p>
              <p className="text-brown-light leading-relaxed mb-8">
                We host small groups for farm day experiences. No fancy resorts — just real farm life, real food, and real conversations with the people who grow it.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <h4 className="font-bold text-brown-earth mb-3">Plan Your Visit</h4>
                <div className="space-y-2 text-sm text-brown-light">
                  <div className="flex items-center gap-2">
                    <span className="text-green-deep">📍</span> Gudapalli, Konaseema, AP
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-deep">👥</span> Small groups (2–10 people)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-deep">🕐</span> Full day experience
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-deep">🍽️</span> Farm lunch included
                  </div>
                </div>
              </div>

              <a href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20would%20like%20to%20visit%20the%20farm" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-deep text-white px-6 py-3 rounded-full font-semibold hover:bg-green-light transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                Book a Farm Visit
              </a>
            </motion.div>

            {/* Right: Experience cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-brown-light bg-beige-dark/30 px-2 py-1 rounded-full">{item.time}</span>
                  </div>
                  <h3 className="font-bold text-brown-earth text-lg mb-2">{item.title}</h3>
                  <p className="text-brown-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
