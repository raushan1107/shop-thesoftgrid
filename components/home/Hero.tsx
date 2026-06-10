'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-sg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sg-sage" />
              <span className="text-sg-sage text-sm font-medium">New Collection</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-sg-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
            >
              Wear it your
              <br />
              <em className="italic text-sg-ink">way.</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sg-ink2 text-base leading-relaxed max-w-md mb-8"
            >
              Premium oversized tees crafted for everyday comfort.
              Custom printed for your brand, your team, your moment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                href="/products"
                className="bg-sg-sage text-white font-medium px-8 py-4 rounded-full hover:bg-sg-sage2 transition-colors text-sm"
              >
                Shop Collection
              </Link>
              <Link
                href="/contact"
                className="border-2 border-sg-ink text-sg-ink font-medium px-8 py-4 rounded-full hover:bg-sg-ink hover:text-white transition-colors text-sm"
              >
                Custom Order
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-sg-muted text-xs"
            >
              ✓ Starting from 1 piece &nbsp;·&nbsp; ✓ Pan India delivery &nbsp;·&nbsp; ✓ Custom printing
            </motion.p>
          </div>

          {/* Right column — image card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-sg-blush to-sg-cream overflow-hidden aspect-[4/5]">
              {/* Decorative inner elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 120 120"
                  className="w-32 h-32 text-sg-sand opacity-20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="60" cy="22" r="8" />
                  <path d="M60 30v10M12 90l48-32 48 32" />
                  <path d="M4 90h112" />
                </svg>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute bottom-4 left-4 bg-white rounded-full shadow-md px-4 py-2 flex items-center gap-2">
                <span className="text-sg-sage text-xs">✓</span>
                <span className="text-sg-ink text-xs font-medium">Premium Cotton</span>
              </div>

              {/* Floating tag — top right */}
              <div className="absolute top-4 right-4 bg-sg-sage text-white rounded-full text-xs font-medium px-3 py-1">
                Custom Fit
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
