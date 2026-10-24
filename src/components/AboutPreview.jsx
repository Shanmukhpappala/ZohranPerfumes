import { Link } from 'react-router-dom'

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-rule" aria-hidden="true" />
      <div className="about-kicker">The World of</div>
      <div className="about-layout">
        <h2>Authentic<br />Fragrance</h2>
        <div className="about-copy">
          <p>BARSHIP honours the evocative ritual of perfume. Each bottle is selected for richness, character and the quiet confidence it leaves behind.</p>
          <Link to="/about" className="text-link">Discover our story <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
