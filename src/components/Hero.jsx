import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../config/contact'
import { ease } from './useScrollAnimation'

export default function Hero() {
  return (
    <section id="hero" className="relative bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-ink/50 mb-6">
              Konaseema, Andhra Pradesh
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-ink text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] font-medium">
              Organic food,
              <br />
              grown on a
              <br />
              <span className="italic text-green-deep">river island.</span>
            </h1>
            <p className="mt-8 max-w-xl text-ink/70 text-lg leading-relaxed">
              Nimmu Naturals farms a fully organic island on the river Godavari —
              no synthetic chemicals, no pesticides. Real food, harvested by hand
              and sent straight to your home.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#products"
                className="inline-flex items-center bg-ink text-paper px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-green-deep transition-colors duration-300"
              >
                See what we grow
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-green-deep hover:text-green-deep transition-colors duration-300"
              >
                Message the farmer
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden">
              <img
                src="/images/farmer-with-cow.jpeg"
                alt="A farmer with his cow on the Nimmu Naturals island farm"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-ink/45 tracking-wide">
              Our farm at Gudapalli, on the Godavari delta
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
