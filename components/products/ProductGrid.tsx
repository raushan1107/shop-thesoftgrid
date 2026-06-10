'use client'

import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import type { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
  total: number
  showing: number
  onLoadMore: () => void
}

export default function ProductGrid({
  products,
  total,
  showing,
  onLoadMore,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-sg-muted gap-4">
        <p className="font-display text-2xl text-sg-ink2">No products found</p>
        <p className="text-sm text-sg-muted">Try adjusting your filters</p>
      </div>
    )
  }

  return (
    <div className="flex-1 min-w-0">
      {/* Count */}
      <div className="border-b border-sg-border pb-4 mb-6 hidden lg:flex items-center justify-between">
        <p className="text-sg-muted text-sm">
          Showing <span className="text-sg-ink font-medium">{showing}</span> of{' '}
          <span className="text-sg-ink font-medium">{total}</span> products
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (i % 9) * 0.06 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      {showing < total && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sg-muted text-sm">
            Showing {showing} of {total} products
          </p>
          <button
            onClick={onLoadMore}
            className="border-2 border-sg-ink text-sg-ink font-medium px-10 py-3 rounded-full hover:bg-sg-ink hover:text-white transition-colors text-sm"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}
