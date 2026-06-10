import Link from 'next/link'
import WhatsAppFloat from '@/components/home/WhatsAppFloat'
import { MessageCircle } from 'lucide-react'

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '918285862455'

const hamperKits = [
  {
    name: 'Starter Kit',
    tag: 'Large onboarding batches · 100+ employees',
    emoji: '📦',
    price: 499,
    bulkPrice: 459,
    bulkQty: 100,
    color: 'green',
    popular: false,
    items: [
      'Custom Branded Diary',
      'Logo Printed Bottle',
      'Custom Printed Pen',
      '🎁 Branded Stickers (Free)',
    ],
  },
  {
    name: 'Standard Kit',
    tag: 'Complete desk kit · 5 branded touchpoints',
    emoji: '🎁',
    price: 649,
    bulkPrice: 609,
    bulkQty: 100,
    color: 'blue',
    popular: true,
    items: [
      'Custom Branded Diary',
      'Logo Printed Bottle',
      'Ceramic Mug with Branding',
      'Custom Printed Pen',
      'Full-Surface Mouse Pad',
      '🎁 Branded Stickers (Free)',
    ],
  },
  {
    name: 'Premium Kit',
    tag: 'Leadership, managers & premium gifting',
    emoji: '🏆',
    price: 799,
    bulkPrice: 759,
    bulkQty: 100,
    color: 'purple',
    popular: false,
    items: [
      'Premium Metal Pen (Engraved)',
      'Hardbound Diary',
      'Premium Logo Bottle',
      'Ceramic Mug with Branding',
      'Full-Surface Mouse Pad',
      'Leather Card Holder',
      'Metal Keychain',
      '🎁 Branded Stickers (Free)',
    ],
  },
]

const packaging = [
  {
    emoji: '📦',
    name: 'Kraft Box',
    desc: 'Natural brown kraft, eco feel. Perfect for startups and eco-conscious brands.',
    price: '+₹49/kit',
    highlight: false,
  },
  {
    emoji: '🗂️',
    name: 'Printed Carton Box',
    desc: 'Custom exterior print with your logo and brand colours. Great for mass onboarding.',
    price: '+₹59/kit',
    highlight: false,
  },
  {
    emoji: '🎁',
    name: 'Magnetic Gift Box',
    desc: 'Premium rigid box with magnetic closure. For leadership kits and client gifting.',
    price: '+₹79/kit',
    highlight: true,
  },
]

export default function CorporateHampersPage() {
  return (
    <div className="bg-sg-offwhite min-h-screen">
      {/* Hero */}
      <section className="bg-sg-offwhite border-b border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-4">
            Service — Corporate Gifting
          </p>
          <h1
            className="font-display text-sg-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
          >
            Gifts they&apos;ll actually
            <br />
            <em className="italic">remember.</em>
          </h1>
          <p className="text-sg-ink2 text-base max-w-xl mb-8 leading-relaxed">
            Premium corporate hampers, branded apparel, and merchandise.
            Min. 25 pieces for bulk orders. Factory direct. Pan India. Fully custom.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi The Soft Grid! I want to enquire about corporate gifting options.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sg-sage2 transition-colors text-sm"
            >
              Get a Quote on WhatsApp
            </a>
            <Link
              href="/contact"
              className="border-2 border-sg-ink text-sg-ink font-medium px-8 py-4 rounded-full hover:bg-sg-ink hover:text-white transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Kit Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-6">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Kit Catalogue</p>
          <h2 className="font-display text-sg-ink leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            Choose your kit
          </h2>
        </div>

        {/* Free stickers banner */}
        <div className="bg-amber-50 border-2 border-amber-300 px-4 py-3 rounded-2xl flex flex-wrap items-center gap-3 mb-8">
          <span className="text-2xl">🎁</span>
          <span className="text-sm text-sg-ink flex-1">
            <strong>Complimentary Custom Branded Stickers</strong> with every hamper order — your logo, your colours, at zero extra cost.
          </span>
          <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full whitespace-nowrap">
            FREE with every kit
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hamperKits.map((kit) => (
            <div
              key={kit.name}
              className={`relative bg-white rounded-2xl border p-6 flex flex-col ${
                kit.popular ? 'border-sg-sage shadow-lg' : 'border-sg-border'
              }`}
            >
              {kit.popular && (
                <span className="absolute -top-3 left-6 bg-sg-sage text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-2xl mb-2 block">{kit.emoji}</span>
                  <h3 className="font-display text-sg-ink text-xl">{kit.name}</h3>
                  <p className="text-sg-muted text-xs mt-1">{kit.tag}</p>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-sg-sage font-semibold text-3xl">
                  ₹{kit.price}
                  <span className="text-sg-muted font-normal text-sm ml-1">/kit</span>
                </p>
                <p className="text-sg-muted text-xs mt-1">
                  ₹{kit.bulkPrice}/kit for {kit.bulkQty}+ orders
                </p>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {kit.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sg-ink2 text-sm">
                    <span className="text-sg-sage mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi! I want a quote for the ${kit.name} (₹${kit.price}/kit).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-medium py-3 text-sm rounded-full transition-colors ${
                  kit.popular
                    ? 'bg-sg-sage text-white hover:bg-sg-sage2'
                    : 'border-2 border-sg-ink text-sg-ink hover:bg-sg-ink hover:text-white'
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Packaging Add-ons */}
      <section className="bg-sg-cream border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Packaging</p>
            <h2 className="font-display text-sg-ink leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
              Upgrade your unboxing
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {packaging.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl border p-6 ${
                  pkg.highlight ? 'border-sg-sage shadow-sm' : 'border-sg-border'
                }`}
              >
                <span className="text-2xl mb-3 block">{pkg.emoji}</span>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sg-ink text-sm">{pkg.name}</h3>
                  <span className="text-sg-sage text-xs font-semibold ml-2 whitespace-nowrap">{pkg.price}</span>
                </div>
                <p className="text-sg-ink2 text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-10">
            <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">How It Works</p>
            <h2 className="font-display text-sg-ink leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Order process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Share Brief', desc: 'Send us your requirements, design files, and quantity on WhatsApp.' },
              { step: '02', title: 'Get Quote', desc: 'Receive a detailed quote with kit, packaging, and delivery options within 24hrs.' },
              { step: '03', title: 'Approve Sample', desc: 'We produce a physical sample for your approval before bulk production.' },
              { step: '04', title: 'Bulk Delivery', desc: 'Your order ships pan India with full tracking and quality assurance.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl border border-sg-border p-6">
                <p className="font-display text-sg-sage text-3xl mb-3">{item.step}</p>
                <h3 className="font-semibold text-sg-ink text-sm mb-2">{item.title}</h3>
                <p className="text-sg-ink2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h3 className="font-display text-white text-2xl">
              Let&apos;s build something together
            </h3>
            <p className="text-white/80 text-sm mt-1">Get a custom quote in under 24 hours.</p>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi The Soft Grid! I want to enquire about corporate gifting.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-sg-sage font-medium text-sm px-8 py-4 rounded-full hover:bg-sg-offwhite transition-colors"
          >
            <MessageCircle size={16} />
            Get a Quote on WhatsApp
          </a>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
