interface PlaceholderImageProps {
  name?: string
  className?: string
  aspectRatio?: '1/1' | '3/4' | '4/3' | '16/9'
}

export default function PlaceholderImage({
  className = '',
  aspectRatio = '3/4',
}: PlaceholderImageProps) {
  const ratioClass =
    aspectRatio === '1/1'
      ? 'aspect-square'
      : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : 'aspect-video'

  return (
    <div
      className={`${ratioClass} bg-gradient-to-br from-sg-blush via-sg-cream to-sg-border flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Clothing hanger icon */}
      <svg
        viewBox="0 0 48 48"
        className="w-12 h-12 text-sg-sand opacity-40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="10" r="4" />
        <path d="M24 14v6" />
        <path d="M6 38l18-14 18 14" />
        <path d="M2 38h44" />
      </svg>
    </div>
  )
}
