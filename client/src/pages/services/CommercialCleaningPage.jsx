import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './ServiceDetail.css'

const FEATURES = [
  'Office & Workspace Cleaning',
  'Restroom Sanitation',
  'Floor Care & Maintenance',
  'Flexible Scheduling',
  'Trash Removal & Recycling',
  'Custom Cleaning Plans',
]

const WHO_CARDS = [
  {
    icon: '🏢',
    title: 'Small Business Owners',
    desc: 'Your business reflects your standards. A consistently clean workspace tells clients and employees exactly what kind of operation you run.',
  },
  {
    icon: '📋',
    title: 'Office Managers',
    desc: 'One vendor, zero headaches. Clean Bee shows up on schedule, follows your custom plan, and reports back if anything needs attention. That is what a real cleaning partner looks like.',
  },
  {
    icon: '🛍️',
    title: 'Retail & Storefront Owners',
    desc: 'First impressions happen at the door. Clean floors, spotless windows, and fresh restrooms keep customers comfortable and coming back.',
  },
]

const TRUST = [
  { icon: '🛡️', label: 'Bonded & Insured' },
  { icon: '✅', label: 'Background Checked' },
  { icon: '🌿', label: 'Eco-Friendly Products' },
  { icon: '⭐', label: 'Satisfaction Guaranteed' },
]

const REVIEW = {
  initials: 'JK',
  name: 'Jennifer K.',
  location: 'Midtown Tulsa, OK',
  rating: 5,
  text: "Best recurring cleaning in Tulsa, hands down. They remember all my preferences, always on time, and my house smells amazing after every visit. Three years a customer and I'll never switch.",
}

export default function CommercialCleaningPage() {
  useEffect(() => {
    document.title = 'Commercial Cleaning Service in Tulsa, OK | Clean Bee Cleaning Co.'
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="sd-main">

        {/* ── Hero ── */}
        <section className="sd-hero">
          <div className="container sd-hero-inner">
            <span className="pill pill-dark">Commercial Cleaning</span>
            <h1 className="sd-hero-h1">Commercial Cleaning Service in Tulsa, OK</h1>
            <p className="sd-hero-tagline">
              Your workspace reflects your business. We keep it sharp.
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
              <h2 className="sd-included-heading">Commercial Cleaning Built Around Your Business</h2>
              <p className="sd-included-sub">
                Every commercial space is different. Clean Bee builds a custom cleaning plan around your layout, schedule, and priorities so your workplace is always ready for business.
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
            <span className="pill pill-white-yellow">Why Commercial Cleaning</span>
            <h2 className="sd-why-heading">A Clean Workplace Is a Statement About Your Business</h2>
            <div className="sd-why-body">
              <p>
                Every Tulsa business owner knows that a clean workspace is not optional, it is part of the brand. Clients notice. Employees notice. The moment someone walks through your door, the state of your space tells them a story about how you operate. Clean Bee makes sure that story is a good one.
              </p>
              <p>
                What makes Clean Bee different in the commercial space is flexibility and accountability. We work around your hours, whether that means early mornings, evenings, or weekends. We build a custom scope for your space so nothing important gets missed and nothing unnecessary is on the bill. And because we are fully bonded and insured, you never have to worry about what happens if something goes wrong.
              </p>
              <p>
                Tulsa businesses from retail storefronts to professional offices rely on Clean Bee for consistent, professional commercial cleaning they never have to think about. When you stop managing your cleaning vendor and start trusting your cleaning partner, that is when things get easy.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="sd-who">
          <div className="container">
            <div className="sd-who-header">
              <span className="pill pill-white-yellow">Who It's For</span>
              <h2 className="sd-who-heading">Built for Tulsa Businesses of Every Size</h2>
              <p className="sd-who-sub">From solo offices to multi-suite spaces, Clean Bee commercial cleaning scales to fit your operation.</p>
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
            <h2 className="sd-review-heading">Tulsa Businesses Trust Clean Bee</h2>
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
            <span className="pill pill-dark">Flexible Scheduling Available</span>
            <h2 className="sd-cta-headline">A Clean Workplace Starts Here.</h2>
            <p className="sd-cta-sub">
              Serving offices, retail spaces, and businesses across Tulsa, Broken Arrow, and Midtown. Get a custom quote today.
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
