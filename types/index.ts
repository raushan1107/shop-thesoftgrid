export interface Review {
  name: string
  rating: number
  comment: string
  date: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: 'Oversized' | 'Graphic Tee' | 'Polo' | 'Essentials'
  gsm: 180 | 200 | 220 | 240
  fit: string
  material: string
  printOptions: string[]
  colors: string[]
  price: number
  moq: number
  tags: string[]
  description: string
  images: string[]
  isNew: boolean
  isFeatured: boolean
  printType: string
  reviews: Review[]
}

export interface CartItem {
  productId: string
  name: string
  slug: string
  price: number
  quantity: number
  customNote?: string
  color?: string
  printType?: string
}

export interface ContactForm {
  name: string
  phone: string
  email: string
  message: string
  type: string
}

export type ProductCategory = 'All' | 'Oversized' | 'Graphic Tee' | 'Polo' | 'Essentials'
export type ProductGSM = 'All' | '180' | '200' | '220' | '240'
export type PrintType = 'All' | 'Chest Print' | 'All-Over' | 'Embroidery' | 'No Print'
export type SortOption = 'Featured' | 'Price Low-High' | 'Price High-Low' | 'Newest'
