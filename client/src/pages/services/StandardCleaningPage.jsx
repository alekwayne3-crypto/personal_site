import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './ServiceDetail.css'

const FEATURES = [
  'Kitchen Surfaces Cleaned',
  'Bathrooms Cleaned & Sanitized',
  'Bedrooms Tidied & Beds Made',
  'Floors Vacuumed & Mopped',
  'Dusting of Surfaces',
  'Add-Ons Available',
]

const WHO_CARDS = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Busy Families',
    desc: 'Kids, schedules, and life move fast. A reliable standard clean means your home keeps up without you having to think about it.',
  },
  {
    icon: '💼',
    title: 'Working Professionals',
    desc: 'Your time off is precious. Come home to a clean space, not a chore list. Clean Bee handles the baseline so you can actually recharge.',
  },
  {
    icon: '🏡',
    title: 'Homeowners Who Value Consistency',
    desc: 'You want the same high standard every single visit. Same crew, same checklist, same result. That is the Clean Bee standard.',
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

export default function StandardCleaningPage() {
  useEffect(() => {
    document.title = 'Standard House Cleaning in Tulsa, OK | Clean Bee Cleaning Co.'
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="sd-main">

        {/* ── Hero ── */}
        <section className="sd-hero">
          <div className="container sd-hero-inner">
            <span className="pill pill-dark">Standard Cleaning</span>
            <h1 className="sd-hero-h1">Standard House Cleaning in Tulsa, OK</h1>
            <p className="sd-hero-tagline">
              Your home, maintained the way it should be. Come home to clean every time.
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
              <h2 className="sd-included-heading">Everything Your Home Needs, Every Visit</h2>
              <p className="sd-included-sub">
                Our standard cleaning covers every room with a thorough, consistent checklist. No guesswork, no missed corners. Just a reliably clean home waiting for you.
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
            <span className="pill pill-white-yellow">Why Standard Cleaning</span>
            <h2 className="sd-why-heading">The Smartest Cleaning Decision You Can Make</h2>
            <div className="sd-why-body">
              <p>
                A standard cleaning from Clean Bee is not just a surface wipe-down. It is a thorough, room-by-room service built around what actually makes a home feel clean: fresh bathrooms, spotless kitchens, vacuumed floors, and bedrooms that feel like you just moved in. Every visit follows the same meticulous checklist so nothing ever gets skipped.
              </p>
              <p>
                What separates Clean Bee from every other Tulsa cleaning company is consistency. You get the same trained crew every time, working from the same high standard we have held since day one. There are no off days, no rushed visits, and no surprises. Just the clean house you were promised, delivered on schedule.
              </p>
              <p>
                Tulsa homeowners who book a standard clean with us typically tell us the same thing: they did not realize how much mental energy went into thinking about cleaning until they stopped having to think about it. Book once, and Clean Bee takes it from there.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="sd-who">
          <div className="container">
            <div className="sd-who-header">
              <span className="pill pill-white-yellow">Who It's For</span>
              <h2 className="sd-who-heading">Built for Real Life in Tulsa</h2>
              <p className="sd-who-sub">Our standard cleaning fits any household that values a reliably clean home without the effort.</p>
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
            <span className="pill pill-dark">No Contracts. No Hassle.</span>
            <h2 className="sd-cta-headline">Your Home Deserves This. Every Week.</h2>
            <p className="sd-cta-sub">
              Serving Tulsa, Broken Arrow, Midtown, South Tulsa, and surrounding areas. Book in minutes.
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
