import { useState } from 'react'
import { Link } from 'react-router-dom'

const TEAM_IMG = '/team.jpg'

const POINTS = [
  { icon: '🏆', text: "Top Rated in Tulsa" },
  { icon: '🔐', text: "Fully Bonded & Insured" },
  { icon: '👥', text: "Background-Checked Staff" },
  { icon: '🌱', text: "Eco-Friendly Products" },
  { icon: '📅', text: "8+ Years of Experience" },
  { icon: '⭐', text: "Trusted by 500+ Families" },
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
                alt="Clean Bee cleaning team serving Tulsa, OK"
                loading="lazy"
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
              We started Clean Bee because we were tired of the same story. A cleaning company shows up late, does a rushed job, and you're left wondering if anything was actually cleaned. We knew Tulsa deserved better.
            </p>
            <p className="about-body">
              So in 2016 we built something different. A small team, high standards, and a simple promise: we treat your home like it's our own. Eight years later, hundreds of Tulsa families trust us every week, and that promise hasn't changed.
            </p>

            <div className="about-points">
              {POINTS.map((p) => (
                <div className={`about-point${p.text === 'Eco-Friendly Products' || p.text === 'Fully Bonded & Insured' || p.text === 'Background-Checked Staff' ? ' hide-mobile' : ''}`} key={p.text}>
                  <span className="about-point-icon">{p.icon}</span>
                  <span className="about-point-text">{p.text}</span>
                </div>
              ))}
            </div>

            <Link className="btn btn-yellow" to="/get-a-quote">
              Get Your Free Quote →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
