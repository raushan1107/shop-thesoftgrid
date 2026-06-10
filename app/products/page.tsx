'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { filterProducts } from '@/lib/products'
import ProductFilters from '@/components/products/ProductFilters'
import ProductGrid from '@/components/products/ProductGrid'
import type { ProductCategory, ProductGSM, PrintType, SortOption } from '@/types'

const PAGE_SIZE = 12

function ProductsContent() {
  const searchParams = useSearchParams()
  const [limit, setLimit] = useState(PAGE_SIZE)

  const filters = {
    search: searchParams.get('search') || undefined,
    category: (searchParams.get('category') as ProductCategory) || 'All',
    gsm: (searchParams.get('gsm') as ProductGSM) || 'All',
    printType: (searchParams.get('printType') as PrintType) || 'All',
    color: searchParams.get('color') || undefined,
    sort: (searchParams.get('sort') as SortOption) || 'Featured',
  }

  const allFiltered = filterProducts(filters)
  const showing = Math.min(limit, allFiltered.length)
  const displayed = allFiltered.slice(0, limit)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">The Soft Grid</p>
        <h1
          className="font-display text-sg-ink leading-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          All Products
        </h1>
      </div>

      <div className="flex gap-8 items-start">
        <ProductFilters />

        <ProductGrid
          products={displayed}
          total={allFiltered.length}
          showing={showing}
          onLoadMore={() => setLimit((l) => l + PAGE_SIZE)}
        />
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-sg-offwhite flex items-center justify-center">
        <p className="font-display text-sg-muted text-xl italic">Loading...</p>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
