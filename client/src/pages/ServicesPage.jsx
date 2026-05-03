import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './ServicesPage.css'

const SERVICES = [
  {
    icon: '🧹',
    image: '/service1.jpg.png',
    title: 'Standard Cleaning',
    desc: 'Come home to a clean house without lifting a finger. Perfect for busy households who want a consistent baseline clean.',
    features: [
      'Kitchen Surfaces Cleaned',
      'Bathrooms Cleaned & Sanitized',
      'Bedrooms Tidied & Beds Made',
      'Floors Vacuumed & Mopped',
      'Dusting of Surfaces',
      'Add-Ons Available',
    ],
  },
  {
    icon: '✨',
    image: '/service3.jpg.png',
    title: 'Deep Cleaning',
    desc: "More than a regular clean. We get into every corner, appliance, and surface your standard visit doesn't touch.",
    features: [
      'Detailed Kitchen Cleaning',
      'Bathrooms Deep Cleaned',
      'Baseboards, Doors & Trim Cleaned',
      'Detailed Dusting & Debris Removal',
      'Meticulous Cleaning of Appliances',
      'Floors Vacuumed & Mopped',
      'Custom Requests Available',
    ],
  },
  {
    icon: '🏢',
    image: '/service4.jpg.jpg',
    title: 'Commercial Cleaning',
    desc: 'Your workspace reflects your business. We keep offices, retail spaces, and small businesses in Tulsa looking sharp — on your schedule, without disruption.',
    features: [
      'Office & Workspace Cleaning',
      'Restroom Sanitation',
      'Floor Care & Maintenance',
      'Flexible Scheduling',
      'Trash Removal & Recycling',
      'Custom Cleaning Plans',
    ],
  },
  {
    icon: '🔄',
    image: '/service2.jpg.png',
    title: 'Recurring Cleaning',
    desc: 'A consistently clean home doesn\'t happen by accident. Set a schedule and forget it — same trusted crew, same high standards, every single visit.',
    features: [
      'Weekly, Bi-Weekly & Monthly Options',
      'Same Trusted Crew Every Visit',
      'Discounted Recurring Rates',
      'No Contracts, Cancel Anytime',
      'Flexible Rescheduling',
      'Satisfaction Guaranteed',
    ],
  },
  {
    icon: '📦',
    image: '/services6.jpg.png',
    title: 'Move-In / Move-Out',
    desc: 'Guarantee your full deposit back or start fresh in a spotless new home. We cover every corner.',
    features: [
      'Inside Closets & Cabinets',
      'Walls, Switches & Outlets',
      'Window Sills & Tracks',
      'Full Appliance Cleaning',
      'Bathrooms Deep Scrubbed',
      'Floors Vacuumed & Mopped',
      'Deposit-Back Guarantee',
    ],
  },
  {
    icon: '🏗️',
    image: '/service5.jpg.png',
    title: 'Post-Construction',
    desc: 'Renovation dust gets into everything. We go room by room to remove every trace of construction debris so your space is genuinely ready to live in.',
    features: [
      'Construction Dust & Debris Removal',
      'Windows, Glass & Tracks Cleaned',
      'Floors Vacuumed, Polished & Mopped',
      'Surfaces Wiped & Sanitized',
      'Fixtures & Hardware Cleaned',
      'Final Detail Inspection',
      'Custom Scope Available',
    ],
  },
]

const TRUST_SIGNALS = [
  { icon: '🛡️', label: 'Bonded & Insured' },
  { icon: '✅', label: 'Background Checked' },
  { icon: '🌿', label: 'Eco-Friendly Products' },
  { icon: '⭐', label: 'Satisfaction Guaranteed' },
]

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
]

export default function ServicesPage() {
  return (
    <div className="app">
      <Navbar />

      <main className="sp-main">

        {/* ── Page Hero ── */}
        <section className="sp-hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url(/services-hero.jpg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container sp-hero-inner">
            <span className="pill pill-white-yellow">Our Services</span>
            <h1 className="sp-hero-title">
              Professional Cleaning Services in Tulsa, OK
            </h1>
            <p className="sp-hero-sub">
              Whether your home needs a quick refresh or a full top-to-bottom deep clean, we have a service built around your schedule, your budget, and your life.
            </p>
            <div className="sp-hero-actions">
              <a className="btn btn-yellow" href="/#contact">Get a Free Quote →</a>
              <a className="sp-hero-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

        {/* ── Individual Service Sections ── */}
        {SERVICES.map((svc, i) => {
          const isEven = i % 2 === 0
          return (
            <section
              key={svc.title}
              className={`sp-svc-section${isEven ? ' sp-svc-section--light' : ' sp-svc-section--warm'}`}
            >
              <div className={`container sp-svc-inner${isEven ? '' : ' sp-svc-inner--reverse'}`}>

                {/* Service image */}
                <div className="sp-svc-visual">
                  <img src={svc.image} alt={`Clean Bee ${svc.title} in Tulsa OK`} className="sp-svc-img" loading="lazy" />
                </div>

                {/* Content */}
                <div className="sp-svc-content">
                  <div className="sp-svc-icon-row">
                    <span className="sp-svc-icon-badge">{svc.icon}</span>
                    <h2 className="sp-svc-title">{svc.title}</h2>
                  </div>
                  <p className="sp-svc-desc">{svc.desc}</p>

                  <ul className="sp-svc-features">
                    {svc.features.map(f => (
                      <li key={f} className="sp-svc-feature">
                        <span className="sp-svc-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a className="btn btn-yellow sp-svc-cta" href="/#contact">
                    Book This Service →
                  </a>
                </div>

              </div>
            </section>
          )
        })}

        {/* ── Trust Strip ── */}
        <section className="sp-trust">
          <div className="container">
            <div className="sp-trust-grid">
              {TRUST_SIGNALS.map(t => (
                <div className="sp-trust-item" key={t.label}>
                  <span className="sp-trust-icon">{t.icon}</span>
                  <span className="sp-trust-label">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section className="sp-reviews">
          <div className="container">
            <div className="section-header">
              <span className="pill pill-white-yellow">Customer Reviews</span>
              <h2 className="h2 h2-dark">Tulsa Loves Clean Bee</h2>
              <p className="lead lead-muted">
                Hundreds of families have experienced the Clean Bee difference. Here&apos;s what they think.
              </p>
            </div>
            <div className="sp-reviews-grid">
              {REVIEWS.map(r => (
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
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="sp-final-cta" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url(/services-cta.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container sp-final-cta-inner">
            <span className="pill pill-dark">No Contracts. No Hassle.</span>
            <h2 className="h2 h2-white">Ready for a Cleaner Home?</h2>
            <p className="lead lead-faint">
              Call us, fill out the form, or just tell us what you need. We&apos;ll handle the rest.
            </p>
            <div className="sp-final-cta-actions">
              <a className="btn btn-yellow" href="/#contact">Get a Free Quote →</a>
              <a className="sp-final-cta-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
