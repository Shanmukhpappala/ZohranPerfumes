import homepageImage from '../Images/homepageimg.png'

function Hero() {
  return (
    <section className="hero-section" style={{ '--hero-image': `url(${homepageImage})` }}>
      <div className="hero-content">
        <div className="hero-copy reveal-up">
          <p className="hero-eyebrow">A Legacy in Every Drop</p>
          <h1 className="hero-heading">Authentic Fragrance.<br />Timeless Tradition.</h1>
          <p className="hero-description">Discover a refined collection of perfumes, attars, bakhoor, and agarbattis, crafted around the beauty of fragrance and tradition.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
