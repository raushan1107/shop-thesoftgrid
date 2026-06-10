import Hero from '@/components/home/Hero'
import MarqueeStrip from '@/components/home/MarqueeStrip'
import CategoryToggle from '@/components/home/CategoryToggle'
import InstagramFeed from '@/components/home/InstagramFeed'
import WhatsAppFloat from '@/components/home/WhatsAppFloat'

const stats = [
  { number: '500+', label: 'Kits Delivered' },
  { number: '50+', label: 'Corporate Clients' },
  { number: '25', label: 'Min. Kit Order' },
  { number: '7 days', label: 'Avg. Delivery' },
]

const whyUs = [
  {
    emoji: '🎨',
    title: 'Custom Branding Included',
    desc: 'Your logo, your colours, your identity — on every piece. No extra design fee.',
  },
  {
    emoji: '👁️',
    title: 'Sample Before You Commit',
    desc: 'We produce a physical sample before bulk production. See it, approve it, then we scale.',
  },
  {
    emoji: '🚚',
    title: 'PAN India Delivery',
    desc: 'We ship to every pin code. Tracked, insured, and handled with care.',
  },
  {
    emoji: '⚡',
    title: '5–10 Day Production',
    desc: 'Fast turnaround without cutting corners. Production starts the day after approval.',
  },
  {
    emoji: '🤝',
    title: 'One Point of Contact',
    desc: 'One dedicated person from quote to delivery. No back-and-forth between departments.',
  },
  {
    emoji: '📦',
    title: 'Flexible Volumes',
    desc: 'From 25 to 5,000+ pieces. We scale with your business, not the other way around.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <CategoryToggle />

      {/* Stats Bar */}
      <section className="bg-sg-ink border-t border-sg-dark2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-white text-3xl sm:text-4xl">{s.number}</p>
                <p className="text-sg-muted text-xs mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-sg-cream border-t border-sg-border py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Why The Soft Grid</p>
            <h2
              className="font-display text-sg-ink leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              Built for business.
              <br />
              <em className="italic">Designed for people.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-sg-border p-6 hover:shadow-md transition-shadow">
                <span className="text-2xl mb-4 block">{item.emoji}</span>
                <h3 className="font-semibold text-sg-ink text-sm mb-2">{item.title}</h3>
                <p className="text-sg-ink2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstagramFeed />
      <WhatsAppFloat />
    </>
  )
}
