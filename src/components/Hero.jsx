import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../config/contact'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with real vegetable field photo */}
      <div className="absolute inset-0 animate-slow-zoom">
        <img src="/images/vegetables.jpeg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-deep/80 via-green-deep/60 to-green-deep/80" />
      </div>
      <div className="absolute inset-0 bg-black/25" />

      {/* River water animation at sides */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-blue-river/15 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-blue-river/15 to-transparent" />
      </div>

      {/* Floating leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="leaf-float-1 absolute top-[15%] left-[10%]" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 10 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 10 20 2 20 2Z" fill="#4CAF50" opacity="0.5"/>
          <path d="M20 5V35" stroke="#2E7D32" strokeWidth="1" opacity="0.4"/>
        </svg>
        <svg className="leaf-float-2 absolute top-[30%] right-[15%]" width="35" height="35" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 10 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 10 20 2 20 2Z" fill="#81C784" opacity="0.4"/>
          <path d="M20 5V35" stroke="#2E7D32" strokeWidth="1" opacity="0.3"/>
        </svg>
        <svg className="leaf-float-3 absolute bottom-[25%] left-[20%]" width="30" height="30" viewBox="0 0 40 40" fill="none">
          <path d="M20 2C20 2 35 10 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 10 20 2 20 2Z" fill="#A5D6A7" opacity="0.45"/>
        </svg>
        <svg className="leaf-float-1 absolute top-[60%] right-[8%]" width="28" height="28" viewBox="0 0 40 40" fill="none" style={{ animationDelay: '3s' }}>
          <path d="M20 2C20 2 35 10 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 10 20 2 20 2Z" fill="#66BB6A" opacity="0.35"/>
        </svg>
        <svg className="leaf-float-2 absolute bottom-[15%] right-[30%]" width="32" height="32" viewBox="0 0 40 40" fill="none" style={{ animationDelay: '5s' }}>
          <path d="M20 2C20 2 35 10 35 25C35 32 28 38 20 38C12 38 5 32 5 25C5 10 20 2 20 2Z" fill="#4CAF50" opacity="0.3"/>
        </svg>
      </div>

      {/* River wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="#FAFAF0"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-xs md:text-sm font-medium px-5 py-2.5 rounded-full border border-white/20 tracking-wider uppercase">
            <svg className="w-4 h-4 text-blue-river" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 19c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/></svg>
            Island Farm on River Godavari &bull; Konaseema
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          This Farm is Alive.
          <br />
          <span className="text-beige">And So is Your Food.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-6 leading-relaxed">
          A <span className="text-beige font-semibold">100% organic</span> island farm on the sacred Godavari.
          <br className="hidden md:block" />
          Free from synthetic chemicals and pesticides — just real food, grown the natural way.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85 }} className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-green-500/20 backdrop-blur-sm border border-green-300/40 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            100% Organic
          </span>
          <span className="inline-flex items-center gap-1.5 bg-red-500/20 backdrop-blur-sm border border-red-300/40 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-red-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
            No Synthetic Chemicals
          </span>
          <span className="inline-flex items-center gap-1.5 bg-red-500/20 backdrop-blur-sm border border-red-300/40 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-red-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
            No Synthetic Pesticides
          </span>
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 backdrop-blur-sm border border-amber-300/40 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"/></svg>
            Lab Tested
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#island" className="bg-white text-green-deep px-8 py-4 rounded-full font-semibold text-lg hover:bg-beige transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            Discover Our Island
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
            Contact on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  )
}
