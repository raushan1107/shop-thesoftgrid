import { NextRequest } from 'next/server'
import { filterProducts } from '@/lib/products'
import type { ProductCategory, ProductGSM, PrintType, SortOption } from '@/types'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const filters = {
    search: searchParams.get('search') || undefined,
    category: (searchParams.get('category') as ProductCategory) || 'All',
    gsm: (searchParams.get('gsm') as ProductGSM) || 'All',
    printType: (searchParams.get('printType') as PrintType) || 'All',
    color: searchParams.get('color') || undefined,
    sort: (searchParams.get('sort') as SortOption) || 'Featured',
  }

  const products = filterProducts(filters)

  return Response.json({ products, total: products.length })
}
