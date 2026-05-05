import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './WhyCleanBeePage.css'

const DIFFERENTIATORS = [
  {
    icon: '🔒',
    title: 'Bonded & Fully Insured',
    desc: 'Every job we do is covered. If something gets damaged, you are not left holding the bag. We carry full liability insurance and bonding on every single visit, because accidents happen and we take responsibility when they do.',
  },
  {
    icon: '✅',
    title: 'Background-Checked Staff',
    desc: 'Every person who walks through your front door has passed a thorough background check before ever touching a client\'s home. We know who we\'re sending. You should too.',
  },
  {
    icon: '🌱',
    title: 'Eco-Friendly Products',
    desc: 'The products we use are nontoxic and biodegradable. Safe for your kids, safe for your pets, and better for the environment. You get a genuinely clean home without the chemical smell or the worry.',
  },
  {
    icon: '⭐',
    title: 'Satisfaction Guaranteed',
    desc: 'If something isn\'t right, tell us within 24 hours and we\'ll come back and fix it. No charge. No questions asked. We don\'t consider a job done until you\'re happy with it.',
  },
  {
    icon: '📅',
    title: 'Flexible Scheduling',
    desc: 'Life doesn\'t run on a fixed schedule and neither do we. Book online, reschedule by phone, or reach us 7 days a week. We work around your life, not the other way around.',
  },
  {
    icon: '🏠',
    title: 'Locally Owned Since 2016',
    desc: 'We\'re not a franchise. We\'re not a national chain. We\'re a Tulsa business built by Tulsa people who care about this community. When you hire Clean Bee, you\'re supporting a local team that actually gives a dang.',
  },
]

const STATS = [
  { value: '2016', label: 'Year Founded' },
  { value: '500+', label: 'Families Served' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '8+ Years', label: 'Of Local Experience' },
]

const STEPS = [
  {
    num: '01',
    title: 'Request a Free Quote',
    desc: 'Fill out our quick form or give us a call. Tell us about your home and what you need. We\'ll get back to you fast with a custom quote.',
  },
  {
    num: '02',
    title: 'We Show Up and Clean',
    desc: 'A background-checked, trained Clean Bee crew arrives on time with everything needed. We clean your home top to bottom, exactly the way we promised.',
  },
  {
    num: '03',
    title: 'You Come Home to Clean',
    desc: 'That\'s it. No surprises, no shortcuts. Just a genuinely clean home waiting for you. And if anything isn\'t right, we\'ll come back and fix it.',
  },
]

const REVIEWS = [
  {
    initials: 'SM',
    name: 'Sarah M.',
    location: 'South Tulsa',
    rating: 5,
    text: 'Two kids under five so the house was a disaster and they got things I had completely stopped trying to clean: grout, behind the stove, inside the fridge. My husband walked in after work and thought we had gotten new appliances. Booking them again next month.',
  },
  {
    initials: 'MR',
    name: 'Mike R.',
    location: 'Broken Arrow',
    rating: 5,
    text: 'Got our full $1,400 deposit back. After the state we left that place in I genuinely was not expecting that. Called Clean Bee last minute before our move-out inspection and they fit us in same day. Every wall scuff, every carpet stain, gone. Landlord texted us after saying it was the cleanest move-out he had seen.',
  },
  {
    initials: 'JK',
    name: 'Jennifer K.',
    location: 'Midtown Tulsa',
    rating: 5,
    text: 'Five stars is not enough. Been on a bi-weekly schedule for close to two years and I have never once had to ask them to redo something. I work from home so I am usually here when they clean. It never feels weird. They just know my preferences at this point without me saying anything. Referred them to at least five people.',
  },
]

