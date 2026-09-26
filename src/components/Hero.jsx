import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '../config/contact'
import { ease } from './useScrollAnimation'

export default function Hero() {
  return (
    <section id="hero" className="relative bg-forest text-ivory">
      <div className="grid lg:grid-cols-12 lg:min-h-[100svh]">
        {/* Text — left edge lines up with the max-w-7xl container used below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="lg:col-span-7 flex flex-col justify-end px-6 md:px-10 lg:pl-[max(2.5rem,calc((100vw_-_80rem)/2_+_2.5rem))] lg:pr-16 pt-36 md:pt-44 pb-14 lg:pb-24"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass-light mb-8">
            Gudapalli &nbsp;·&nbsp; Konaseema &nbsp;·&nbsp; Andhra Pradesh
          </p>
          <h1 className="font-[family-name:var(--font-heading)] font-light text-[3.1rem] sm:text-7xl xl:text-[6.4rem] leading-[0.96] tracking-[-0.03em]">
            Organic food,
            <br />
            grown on a
            <br />
            <span className="italic text-brass-light">river island.</span>
          </h1>
          <p className="mt-10 max-w-lg text-ivory/70 text-lg leading-relaxed">
            Nimmu Naturals farms a fully organic island on the river Godavari —
            no synthetic chemicals, no pesticides. Real food, harvested by hand
            and sent straight to your home.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
            <a
              href="#products"
              className="inline-flex items-center bg-brass-light text-forest px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] hover:bg-ivory transition-colors duration-300"
            >
              See what we grow
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.18em] text-ivory/85 hover:text-brass-light transition-colors duration-300"
            >
              Message the farmer
              <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Image — runs to the right and bottom edges */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.1, ease }}
          className="lg:col-span-5 relative min-h-[70svh] lg:min-h-0"
        >
          <img
            src="/images/turmeric.jpeg"
            alt="Holding a leaf full of freshly dug turmeric on the farm"
            className="absolute inset-0 w-full h-full object-cover object-[50%_35%]"
            fetchpriority="high"
          />
          <figcaption className="absolute left-0 bottom-0 bg-forest px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-ivory/70">
            Fresh turmeric, just out of the ground
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
