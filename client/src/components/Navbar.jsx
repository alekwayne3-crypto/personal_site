import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [logoErr,  setLogoErr]    = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Scroll to a section on the homepage. If we're on a different page, navigate
  // home first then scroll after the page has loaded.
  const go = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      // Wait a tick for the homepage to render, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const NAV_LINKS = [
    ['Get Free Quote', 'contact'],
    ['About Us',       'about'],
    ['Reviews',        'testimonials'],
    ['Contact',        'reach-us'],
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>

      {/* ── Top bar: logo + utility links ── */}
      <div className="nb-top">
        <div className="nb-top-inner">

          <Link className="nb-logo" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {!logoErr
              ? <img src="/logo.webp" alt="Clean Bee Cleaning Co. - House Cleaning Service Tulsa OK" onError={() => setLogoErr(true)} />
              : <span className="nb-logo-emoji">🐝</span>
            }
          </Link>

          <div className="nb-utility">
            <div className="nb-location">
              <strong>Clean Bee of Greater Tulsa</strong>
              <span>Locally Owned and Operated</span>
            </div>
            <div className="nb-util-links">
              <a href="#services" onClick={e => { e.preventDefault(); go('services') }}>Service Areas</a>
              <span className="nb-util-sep">|</span>
              <a href="#contact" onClick={e => { e.preventDefault(); go('contact') }}>Join Our Team</a>
              <span className="nb-util-sep">|</span>
              <a href="#contact" onClick={e => { e.preventDefault(); go('contact') }}>Gift Cards</a>
            </div>
          </div>

          {/* Mobile phone icon + hamburger */}
          <div className="nb-mobile-icons">
            <a className="nb-mobile-phone-icon" href="tel:9187727228" aria-label="Call us">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
            </a>
            <button className="nb-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
            </button>
          </div>

        </div>
      </div>

      {/* ── Bottom bar: nav links + CTA + phone ── */}
      <div className="nb-bottom">
        <div className="nb-bottom-inner">

          <ul className="nb-nav">
            {/* Dedicated Services page link */}
            <li>
              <Link to="/services">Services</Link>
            </li>
            {/* Dedicated Why Clean Bee page link */}
            <li>
              <Link to="/why-clean-bee">Why Clean Bee</Link>
            </li>
            {NAV_LINKS.map(([label, id]) => (
              <li key={label}>
                <a href={`#${id}`} onClick={e => { e.preventDefault(); go(id) }}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="nb-actions">
            <button className="nb-cta" onClick={() => go('contact')}>
              Get a Free Quote
            </button>
            <a className="nb-phone" href="tel:9187727228">(918) 772-7228</a>
          </div>

        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`nb-mobile-menu${menuOpen ? ' open' : ''}`}>
        {/* Services page link in mobile menu */}
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        {/* Why Clean Bee page link in mobile menu */}
        <Link to="/why-clean-bee" onClick={() => setMenuOpen(false)}>Why Clean Bee</Link>
        {NAV_LINKS.map(([label, id]) => (
          <a key={label} href={`#${id}`} onClick={e => { e.preventDefault(); go(id) }}>{label}</a>
        ))}
      </div>

    </nav>
  )
}
