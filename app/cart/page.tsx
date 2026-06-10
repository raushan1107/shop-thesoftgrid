'use client'

import { useCartStore } from '@/lib/cart-store'
import { buildCartMessage, openWhatsApp } from '@/lib/whatsapp'
import { Plus, Minus, X, ShoppingBag, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import PlaceholderImage from '@/components/shared/PlaceholderImage'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const UPI_ID = process.env.NEXT_PUBLIC_UPI_ID || 'thesoftgrid@upi'

export default function CartPage() {
  const { items, updateQuantity, updateNote, removeItem, clearCart, total } = useCartStore()
  const [copiedUPI, setCopiedUPI] = useState(false)
  const [expandedNote, setExpandedNote] = useState<string | null>(null)

  function handleWhatsApp() {
    if (items.length === 0) return
    openWhatsApp(buildCartMessage(items))
  }

  function copyUPI() {
    navigator.clipboard.writeText(UPI_ID)
    setCopiedUPI(true)
    setTimeout(() => setCopiedUPI(false), 2000)
  }

  return (
    <div className="bg-sg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">The Soft Grid</p>
          <h1
            className="font-display text-sg-ink leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Your Cart
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="bg-white border border-sg-border rounded-2xl flex flex-col items-center justify-center py-24 gap-4">
            <ShoppingBag size={56} className="text-sg-muted opacity-40" />
            <p className="font-display text-sg-ink2 text-2xl italic">Your cart is empty</p>
            <Link
              href="/products"
              className="bg-sg-sage text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-sg-sage2 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.productId} className="bg-white rounded-2xl border border-sg-border p-4">
                  <div className="flex gap-4">
                    <div className="w-20 flex-shrink-0 rounded-xl overflow-hidden">
                      <PlaceholderImage aspectRatio="3/4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.slug}`}
                          className="text-sg-ink font-semibold hover:text-sg-sage transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-sg-muted hover:text-sg-ink flex-shrink-0"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {item.color && (
                          <span className="text-sg-muted text-xs capitalize border border-sg-border rounded-full px-2 py-0.5">
                            {item.color}
                          </span>
                        )}
                        {item.printType && (
                          <span className="text-sg-muted text-xs border border-sg-border rounded-full px-2 py-0.5">
                            {item.printType}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-sg-border rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 10)}
                            className="px-3 py-2 text-sg-muted hover:text-sg-ink hover:bg-sg-offwhite transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.productId, parseInt(e.target.value) || 1)
                            }
                            className="w-16 text-center text-sg-ink bg-transparent py-2 text-sm font-semibold focus:outline-none border-x border-sg-border"
                          />
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 10)}
                            className="px-3 py-2 text-sg-muted hover:text-sg-ink hover:bg-sg-offwhite transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-semibold text-sg-ink text-lg">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-sg-muted text-xs mt-1">₹{item.price}/pc</p>

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

              <button
                onClick={clearCart}
                className="text-sg-muted hover:text-sg-ink text-sm font-medium transition-colors"
              >
                Clear cart
              </button>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-sg-border p-6">
                <h2 className="font-display text-sg-ink text-xl italic mb-4">Order Summary</h2>

                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div key={item.productId} className="flex justify-between text-sm">
                      <span className="text-sg-muted truncate mr-2">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="text-sg-ink flex-shrink-0 font-medium">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-sg-border pt-4 flex items-center justify-between mb-4">
                  <span className="text-sg-muted text-sm">Total</span>
                  <span className="font-semibold text-sg-ink text-2xl">
                    ₹{total().toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-sg-sage text-white font-medium py-4 rounded-full hover:bg-sg-sage2 transition-colors text-sm"
                >
                  Place Order on WhatsApp
                </button>
                <p className="text-sg-muted text-xs text-center mt-3">
                  Shipping & taxes confirmed on WhatsApp
                </p>
              </div>

              {/* Payment info */}
              <Accordion multiple={false}>
                <AccordionItem value="upi" className="border border-sg-border px-4 rounded-2xl">
                  <AccordionTrigger className="text-sg-ink text-sm font-medium hover:no-underline py-4 hover:text-sg-sage">
                    UPI Payment
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="bg-sg-offwhite border border-sg-border rounded-xl p-4 mb-3">
                      <div className="w-24 h-24 bg-sg-cream border border-sg-border rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-sg-muted text-xs text-center">QR Code</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border border-sg-border rounded-xl p-3">
                      <span className="text-sg-ink text-sm font-mono flex-1">{UPI_ID}</span>
                      <button
                        onClick={copyUPI}
                        className="text-sg-muted hover:text-sg-sage transition-colors"
                      >
                        {copiedUPI ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bank" className="border border-sg-border px-4 rounded-2xl mt-2">
                  <AccordionTrigger className="text-sg-ink text-sm font-medium hover:no-underline py-4 hover:text-sg-sage">
                    Bank Transfer
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 space-y-2">
                    {[
                      { label: 'Account Name', value: 'The Soft Grid' },
                      { label: 'Account No.', value: 'XXXXXXXXXXXX' },
                      { label: 'IFSC Code', value: 'XXXXXXXX000' },
                      { label: 'Bank', value: 'Bank Name Here' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between text-sm">
                        <span className="text-sg-muted">{row.label}</span>
                        <span className="text-sg-ink font-mono font-medium">{row.value}</span>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
