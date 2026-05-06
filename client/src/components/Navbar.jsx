import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [menuClose,     setMenuClose]     = useState(false)
  const [logoErr,       setLogoErr]       = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  const closeMenu = () => {
    setMenuClose(true)
    setTimeout(() => { setMenuOpen(false); setMenuClose(false) }, 200)
  }

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const obs = new IntersectionObserver(([e]) => setFooterVisible(e.isIntersecting), { threshold: 0.25 })
    obs.observe(footer)
    return () => obs.disconnect()
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
    ['About Clean Bee', 'about'],
    ['Reviews',         'testimonials'],
    ['Contact',         'reach-us'],
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${footerVisible ? ' footer-visible' : ''}`}>

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
            <button className="nb-toggle" onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)} aria-label="Menu">
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
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/why-clean-bee">Why Clean Bee</Link>
            </li>
            <li>
              <Link to="/get-a-quote">Get Free Quote</Link>
            </li>
            {NAV_LINKS.map(([label, id]) => (
              <li key={label}>
                <a href={`#${id}`} onClick={e => { e.preventDefault(); go(id) }}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="nb-actions">
            <Link className="nb-cta" to="/get-a-quote">Get a Free Quote</Link>
            <a className="nb-phone" href="tel:9187727228">(918) 772-7228</a>
          </div>

        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`nb-mobile-menu${menuOpen ? ' open' : ''}${menuClose ? ' closing' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'nb-mobile-active' : ''} onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'nb-mobile-active' : ''} onClick={closeMenu}>Our Services</Link>
        <Link to="/get-a-quote" className={location.pathname === '/get-a-quote' ? 'nb-mobile-active' : ''} onClick={closeMenu}>Get Free Quote</Link>
        <Link to="/why-clean-bee" className={location.pathname === '/why-clean-bee' ? 'nb-mobile-active' : ''} onClick={closeMenu}>Why Clean Bee</Link>
        <a href="#testimonials" onClick={e => { e.preventDefault(); go('testimonials') }}>Customer Reviews</a>
        <Link to="/about" className={location.pathname === '/about' ? 'nb-mobile-active' : ''} onClick={closeMenu}>About Us</Link>
        <a href="#reach-us" onClick={e => { e.preventDefault(); go('reach-us') }}>Contact Us</a>
        <Link className="nb-mobile-book-btn" to="/get-a-quote" onClick={closeMenu}>Book Now →</Link>
        <div className="nb-mobile-socials">
          <a href="https://www.instagram.com/cleanbeetulsa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/61588860914607/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@clean.bee.of.tuls" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

    </nav>
  )
}
