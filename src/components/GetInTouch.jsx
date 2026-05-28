import { motion } from 'framer-motion'
import { useScrollAnimation, ease } from './useScrollAnimation'
import { Eyebrow } from './Botanical'
import { WHATSAPP_URL, WHATSAPP_TEL, WHATSAPP_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, whatsappLink } from '../config/contact'

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
)

const contacts = [
  { label: 'WhatsApp', value: WHATSAPP_DISPLAY, href: WHATSAPP_URL, external: true,
    icon: <WhatsAppIcon className="w-5 h-5" /> },
  { label: 'Call us', value: WHATSAPP_DISPLAY, href: `tel:${WHATSAPP_TEL}`, external: false,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
  { label: 'Instagram', value: `@${INSTAGRAM_HANDLE}`, href: INSTAGRAM_URL, external: true,
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
]

export default function GetInTouch() {
  const { ref, isInView } = useScrollAnimation()
  const show = isInView ? { opacity: 1, y: 0 } : {}

  return (
    <section id="contact" ref={ref} className="bg-cream px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={show}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <Eyebrow className="text-green-deep/70 mb-5">04 — Say hello</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] font-medium">
            Talk directly to the farmer.
          </h2>
          <p className="mt-6 text-ink/65 text-lg leading-relaxed">
            No call center. No automated replies. Just real people who grow your food.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact methods */}
          <div className="lg:col-span-5">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center justify-between gap-4 border-t border-ink/12 last:border-b py-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-ink/60 group-hover:text-green-deep transition-colors">{c.icon}</span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40">{c.label}</p>
                    <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-ink mt-0.5">{c.value}</p>
                  </div>
                </div>
                <span className="text-ink/30 group-hover:text-green-deep group-hover:translate-x-0.5 transition-all">&#8599;</span>
              </a>
            ))}
          </div>

          {/* Delivery + visit */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border border-ink/12 p-7">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-ink font-medium mb-5">Where we deliver</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-ink">Andhra Pradesh</p>
                  <p className="text-sm text-ink/55 mt-1 leading-relaxed">Vizag, Vijayawada, Rajahmundry, Kakinada &amp; more.</p>
                </div>
                <div>
                  <p className="font-medium text-ink">Telangana</p>
                  <p className="text-sm text-ink/55 mt-1 leading-relaxed">Hyderabad, Secunderabad, Warangal &amp; surroundings.</p>
                </div>
              </div>
              <p className="text-sm text-ink/55 mt-6 pt-5 border-t border-ink/10">
                Somewhere else? <span className="text-ink">WhatsApp us</span> — we&rsquo;ll find a way.
              </p>
            </div>

            <a
              href={whatsappLink('Hi! I would like to visit the farm')}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-ink/12 p-7 hover:border-green-deep/40 transition-colors"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-ink font-medium">Visit our farm</h3>
              <p className="text-sm text-ink/55 mt-2 leading-relaxed max-w-md">
                Walk the fields, meet the animals, taste the food. Small groups welcome.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-green-deep mt-4">
                Book a farm visit
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </a>
          </div>
        </div>

        {/* Join community */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={show}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-16 bg-green-deep text-paper p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
        >
          <div className="max-w-xl">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-medium">Join our farm family</h3>
            <p className="text-paper/70 mt-2 leading-relaxed">
              Weekly harvest updates, seasonal recipes, farm stories, and first access to fresh produce.
            </p>
          </div>
          <a
            href={whatsappLink('Hi! I want to join the Nimmu Naturals community')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-paper text-green-deep px-6 py-3.5 text-sm font-medium hover:bg-cream transition-colors duration-300"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Join the community
          </a>
        </motion.div>
      </div>
    </section>
  )
}
