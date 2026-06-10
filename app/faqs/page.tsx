'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import WhatsAppFloat from '@/components/home/WhatsAppFloat'

const faqs = [
  {
    category: 'Ordering',
    questions: [
      {
        q: 'What is the minimum order quantity?',
        a: 'For individual orders, there is no minimum — you can order from 1 piece. For custom/bulk orders with corporate gifting, the minimum is 25 pieces per style. Contact us on WhatsApp to discuss your specific requirements.',
      },
      {
        q: 'How do I place a custom order?',
        a: 'Simply reach out on WhatsApp with your requirements — quantity, fabric preference, print type, colours, and design files. We\'ll send a quote within 24 hours and proceed from there.',
      },
      {
        q: 'Can I order multiple designs in one batch?',
        a: 'Yes! You can split your order across different designs as long as each variant meets our minimum run of 25 pieces for custom printing.',
      },
      {
        q: 'Do you offer sample orders?',
        a: 'Yes, we offer pre-production samples before bulk orders. Sample cost is charged separately and adjusted against your bulk order invoice upon confirmation.',
      },
      {
        q: 'What file formats do you accept for print-ready artwork?',
        a: 'We accept AI, PDF, PSD, and PNG (300 DPI minimum). For embroidery, DST or EMB files are preferred. Our design team can also assist with file preparation.',
      },
    ],
  },
  {
    category: 'Fabric Quality',
    questions: [
      {
        q: 'What fabric weights do you offer?',
        a: 'We offer four fabric weights: Lightweight (great for summer events and everyday wear), Everyday (our all-rounder for all seasons), Premium (our most popular — structured and premium hand-feel), and Heavy (maximum weight for maximum impact).',
      },
      {
        q: 'Which fabric weight should I choose?',
        a: 'Lightweight is perfect for summer or high-volume orders. Everyday is our all-rounder. Premium is our most popular weight — premium feel with great print quality. Heavy is ideal for structured silhouettes and embroidery.',
      },
      {
        q: 'Is the fabric pre-shrunk?',
        a: 'Yes, all our fabrics are pre-shrunk during production to minimise post-wash shrinkage. You can expect less than 3% shrinkage after the first wash.',
      },
      {
        q: 'What type of cotton do you use?',
        a: 'We use 100% ring-spun cotton for our tees and 100% pique cotton for our polos. Ring-spun cotton gives a softer hand-feel and better print adhesion.',
      },
      {
        q: 'Do you offer organic or sustainable fabric options?',
        a: 'We\'re actively working on GOTS-certified organic cotton options. Contact us to discuss requirements — we can source certified materials for larger orders.',
      },
    ],
  },
  {
    category: 'Printing',
    questions: [
      {
        q: 'What printing methods do you offer?',
        a: 'We offer Screen Print (best for 2–4 colour designs at high volume), DTF Transfer (full colour, no minimums per colour), All-Over Print (edge-to-edge sublimation), and Embroidery (textured, premium finish).',
      },
      {
        q: 'How many colours can I print?',
        a: 'With DTF and All-Over print, there are no colour limits — we can reproduce full-colour artwork including gradients and photographs. Screen printing is most cost-effective for up to 4–5 spot colours.',
      },
      {
        q: 'Will the print crack or fade after washing?',
        a: 'Our prints are tested for 40+ wash cycles. We use premium inks and proper curing processes. DTF prints have excellent wash fastness; screen prints last even longer when cared for properly.',
      },
      {
        q: 'Can I print on both front and back?',
        a: 'Yes. Front and back prints are available across all methods. Each placement is priced separately, so let us know your requirements when requesting a quote.',
      },
      {
        q: 'What is the maximum print area?',
        a: 'For chest prints: up to 30cm × 35cm. All-over prints cover the entire garment. Exact dimensions depend on size; we\'ll confirm your print area when reviewing artwork.',
      },
    ],
  },
  {
    category: 'Delivery',
    questions: [
      {
        q: 'Do you deliver pan India?',
        a: 'Yes, we deliver to all pin codes across India via reputed courier partners with full tracking.',
      },
      {
        q: 'What is the standard production turnaround?',
        a: 'Standard turnaround is 10–12 days after design approval and advance payment. Business tier (100+ pcs) is 7–9 days. Enterprise (500+) is 5–7 days. Express options available on request.',
      },
      {
        q: 'How is the order shipped?',
        a: 'We ship via our partner couriers (Delhivery, DTDC, Blue Dart). For large enterprise orders, we can coordinate with your preferred logistics provider.',
      },
      {
        q: 'What if my order arrives damaged?',
        a: 'We photograph every batch before dispatch. If you receive damaged goods, contact us within 48 hours of delivery with photos and we\'ll arrange a replacement at no cost.',
      },
    ],
  },
  {
    category: 'Payment',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI (Google Pay, PhonePe, Paytm), NEFT/RTGS bank transfer, and cheque for large orders. All payment details are shared after order confirmation.',
      },
      {
        q: 'Is advance payment required?',
        a: 'Yes, we require 50% advance before production begins, with the remaining 50% due before dispatch. For enterprise clients with a track record, credit terms can be discussed.',
      },
      {
        q: 'Do you provide a GST invoice?',
        a: 'Yes, we provide proper GST invoices for all orders. Share your GSTIN at the time of order for business invoicing.',
      },
      {
        q: 'Can I get a refund if I cancel my order?',
        a: 'Cancellation within 24 hours of order confirmation is fully refunded. After production has started, only the advance amount minus material costs can be refunded. Custom production orders are non-refundable once fabric is cut.',
      },
    ],
  },
]

export default function FAQsPage() {
  const [search, setSearch] = useState('')

  const filtered = faqs.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        !search ||
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.questions.length > 0)

  return (
    <div className="bg-sg-offwhite min-h-screen">
      {/* Header */}
      <section className="border-b border-sg-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-sg-sage text-sm font-medium tracking-wide mb-2">Help & Support</p>
          <h1
            className="font-display text-sg-ink leading-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Frequently asked
            <br />
            <em className="italic">questions.</em>
          </h1>

          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sg-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-white border border-sg-border text-sg-ink pl-11 pr-4 py-4 rounded-xl placeholder:text-sg-muted focus:outline-none focus:border-sg-sage text-sm"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sg-muted hover:text-sg-ink text-xs font-medium"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-display text-sg-ink2 text-2xl italic">No results found</p>
            <p className="text-sg-muted text-sm mt-2">Try a different search term</p>
          </div>
        ) : (
          filtered.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-display text-sg-sage text-xl italic mb-4">{cat.category}</h2>
              <Accordion>
                {cat.questions.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.category}-${i}`}
                    className="border-sg-border"
                  >
                    <AccordionTrigger className="text-sg-ink text-sm font-medium text-left hover:text-sg-sage hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sg-ink2 text-sm leading-relaxed pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        )}
      </div>

      {/* Still have questions */}
      <section className="border-t border-sg-border bg-sg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h3 className="font-display text-sg-ink text-2xl italic mb-2">
            Still have questions?
          </h3>
          <p className="text-sg-ink2 text-sm mb-6">
            We&apos;re available on WhatsApp within 2–4 hours.
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '918285862455'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sg-sage text-white font-medium text-sm px-8 py-4 rounded-full hover:bg-sg-sage2 transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