const FAQS = [
  {
    q: 'Are you insured and bonded?',
    a: 'Yes. Clean Bee carries full liability insurance and bonding on every job. If anything is damaged during a cleaning, you\'re covered. We take responsibility.',
  },
  {
    q: 'Who will be cleaning my home?',
    a: 'A trained, background-checked member of the Clean Bee team. We don\'t use contractors or send random substitutes. You\'ll get a consistent crew that knows your home.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'Not at all. Many of our clients leave a key or entry code. As long as we can access the property safely, you don\'t need to be there.',
  },
  {
    q: 'What products do you use?',
    a: 'Eco-friendly, nontoxic, biodegradable cleaning products. They\'re effective, safe for kids and pets, and leave no harsh chemical residue behind.',
  },
  {
    q: 'What if I\'m not satisfied with the clean?',
    a: 'Tell us within 24 hours and we\'ll come back and re-clean the area at no charge. No hassle, no fine print.',
  },
  {
    q: 'How do I book a cleaning?',
    a: 'Fill out the quote form on our website or call us at (918) 772-7228. We\'ll get you a custom quote and get you scheduled fast.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`wcb-faq-item${open ? ' wcb-faq-item--open' : ''}`}>
      <button className="wcb-faq-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="wcb-faq-q">{q}</span>
        <span className="wcb-faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className={`wcb-faq-body-wrap${open ? ' wcb-faq-body-wrap--open' : ''}`}>
        <div className="wcb-faq-body">
          <p className="wcb-faq-a">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function WhyCleanBeePage() {
  useEffect(() => {
    document.title = 'Why Choose Clean Bee | Tulsa Cleaning Service'
  }, [])

  return (
    <div className="app">
      <Navbar />

      <main className="wcb-main">

        {/* ── Hero ── */}
        <section className="wcb-hero">
          <div className="container wcb-hero-inner">
            <span className="pill pill-dark">Why Clean Bee?</span>
            <h1 className="wcb-hero-title">
              You Deserve a Cleaning Company You Can Trust.
            </h1>
            <p className="wcb-hero-sub">
              Most cleaning companies send whoever is available, use whatever products are on hand, and hope you don't notice. We built Clean Bee to be different.
            </p>
            <div className="wcb-hero-actions">
              <a className="btn btn-yellow" href="/get-a-quote">Get a Free Quote →</a>
              <a className="wcb-hero-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

        {/* ── 6 Differentiators ── */}
        <section className="wcb-diff">
          <div className="container">
            <div className="section-header">
              <span className="pill pill-white-yellow">What Sets Us Apart</span>
              <h2 className="h2 h2-dark">Built Different. On Purpose.</h2>
              <p className="lead lead-muted">
                These aren't marketing claims. They're the standards we hold ourselves to on every single job, every single time.
              </p>
            </div>
            <div className="wcb-diff-grid">
              {DIFFERENTIATORS.map(d => (
                <div className="wcb-diff-card" key={d.title}>
                  <div className="wcb-diff-icon-wrap">
                    <span className="wcb-diff-icon">{d.icon}</span>
                  </div>
                  <h3 className="wcb-diff-title">{d.title}</h3>
                  <p className="wcb-diff-desc">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── By the Numbers ── */}
        <section className="wcb-stats">
          <div className="container">
            <div className="wcb-stats-grid">
              {STATS.map(s => (
                <div className="wcb-stat-item" key={s.label}>
                  <span className="wcb-stat-value">{s.value}</span>
                  <span className="wcb-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="wcb-how">
          <div className="container">
            <div className="section-header">
              <span className="pill pill-white-yellow">How It Works</span>
              <h2 className="h2 h2-dark">The Three Steps to<br className="how-br" /> a Cleaner Home</h2>
              <p className="lead lead-muted">
                No complicated process. No hoops to jump through. Just tell us what you need and we'll handle the rest.
              </p>
            </div>
            <div className="wcb-how-grid">
              {STEPS.map((step, i) => (
                <div className="wcb-how-card" key={step.num}>
                  <div className="wcb-how-num">{step.num}</div>
                  {i < STEPS.length - 1 && <div className="wcb-how-connector" aria-hidden="true" />}
                  <h3 className="wcb-how-title">{step.title}</h3>
                  <p className="wcb-how-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meet the Standard ── */}
        <section className="wcb-standard" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(/why-people.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container wcb-standard-inner">
            <span className="pill pill-dark">Our People</span>
            <h2 className="h2 h2-white">Every Cleaner. Every Visit. The Same Standard.</h2>
            <p className="wcb-standard-body">
              Before anyone joins the Clean Bee team, they go through a full background check, hands-on training, and a probationary period cleaning alongside experienced staff. We don't cut corners on who we hire because we know they'll be in your home.
            </p>
            <div className="wcb-standard-badges">
              <span className="wcb-badge">Background Checked</span>
              <span className="wcb-badge">Trained &amp; Supervised</span>
              <span className="wcb-badge">Eco-Friendly Certified</span>
            </div>
          </div>
        </section>

        {/* ── Reviews ── */}
        <section className="wcb-reviews">
          <div className="container">
            <div className="section-header">
              <span className="pill pill-white-yellow">Customer Reviews</span>
              <h2 className="h2 h2-dark">Tulsa Trusts Clean Bee</h2>
              <p className="lead lead-muted">
                Don't take our word for it. Here's what real customers have to say.
              </p>
            </div>
            <div className="wcb-reviews-grid">
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

        {/* ── FAQ ── */}
        <section className="wcb-faq">
          <div className="container">
            <div className="section-header">
              <span className="pill pill-white-yellow">FAQ</span>
              <h2 className="h2 h2-dark">Common Questions</h2>
              <p className="lead lead-muted">
                Straight answers to the things people ask us most.
              </p>
            </div>
            <div className="wcb-faq-list">
              {FAQS.map(f => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  )
}
