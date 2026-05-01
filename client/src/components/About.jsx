import { useState } from 'react'

const TEAM_IMG = '/team.jpg'

const POINTS = [
  { icon: '🏆', text: "Award-Winning Local Service" },
  { icon: '🔐', text: "Fully Bonded & Insured" },
  { icon: '👥', text: "Background-Checked Staff" },
  { icon: '🌱', text: "Eco-Friendly Products" },
  { icon: '📅', text: "Flexible Scheduling" },
  { icon: '⭐', text: "100% Satisfaction Guarantee" },
]

export default function About() {
  const [logoErr, setLogoErr] = useState(false)
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">

          <div className="about-visual">
            <div className="about-img-frame">
              <img
                className="about-team-img"
                src={TEAM_IMG}
                alt="Clean Bee Team"
                onError={e => { e.target.style.display='none' }}
              />
            </div>
            <div className="about-float-badge">
              <div className="about-float-num">2016</div>
              <div className="about-float-label">Founded in Tulsa</div>
            </div>
            <div className="about-side-badge">
              <span className="about-side-badge-icon">🐝</span>
              <span className="about-side-badge-text">Locally Owned &amp; Operated</span>
            </div>
          </div>

          <div>
            <span className="about-tag">About Clean Bee</span>
            <h2 className="about-title">
              Tulsa Proud &amp; Creating a Buzz Since 2016
            </h2>
            <p className="about-body">
              Clean Bee was founded right here in Tulsa by a family who believed every
              homeowner deserves a spotless, healthy home — without the hassle, the
              harsh chemicals, or unreliable service.
            </p>
            <p className="about-body">
              Over eight years we&apos;ve grown into one of Tulsa&apos;s most trusted
              residential cleaning companies, serving South Tulsa, Midtown, Broken Arrow,
              Owasso, Jenks, and beyond. Every bee in our hive is personally vetted,
              trained, and equipped with eco-friendly supplies.
            </p>

            <div className="about-points">
              {POINTS.map((p) => (
                <div className="about-point" key={p.text}>
                  <span className="about-point-icon">{p.icon}</span>
                  <span className="about-point-text">{p.text}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-yellow" onClick={() => go('contact')}>
              Get Your Free Quote →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
