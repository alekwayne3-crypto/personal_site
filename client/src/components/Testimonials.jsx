import { useState, useEffect } from 'react'

const REVIEWS = [
  {
    initials: 'SM', name: 'Sarah M.', location: 'South Tulsa, OK', rating: 5,
    text: "Clean Bee has completely transformed my home. The deep cleaning was incredible — every single nook spotless. I've tried three other Tulsa services and none come close. The buzz is absolutely real.",
  },
  {
    initials: 'MR', name: 'Mike R.', location: 'Broken Arrow, OK', rating: 5,
    text: "Hired them for move-out cleaning and got every penny of our deposit back. Professional, on time, and left the place better than when we first moved in. Cannot recommend them enough.",
  },
  {
    initials: 'JK', name: 'Jennifer K.', location: 'Midtown Tulsa, OK', rating: 5,
    text: "Best recurring cleaning in Tulsa, hands down. They remember all my preferences, always on time, and my house smells amazing after every visit. Three years a customer and I'll never switch.",
  },
  {
    initials: 'DL', name: 'David L.', location: 'Owasso, OK', rating: 5,
    text: "Post-construction cleanup was phenomenal. Dust everywhere and they made it look brand new. Couldn't believe how thorough the team was. Will absolutely call them again.",
  },
  {
    initials: 'AT', name: 'Angela T.', location: 'Jenks, OK', rating: 5,
    text: "Love the eco-friendly products — our dogs and toddler are sensitive to chemicals. We get a spotless home with zero worries. The team is kind, efficient, and totally trustworthy.",
  },
  {
    initials: 'CR', name: 'Carlos R.', location: 'East Tulsa, OK', rating: 5,
    text: "Booking was easy, they showed up right on time, and the clean was excellent. Fair pricing, great communication. Finally found a cleaning company I can actually count on.",
  },
]

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e) => { setIsMobile(e.matches); setPage(0) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const perPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(REVIEWS.length / perPage)

  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages)
  const next = () => setPage(p => (p + 1) % totalPages)

  const visible = REVIEWS.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="pill pill-white-yellow">Customer Reviews</span>
          <h2 className="h2 h2-dark">Tulsa Loves Clean Bee</h2>
          <p className="lead lead-muted">
            Don&apos;t take our word for it — here&apos;s what our neighbors across
            greater Tulsa are saying.
          </p>
        </div>

        <div className="testi-google-badge">
          <div className="testi-google-badge-inner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="testi-google-text">
              <span className="testi-google-label">Google Reviews</span>
              <span className="testi-google-stars">★★★★★</span>
            </div>
          </div>
        </div>

        <div className="testi-carousel">
          <button className="testi-arrow testi-arrow-left" onClick={prev} aria-label="Previous">
            &#8592;
          </button>

          <div className="testimonials-grid">
            {visible.map((r) => (
              <div className="testi-card" key={r.name}>
                <div className="testi-quote-mark">&ldquo;</div>
                <div className="testi-stars">{'★'.repeat(r.rating)}</div>
                <p className="testi-text">{r.text}</p>
                <div className="testi-divider" />
                <div className="testi-author">
                  <div className="testi-avatar">{r.initials}</div>
                  <div>
                    <div className="testi-name">{r.name}</div>
                    <div className="testi-loc">📍 {r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testi-arrow testi-arrow-right" onClick={next} aria-label="Next">
            &#8594;
          </button>
        </div>

        <div className="testi-nav-arrows">
          <button className="testi-nav-arrow" onClick={prev} aria-label="Previous">&#8592;</button>
          <span className="testi-nav-page">{page + 1} / {totalPages}</span>
          <button className="testi-nav-arrow" onClick={next} aria-label="Next">&#8594;</button>
        </div>

      </div>
    </section>
  )
}
