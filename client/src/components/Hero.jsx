import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [imgErr, setImgErr] = useState(false)
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">

      {/* Full-width background photo */}
      {!imgErr && (
        <img
          src="/maid.webp.webp"
          alt="Professional house cleaner in Tulsa, OK - Clean Bee Cleaning Co."
          className="hero-bg-photo"
          fetchpriority="high"
          onError={() => setImgErr(true)}
        />
      )}

      {/* White/yellow gradient overlay — fades left to transparent */}
      <div className="hero-overlay" />

      {/* Text content — same layout as before */}
      <div className="hero-left">
        <p className="hero-eyebrow">
          <span className="hero-dot" /> Serving Tulsa &amp; Nearby Areas
        </p>

        <h1 className="hero-title">
          Tulsa&apos;s Trusted<br /><em>Home Cleaners</em>
        </h1>

        <p className="hero-body">
          Professional home cleaning tailored to your schedule, budget, and standards.
        </p>

        <hr className="hero-divider" />

        <div className="hero-proof">
          <div className="hero-proof-bubbles">
            <span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <div className="hero-proof-stat">
            <strong>500+</strong>
            <span>Customer Reviews</span>
          </div>
          <div className="hero-proof-sep" />
          <div className="hero-proof-rating">
            <strong>4.9 / 5</strong>
            <span className="hero-stars">★★★★★</span>
          </div>
        </div>

        <div className="hero-left-btns">
          <Link className="btn btn-yellow hero-cta" to="/get-a-quote">
            Get a Free Quote →
          </Link>
          <a className="hero-phone-link" href="tel:9187727228">
            (918) 772-7228
          </a>
        </div>
      </div>

    </section>
  )
}
