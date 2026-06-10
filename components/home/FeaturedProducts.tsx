'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getFeaturedProducts } from '@/lib/products'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
        <div>
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Our Collection</p>
          <h2
            className="font-display text-sg-ink leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
          >
            Crafted to be worn, built to last.
          </h2>
        </div>
        <Link
          href="/products"
          className="text-sg-ink2 text-sm font-medium hover:text-sg-sage transition-colors"
        >
          View all →
        </Link>
      </div>

      {/* Grid — 4 cols desktop, horizontal scroll mobile */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {featured.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
        {featured.map((product) => (
          <div key={product.id} className="flex-none w-64 snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
