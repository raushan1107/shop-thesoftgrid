'use client'

import { useState } from 'react'
import { ExternalLink, MessageCircle, Mail, MapPin } from 'lucide-react'
import WhatsAppFloat from '@/components/home/WhatsAppFloat'

const INSTAGRAM_URL = 'https://www.instagram.com/softgrid.apparels/'
const WA_LINK = 'https://wa.me/918285862455'

const kitOptions = [
  'Starter Kit (₹499/kit)',
  'Standard Kit (₹649/kit)',
  'Premium Kit (₹799/kit)',
  'Corporate T-Shirts',
  'Corporate Polo',
  'Laptop Bags',
  'Custom Mix',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    kitInterest: kitOptions[0],
    quantity: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function sendQuote(e: React.FormEvent) {
    e.preventDefault()
    const message = `Hi The Soft Grid!

Quote Request:
Name: ${form.name || '–'}
Company: ${form.company || '–'}
Phone: ${form.phone || '–'}
Kit Interest: ${form.kitInterest}
Quantity: ${form.quantity || '–'}

Please share pricing. Thank you!`

    window.open(
      `https://wa.me/918285862455?text=${encodeURIComponent(message)}`,
      '_blank'
    )
    setSubmitted(true)
  }

  return (
    <div className="bg-sg-offwhite min-h-screen">
      {/* Header */}
      <section className="border-b border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Get In Touch</p>
          <h1
            className="font-display text-sg-ink leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Contact us
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Quote Form */}
        <div>
          <h2 className="font-display text-sg-ink text-2xl italic mb-6">Get a quote</h2>

          {submitted ? (
            <div className="border border-sg-sage bg-sg-blush rounded-2xl p-8 text-center">
              <p className="font-display text-sg-sage text-2xl italic mb-2">
                Opening WhatsApp...
              </p>
              <p className="text-sg-ink2 text-sm">
                Your quote request has been prepared. Complete the send on WhatsApp.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sg-sage text-sm font-medium hover:text-sg-sage2 transition-colors"
              >
                ← Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={sendQuote} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sg-ink text-xs font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-sg-border text-sg-ink text-sm px-4 py-3 rounded-xl placeholder:text-sg-muted focus:outline-none focus:border-sg-sage"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sg-ink text-xs font-medium mb-2">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white border border-sg-border text-sg-ink text-sm px-4 py-3 rounded-xl placeholder:text-sg-muted focus:outline-none focus:border-sg-sage"
                    placeholder="Company name (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sg-ink text-xs font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-sg-border text-sg-ink text-sm px-4 py-3 rounded-xl placeholder:text-sg-muted focus:outline-none focus:border-sg-sage"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sg-ink text-xs font-medium mb-2">Kit Interest *</label>
                <select
                  required
                  value={form.kitInterest}
                  onChange={(e) => setForm({ ...form, kitInterest: e.target.value })}
                  className="w-full bg-white border border-sg-border text-sg-ink text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-sg-sage"
                >
                  {kitOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sg-ink text-xs font-medium mb-2">Quantity</label>
                <input
                  type="text"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  className="w-full bg-white border border-sg-border text-sg-ink text-sm px-4 py-3 rounded-xl placeholder:text-sg-muted focus:outline-none focus:border-sg-sage"
                  placeholder="e.g. 50 kits"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sg-sage text-white font-medium py-4 rounded-full hover:bg-sg-sage2 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Send Quote Request on WhatsApp
              </button>
              <p className="text-sg-muted text-xs text-center">
                Opens WhatsApp with your request pre-filled. We reply within 2–4 hours.
              </p>
            </form>
          )}
        </div>

        {/* Direct links */}
        <div>
          <h2 className="font-display text-sg-ink text-2xl italic mb-6">Reach us directly</h2>

          <div className="space-y-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-sg-border rounded-2xl p-5 hover:border-sg-sage transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-white" fill="white" />
              </div>
              <div>
                <p className="text-sg-ink font-semibold text-sm group-hover:text-sg-sage transition-colors">
                  WhatsApp
                </p>
                <p className="text-sg-muted text-xs">+91 82858 62455</p>
              </div>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-sg-border rounded-2xl p-5 hover:border-sg-sage transition-colors group"
            >
              <div className="w-10 h-10 bg-sg-blush rounded-full flex items-center justify-center flex-shrink-0">
                <ExternalLink size={18} className="text-sg-sage" />
              </div>
              <div>
                <p className="text-sg-ink font-semibold text-sm group-hover:text-sg-sage transition-colors">
                  Instagram
                </p>
                <p className="text-sg-muted text-xs">@softgrid.apparels</p>
              </div>
            </a>

            <a
              href="mailto:info.thesoftgrid@gmail.com"
              className="flex items-center gap-4 bg-white border border-sg-border rounded-2xl p-5 hover:border-sg-sage transition-colors group"
            >
              <div className="w-10 h-10 bg-sg-blush rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-sg-sage" />
              </div>
              <div>
                <p className="text-sg-ink font-semibold text-sm group-hover:text-sg-sage transition-colors">
                  Email
                </p>
                <p className="text-sg-muted text-xs">info.thesoftgrid@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white border border-sg-border rounded-2xl p-5">
              <div className="w-10 h-10 bg-sg-blush rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-sg-sage" />
              </div>
              <div>
                <p className="text-sg-ink font-semibold text-sm">Location</p>
                <p className="text-sg-muted text-xs">Noida, Uttar Pradesh, India</p>
                <p className="text-sg-muted text-xs">Pan India Delivery</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-sg-cream rounded-2xl border border-sg-border p-6">
            <p className="text-sg-ink font-semibold text-xs tracking-wide mb-3">Business Hours</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-sg-muted">Monday – Saturday</span>
                <span className="text-sg-ink font-medium">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sg-muted">Sunday</span>
                <span className="text-sg-ink font-medium">10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sg-muted">WhatsApp Response</span>
                <span className="text-sg-sage font-medium">Within 2–4 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
