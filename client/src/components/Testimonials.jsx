import { useState, useEffect } from 'react'

const REVIEWS = [
  {
    initials: 'SM', name: 'Sarah M.', location: 'South Tulsa, OK', rating: 5,
    text: "Honestly did not expect to be this impressed. We have two little kids and the house was... a lot. They got things I had completely given up on: the grout in the master bath, behind the stove, inside the fridge. My husband walked in after work and thought we had gotten new appliances. Booking again next month for sure.",
  },
  {
    initials: 'MR', name: 'Mike R.', location: 'Broken Arrow, OK', rating: 5,
    text: "We were stressed trying to get out of our old place on a deadline and called Clean Bee kind of last minute. They fit us in, got every wall scuff and every carpet stain, and we got our full deposit back. $1,400. Landlord texted us saying it was the cleanest move-out they'd ever seen. I wasn't expecting that.",
  },
  {
    initials: 'JK', name: 'Jennifer K.', location: 'Midtown Tulsa, OK', rating: 5,
    text: "I've had them coming every two weeks for almost two years. I work from home so I'm usually here when they clean and it never feels awkward. The team is just really easy to be around. They figured out early on that I'm particular about my kitchen and never have to be reminded. I've referred them to at least five people at this point.",
  },
  {
    initials: 'DL', name: 'David L.', location: 'Owasso, OK', rating: 5,
    text: "Had them come in after we finished a full bathroom remodel. There was drywall dust on literally everything: inside cabinets, on ceiling fans, in rooms that weren't even part of the project. They spent about five hours and I could not find a single thing they missed. Already scheduled them to come back monthly.",
  },
  {
    initials: 'AT', name: 'Angela T.', location: 'Jenks, OK', rating: 5,
    text: "I was nervous about having strangers in the house with our dogs and a two year old. They use non-toxic products which was a dealbreaker for us since our oldest has skin allergies. The team was wonderful and I felt totally comfortable the whole time. House smelled clean without that harsh chemical smell I hate. Really glad I found them.",
  },
  {
    initials: 'CR', name: 'Carlos R.', location: 'East Tulsa, OK', rating: 5,
    text: "I had been burned by two other cleaning companies before this. Clean Bee showed up at exactly 8am, were done in under three hours, and the place looked great. No drama, no excuses. They texted the night before to confirm and followed up after to make sure I was happy. Small things but they matter. Not going anywhere.",
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
