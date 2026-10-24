import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, MessageCircle, X } from 'lucide-react'
import logo from '../Images/logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Collection', to: '/#collections' },
  { label: 'Special Oud', to: '/special-oud' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const closeMenu = () => setIsOpen(false)
  const goToCollection = (event) => {
    event.preventDefault()
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' }), 0)
      return
    }
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })
  }
  const renderLink = (link, mobile = false) => link.label === 'Collection'
    ? <a key={`${link.label}-${mobile}`} href="/#collections" onClick={goToCollection} className={mobile ? 'mobile-nav-link' : 'nav-link'}>{link.label}</a>
    : <NavLink key={link.to} to={link.to} onClick={closeMenu} className={({ isActive }) => `${mobile ? 'mobile-nav-link' : 'nav-link'} ${isActive ? (mobile ? 'mobile-nav-link-active' : 'nav-link-active') : ''}`}>{link.label}</NavLink>

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/" onClick={closeMenu} className="brand-lockup" aria-label="BARSHIP home">
          <img src={logo} alt="BARSHIP" className="brand-logo" />
          <span className="brand-name">BARSHIP</span>
        </Link>

        <div className="desktop-nav">
          {links.map((link) => renderLink(link))}
        </div>

        <div className="nav-actions">
          <a href={`https://wa.me/919999999999?text=${encodeURIComponent('Hi, I would like to know more about BARSHIP.')}`} className="whatsapp-button" aria-label="WhatsApp contact">
            <MessageCircle size={16} strokeWidth={1.7} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <button type="button" className="menu-button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X size={21} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </nav>

      {isOpen && <div id="mobile-menu" className="mobile-menu"><div className="mobile-menu-inner">
        {links.map((link) => renderLink(link, true))}
      </div></div>}
    </header>
  )
}

export default Navbar
