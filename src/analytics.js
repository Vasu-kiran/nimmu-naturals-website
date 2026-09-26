// Google Analytics 4. Stays off until VITE_GA_ID (e.g. G-XXXXXXXXXX) is set in the
// Vercel project's environment variables; a redeploy then switches it on.
const GA_ID = import.meta.env.VITE_GA_ID

// Which part of the page a link sits in, so reports show e.g. "hero" vs "footer".
function linkLocation(el) {
  if (el.closest('nav')) return 'navbar'
  if (el.closest('footer')) return 'footer'
  if (el.getAttribute('aria-label') === 'Chat with us on WhatsApp') return 'floating_button'
  return el.closest('section[id]')?.id || el.closest('section')?.previousElementSibling?.id || 'page'
}

function contactMethod(href) {
  if (href.includes('wa.me')) return 'whatsapp'
  if (href.startsWith('tel:')) return 'call'
  if (href.includes('instagram.com')) return 'instagram'
  return null
}

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)

  // Contact clicks are how customers order, so record every WhatsApp / call / Instagram tap.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]')
    if (!link) return
    const method = contactMethod(link.getAttribute('href'))
    if (!method) return
    window.gtag('event', `${method}_click`, {
      link_location: linkLocation(link),
      link_text: link.textContent.trim().slice(0, 60),
      transport_type: 'beacon',
    })
  })
}
