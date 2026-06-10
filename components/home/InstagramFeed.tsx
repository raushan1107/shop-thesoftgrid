import { ExternalLink } from 'lucide-react'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/softgrid.apparels/'

const igPosts = [
  { id: 1, src: '/instagram/ig-1.jpg', alt: 'Instagram post 1' },
  { id: 2, src: '/instagram/ig-2.jpg', alt: 'Instagram post 2' },
  { id: 3, src: '/instagram/ig-3.jpg', alt: 'Instagram post 3' },
  { id: 4, src: '/instagram/ig-4.jpg', alt: 'Instagram post 4' },
  { id: 5, src: '/instagram/ig-5.jpg', alt: 'Instagram post 5' },
  { id: 6, src: '/instagram/ig-6.jpg', alt: 'Instagram post 6' },
]

export default function InstagramFeed() {
  return (
    <section className="bg-sg-offwhite py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="font-display text-sg-ink leading-tight mb-2"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
          >
            Made to be shared.
          </h2>
          <p className="text-sg-muted text-sm">@softgrid.apparels on Instagram</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {igPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-2xl"
            >
              <PlaceholderImage name={`Post ${post.id}`} aspectRatio="1/1" />
              <div className="absolute inset-0 bg-sg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                <div className="bg-white/90 rounded-full p-2">
                  <ExternalLink size={20} className="text-sg-ink" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-sg-ink text-sg-ink font-medium px-8 py-3 rounded-full hover:bg-sg-ink hover:text-white transition-colors text-sm"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
