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
