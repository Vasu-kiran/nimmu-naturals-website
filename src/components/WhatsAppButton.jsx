import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ripple" />
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ripple" style={{ animationDelay: '0.5s' }} />
      <svg className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.767-6.183-2.06l-.432-.324-2.647.887.887-2.647-.324-.432A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
      </svg>
      <span className="absolute right-full mr-3 whitespace-nowrap bg-white text-brown-earth px-4 py-2 rounded-xl shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Chat with us!</span>
    </motion.a>
  )
}
