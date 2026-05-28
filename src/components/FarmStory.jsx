import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'

export default function FarmStory() {
  const { ref, isInView } = useScrollAnimation(0.15)
  const show = isInView ? { opacity: 1, y: 0 } : {}

  return (
    <section ref={ref} className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.figure
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, ease }}
          className="order-2 lg:order-1"
        >
          <img
            src="/images/cow-grazing.jpeg"
            alt="Cows grazing freely on the island pastures"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={show}
          transition={{ duration: 0.7, ease }}
          className="order-1 lg:order-2"
        >
          <Eyebrow className="text-green-deep/70 mb-5">Our story</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-ink leading-[1.06] font-medium">
            I watched my village
            <br /> fall ill.
          </h2>
          <div className="mt-7 space-y-5 text-ink/70 leading-relaxed max-w-xl">
            <p>
              I&rsquo;m from a small village in Konaseema. For years I watched the people
              around me keep falling sick, and the more I looked into why, the more it
              pointed back to one thing: the food. Most of it was grown with chemicals,
              and it was quietly making people unwell.
            </p>
            <p>
              I couldn&rsquo;t feed that to my own family, and I didn&rsquo;t want to sell
              it to anyone else&rsquo;s. So I took a small island on the Godavari and
              started growing food the way it was grown before the chemicals arrived —
              clean enough that I&rsquo;d be glad to eat it myself.
            </p>
            <p>
              That is how Nimmu Naturals began. It is still our family farming this
              island, and whatever we can&rsquo;t grow here we bring in from tribal
              farmers in the Eastern Ghats.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
