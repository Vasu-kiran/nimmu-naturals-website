import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

export default function Delivery() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Delivery Coverage</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">We Deliver <span className="text-green-deep">To You</span></h2>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <svg viewBox="0 0 400 350" fill="none" className="w-full max-w-sm mx-auto">
                <path d="M100 50C120 40 180 30 220 40C260 50 300 70 320 100C340 130 350 170 340 210C330 250 300 280 260 300C220 320 170 330 130 310C90 290 60 260 50 220C40 180 50 130 60 100C70 70 80 60 100 50Z" fill="#1B5E20" opacity="0.08" stroke="#1B5E20" strokeWidth="2" strokeOpacity="0.3"/>
                <path d="M150 120C170 100 230 90 270 110C290 130 300 170 290 210C280 240 250 260 220 270C190 280 160 270 140 250C120 230 120 190 130 160C135 140 140 130 150 120Z" fill="#1B5E20" opacity="0.15"/>
                <path d="M120 60C150 45 200 40 240 55C260 70 270 100 260 120C240 110 200 105 170 110C140 115 125 80 120 60Z" fill="#4FC3F7" opacity="0.15"/>
                <circle cx="260" cy="180" r="8" fill="#1B5E20"/>
                <circle cx="260" cy="180" r="14" stroke="#1B5E20" strokeWidth="2" opacity="0.3" className="animate-ripple" style={{ transformOrigin: '260px 180px' }}/>
                <text x="210" y="200" fill="#1B5E20" fontSize="11" fontWeight="600" fontFamily="Inter">Gudapalli</text>
                <text x="170" y="220" fill="#1B5E20" fontSize="14" fontWeight="700" fontFamily="Poppins" opacity="0.6">Andhra Pradesh</text>
                <text x="140" y="80" fill="#0288D1" fontSize="14" fontWeight="700" fontFamily="Poppins" opacity="0.6">Telangana</text>
                <path d="M230 150C240 160 255 165 260 175C265 185 270 200 280 210" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" opacity="0.5" strokeDasharray="4 4"/>
                <text x="275" y="225" fill="#4FC3F7" fontSize="9" fontFamily="Inter" opacity="0.7" fontStyle="italic">Godavari</text>
              </svg>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-green-deep/5 rounded-xl">
                <div className="w-10 h-10 shrink-0 rounded-full bg-green-deep/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div><h3 className="font-bold text-brown-earth text-lg">Andhra Pradesh</h3><p className="text-brown-light text-sm">All major cities including Visakhapatnam, Vijayawada, Rajahmundry, Kakinada & more</p></div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-river/5 rounded-xl">
                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-river/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-river-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div><h3 className="font-bold text-brown-earth text-lg">Telangana</h3><p className="text-brown-light text-sm">Hyderabad, Secunderabad, Warangal & surrounding areas</p></div>
              </div>
              <div className="p-4 bg-beige/50 rounded-xl">
                <p className="text-brown-light text-sm"><strong className="text-brown-earth">Other locations?</strong> Reach out on WhatsApp — we'll find a way to get our food to you.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
