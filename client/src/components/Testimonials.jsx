import { useState, useEffect } from 'react'

const REVIEWS = [
  {
    initials: 'SM', name: 'Sarah M.', location: 'South Tulsa, OK', rating: 5,
    text: "My husband walked in after work and genuinely thought I hired a contractor. That is how different the kitchen looked. Two kids under five so the house was a disaster and they got things I had completely stopped trying to clean: grout, behind the stove, inside the fridge. Booking them again next month.",
  },
  {
    initials: 'MR', name: 'Mike R.', location: 'Broken Arrow, OK', rating: 5,
    text: "Got our full $1,400 deposit back. After the state we left that place in I genuinely was not expecting that. Called Clean Bee last minute before our move-out inspection and they fit us in same week. Every wall scuff, every carpet stain, gone. Landlord texted us after saying it was the cleanest move-out he had seen.",
  },
  {
    initials: 'JK', name: 'Jennifer K.', location: 'Midtown Tulsa, OK', rating: 5,
    text: "Five stars is not enough. Been on a bi-weekly schedule for close to two years and I have never once had to ask them to redo something. I work from home so I am usually here when they clean. It never feels weird. They just know my preferences at this point without me saying anything. Referred them to at least five people.",
  },
  {
    initials: 'DL', name: 'David L.', location: 'Owasso, OK', rating: 5,
    text: "Drywall dust everywhere after our bathroom remodel. Inside cabinets, on ceiling fans, in rooms that had nothing to do with the project. They spent five hours and I genuinely could not find a single thing they missed. Already have them coming back monthly. Worth every dollar.",
  },
  {
    initials: 'AT', name: 'Angela T.', location: 'Jenks, OK', rating: 5,
    text: "The house smelled clean without that chemical smell that gives me a headache. That alone was worth it. Our oldest has skin allergies so the non-toxic products were a requirement and they had no problem with that. Team was friendly and professional the whole time. We have two dogs and a toddler so this has been a lifesaver.",
  },
  {
    initials: 'CR', name: 'Carlos R.', location: 'East Tulsa, OK', rating: 5,
    text: "Two other companies let me down before this. One ghosted me day of, the other argued when I said the job was not done right. Clean Bee showed up at 8am exactly, finished in under three hours, and the place looked great. Texted the night before to confirm and followed up after. Simple stuff but nobody else does it.",
  },
]

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
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
            Hundreds of families have experienced the Clean Bee difference. Here&apos;s what they think.
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
