'use client'

import { useCartStore } from '@/lib/cart-store'
import { buildCartMessage, openWhatsApp } from '@/lib/whatsapp'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

export default function CartSheet() {
  const { items, isOpen, setOpen, updateQuantity, updateNote, removeItem, total } =
    useCartStore()
  const [expandedNote, setExpandedNote] = useState<string | null>(null)

  function handleWhatsApp() {
    if (items.length === 0) return
    openWhatsApp(buildCartMessage(items))
  }

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-white border-l border-sg-border p-0 flex flex-col"
      >
        <SheetHeader className="px-6 py-4 border-b border-sg-border">
          <SheetTitle className="font-display text-sg-ink text-xl italic">
            Your Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-sg-muted px-6">
            <ShoppingBag size={48} className="opacity-30" />
            <p className="text-sm text-sg-muted">Your cart is empty</p>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="bg-sg-sage text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-sg-sage2 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.productId} className="border-b border-sg-border pb-4">
                  <div className="flex gap-3">
                    <div className="w-16 flex-shrink-0 rounded-xl overflow-hidden">
                      <PlaceholderImage aspectRatio="3/4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={() => setOpen(false)}
                          className="text-sg-ink text-sm font-semibold hover:text-sg-sage transition-colors leading-tight"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-sg-muted hover:text-sg-ink flex-shrink-0"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      {item.color && (
                        <p className="text-sg-muted text-xs capitalize mt-0.5">{item.color}</p>
                      )}
                      {item.printType && (
                        <p className="text-sg-muted text-xs mt-0.5">{item.printType}</p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 border border-sg-border rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 10)}
                            className="px-3 py-1 text-sg-muted hover:text-sg-ink hover:bg-sg-offwhite transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sg-ink text-sm font-semibold w-10 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 10)}
                            className="px-3 py-1 text-sg-muted hover:text-sg-ink hover:bg-sg-offwhite transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sg-sage font-semibold text-sm">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-sg-muted text-xs mt-1">From 1 piece</p>

                      {/* Custom note toggle */}
                      <button
                        onClick={() =>
                          setExpandedNote(expandedNote === item.productId ? null : item.productId)
                        }
                        className="text-sg-sage text-xs font-medium mt-2 hover:text-sg-sage2 transition-colors"
                      >
                        {expandedNote === item.productId ? '− Hide note' : '+ Print instructions'}
                      </button>
                      {expandedNote === item.productId && (
                        <textarea
                          value={item.customNote || ''}
                          onChange={(e) => updateNote(item.productId, e.target.value)}
                          placeholder="Logo details, print placement, colour codes..."
                          rows={2}
                          className="w-full mt-2 bg-sg-offwhite border border-sg-border text-sg-ink text-xs p-2 resize-none placeholder:text-sg-muted focus:outline-none focus:border-sg-sage rounded-xl"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-sg-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sg-muted text-sm">Subtotal</span>
                <span className="font-semibold text-sg-ink text-lg">
                  ₹{total().toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-sg-muted text-xs">
                Shipping & taxes calculated on order confirmation.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-sg-sage text-white font-medium py-4 rounded-full hover:bg-sg-sage2 transition-colors text-sm"
              >
                Place Order on WhatsApp
              </button>
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="w-full block text-center border-2 border-sg-ink text-sg-ink font-medium py-3 rounded-full hover:bg-sg-ink hover:text-white text-sm transition-colors"
              >
                View Cart
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
