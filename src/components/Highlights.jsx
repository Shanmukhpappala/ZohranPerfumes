import { Flame, Gem, Sparkles, Wind } from 'lucide-react'

const highlights = [
  { label: 'Authentic Oud', Icon: Flame },
  { label: 'Premium Attars', Icon: Gem },
  { label: 'Traditional Bakhoor', Icon: Wind },
  { label: 'Fine Perfumes', Icon: Sparkles },
]

function Highlights() {
  return (
    <section className="highlights-section" aria-label="Barship fragrance collections">
      <div className="highlights-grid">
        {highlights.map(({ label, Icon }) => <div className="highlight-item" key={label}>
          <Icon size={23} strokeWidth={1.35} aria-hidden="true" />
          <span>{label}</span>
        </div>)}
      </div>
    </section>
  )
}

export default Highlights
