import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, scaleIn } from './useScrollAnimation'

const islandFeatures = [
  { title: 'Natural Isolation', desc: 'Surrounded by the Godavari, our land is naturally shielded from chemical runoff of neighbouring farms.', icon: '🏝️' },
  { title: 'Fertile Delta Soil', desc: 'River sediment creates the richest alluvial soil — no artificial fertilizers could ever match nature\'s gift.', icon: '🌊' },
  { title: 'Unique Microclimate', desc: 'The river keeps temperatures mild and humidity perfect — ideal conditions for organic growth year-round.', icon: '🌤️' },
  { title: 'Pure Water Source', desc: 'Our crops drink straight from the Godavari — the same sacred river that has nourished this land for millennia.', icon: '💧' },
]

export default function RiverIsland() {
  const { ref, isInView } = useScrollAnimation(0.1)

  return (
    <section id="island" ref={ref} className="relative overflow-hidden">
      {/* Full-width immersive island section */}
      <div className="relative py-24 md:py-32 lg:py-40">
        {/* Background: river blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-river-dark/90 via-blue-river/70 to-blue-river-dark/90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10C25 0 25 20 50 10C75 0 75 20 100 10' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundSize: '100px 20px' }} />

        {/* Wave top */}
        <div className="absolute top-0 left-0 right-0 -translate-y-[98%]">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80V40C120 60 240 20 360 30C480 40 600 70 720 60C840 50 960 20 1080 30C1200 40 1320 60 1440 50V80H0Z" fill="#0288D1" fillOpacity="0.9"/></svg>
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[98%]">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 0V40C120 20 240 60 360 50C480 40 600 10 720 20C840 30 960 60 1080 50C1200 40 1320 20 1440 30V0H0Z" fill="#0288D1" fillOpacity="0.9"/></svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
          {/* Header */}
          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
            <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.6, type: 'spring' }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-4xl">🏝️</span>
            </motion.div>
            <span className="text-blue-200 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">Our Unique Location</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              A Farm Like No Other —
              <br /><span className="text-blue-200">An Island in the Godavari</span>
            </h2>
            <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Imagine an organic farm completely surrounded by the sacred River Godavari — naturally isolated from the chemical world, nourished by the purest water, blessed with the richest delta soil.
            </p>
          </motion.div>

          {/* Large island illustration */}
          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 1, delay: 0.2 }} className="relative max-w-4xl mx-auto mb-16">
            <svg viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
              {/* Outer water ripples */}
              <ellipse cx="450" cy="350" rx="430" ry="130" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="12 8"/>
              <ellipse cx="450" cy="360" rx="410" ry="120" stroke="white" strokeWidth="0.8" opacity="0.1" strokeDasharray="12 8"/>
              <ellipse cx="450" cy="370" rx="440" ry="110" stroke="white" strokeWidth="0.8" opacity="0.08" strokeDasharray="12 8"/>

              {/* Main water body */}
              <ellipse cx="450" cy="340" rx="400" ry="120" fill="white" opacity="0.08"/>
              <ellipse cx="450" cy="330" rx="370" ry="100" fill="white" opacity="0.1"/>

              {/* Island land mass */}
              <ellipse cx="450" cy="290" rx="250" ry="70" fill="#5D4037" opacity="0.5"/>
              <ellipse cx="450" cy="280" rx="230" ry="60" fill="#8BC34A" opacity="0.5"/>
              <ellipse cx="450" cy="275" rx="210" ry="50" fill="#4CAF50" opacity="0.6"/>
              <ellipse cx="450" cy="272" rx="190" ry="42" fill="#66BB6A" opacity="0.4"/>

              {/* Paddy fields pattern */}
              <ellipse cx="380" cy="270" rx="40" ry="15" stroke="#2E7D32" strokeWidth="1" opacity="0.4" fill="#4CAF50" fillOpacity="0.2"/>
              <ellipse cx="450" cy="260" rx="35" ry="12" stroke="#2E7D32" strokeWidth="1" opacity="0.4" fill="#4CAF50" fillOpacity="0.2"/>
              <ellipse cx="520" cy="270" rx="38" ry="14" stroke="#2E7D32" strokeWidth="1" opacity="0.4" fill="#4CAF50" fillOpacity="0.2"/>

              {/* Trees - coconut style */}
              {[340, 390, 450, 510, 560].map((x, i) => (
                <g key={i} transform={`translate(${x}, ${190 + (i % 2) * 20})`}>
                  <rect x="3" y="25" width="4" height={28 - i * 2} fill="#5D4037" opacity="0.7"/>
                  <path d={`M5 0C5 0 ${-6 + i} 18 0 ${30 + i * 2}C3 ${30 + i * 2} 7 ${30 + i * 2} 10 ${30 + i * 2}C${16 - i} 18 5 0 5 0Z`} fill={i % 2 === 0 ? '#1B5E20' : '#2E7D32'} opacity="0.8"/>
                </g>
              ))}

              {/* Farmhouse */}
              <g transform="translate(420, 230)">
                <rect x="5" y="18" width="40" height="25" fill="#795548" opacity="0.6" rx="2"/>
                <path d="M0 18L25 0L50 18" fill="#5D4037" opacity="0.7"/>
                <rect x="18" y="26" width="10" height="17" fill="#FFE082" opacity="0.6" rx="1"/>
                <rect x="35" y="26" width="6" height="6" fill="#FFE082" opacity="0.4" rx="1"/>
              </g>

              {/* Cows */}
              <g transform="translate(320, 250)">
                <ellipse cx="12" cy="5" rx="12" ry="7" fill="white" opacity="0.6"/>
                <circle cx="4" cy="0" r="4" fill="white" opacity="0.6"/>
              </g>
              <g transform="translate(340, 258)">
                <ellipse cx="10" cy="4" rx="10" ry="6" fill="white" opacity="0.5"/>
                <circle cx="2" cy="0" r="3.5" fill="white" opacity="0.5"/>
              </g>

              {/* Ducks in water */}
              {[280, 310, 600, 625].map((x, i) => (
                <g key={`duck-${i}`} transform={`translate(${x}, ${310 + (i % 2) * 8})`}>
                  <ellipse cx="6" cy="3" rx="6" ry="4" fill="white" opacity="0.45"/>
                  <circle cx="1" cy="0" r="3" fill="white" opacity="0.45"/>
                </g>
              ))}

              {/* Nimmu Naturals label */}
              <g>
                <rect x="375" y="310" width="150" height="28" rx="14" fill="white" opacity="0.2"/>
                <text x="450" y="329" fill="white" fontSize="14" fontFamily="Poppins" fontWeight="700" textAnchor="middle" opacity="0.9">Nimmu Naturals</text>
              </g>

              {/* River labels */}
              <text x="100" y="360" fill="white" fontSize="16" fontFamily="Inter" opacity="0.4" fontStyle="italic">~ River Godavari ~</text>
              <text x="650" y="360" fill="white" fontSize="16" fontFamily="Inter" opacity="0.4" fontStyle="italic">~ River Godavari ~</text>

              {/* Flow arrows */}
              <path d="M80 320C100 315 120 325 140 318" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round"/>
              <path d="M760 325C780 320 800 328 820 322" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round"/>

              {/* Small fish */}
              <path d="M150 340C153 337 160 337 163 340C160 343 153 343 150 340Z" fill="white" opacity="0.15"/>
              <path d="M720 345C723 342 730 342 733 345C730 348 723 348 720 345Z" fill="white" opacity="0.15"/>
            </svg>
          </motion.div>

          {/* Quote */}
          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light italic leading-snug max-w-3xl mx-auto">
              "Where the river wraps around the land like a mother's embrace —
              <span className="text-blue-200 font-medium"> that's where your food grows.</span>"
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {islandFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:bg-white/18 hover:border-white/25 transition-all duration-500 group hover:-translate-y-1"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
