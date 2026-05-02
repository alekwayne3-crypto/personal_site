import { useState } from 'react'

const SERVICES = [
  {
    icon: '🧹',
    title: 'Standard Cleaning',
    desc: 'Regular maintenance cleaning to keep every room in your home fresh, tidy, and consistently spotless.',
    features: ['Kitchen Surfaces Cleaned', 'Bathrooms Cleaned & Sanitized', 'Bedrooms Tidied & Beds Made', 'Floors Vacuumed & Mopped', 'Dusting of Surfaces', 'Add-Ons Available'],
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    desc: 'More than a regular clean. We get into every corner, appliance, and surface your standard visit doesn\'t touch.',
    features: ['Detailed Kitchen Cleaning', 'Bathrooms Deep Cleaned', 'Baseboards, Doors & Trim Cleaned', 'Detailed Dusting & Debris Removal', 'Meticulous Cleaning of Appliances', 'Floors Vacuumed & Mopped', 'Custom Requests Available'],
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    desc: 'Professional cleaning for offices, retail spaces, and small businesses — keep your workplace spotless.',
    features: ['Office & Workspace Cleaning', 'Restroom Sanitation', 'Floor Care & Maintenance', 'Flexible Scheduling', 'Trash Removal & Recycling', 'Custom Cleaning Plans'],
  },
  {
    icon: '🔄',
    title: 'Recurring Cleaning',
    desc: 'Weekly, bi-weekly, or monthly visits at a discounted rate. Same great team, every time.',
    features: ['Weekly, Bi-Weekly & Monthly Options', 'Same Trusted Crew Every Visit', 'Discounted Recurring Rates', 'No Contracts, Cancel Anytime', 'Flexible Rescheduling', 'Satisfaction Guaranteed'],
  },
  {
    icon: '📦',
    title: 'Move-In / Move-Out',
    desc: 'Guarantee your full deposit back or start fresh in a spotless new home. We cover every corner.',
    features: ['Inside Closets & Cabinets', 'Walls, Switches & Outlets', 'Window Sills & Tracks', 'Full Appliance Cleaning', 'Bathrooms Deep Scrubbed', 'Floors Vacuumed & Mopped', 'Deposit-Back Guarantee'],
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

              <div className={`svc-body-wrap${open.has(i) ? ' svc-body-wrap--open' : ''}`}>
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
                    Book Now →
                  </button>
                </div>
              </div>
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
