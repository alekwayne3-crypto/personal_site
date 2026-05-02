import { useState } from 'react'

const SERVICES = [
  {
    icon: '🧹',
    title: 'Standard Cleaning',
    desc: 'Regular maintenance cleaning to keep every room in your home fresh, tidy, and consistently spotless.',
    features: ['Kitchen Surfaces Cleaned', 'Bathrooms Cleaned and Sanitized', 'Bedrooms Tidied and Beds Made', 'Floors Vacuumed and Mopped', 'Dusting of Surfaces'],
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    desc: 'A thorough, top-to-bottom scrub — ideal for seasonal refreshes, before guests arrive, or as a first clean.',
    features: ['Inside appliances', 'Baseboards & trim', 'Cabinet fronts', 'Grout & tile scrubbing'],
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    desc: 'Professional cleaning for offices, retail spaces, and small businesses — keep your workplace spotless.',
    features: ['Office & workspace', 'Restroom sanitation', 'Floor care', 'Flexible scheduling'],
  },
  {
    icon: '🔄',
    title: 'Recurring Cleaning',
    desc: 'Weekly, bi-weekly, or monthly visits at a discounted rate. Same great team, every time.',
    features: ['Flexible scheduling', 'Loyalty discounts', 'Consistent crew', 'No contracts'],
  },
  {
    icon: '📦',
    title: 'Move-In / Move-Out',
    desc: 'Guarantee your full deposit back or start fresh in a spotless new home. We cover every corner.',
    features: ['Inside closets & cabinets', 'Walls & switches', 'Window sills', 'Full appliance clean'],
  },
  {
    icon: '🏗️',
    title: 'Post-Construction',
    desc: 'Specialized removal of construction dust, debris, and residue after a renovation or new build.',
    features: ['Construction dust', 'Window & glass clean', 'Floor polish', 'Detail vacuuming'],
  },
]

export default function Services() {
  const [open, setOpen] = useState(new Set())
  const toggle = (i) => setOpen(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s })
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="pill pill-white-yellow">Our Services</span>
          <h2 className="h2 h2-dark">Cleaning Built Around You</h2>
          <p className="lead lead-muted">
            From routine upkeep to one-time deep cleans, Clean Bee offers flexible
            packages designed for every Tulsa homeowner.
          </p>
        </div>

        <div className="services-accordion">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`svc-item${open.has(i) ? ' svc-item--open' : ''}`}
            >
              <button className="svc-header" onClick={() => toggle(i)}>
                <div className="svc-header-left">
                  <span className="svc-icon">{s.icon}</span>
                  <span className="svc-title">{s.title}</span>
                </div>
                <span className="svc-arrow">{open.has(i) ? '−' : '+'}</span>
              </button>

              {open.has(i) && (
                <div className="svc-body">
                  <p className="svc-desc">{s.desc}</p>
                  <ul className="svc-features">
                    {s.features.map(f => (
                      <li key={f} className="svc-feature">
                        <span className="svc-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-yellow svc-cta" onClick={() => go('contact')}>
                    Get a Free Quote →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <button className="btn btn-yellow" onClick={() => go('contact')}>
            Book Your Cleaning →
          </button>
        </div>
      </div>
    </section>
  )
}
