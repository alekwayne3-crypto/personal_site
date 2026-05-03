import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './ServiceDetail.css'

const FEATURES = [
  'Weekly, Bi-Weekly & Monthly Options',
  'Same Trusted Crew Every Visit',
  'Discounted Recurring Rates',
  'No Contracts, Cancel Anytime',
  'Flexible Rescheduling',
  'Satisfaction Guaranteed',
]

const WHO_CARDS = [
  {
    icon: '🏃',
    title: 'Busy Households',
    desc: 'Work, kids, errands, and life. A recurring clean removes one major thing from the list permanently. Clean Bee handles it on schedule, every time.',
  },
  {
    icon: '✈️',
    title: 'People Who Travel',
    desc: 'Come home to a clean house after every trip. We work with your schedule, adjust when plans change, and make sure your home is always ready when you are.',
  },
  {
    icon: '🛋️',
    title: 'Anyone Who Wants a Consistently Clean Home',
    desc: 'You do not need a special reason. You just want your home to always be clean. That is exactly what recurring cleaning from Clean Bee delivers.',
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

export default function RecurringCleaningPage() {
  useEffect(() => {
    document.title = 'Recurring Cleaning Service in Tulsa, OK | Clean Bee Cleaning Co.'
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="sd-main">

        {/* ── Hero ── */}
        <section className="sd-hero">
          <div className="container sd-hero-inner">
            <span className="pill pill-dark">Recurring Cleaning</span>
            <h1 className="sd-hero-h1">Recurring Cleaning Service in Tulsa, OK</h1>
            <p className="sd-hero-tagline">
              Set it and forget it. Same crew, same standard, every visit.
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
              <h2 className="sd-included-heading">Everything You Need, On Your Schedule</h2>
              <p className="sd-included-sub">
                Recurring cleaning from Clean Bee is built around your life. Pick your frequency, we handle the rest. Same crew, same checklist, same great result every single visit.
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
            <span className="pill pill-white-yellow">Why Recurring Cleaning</span>
            <h2 className="sd-why-heading">The Best Decision for Your Home and Your Time</h2>
            <div className="sd-why-body">
              <p>
                A recurring cleaning schedule is the single highest-value home service you can invest in. You stop spending your weekends cleaning. You stop thinking about it entirely. Clean Bee arrives on your chosen day, cleans to the same high standard as the first visit, and leaves your home exactly the way you want it. Week after week, month after month.
              </p>
              <p>
                Consistency is what separates Clean Bee from every other cleaning service in Tulsa. Our recurring clients get the same trained crew assigned to their home. That crew learns your preferences, knows where everything goes, and builds a working relationship with your household. No rotation of strangers, no re-explaining what you want. Just professionals who know your home and take pride in the result.
              </p>
              <p>
                There are no contracts, no lock-ins, and no penalties for rescheduling. Recurring clients also receive our best rates. Clean Bee recurring cleaning is the easiest, smartest way to keep your Tulsa home in excellent condition without spending a single weekend hour doing it yourself.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="sd-who">
          <div className="container">
            <div className="sd-who-header">
              <span className="pill pill-white-yellow">Who It's For</span>
              <h2 className="sd-who-heading">Designed for Tulsa Households That Value Their Time</h2>
              <p className="sd-who-sub">Recurring cleaning works for any household that wants a clean home without the effort. Here is who gets the most out of it.</p>
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
            <h2 className="sd-review-heading">Three Years and Counting</h2>
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
            <span className="pill pill-dark">No Contracts. Cancel Anytime.</span>
            <h2 className="sd-cta-headline">Stop Thinking About Cleaning. Start Enjoying Your Home.</h2>
            <p className="sd-cta-sub">
              Weekly, bi-weekly, or monthly options available. Serving Tulsa, Broken Arrow, Midtown, and surrounding areas.
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
