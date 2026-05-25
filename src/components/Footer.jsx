import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp } from './useScrollAnimation'
import MacawLogo from './MacawLogo'
import { WHATSAPP_URL, WHATSAPP_DISPLAY, INSTAGRAM_URL } from '../config/contact'

export default function Footer() {
  const { ref, isInView } = useScrollAnimation(0.1)
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="bg-brown-earth text-white">
      {/* Emotional closing integrated */}
      <div className="relative px-6 md:px-16 lg:px-24 py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brown-earth via-brown-light/30 to-brown-earth opacity-50" />
        <div className="relative max-w-3xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 leading-tight mb-2">This isn't just food.</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-beige leading-tight mb-2">This is what your grandparents ate.</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 leading-tight mb-8">This is what your children deserve.</p>
            <div className="w-16 h-0.5 bg-white/20 mx-auto mb-6" />
            <p className="text-white/50 italic mb-8">"Eat food, not chemicals."</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brown-earth px-7 py-3.5 rounded-full font-bold hover:bg-beige transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              Start Your Journey to Real Food
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer content */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MacawLogo size={32} variant="light" animate={false} />
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">
                  <span className="text-white">Nimmu</span><span className="text-beige"> Naturals</span>
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">100% organic island farm in Konaseema. With treasures from the Eastern Ghats. From our soil to your soul.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-beige text-sm">Quick Links</h4>
              <div className="space-y-2">
                {[{ name: 'The Island', href: '#island' }, { name: 'Products', href: '#products' }, { name: 'Gallery', href: '#gallery' }, { name: 'Contact', href: '#contact' }].map((link) => (
                  <a key={link.name} href={link.href} className="block text-white/50 hover:text-white transition-colors text-sm">{link.name}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-beige text-sm">Get in Touch</h4>
              <div className="space-y-2 text-sm text-white/50">
                <p>Konaseema District</p>
                <p>Andhra Pradesh, India</p>
                <p className="text-white/70">{WHATSAPP_DISPLAY}</p>
                <div className="flex gap-3 mt-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="WhatsApp">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.767-6.183-2.06l-.432-.324-2.647.887.887-2.647-.324-.432A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors" aria-label="Instagram">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">&copy; {currentYear} Nimmu Naturals. All rights reserved.</p>
            <p className="text-white/30 text-xs italic">From Soil to Soul &bull; Konaseema</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
