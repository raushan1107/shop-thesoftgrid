'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, Menu, X, ChevronDown } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setOpen } = useCartStore()
  const itemCount = count()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-sg-border transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-display italic text-sg-ink text-[22px] leading-none hover:text-sg-sage transition-colors"
          >
            The Soft Grid
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sg-ink2 hover:text-sg-sage text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown — CSS group hover with invisible bridge to prevent gap */}
            <li className="relative group list-none">
              <button className="flex items-center gap-1 text-sg-ink2 hover:text-sg-sage text-sm font-medium transition-colors">
                Services
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Invisible bridge: covers gap between button and panel so hover never breaks */}
              <div className="absolute top-full left-0 w-full h-3 bg-transparent" />

              {/* Dropdown panel */}
              <div className="absolute top-full left-0 hidden group-hover:block pt-2 z-50 min-w-[220px]">
                <div className="bg-white rounded-xl shadow-lg border border-sg-border overflow-hidden">
                  <Link
                    href="/services/oversized-tshirts"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-sg-cream transition-colors"
                  >
                    <span className="text-lg">👕</span>
                    <div>
                      <div className="text-sg-ink text-sm font-medium">Oversized T-Shirts</div>
                      <div className="text-sg-muted text-xs">Custom print from 1 piece</div>
                    </div>
                  </Link>
                  <div className="border-t border-sg-border" />
                  <Link
                    href="/services/corporate-hampers"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-sg-cream transition-colors"
                  >
                    <span className="text-lg">🎁</span>
                    <div>
                      <div className="text-sg-ink text-sm font-medium">Corporate Hampers</div>
                      <div className="text-sg-muted text-xs">Welcome kits from 25 pieces</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-sg-ink2 hover:text-sg-sage transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="relative text-sg-ink2 hover:text-sg-sage transition-colors"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sg-sage text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-sg-ink2 hover:text-sg-sage transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b border-sg-border">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-display italic text-sg-ink text-[22px]"
            >
              The Soft Grid
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-sg-ink2 hover:text-sg-sage"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-8 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-sg-ink text-3xl py-2 hover:text-sg-sage transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-sg-border mt-4 pt-4">
              <p className="text-sg-muted text-xs font-medium tracking-wide mb-3">Services</p>
              <Link
                href="/services/oversized-tshirts"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 py-2 hover:text-sg-sage transition-colors"
              >
                <span>👕</span>
                <span className="font-display text-sg-ink text-2xl">Oversized T-Shirts</span>
              </Link>
              <Link
                href="/services/corporate-hampers"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 py-2 hover:text-sg-sage transition-colors"
              >
                <span>🎁</span>
                <span className="font-display text-sg-ink text-2xl">Corporate Hampers</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
