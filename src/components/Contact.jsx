import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'

export default function Contact() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="contact" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth">Talk Directly to <span className="text-green-deep">the Farmer</span></h2>
          <p className="text-brown-light mt-4 text-lg max-w-2xl mx-auto">No call center, no automated replies. Just real people who grow your food.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-center text-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.767-6.183-2.06l-.432-.324-2.647.887.887-2.647-.324-.432A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-white/80 text-sm">Chat with us directly</p>
            <p className="text-white font-semibold mt-2">+91 XXXXX XXXXX</p>
          </motion.a>

          <motion.a href="tel:+91XXXXXXXXXX" variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-brown-earth rounded-2xl p-8 text-center text-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-white/80 text-sm">We love talking to you</p>
            <p className="text-white font-semibold mt-2">+91 XXXXX XXXXX</p>
          </motion.a>

          <motion.a href="https://instagram.com/nimmunaturals" target="_blank" rel="noopener noreferrer" variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl p-8 text-center text-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-white/80 text-sm">See our farm life</p>
            <p className="text-white font-semibold mt-2">@nimmunaturals</p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
