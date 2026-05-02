const REASONS = [
  {
    icon: '🔒',
    title: 'Bonded & Fully Insured',
    desc: 'Your home and belongings are fully protected. We carry complete liability insurance and bonding on every job.',
  },
  {
    icon: '✅',
    title: 'Background Checked Staff',
    desc: 'Every member of our team passes a thorough background check before entering your home. Trust is everything.',
  },
  {
    icon: '🌱',
    title: 'Eco Friendly Products',
    desc: 'Our nontoxic, biodegradable solutions are safe for children, pets, and the environment. Clean results without the harsh chemicals.',
  },
  {
    icon: '⭐',
    title: 'Satisfaction Guaranteed',
    desc: "Not happy with something? Tell us within 24 hours and we'll come back and clean it again. No charge, no questions asked.",
  },
  {
    icon: '📅',
    title: 'Easy Online Booking',
    desc: 'Schedule, reschedule, or cancel online or by phone — 7 days a week. We work around your life.',
  },
  {
    icon: '🏠',
    title: "Tulsa's Local Experts",
    desc: 'We know Tulsa homes inside and out. Locally owned, community-focused, and proud to serve since 2016.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="pill pill-white-yellow">Why Clean Bee?</span>
          <h2 className="h2 h2-dark">The Clean Bee Difference</h2>
          <p className="lead lead-muted">
            We don&apos;t just clean, we build lasting trust. Here&apos;s why hundreds
            of Tulsa families choose Clean Bee over every other option.
          </p>
        </div>

        <div className="why-grid">
          {REASONS.map((r) => (
            <div className={`why-card${r.title === 'Easy Online Booking' || r.title === "Tulsa's Local Experts" ? ' hide-mobile' : ''}`} key={r.title}>
              <div className="why-icon-wrap">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
