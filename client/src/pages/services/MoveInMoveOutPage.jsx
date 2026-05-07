import SEO from '../../components/SEO'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './ServiceDetail.css'

const FEATURES = [
  'Inside Closets & Cabinets',
  'Walls, Switches & Outlets',
  'Window Sills & Tracks',
  'Full Appliance Cleaning',
  'Bathrooms Deep Scrubbed',
  'Floors Vacuumed & Mopped',
  'Deposit-Back Guarantee',
]

const WHO_CARDS = [
  {
    icon: '🔑',
    title: 'Renters Moving Out',
    desc: 'Get every dollar of your deposit back. Our move-out cleaning covers every surface landlords inspect, from inside cabinets to behind appliances.',
  },
  {
    icon: '🏠',
    title: 'New Homeowners Moving In',
    desc: 'Start in a home that is genuinely clean, not just sold as clean. We go through every room so your first night feels like yours from the start.',
  },
  {
    icon: '📋',
    title: 'Landlords Between Tenants',
    desc: 'Prepare your property for listing fast. Clean Bee move-out cleans are thorough, documented, and done on your timeline so you never lose a week of rent.',
  },
]

const TRUST = [
  { icon: '🛡️', label: 'Bonded & Insured' },
  { icon: '✅', label: 'Background Checked' },
  { icon: '🌿', label: 'Eco-Friendly Products' },
  { icon: '⭐', label: 'Satisfaction Guaranteed' },
]

const REVIEW = {
  initials: 'MR',
  name: 'Mike R.',
  location: 'Broken Arrow, OK',
  rating: 5,
  text: "Hired them for move-out cleaning and got every penny of our deposit back. Professional, on time, and left the place better than when we first moved in. Cannot recommend them enough.",
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cleanbeetulsa.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cleanbeetulsa.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Move-In / Move-Out Cleaning', item: 'https://cleanbeetulsa.com/services/move-in-move-out' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Move-In / Move-Out Cleaning',
      serviceType: 'House Cleaning',
      description: 'Professional move-in and move-out cleaning in Tulsa, OK. Get your deposit back or start fresh in your new home with a top-to-bottom deep clean.',
      url: 'https://cleanbeetulsa.com/services/move-in-move-out',
      provider: { '@type': 'LocalBusiness', name: 'Clean Bee Cleaning Co.', telephone: '+19187727228' },
      areaServed: 'Tulsa, OK',
    },
  ],
}

export default function MoveInMoveOutPage() {
  return (
    <div className="app">
      <SEO
        title="Move-In Move-Out Cleaning Tulsa OK | Clean Bee"
        description="Professional move-in & move-out cleaning in Tulsa, OK. Get your deposit back or start fresh in your new home. Top-to-bottom deep clean by a bonded, insured team."
        path="/services/move-in-move-out"
        schema={SCHEMA}
      />
      <Navbar />
      <main className="sd-main">

        {/* ── Hero ── */}
        <section className="sd-hero">
          <div className="container sd-hero-inner">
            <span className="pill pill-dark">Move-In / Move-Out</span>
            <h1 className="sd-hero-h1">Move-In / Move-Out Cleaning in Tulsa, OK</h1>
            <p className="sd-hero-tagline">
              Protect your deposit. Start fresh. We handle every corner.
            </p>
            <div className="sd-hero-actions">
              <a className="btn btn-yellow" href="/get-a-quote">Get a Free Quote &rarr;</a>
              <a className="sd-hero-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="sd-included">
          <div className="container sd-included-inner">
            <div>
              <span className="pill pill-white-yellow">What's Included</span>
              <h2 className="sd-included-heading">The Most Thorough Clean a Home Can Get</h2>
              <p className="sd-included-sub">
                Our move-in and move-out cleaning service in Tulsa covers every surface, inside every cabinet, and behind every appliance. We leave nothing for a landlord to find.
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
            <span className="pill pill-white-yellow">Why Move-In / Move-Out Cleaning</span>
            <h2 className="sd-why-heading">This Is the Clean That Protects Your Money and Your Move</h2>
            <div className="sd-why-body">
              <p>
                A move-out clean is one of the highest-stakes cleans you will ever need. Landlords across Tulsa know exactly what to look for, and a missed oven, dirty cabinet, or grimy window sill can cost you hundreds of dollars out of pocket. Clean Bee's move-out service is built specifically to meet and exceed inspection standards so you walk away with your full deposit and zero disputes.
              </p>
              <p>
                For renters moving in, starting fresh means starting truly clean. Not wiped-down clean. Deep cleaned. We go through the property the way you would want to go through it: inside every drawer, behind every appliance, under every shelf. When we are done, the space is ready for your belongings, your family, and your life, not someone else's residue.
              </p>
              <p>
                Landlords and property managers across Tulsa, Broken Arrow, and the surrounding area trust Clean Bee to turn units between tenants quickly, thoroughly, and professionally. We work on your timeline, deliver a complete clean, and make your rental ready to list faster than any other service in the area.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="sd-who">
          <div className="container">
            <div className="sd-who-header">
              <span className="pill pill-white-yellow">Who It's For</span>
              <h2 className="sd-who-heading">For Everyone in a Move</h2>
              <p className="sd-who-sub">Whether you are leaving, arriving, or managing the property in between, Clean Bee has you covered.</p>
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
            <h2 className="sd-review-heading">Full Deposit Back. Guaranteed.</h2>
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
            <span className="pill pill-dark">Deposit-Back Guarantee</span>
            <h2 className="sd-cta-headline">Get Your Deposit Back. Or Start Fresh.</h2>
            <p className="sd-cta-sub">
              Serving renters, homeowners, and landlords across Tulsa, Broken Arrow, and surrounding areas. Book before your move date.
            </p>
            <div className="sd-cta-actions">
              <a className="btn btn-yellow" href="/get-a-quote">Get a Free Quote &rarr;</a>
              <a className="sd-cta-phone" href="tel:9187727228">(918) 772-7228</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
