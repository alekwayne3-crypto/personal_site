import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './ServiceDetail.css'

const FEATURES = [
  'Detailed Kitchen Cleaning',
  'Bathrooms Deep Cleaned',
  'Baseboards, Doors & Trim Cleaned',
  'Detailed Dusting & Debris Removal',
  'Meticulous Cleaning of Appliances',
  'Floors Vacuumed & Mopped',
  'Custom Requests Available',
]

const WHO_CARDS = [
  {
    icon: '🐝',
    title: 'First-Time Clean Bee Clients',
    desc: 'We start every new client relationship with a deep clean. It sets the baseline and lets our team understand your home before recurring visits begin.',
  },
  {
    icon: '🌸',
    title: 'Seasonal Refresh',
    desc: 'Spring, fall, or whenever life calls for a reset. A deep clean gives your entire home a thorough restart that feels genuinely different from your regular routine.',
  },
  {
    icon: '🎉',
    title: 'Before a Big Event or Guests',
    desc: 'Hosting family, throwing a party, or putting your home on the market. A Clean Bee deep clean means every surface is ready for the moment.',
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

export default function DeepCleaningPage() {
  useEffect(() => {
    document.title = 'Deep Cleaning Service in Tulsa, OK | Clean Bee Cleaning Co.'
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="sd-main">

        {/* ── Hero ── */}
        <section className="sd-hero">
          <div className="container sd-hero-inner">
            <span className="pill pill-dark">Deep Cleaning</span>
            <h1 className="sd-hero-h1">Deep Cleaning Service in Tulsa, OK</h1>
            <p className="sd-hero-tagline">
              More than a regular clean. We get into every corner, appliance, and surface your standard visit doesn&apos;t touch.
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
              <h2 className="sd-included-heading">A Clean That Goes All the Way Through</h2>
              <p className="sd-included-sub">
                Our deep cleaning service in Tulsa covers every surface, corner, and appliance in your home. This is the clean you feel the moment you walk through the door.
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
            <span className="pill pill-white-yellow">Why Deep Cleaning</span>
            <h2 className="sd-why-heading">Because Some Things a Regular Clean Just Does Not Reach</h2>
            <div className="sd-why-body">
              <p>
                A deep cleaning service is a different category of clean entirely. Where a standard visit maintains what is already clean, a deep clean resets your entire home from the ground up. We spend extra time on appliances, baseboards, trim, cabinet fronts, window sills, light fixtures, and the dozens of other surfaces that accumulate grime over months of normal living. When we leave, your home feels genuinely transformed.
              </p>
              <p>
                Clean Bee has performed hundreds of deep cleans across Tulsa, Broken Arrow, and Midtown, and every one follows the same rigorous checklist. Our crews are trained specifically for deep cleaning work, which requires a different level of attention and technique than a standard visit. We bring professional-grade products and a methodical room-by-room approach that leaves nothing behind.
              </p>
              <p>
                Most of our long-term recurring clients started with a deep clean. It establishes the standard. Once your home has been deep cleaned by Clean Bee, maintaining that level becomes far easier, and our standard visits keep it exactly where you want it. It is the smartest first step you can take.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="sd-who">
          <div className="container">
            <div className="sd-who-header">
              <span className="pill pill-white-yellow">Who It's For</span>
              <h2 className="sd-who-heading">The Right Clean for the Right Moment</h2>
              <p className="sd-who-sub">Deep cleaning is for any Tulsa home that needs more than maintenance. Here is when it matters most.</p>
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
            <span className="pill pill-dark">Satisfaction Guaranteed</span>
            <h2 className="sd-cta-headline">Ready for a Clean That Actually Shows?</h2>
            <p className="sd-cta-sub">
              Serving Tulsa, Broken Arrow, Midtown, South Tulsa, and surrounding areas. Same-week availability often open.
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
