import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './ServiceDetail.css'

const FEATURES = [
  'Construction Dust & Debris Removal',
  'Windows, Glass & Tracks Cleaned',
  'Floors Vacuumed, Polished & Mopped',
  'Surfaces Wiped & Sanitized',
  'Fixtures & Hardware Cleaned',
  'Final Detail Inspection',
  'Custom Scope Available',
]

const WHO_CARDS = [
  {
    icon: '🏗️',
    title: 'Homeowners After a Renovation',
    desc: 'You invested in your home. Now make it livable. A post-construction clean removes every trace of the work so you can actually enjoy the result.',
  },
  {
    icon: '👷',
    title: 'Contractors & Builders',
    desc: 'Hand off a finished product your clients will rave about. Clean Bee post-construction cleans are thorough, fast, and ready to fit your project closeout timeline.',
  },
  {
    icon: '🏢',
    title: 'Property Managers',
    desc: 'New build or renovation, we bring the property to move-in condition. Clean Bee handles the detail work so your team can focus on the turnover.',
  },
]

const TRUST = [
  { icon: '🛡️', label: 'Bonded & Insured' },
  { icon: '✅', label: 'Background Checked' },
  { icon: '🌿', label: 'Eco-Friendly Products' },
  { icon: '⭐', label: 'Satisfaction Guaranteed' },
]

const REVIEW = {
  initials: 'SM',
  name: 'Sarah M.',
  location: 'South Tulsa, OK',
  rating: 5,
  text: "Clean Bee has completely transformed my home. The deep cleaning was incredible — every single nook spotless. I've tried three other Tulsa services and none come close. The buzz is absolutely real.",
}

export default function PostConstructionPage() {
  useEffect(() => {
    document.title = 'Post-Construction Cleaning in Tulsa, OK | Clean Bee Cleaning Co.'
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="sd-main">

        {/* ── Hero ── */}
        <section className="sd-hero">
          <div className="container sd-hero-inner">
            <span className="pill pill-dark">Post-Construction</span>
            <h1 className="sd-hero-h1">Post-Construction Cleaning in Tulsa, OK</h1>
            <p className="sd-hero-tagline">
              Renovation dust gets into everything. We get it all out.
            </p>
            <div className="sd-hero-actions">
              <a className="btn btn-yellow" href="/#contact">Get a Free Quote &rarr;</a>
              <a className="sd-hero-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="sd-included">
          <div className="container sd-included-inner">
            <div>
              <span className="pill pill-white-yellow">What's Included</span>
              <h2 className="sd-included-heading">From Construction Site to Move-In Ready</h2>
              <p className="sd-included-sub">
                Post-construction cleaning in Tulsa requires a completely different approach than a standard clean. Our crews are trained for the detail work that comes after a build or renovation.
              </p>
            </div>
            <ul className="sd-features-list">
              {FEATURES.map(f => (
                <li className="sd-feature-item" key={f}>
                  <span className="sd-feature-check">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why This Service ── */}
        <section className="sd-why">
          <div className="container sd-why-inner">
            <span className="pill pill-white-yellow">Why Post-Construction Cleaning</span>
            <h2 className="sd-why-heading">Construction Dust Does Not Clean Itself Out</h2>
            <div className="sd-why-body">
              <p>
                Post-construction dust is not like regular household dust. It is fine, it travels, and it settles into every vent, fixture, cabinet, and surface in the building. You can sweep a floor five times and still find construction debris in the grout lines, on window tracks, and behind every piece of trim. Cleaning a freshly renovated space properly requires specific tools, techniques, and the experience to know where the dust actually hides.
              </p>
              <p>
                Clean Bee post-construction cleaning crews work room by room with a final-phase checklist built specifically for new builds and renovation sites. We start at the top and work down: light fixtures, vents, and ceiling fans first, then walls, surfaces, and trim, then floors last. Every window gets cleaned inside and in the tracks. Every fixture gets wiped and polished. The final walk-through is not a formality. It is a genuine quality check before we hand the keys back.
              </p>
              <p>
                Tulsa contractors, homeowners, and property managers rely on Clean Bee because we understand what a truly finished product looks like. Your renovation is only done when someone can walk in and see the work, not the mess. That is exactly what we deliver.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="sd-who">
          <div className="container">
            <div className="sd-who-header">
              <span className="pill pill-white-yellow">Who It's For</span>
              <h2 className="sd-who-heading">For Anyone Who Just Finished Building Something Great</h2>
              <p className="sd-who-sub">Post-construction cleaning serves every stakeholder in a build or renovation project.</p>
            </div>
            <div className="sd-who-cards">
              {WHO_CARDS.map(card => (
                <div className="sd-who-card" key={card.title}>
                  <span className="sd-who-icon">{card.icon}</span>
                  <div className="sd-who-card-title">{card.title}</div>
                  <p className="sd-who-card-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <section className="sd-trust">
          <div className="container">
            <div className="sd-trust-grid">
              {TRUST.map(t => (
                <div className="sd-trust-item" key={t.label}>
                  <span className="sd-trust-icon">{t.icon}</span>
                  <span className="sd-trust-label">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Review ── */}
        <section className="sd-review">
          <div className="container sd-review-inner">
            <span className="pill pill-white-yellow">What Clients Say</span>
            <h2 className="sd-review-heading">Tulsa Trusts Clean Bee</h2>
            <div className="sd-review-card-wrap">
              <div className="testi-card">
                <div className="testi-quote-mark">&ldquo;</div>
                <div className="testi-stars">{'★'.repeat(REVIEW.rating)}</div>
                <p className="testi-text">{REVIEW.text}</p>
                <div className="testi-divider" />
                <div className="testi-author">
                  <div className="testi-avatar">{REVIEW.initials}</div>
                  <div>
                    <div className="testi-name">{REVIEW.name}</div>
                    <div className="testi-loc">&#128205; {REVIEW.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="sd-cta">
          <div className="container sd-cta-inner">
            <span className="pill pill-dark">Final Inspection Included</span>
            <h2 className="sd-cta-headline">Your Project Is Done. Now Make It Move-In Ready.</h2>
            <p className="sd-cta-sub">
              Serving new builds, renovations, and commercial buildouts across Tulsa, Broken Arrow, and surrounding areas.
            </p>
            <div className="sd-cta-actions">
              <a className="btn btn-yellow" href="/#contact">Get a Free Quote &rarr;</a>
              <a className="sd-cta-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
