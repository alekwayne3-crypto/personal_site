import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutPage.css'

const STATS = [
  { value: '2016', label: 'Year Founded' },
  { value: '500+', label: 'Families Served' },
  { value: '4.9',  label: 'Average Rating' },
  { value: '8+',   label: 'Years of Experience' },
]

const BELIEFS = [
  {
    num: '01',
    title: 'Your home deserves the same team every time.',
    body: 'When a new face walks through your door every visit, nothing gets learned and nothing gets better. We build consistent crews that know your home, your preferences, and your schedule.',
  },
  {
    num: '02',
    title: 'Background checks are not optional.',
    body: 'Every single person on our team has passed a thorough background check before ever stepping foot in a client\'s home. Not most of them. Not the senior ones. All of them.',
  },
  {
    num: '03',
    title: 'Clean should not come with a chemical smell.',
    body: 'The products we use are nontoxic and biodegradable. Safe for your kids, your pets, and the planet. You get a genuinely clean home without the headache or the worry.',
  },
  {
    num: '04',
    title: 'If it is not right, we come back. No questions.',
    body: 'We do not consider a job done until you say it is done. Tell us within 24 hours and we re-clean the area at no charge. That is not a policy. That is a promise.',
  },
]

const AREAS = ['Tulsa', 'Broken Arrow', 'Bixby', 'Jenks', 'Owasso', 'Sand Springs', 'Sapulpa', 'Glenpool', 'Catoosa', 'Coweta', 'Claremore']

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Clean Bee | Tulsa\'s Trusted Cleaning Company Since 2016'
  }, [])

  return (
    <div className="app">
      <Navbar />

      <main className="ab-main">

        {/* ── Hero ── */}
        <section className="ab-hero">
          <div className="container ab-hero-inner">
            <span className="pill pill-dark">About Clean Bee</span>
            <h1 className="ab-hero-title">
              We're Not a Franchise.<br className="ab-hero-br" /> We're Your Neighbors.
            </h1>
            <p className="ab-hero-sub">
              Founded in Tulsa in 2016. Locally owned and operated. Every cleaner background-checked. Every product eco-friendly. Every visit backed by a satisfaction guarantee. This is what a cleaning company should look like.
            </p>
            <div className="ab-hero-actions">
              <Link className="btn btn-yellow" to="/get-a-quote">Get a Free Quote →</Link>
              <a className="ab-hero-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="ab-story">
          <div className="container ab-story-inner">

            <div className="ab-story-text">
              <span className="ab-eyebrow">Our Story</span>
              <h2 className="ab-story-title">Built Out of Frustration.<br />Run With Purpose.</h2>
              <p className="ab-story-body">
                Clean Bee was founded in Tulsa in 2016 because finding a cleaning company you could actually trust felt impossible. No-shows. Strangers with no background checks. Products that made your house smell like a hospital. No follow-up when something was wrong.
              </p>
              <p className="ab-story-body">
                We started Clean Bee to be the service we always wished existed. Background-checked staff, every time. Eco-friendly products, every visit. And a guarantee that if something is not right, we come back and fix it. No runaround, no fine print.
              </p>
              <p className="ab-story-body">
                Eight years later, we have served over 500 families across the greater Tulsa area. Not through advertising. Through showing up, doing the work, and earning it one clean home at a time.
              </p>
              <Link className="btn btn-yellow" to="/get-a-quote" style={{ marginTop: '8px', display: 'inline-flex' }}>
                See What We Do →
              </Link>
            </div>

            <div className="ab-story-visual">
              <div className="ab-story-img-wrap">
                <img src="/team.jpg" alt="Clean Bee team serving Tulsa homeowners" className="ab-story-img" />
                <div className="ab-story-badge">
                  <span className="ab-badge-num">500+</span>
                  <span className="ab-badge-label">Tulsa Families<br />Trust Clean Bee</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Stats ── */}
        <section className="ab-stats">
          <div className="container ab-stats-grid">
            {STATS.map(s => (
              <div className="ab-stat" key={s.label}>
                <span className="ab-stat-value">{s.value}</span>
                <span className="ab-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What We Stand For ── */}
        <section className="ab-beliefs">
          <div className="container">
            <div className="section-header">
              <span className="pill pill-white-yellow">What We Stand For</span>
              <h2 className="h2 h2-dark">Four Things We Will Never Compromise On</h2>
              <p className="lead lead-muted">
                These are not aspirations. They are the minimum standard on every single job.
              </p>
            </div>
            <div className="ab-beliefs-grid">
              {BELIEFS.map(b => (
                <div className="ab-belief-item" key={b.num}>
                  <span className="ab-belief-num">{b.num}</span>
                  <div className="ab-belief-content">
                    <h3 className="ab-belief-title">{b.title}</h3>
                    <p className="ab-belief-body">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our People ── */}
        <section
          className="ab-people"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url(/why-people.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container ab-people-inner">
            <span className="pill pill-dark">Our People</span>
            <h2 className="h2 h2-white">Every Cleaner Earns Your Trust Before They Walk Through the Door.</h2>
            <p className="ab-people-body">
              Before anyone joins the Clean Bee team they go through a full background check, hands-on training, and a probationary period cleaning alongside experienced staff. We do not cut corners on who we hire because we know they will be in your home. That responsibility is not taken lightly.
            </p>
            <div className="ab-people-badges">
              <span className="ab-people-badge">✓ Background Checked</span>
              <span className="ab-people-badge">✓ Hands-On Training</span>
              <span className="ab-people-badge">✓ Supervised Onboarding</span>
              <span className="ab-people-badge">✓ Eco-Friendly Certified</span>
            </div>
          </div>
        </section>


        {/* ── Why Local ── */}
        <section className="ab-local">
          <div className="container ab-local-inner">
            <div className="ab-local-text">
              <span className="pill pill-white-yellow">Locally Owned</span>
              <h2 className="h2 h2-dark">When You Hire Clean Bee, You're Supporting Tulsa.</h2>
              <p className="ab-local-body">
                We are not a franchise. We are not a national chain with a local phone number. Clean Bee is a Tulsa business, built by Tulsa people, serving Tulsa families. When you pay for a cleaning, that money stays in this community — paying local wages, supporting local suppliers, and building something that belongs here.
              </p>
              <p className="ab-local-body">
                We serve Tulsa and all of the surrounding communities. Wherever you are in the greater Tulsa area, we can help.
              </p>
            </div>
            <div className="ab-local-cta-box">
              <p className="ab-local-cta-title">Ready to experience the Clean Bee difference?</p>
              <Link className="btn btn-yellow" to="/get-a-quote">Get Your Free Quote →</Link>
              <a className="ab-local-phone" href="tel:9187727228">(918) 772-7228</a>
              <p className="ab-local-hours">Mon – Fri 8AM–8PM · Sat 9AM–5PM</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
