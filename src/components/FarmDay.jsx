import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

const timelineData = [
  {
    time: 'Early Morning',
    title: 'Dawn at the Farm',
    description: 'The day starts before sunrise. Cows are milked, fresh and natural. The fields glisten with morning dew as birds begin their song.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="40" r="12" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M32 24V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 32H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M48 32H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 30L19 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M45 27L42 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M8 52H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-amber-400/20 to-orange-300/20',
    borderColor: 'border-amber-400',
  },
  {
    time: 'Morning',
    title: 'Cows Grazing Freely',
    description: "Our cows roam the green pastures, feeding on natural grass. Their dung becomes the farm's best fertilizer — nature's own cycle.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <ellipse cx="32" cy="36" rx="16" ry="12" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="20" cy="28" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 24L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 24L28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="29" r="1" fill="currentColor"/>
        <path d="M16 48V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 48V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M40 48V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M48 48V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-green-400/20 to-emerald-300/20',
    borderColor: 'border-green-500',
  },
  {
    time: 'Afternoon',
    title: 'Ducks Cleaning Fields',
    description: 'Our team of ducks waddles through the rice paddies, eating pests and weeds naturally. No chemicals needed — just nature doing its work.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <ellipse cx="30" cy="38" rx="14" ry="10" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="22" cy="26" r="7" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="20" cy="25" r="1.5" fill="currentColor"/>
        <path d="M15 28L10 30L15 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 38C44 38 48 36 48 40C48 44 44 42 44 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 52H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
      </svg>
    ),
    color: 'from-blue-river/20 to-cyan-300/20',
    borderColor: 'border-blue-river',
  },
  {
    time: 'Evening',
    title: 'Harvesting with Care',
    description: 'As the golden hour arrives, we hand-pick the ripest produce. Every vegetable, every grain is harvested with love and packed with freshness.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M20 52L32 20L44 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 42H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 20C32 20 28 12 32 8C36 12 32 20 32 20Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
        <path d="M32 20C32 20 38 14 42 16C40 20 32 20 32 20Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
        <path d="M12 52H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    color: 'from-orange-400/20 to-amber-300/20',
    borderColor: 'border-orange-400',
  },
]

export default function FarmDay() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <section id="farm-day" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light relative overflow-hidden">
      {/* Background farm photo with heavy overlay */}
      <div className="absolute inset-0">
        <img src="/images/cow-grazing.jpeg" alt="" className="w-full h-full object-cover opacity-[0.15]" loading="lazy" />
      </div>
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Life at the Farm</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">
            A Day at <span className="text-green-deep">Our Farm</span>
          </h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">
            From the first light of dawn to the golden hour of harvest, every moment is a chapter in nature's story.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-deep/20 via-green-deep/40 to-green-deep/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.time}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-8 ${index > 0 ? 'md:mt-16' : ''}`}
              >
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 border-l-4 md:border-l-0 ${index % 2 === 0 ? `md:border-r-4 ${item.borderColor}` : `md:border-l-4 ${item.borderColor}`} ${item.borderColor}`}>
                    <span className="text-xs font-bold tracking-wider uppercase text-green-deep/60">{item.time}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-brown-earth mt-2 mb-3">{item.title}</h3>
                    <p className="text-brown-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} border-2 ${item.borderColor} flex items-center justify-center text-green-deep p-3 z-10 bg-white`}>
                    {item.icon}
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
