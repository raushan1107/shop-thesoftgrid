'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useState } from 'react'

const categories = ['All', 'Oversized', 'Graphic Tee', 'Polo', 'Essentials']
const gsmOptions = ['All', '180', '200', '220', '240']
const printTypes = ['All', 'Chest Print', 'All-Over', 'Embroidery', 'No Print']
const sortOptions = ['Featured', 'Price Low-High', 'Price High-Low', 'Newest']
const colors = [
  { id: 'black', label: 'Black', hex: '#1A1A1A' },
  { id: 'white', label: 'White', hex: '#FAF9F7' },
  { id: 'terracotta', label: 'Terracotta', hex: '#C1440E' },
  { id: 'olive', label: 'Olive', hex: '#6B7C52' },
  { id: 'navy', label: 'Navy', hex: '#1B2A4A' },
  { id: 'sand', label: 'Sand', hex: '#C2B280' },
]

export default function ProductFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [mobileOpen, setMobileOpen] = useState(false)

  function update(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'All' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`)
  }

  function clearAll() {
    router.push(pathname)
  }

  const active = {
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || 'All',
    gsm: searchParams.get('gsm') || 'All',
    printType: searchParams.get('printType') || 'All',
    color: searchParams.get('color') || '',
    sort: searchParams.get('sort') || 'Featured',
  }

  const hasFilters =
    active.search ||
    (active.category !== 'All') ||
    (active.gsm !== 'All') ||
    (active.printType !== 'All') ||
    active.color

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <p className="text-sg-ink text-xs font-semibold tracking-wide mb-3">Search</p>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-sg-muted" />
          <input
            type="text"
            value={active.search}
            onChange={(e) => update('search', e.target.value)}
            placeholder="Search products..."
            className="w-full bg-sg-offwhite border border-sg-border text-sg-ink text-sm pl-8 pr-3 py-2 rounded-xl placeholder:text-sg-muted focus:outline-none focus:border-sg-sage"
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <p className="text-sg-ink text-xs font-semibold tracking-wide mb-3">Category</p>
        <div className="flex flex-col gap-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => update('category', c)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                active.category === c
                  ? 'bg-sg-sage text-white font-medium'
                  : 'text-sg-ink2 hover:text-sg-ink hover:bg-sg-offwhite'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Fabric Quality */}
      <div>
        <p className="text-sg-ink text-xs font-semibold tracking-wide mb-3">Fabric Quality</p>
        <div className="flex flex-wrap gap-2">
          {gsmOptions.map((g) => (
            <button
              key={g}
              onClick={() => update('gsm', g)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                active.gsm === g
                  ? 'bg-sg-sage text-white border-sg-sage'
                  : 'border-sg-border text-sg-ink2 hover:border-sg-sage hover:text-sg-sage'
              }`}
            >
              {g === 'All' ? 'All' : g === '180' ? 'Lightweight' : g === '200' ? 'Everyday' : g === '220' ? 'Premium' : 'Heavy'}
            </button>
          ))}
        </div>
      </div>

      {/* Print Type */}
      <div>
        <p className="text-sg-ink text-xs font-semibold tracking-wide mb-3">Print Type</p>
        <div className="flex flex-col gap-1">
          {printTypes.map((pt) => (
            <button
              key={pt}
              onClick={() => update('printType', pt)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                active.printType === pt
                  ? 'bg-sg-sage text-white font-medium'
                  : 'text-sg-ink2 hover:text-sg-ink hover:bg-sg-offwhite'
              }`}
            >
              {pt}
            </button>
          ))}
        </div>
      </div>

      {/* Colours */}
      <div>
        <p className="text-sg-ink text-xs font-semibold tracking-wide mb-3">Colour</p>
        <div className="flex flex-wrap gap-2">
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => update('color', active.color === c.id ? '' : c.id)}
              title={c.label}
              className={`w-7 h-7 rounded-full border-2 transition-all ${
                active.color === c.id ? 'border-sg-sage scale-110' : 'border-sg-border'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <p className="text-sg-ink text-xs font-semibold tracking-wide mb-3">Sort By</p>
        <div className="flex flex-col gap-1">
          {sortOptions.map((s) => (
            <button
              key={s}
              onClick={() => update('sort', s)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                active.sort === s
                  ? 'text-sg-sage font-medium'
                  : 'text-sg-ink2 hover:text-sg-ink hover:bg-sg-offwhite'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="w-full text-sm text-sg-muted hover:text-sg-sage border border-sg-border rounded-xl py-2 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile filter toggle */}
      <div className="lg:hidden border-b border-sg-border px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 text-sg-ink text-sm font-medium"
        >
          <SlidersHorizontal size={14} />
          Filters {hasFilters && <span className="text-sg-sage">•</span>}
        </button>
        <select
          value={active.sort}
          onChange={(e) => update('sort', e.target.value)}
          className="bg-sg-offwhite border border-sg-border text-sg-ink text-xs px-2 py-1 rounded-lg focus:outline-none focus:border-sg-sage"
        >
          {sortOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-20 self-start">
        <div className="border-b border-sg-border pb-4 mb-6 flex items-center justify-between">
          <p className="text-sg-ink text-xs font-semibold tracking-wide">Filters</p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-sg-muted hover:text-sg-sage transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
        <FilterContent />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-sg-ink/40" onClick={() => setMobileOpen(false)} />
          <div className="w-72 bg-white border-l border-sg-border overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-sg-border">
              <p className="text-sg-ink font-semibold text-sm">Filters</p>
              <button onClick={() => setMobileOpen(false)} className="text-sg-muted hover:text-sg-ink">
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
