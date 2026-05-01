const SERVICES = [
  {
    icon: '🧹',
    title: 'Standard Cleaning',
    desc: 'Regular maintenance cleaning to keep every room in your home fresh, tidy, and consistently spotless.',
    features: ['Kitchen & bathrooms', 'Vacuuming & mopping', 'Dusting all surfaces', 'Trash removal'],
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    desc: 'A thorough, top-to-bottom scrub — ideal for seasonal refreshes, before guests arrive, or as a first clean.',
    features: ['Inside appliances', 'Baseboards & trim', 'Cabinet fronts', 'Grout & tile scrubbing'],
  },
  {
    icon: '📦',
    title: 'Move-In / Move-Out',
    desc: 'Guarantee your full deposit back or start fresh in a spotless new home. We cover every corner.',
    features: ['Inside closets & cabinets', 'Walls & switches', 'Window sills', 'Full appliance clean'],
  },
  {
    icon: '🔄',
    title: 'Recurring Cleaning',
    desc: 'Weekly, bi-weekly, or monthly visits at a discounted rate. Same great team, every time.',
    features: ['Flexible scheduling', 'Loyalty discounts', 'Consistent crew', 'No contracts'],
  },
  {
    icon: '🏗️',
    title: 'Post-Construction',
    desc: 'Specialized removal of construction dust, debris, and residue after a renovation or new build.',
    features: ['Construction dust', 'Window & glass clean', 'Floor polish', 'Detail vacuuming'],
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    desc: 'Professional cleaning for offices, retail spaces, and small businesses — keep your workplace spotless.',
    features: ['Office & workspace', 'Restroom sanitation', 'Floor care', 'Flexible scheduling'],
  },
]

export default function Services() {
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

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className={`service-card${s.title === 'Post-Construction' ? ' hide-mobile' : ''}`} key={s.title}>
              <div className="service-card-top-bar" />
              <div className="service-icon-box">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f) => (
                  <li className="service-feature" key={f}>
                    <span className="service-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
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
