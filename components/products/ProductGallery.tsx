'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div
        className="relative group cursor-zoom-in rounded-2xl overflow-hidden border border-sg-border"
        onClick={() => setLightboxOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <PlaceholderImage aspectRatio="3/4" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-sg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white rounded-full p-2 shadow-md">
            <ZoomIn size={24} className="text-sg-ink" />
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 4).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`border-2 transition-colors overflow-hidden rounded-xl ${
              activeIndex === i ? 'border-sg-sage' : 'border-sg-border hover:border-sg-ink2'
            }`}
          >
            <PlaceholderImage aspectRatio="1/1" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-2xl bg-white border-sg-border p-4 rounded-3xl">
          <DialogTitle className="sr-only">{productName} — Full Image</DialogTitle>
          <PlaceholderImage aspectRatio="3/4" className="rounded-2xl" />
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-3">
              {images.slice(0, 4).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`border-2 transition-colors overflow-hidden rounded-xl ${
                    activeIndex === i ? 'border-sg-sage' : 'border-sg-border'
                  }`}
                >
                  <PlaceholderImage aspectRatio="1/1" />
                </button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
