import Link from 'next/link'
import { ExternalLink, MessageCircle } from 'lucide-react'

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/softgrid.apparels/'

export default function Footer() {
  return (
    <footer className="bg-sg-dark border-t border-sg-dark2">
      {/* Top bar */}
      <div className="border-b border-sg-dark2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display italic text-white text-xl mb-2">The Soft Grid</p>
            <p className="text-sg-muted text-sm leading-relaxed">
              Wear it your way.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sg-muted hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '918285862455'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sg-muted hover:text-white transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="text-white text-xs font-semibold tracking-wide mb-4">Shop</p>
            <ul className="space-y-2">
              {[
                { label: 'All Products', href: '/products' },
                { label: 'Oversized Tees', href: '/products?category=Oversized' },
                { label: 'Graphic Tees', href: '/products?category=Graphic+Tee' },
                { label: 'Polo', href: '/products?category=Polo' },
                { label: 'Essentials', href: '/products?category=Essentials' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sg-muted hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-xs font-semibold tracking-wide mb-4">Services</p>
            <ul className="space-y-2">
              {[
                { label: 'Oversized T-Shirts', href: '/services/oversized-tshirts' },
                { label: 'Corporate Hampers', href: '/services/corporate-hampers' },
                { label: 'Custom Orders', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sg-muted hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white text-xs font-semibold tracking-wide mb-4">Company</p>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'FAQs', href: '/faqs' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sg-muted hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <p className="text-sg-muted text-sm">Bihar / Noida, India</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sg-muted text-xs">
          © {new Date().getFullYear()} The Soft Grid. All rights reserved.
        </p>
        <p className="text-sg-muted text-xs">
          Premium Cotton · Factory Direct · Pan India
        </p>
      </div>
    </footer>
  )
}
