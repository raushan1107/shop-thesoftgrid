import productsData from '@/data/products.json'
import type { Product, ProductCategory, ProductGSM, PrintType, SortOption } from '@/types'

export const products: Product[] = productsData as Product[]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
}

export interface FilterOptions {
  search?: string
  category?: ProductCategory
  gsm?: ProductGSM
  printType?: PrintType
  color?: string
  sort?: SortOption
}

export function filterProducts(filters: FilterOptions): Product[] {
  let result = [...products]

  if (filters.search) {
    const q = filters.search.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  if (filters.category && filters.category !== 'All') {
    result = result.filter((p) => p.category === filters.category)
  }

  if (filters.gsm && filters.gsm !== 'All') {
    result = result.filter((p) => p.gsm === parseInt(filters.gsm as string))
  }

  if (filters.printType && filters.printType !== 'All') {
    result = result.filter(
      (p) =>
        p.printType === filters.printType ||
        p.printOptions.includes(filters.printType as string)
    )
  }

  if (filters.color) {
    result = result.filter((p) => p.colors.includes(filters.color as string))
  }

  switch (filters.sort) {
    case 'Price Low-High':
      result.sort((a, b) => a.price - b.price)
      break
    case 'Price High-Low':
      result.sort((a, b) => b.price - a.price)
      break
    case 'Newest':
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      break
    default:
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
  }

  return result
}
