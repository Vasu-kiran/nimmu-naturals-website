import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInLeft, fadeInRight } from './useScrollAnimation'

export default function MeetFarmer() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="farmer" ref={ref} className="px-6 md:px-16 lg:px-24 py-20 md:py-28 bg-beige-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-deep/20 to-brown-earth/20 rounded-3xl aspect-[4/5] flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 text-green-deep/40" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="3"/>
                    <path d="M20 85C20 65 35 52 50 52C65 52 80 65 80 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M40 20C40 20 45 10 50 10C55 10 60 20 60 20" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                  </svg>
                  <p className="text-brown-earth/60 text-sm font-medium">Farmer / Family Photo</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-deep/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brown-earth/10 rounded-full -z-10" />
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="text-green-deep text-sm font-semibold tracking-wider uppercase mb-4 block">Meet the Farmer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-earth mb-6 leading-tight">
              The Hands Behind<br /><span className="text-green-deep">Your Food</span>
            </h2>
            <div className="space-y-4">
              <p className="text-brown-light text-lg leading-relaxed italic border-l-4 border-green-deep/30 pl-5">
                "We started Nimmu Naturals after seeing people suffer from chemical-filled food. This farm is our way of bringing back real, healthy food."
              </p>
              <p className="text-brown-light leading-relaxed">
                Every morning, we walk through the fields, checking each plant, listening to the birds, watching the cows graze. This isn't a business — it's our life, our passion, our promise to you.
              </p>
              <p className="text-brown-light leading-relaxed">
                When you eat food from Nimmu Naturals, you're eating food grown with the same care we'd grow for our own family. Because that's exactly what it is.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-green-deep/30" />
              <span className="text-green-deep font-medium text-sm">From our family to yours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
