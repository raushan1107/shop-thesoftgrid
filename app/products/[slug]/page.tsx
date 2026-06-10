'use client'

import { notFound, useParams } from 'next/navigation'
import { useState } from 'react'
import { getProductBySlug, getRelatedProducts } from '@/lib/products'
import { buildProductMessage, openWhatsApp } from '@/lib/whatsapp'
import { useCartStore } from '@/lib/cart-store'
import ProductGallery from '@/components/products/ProductGallery'
import ProductCard from '@/components/products/ProductCard'
import { Plus, Minus, Share2, Star } from 'lucide-react'
import type { Product } from '@/types'

const colorHex: Record<string, string> = {
  black: '#1A1A1A',
  white: '#FAF9F7',
  terracotta: '#C1440E',
  olive: '#6B7C52',
  navy: '#1B2A4A',
  sand: '#C2B280',
}

function getFabricLabel(gsm: number): string {
  if (gsm <= 180) return 'Lightweight'
  if (gsm <= 200) return 'Everyday'
  if (gsm <= 220) return 'Premium'
  return 'Heavy'
}

function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '')
  const [selectedPrint, setSelectedPrint] = useState(product.printOptions[0] || '')
  const [quantity, setQuantity] = useState(product.moq)
  const [note, setNote] = useState('')
  const [copied, setCopied] = useState(false)

  const { addItem, setOpen } = useCartStore()
  const related = getRelatedProducts(product)
  const avgRating = product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length

  function handleAddToCart() {
    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      quantity,
      color: selectedColor,
      printType: selectedPrint,
      customNote: note || undefined,
    })
    setOpen(true)
  }

  function handleBuyNow() {
    openWhatsApp(buildProductMessage(product.name, quantity, note, selectedColor, selectedPrint))
  }

  function handleShare() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-sg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-sg-muted mb-8">
          <a href="/" className="hover:text-sg-sage transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-sg-sage transition-colors">Products</a>
          <span>/</span>
          <span className="text-sg-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product panel */}
          <div>
            <div className="flex items-start gap-2 mb-3 flex-wrap">
              <span className="bg-sg-blush text-sg-sage text-xs font-medium px-3 py-1 rounded-full">
                {getFabricLabel(product.gsm)}
              </span>
              <span className="border border-sg-border text-sg-muted text-xs px-3 py-1 rounded-full">
                {product.printType}
              </span>
              {product.isNew && (
                <span className="bg-sg-sage text-white text-xs font-medium px-3 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            <h1 className="text-sg-ink font-semibold text-3xl leading-tight mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s <= Math.round(avgRating) ? 'text-sg-sand fill-sg-sand' : 'text-sg-border fill-sg-border'}
                  />
                ))}
              </div>
              <span className="text-sg-muted text-xs">({product.reviews.length} reviews)</span>
            </div>

            <p className="font-semibold text-4xl text-sg-sage mb-1">
              ₹{product.price.toLocaleString('en-IN')}
              <span className="text-sg-muted font-normal text-sm ml-2">per piece</span>
            </p>
            <p className="text-sg-muted text-xs mb-6">From 1 piece · ₹{product.price}/pc</p>

            <p className="text-sg-ink2 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Specs */}
            <div className="border border-sg-border rounded-2xl mb-6 overflow-hidden">
              {[
                { label: 'Fabric Quality', value: getFabricLabel(product.gsm) },
                { label: 'Fit', value: product.fit },
                { label: 'Material', value: product.material },
                { label: 'Print Options', value: product.printOptions.join(', ') },
                { label: 'Min. Order', value: 'From 1 piece' },
              ].map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex items-center px-4 py-3 text-sm ${i < 4 ? 'border-b border-sg-border' : ''}`}
                >
                  <span className="text-sg-muted text-xs w-32 flex-shrink-0">{spec.label}</span>
                  <span className="text-sg-ink font-medium">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Color selector */}
            <div className="mb-5">
              <p className="text-sg-ink text-xs font-medium mb-3">
                Colour — <span className="text-sg-sage capitalize">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    title={c}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === c ? 'border-sg-sage scale-110' : 'border-sg-border'
                    }`}
                    style={{ backgroundColor: colorHex[c] || c }}
                  />
                ))}
              </div>
            </div>

            {/* Print type */}
            <div className="mb-5">
              <p className="text-sg-ink text-xs font-medium mb-3">Print Type</p>
              <div className="flex flex-wrap gap-2">
                {product.printOptions.map((pt) => (
                  <button
                    key={pt}
                    onClick={() => setSelectedPrint(pt)}
                    className={`text-xs font-medium px-4 py-2 rounded-full transition-colors border ${
                      selectedPrint === pt
                        ? 'bg-sg-sage text-white border-sg-sage'
                        : 'border-sg-border text-sg-ink2 hover:border-sg-sage hover:text-sg-sage'
                    }`}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-5">
              <p className="text-sg-ink text-xs font-medium mb-3">Quantity</p>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 10))}
                  className="border border-sg-border rounded-l-xl px-4 py-3 text-sg-muted hover:text-sg-ink hover:bg-sg-offwhite transition-colors"
                >
                  <Minus size={14} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="border-y border-sg-border w-20 text-center text-sg-ink bg-white py-3 text-sm font-semibold focus:outline-none"
                />
                <button
                  onClick={() => setQuantity((q) => q + 10)}
                  className="border border-sg-border rounded-r-xl px-4 py-3 text-sg-muted hover:text-sg-ink hover:bg-sg-offwhite transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="text-sg-muted text-xs mt-2">From 1 piece</p>
            </div>

            {/* Custom note */}
            <div className="mb-6">
              <p className="text-sg-ink text-xs font-medium mb-3">Print Instructions</p>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add print instructions, logo details, colour codes, placement notes..."
                rows={3}
                className="w-full bg-white border border-sg-border text-sg-ink text-sm p-3 rounded-xl resize-none placeholder:text-sg-muted focus:outline-none focus:border-sg-sage"
              />
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-4 border-t border-sg-border pt-4">
              <span className="text-sg-muted text-sm">Order Total</span>
              <span className="font-semibold text-2xl text-sg-ink">
                ₹{(product.price * quantity).toLocaleString('en-IN')}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleBuyNow}
                className="w-full bg-sg-sage text-white font-medium py-4 rounded-full hover:bg-sg-sage2 transition-colors text-sm"
              >
                Buy Now — Order on WhatsApp
              </button>
              <button
                onClick={handleAddToCart}
                className="w-full border-2 border-sg-ink text-sg-ink font-medium py-4 rounded-full hover:bg-sg-ink hover:text-white transition-colors text-sm"
              >
                Add to Cart
              </button>
            </div>

            {/* Share */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-sg-muted hover:text-sg-sage text-xs font-medium transition-colors"
              >
                <Share2 size={13} />
                {copied ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-16 pt-8 border-t border-sg-border">
          <h2 className="font-display text-sg-ink text-2xl italic mb-6">What buyers say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl border border-sg-border p-5">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={13}
                      className={s <= review.rating ? 'text-sg-sand fill-sg-sand' : 'text-sg-border fill-sg-border'}
                    />
                  ))}
                </div>
                <p className="text-sg-ink2 text-sm leading-relaxed mb-3">&ldquo;{review.comment}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="text-sg-sage text-xs font-semibold">{review.name}</span>
                  <span className="text-sg-muted text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 pt-8 border-t border-sg-border">
            <h2 className="font-display text-sg-ink text-2xl italic mb-6">You might also like</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 sm:mx-0">
              {related.map((p) => (
                <div key={p.id} className="flex-none w-56 snap-start">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  if (!product) return notFound()
  return <ProductDetail product={product} />
}
