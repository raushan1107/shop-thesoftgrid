import type { CartItem, ContactForm } from '@/types'

export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '918285862455'
export const WA_DISPLAY = '+91 82858 62455'
export const WA_LINK = `https://wa.me/${WA_NUMBER}`

export function buildCartMessage(items: CartItem[]): string {
  const lines = items
    .map((item) => {
      const note = item.customNote ? `\nPrint: ${item.customNote}` : ''
      return `• ${item.name} × ${item.quantity} pcs — ₹${(item.price * item.quantity).toLocaleString('en-IN')}${note}`
    })
    .join('\n')

  const grand = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return `🛒 *New Order — The Soft Grid*
──────────────────────
${lines}
──────────────────────
*TOTAL: ₹${grand.toLocaleString('en-IN')}*
Payment: UPI / Bank Transfer
Please confirm my order!`
}

export function buildProductMessage(
  productName: string,
  qty: number,
  note: string,
  color?: string,
  printType?: string
): string {
  const lines = [
    `Product: ${productName}`,
    `Quantity: ${qty} pcs`,
    color && `Colour: ${color}`,
    printType && `Print Type: ${printType}`,
    note && `Instructions: ${note}`,
  ]
    .filter(Boolean)
    .join('\n')

  return `🛍️ *Product Enquiry — The Soft Grid*
──────────────────────
${lines}
──────────────────────
Please send me pricing and availability!`
}

export function buildContactMessage(form: ContactForm): string {
  return `📩 *Contact Form — The Soft Grid*
──────────────────────
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Type: ${form.type}
──────────────────────
${form.message}`
}

export function openWhatsApp(message: string) {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
}
