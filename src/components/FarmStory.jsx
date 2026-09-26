import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'

export default function FarmStory() {
  const { ref, isInView } = useScrollAnimation(0.15)
  const show = isInView ? { opacity: 1, y: 0 } : {}

  return (
    <section ref={ref} className="bg-forest text-ivory py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <motion.figure
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <img
            src="/images/cow-grazing.jpeg"
            alt="Standing with one of the farm's cows in the island pasture"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
          <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ivory/45">
            On the island, Gudapalli
          </figcaption>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={show}
          transition={{ duration: 0.8, ease }}
          className="lg:col-span-7 order-1 lg:order-2"
        >
          <Eyebrow className="text-brass-light mb-8">Our story</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-[2.6rem] md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em]">
            I watched my village
            <br /> <span className="italic text-brass-light">fall ill.</span>
          </h2>
          <div className="mt-10 space-y-6 text-ivory/70 text-[1.05rem] leading-[1.8] max-w-xl">
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
          <p className="mt-10 pt-6 border-t border-ivory/15 max-w-xl text-[11px] uppercase tracking-[0.25em] text-ivory/45">
            The founder, Nimmu Naturals
          </p>
        </motion.div>
      </div>
    </section>
  )
}
