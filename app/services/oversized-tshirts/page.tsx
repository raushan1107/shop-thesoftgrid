import Link from 'next/link'
import { products } from '@/lib/products'
import ProductCard from '@/components/products/ProductCard'
import WhatsAppFloat from '@/components/home/WhatsAppFloat'
import { ExternalLink, MessageCircle } from 'lucide-react'

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/softgrid.apparels/'

export default function OversizedTshirtsPage() {
  const oversizedProducts = products.filter((p) => p.category === 'Oversized')

  const fabricGuide = [
    {
      label: 'Lightweight',
      title: 'Lightweight',
      desc: 'Breathable and airy. Best for summer events, everyday wear, and high-quantity print runs.',
      best: ['All-Over Print', 'Screen Print', 'High Volume Orders'],
    },
    {
      label: 'Everyday',
      title: 'Everyday',
      desc: 'Our all-rounder. Comfortable across seasons, holds print well, great drape.',
      best: ['Chest Print', 'DTF Transfer', 'Corporate Gifting'],
    },
    {
      label: 'Premium',
      title: 'Premium',
      desc: 'The most popular weight. Structured silhouette, premium hand-feel, built to last.',
      best: ['All Print Types', 'Brand Merchandise', 'Streetwear'],
    },
    {
      label: 'Heavy',
      title: 'Heavy',
      desc: 'Maximum weight for maximum impact. Structured, boxy, and impressive in hand.',
      best: ['Embroidery', 'Limited Edition Drops', 'High-End Gifting'],
    },
  ]

  const printMethods = [
    { name: 'Screen Print', desc: 'Vibrant, durable, cost-effective for large runs. Best for 2–4 colour designs.' },
    { name: 'DTF Transfer', desc: 'Full-colour detail prints with no colour limits. Perfect for photographic or gradient artwork.' },
    { name: 'All-Over Print', desc: 'Edge-to-edge sublimation. Maximum visual impact for streetwear and event tees.' },
    { name: 'Embroidery', desc: 'Premium textured finish. Ideal for logos, crests, and corporate merchandise.' },
  ]

  return (
    <div className="bg-sg-offwhite min-h-screen">
      {/* Hero */}
      <section className="bg-sg-offwhite border-b border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-4">
            Service — Custom Apparel
          </p>
          <h1
            className="font-display text-sg-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
          >
            The perfect oversize,
            <br />
            <em className="italic">every time.</em>
          </h1>
          <p className="text-sg-ink2 text-base max-w-xl mb-8 leading-relaxed">
            Factory-direct oversized tees in premium cotton. Custom printing, starting from 1 piece, pan India delivery. Your brand, your weight, your print.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products?category=Oversized"
              className="bg-sg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sg-sage2 transition-colors text-sm"
            >
              Shop Oversized
            </Link>
            <Link
              href="/contact"
              className="border-2 border-sg-ink text-sg-ink font-medium px-8 py-4 rounded-full hover:bg-sg-ink hover:text-white transition-colors text-sm"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Fabric Quality Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Fabric Quality</p>
          <h2 className="font-display text-sg-ink leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Choose your weight
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fabricGuide.map((spec) => (
            <div key={spec.label} className="bg-white rounded-2xl border border-sg-border p-6 hover:shadow-md transition-shadow">
              <span className="inline-block bg-sg-blush text-sg-sage text-xs font-medium px-3 py-1 rounded-full mb-3">
                {spec.label}
              </span>
              <p className="text-sg-ink2 text-sm leading-relaxed mb-4">{spec.desc}</p>
              <p className="text-sg-ink text-xs font-semibold mb-2">Best For:</p>
              <ul className="space-y-1">
                {spec.best.map((b) => (
                  <li key={b} className="text-sg-ink2 text-xs flex items-center gap-2">
                    <span className="w-1 h-1 bg-sg-sage rounded-full flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Print Methods */}
      <section className="bg-sg-cream border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-10">
            <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Printing</p>
            <h2 className="font-display text-sg-ink leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Print methods
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {printMethods.map((method) => (
              <div key={method.name} className="bg-white rounded-2xl border border-sg-border p-6">
                <h3 className="font-semibold text-sg-ink text-sm mb-2">{method.name}</h3>
                <p className="text-sg-ink2 text-sm leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Available Now</p>
              <h2 className="font-display text-sg-ink leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
                Oversized range
              </h2>
            </div>
            <Link
              href="/products?category=Oversized"
              className="text-sg-ink2 text-sm font-medium hover:text-sg-sage transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {oversizedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sg-cream border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h3 className="font-display text-sg-ink text-2xl">Ready to order?</h3>
            <p className="text-sg-ink2 text-sm mt-1">Reach out on WhatsApp or Instagram for a custom quote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '918285862455'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sg-sage text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-sg-sage2 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-sg-ink text-sg-ink font-medium text-sm px-6 py-3 rounded-full hover:bg-sg-ink hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
