import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">BARSHIP</p>
        <div className="footer-links"><Link to="/about">About</Link><Link to="/contact">Contact</Link></div>
        <p>© {new Date().getFullYear()} Barship Fragrances</p>
      </div>
    </footer>
  )
}

export default Footer
