export default function MarqueeStrip() {
  const text =
    'Premium Cotton Tees · Custom Printing · Ships Across India · Corporate Gifting · Starting ₹ 1 piece · Oversized Fits · '

  return (
    <div className="bg-sg-sage text-white overflow-hidden py-3">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 35s linear infinite;
          display: flex;
          white-space: nowrap;
          width: max-content;
        }
      `}</style>
      <div className="marquee-track">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-medium text-[13px] mx-2"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
