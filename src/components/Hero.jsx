import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animate-slow-zoom">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 25%, #1B5E20 50%, #33691E 75%, #1B5E20 100%)' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>
      <div className="absolute inset-0 bg-black/30" />

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
            Island Farm on River Godavari &bull; Gudapalli, Konaseema
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          This Farm is Alive.
          <br />
          <span className="text-beige">And So is Your Food.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-4 leading-relaxed">
          An organic island farm surrounded by the sacred River Godavari.
          <br className="hidden md:block" />
          With treasures from the Eastern Ghats — pure, untouched, alive.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.85 }} className="flex items-center justify-center gap-6 mb-10 text-white/60 text-xs md:text-sm">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-river" viewBox="0 0 24 24" fill="currentColor" opacity="0.8"><circle cx="12" cy="12" r="10"/></svg>
            River Island Farm
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-soft" viewBox="0 0 24 24" fill="currentColor" opacity="0.8"><path d="M12 2C12 2 20 8 20 16C20 20 16 22 12 22C8 22 4 20 4 16C4 8 12 2 12 2Z"/></svg>
            Eastern Ghats Sourced
          </span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor" opacity="0.8"><path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"/></svg>
            100% Organic
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#island" className="bg-white text-green-deep px-8 py-4 rounded-full font-semibold text-lg hover:bg-beige transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            Discover Our Island
          </a>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
            Contact on WhatsApp
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-24 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-white/60">
              <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="2"/>
              <motion.circle animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} cx="10" cy="10" r="3" fill="currentColor"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
