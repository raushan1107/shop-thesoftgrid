import WhatsAppFloat from '@/components/home/WhatsAppFloat'
import Link from 'next/link'

const founders = [
  {
    initial: 'R',
    name: 'Raushan',
    role: 'Co-Founder',
    bio: 'Drives vision, client strategy, and brand partnerships. Believes every company deserves to gift with purpose.',
    bg: 'bg-sg-sage',
    text: 'text-white',
  },
  {
    initial: 'P',
    name: 'Pratibha',
    role: 'Co-Founder',
    bio: "Leads product curation and quality control. Ensures every item meets the standard we're proud to put our name on.",
    bg: 'bg-sg-sand',
    text: 'text-white',
  },
  {
    initial: 'S',
    name: 'Suchitra',
    role: 'Co-Founder',
    bio: 'Oversees operations and fulfilment. From artwork to doorstep — she makes sure it all runs on time.',
    bg: 'bg-sg-blush',
    text: 'text-sg-ink',
  },
  {
    initial: 'S',
    name: 'Suman',
    role: 'Co-Founder',
    bio: 'Manages client relationships and custom branding. Turns company briefs into gifts people remember.',
    bg: 'bg-sg-dark',
    text: 'text-white',
  },
]

const values = [
  {
    title: 'Quality First',
    desc: 'Every piece goes through strict QC before it leaves our floor. Premium cotton isn&apos;t just a label — it&apos;s a commitment.',
  },
  {
    title: 'Factory Direct',
    desc: 'No middlemen. No markups. We own the production, so you get premium quality at honest prices.',
  },
  {
    title: 'Built for Teams',
    desc: 'From 1 to 5,000+ pieces, we scale with you. Whether you&apos;re a startup or a Fortune 500, we deliver.',
  },
  {
    title: 'Made in India',
    desc: 'Proudly manufacturing in India. Supporting local production, local craft, local pride.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-sg-offwhite min-h-screen">
      {/* Hero */}
      <section className="bg-sg-offwhite border-b border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-4">Our Story</p>
          <h1
            className="font-display text-sg-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
          >
            We believe fabric should
            <br />
            <em className="italic">feel like freedom.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="font-display text-sg-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              The story
            </h2>
            <div className="space-y-4 text-sg-ink2 text-base leading-relaxed">
              <p>
                The Soft Grid started with a simple frustration — great quality
                shouldn&apos;t cost a fortune, and your brand deserves to look good on every piece.
              </p>
              <p>
                Every time we tried to order quality oversized tees in bulk, we hit the same wall:
                either the quality was mediocre, the prices were inflated by layers of middlemen,
                or the minimum quantities were impossible to meet.
              </p>
              <p>
                So we built our own answer. Direct factory relationships. Strict quality control.
                Transparent pricing. And a commitment to premium cotton that actually feels like something.
              </p>
              <p>
                Today, The Soft Grid serves startups, event teams, streetwear labels, and corporate
                procurement teams across India. But the mission is the same: premium product,
                factory-direct price, zero compromise.
              </p>
            </div>
          </div>
          <div className="bg-sg-cream rounded-2xl border border-sg-border p-8">
            <p className="font-display text-sg-sage text-5xl mb-2">2024</p>
            <p className="text-sg-ink2 font-medium text-xs tracking-wide mb-6">Founded · Noida, India</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '500+', label: 'Kits Delivered' },
                { number: '50+', label: 'Corporate Clients' },
                { number: '25', label: 'Min. Kit Order' },
                { number: '7 days', label: 'Avg. Delivery' },
              ].map((stat) => (
                <div key={stat.label} className="border border-sg-border rounded-xl p-4">
                  <p className="font-display text-sg-sage text-2xl">{stat.number}</p>
                  <p className="text-sg-muted text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sg-cream border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-10">
            <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">What We Stand For</p>
            <h2
              className="font-display text-sg-ink leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-sg-border p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sg-ink text-sm mb-3">{v.title}</h3>
                <p
                  className="text-sg-ink2 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-10">
            <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">The Team</p>
            <h2
              className="font-display text-sg-ink leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              Who we are
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {founders.map((person) => (
              <div key={person.name} className="bg-sg-cream rounded-2xl border border-sg-border p-6">
                <div className={`w-12 h-12 ${person.bg} rounded-full flex items-center justify-center mb-4`}>
                  <span className={`font-display ${person.text} text-xl font-semibold`}>
                    {person.initial}
                  </span>
                </div>
                <p className="font-semibold text-sg-ink">{person.name}</p>
                <p className="text-sg-sage text-xs font-medium mt-1">{person.role}</p>
                <p className="text-sg-ink2 text-xs leading-relaxed mt-3">{person.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-sg-muted text-sm text-center mt-8 max-w-lg mx-auto italic">
            &ldquo;Founded in Noida with one simple belief — your employees deserve to feel welcomed, valued, and seen.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sg-cream border-t border-sg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h3 className="font-display text-sg-ink text-2xl leading-tight">
              Ready to work with us?
            </h3>
            <p className="text-sg-ink2 text-sm mt-1">
              Reach out and let&apos;s build something together.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-sg-sage text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-sg-sage2 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border-2 border-sg-ink text-sg-ink font-medium text-sm px-8 py-3 rounded-full hover:bg-sg-ink hover:text-white transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
