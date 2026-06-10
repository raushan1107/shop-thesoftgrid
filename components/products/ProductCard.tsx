'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import type { Product } from '@/types'
import PlaceholderImage from '@/components/shared/PlaceholderImage'
import { useCartStore } from '@/lib/cart-store'

interface ProductCardProps {
  product: Product
}

function getFabricLabel(gsm: number): string {
  if (gsm <= 180) return 'Lightweight'
  if (gsm <= 200) return 'Everyday'
  if (gsm <= 220) return 'Premium'
  return 'Heavy'
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  const { addItem, setOpen } = useCartStore()

  function handleQuickAdd() {
    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      quantity: product.moq,
      color: product.colors[0],
      printType: product.printType,
    })
    setOpen(true)
  }

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-sg-border hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden">
        <PlaceholderImage aspectRatio="3/4" className="rounded-t-2xl" />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-sg-ink/30 flex items-end justify-center gap-2 pb-4 transition-opacity duration-200 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              handleQuickAdd()
            }}
            className="bg-sg-sage text-white font-medium text-xs px-4 py-2 rounded-full hover:bg-sg-sage2 transition-colors flex items-center gap-1.5"
          >
            <ShoppingBag size={12} />
            Add to Cart
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              router.push(`/products/${product.slug}`)
            }}
            className="bg-white text-sg-ink font-medium text-xs px-4 py-2 rounded-full hover:bg-sg-offwhite transition-colors"
          >
            View
          </button>
        </div>

        {/* Fabric quality badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white text-sg-ink text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            {getFabricLabel(product.gsm)}
          </span>
        </div>

        {product.isNew && (
          <div className="absolute top-3 right-3">
            <span className="bg-sg-sage text-white text-xs font-medium px-3 py-1 rounded-full">
              New
            </span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sg-ink text-sm leading-snug">
          {product.name}
        </h3>
        <p className="text-sg-muted text-xs mt-1">{product.printType}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sg-sage font-semibold text-sm">
            ₹{product.price.toLocaleString('en-IN')}
            <span className="text-sg-muted font-normal text-xs ml-1">/ pc</span>
          </p>
          <p className="text-sg-muted text-xs">From 1 piece</p>
        </div>
      </div>
    </div>
  )
}
