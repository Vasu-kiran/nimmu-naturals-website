export const WHATSAPP_NUMBER = '919010277381'
export const WHATSAPP_DISPLAY = '+91 90102 77381'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const WHATSAPP_TEL = `+${WHATSAPP_NUMBER}`

export const whatsappLink = (message) =>
  message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL

export const INSTAGRAM_HANDLE = 'nimmu_naturals'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`
