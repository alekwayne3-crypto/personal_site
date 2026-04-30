const TEXT = "Voted Tulsa's #1 Maid Company In 2025"
const SEP = <span className="marquee-bee">🐝</span>

const items = Array(10).fill(null)

export default function CalloutBanner() {
  return (
    <div className="callout-banner">
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((_, i) => (
            <span className="marquee-item" key={i}>
              {TEXT} {SEP}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((_, i) => (
            <span className="marquee-item" key={i}>
              {TEXT} {SEP}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
