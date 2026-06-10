'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FeaturedProducts from './FeaturedProducts'
import Link from 'next/link'

function GiftingContent() {
  const offerings = [
    {
      title: 'Apparel Bundles',
      desc: 'Curated sets of tees, polos, and accessories. Perfect for team gifting.',
    },
    {
      title: 'Festive Boxes',
      desc: 'Branded packaging with premium fabrics. Ready for Diwali, New Year & more.',
    },
    {
      title: 'Event Kits',
      desc: 'Conference-ready merchandise packs. Branded from inside out.',
    },
    {
      title: 'Branded Merch',
      desc: 'Custom embroidered or printed pieces that carry your identity.',
    },
  ]

  return (
    <div className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Corporate Gifting</p>
        <h2
          className="font-display text-sg-ink leading-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Gifts they&apos;ll actually remember.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offerings.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-6 border border-sg-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-sg-ink text-sm mb-2">{item.title}</h3>
            <p className="text-sg-ink2 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/services/corporate-hampers"
          className="bg-sg-sage text-white font-medium px-8 py-3 rounded-full hover:bg-sg-sage2 transition-colors text-sm"
        >
          See All Gifting Options
        </Link>
        <Link
          href="/contact"
          className="border-2 border-sg-ink text-sg-ink font-medium px-8 py-3 rounded-full hover:bg-sg-ink hover:text-white transition-colors text-sm"
        >
          Get a Quote on WhatsApp
        </Link>
      </div>
    </div>
  )
}

export default function CategoryToggle() {
  const [active, setActive] = useState<'clothing' | 'gifting'>('clothing')

  return (
    <section className="bg-sg-offwhite border-t border-sg-border py-4">
      {/* Pill toggle — centered */}
      <div className="flex justify-center mb-2">
        <div className="bg-sg-cream rounded-full p-1 inline-flex">
          {(['clothing', 'gifting'] as const).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                active === tab
                  ? 'text-white'
                  : 'text-sg-ink2 hover:text-sg-ink'
              }`}
            >
              {active === tab && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-sg-sage rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                />
              )}
              <span className="relative z-10">
                {tab === 'clothing' ? 'Clothing' : 'Gifting'}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {active === 'clothing' ? <FeaturedProducts /> : <GiftingContent />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
