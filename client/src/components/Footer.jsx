import { useState } from 'react'

export default function Footer() {
  const [logoErr, setLogoErr] = useState(false)
  const go  = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const yr  = new Date().getFullYear()

  return (
    <>
      {/* CTA Banner */}
      <div className="cta-banner">
        <h2 className="cta-banner-title">Ready for a Buzz-Worthy Clean?</h2>
        <p className="cta-banner-sub">
          Join 500+ Tulsa families who trust Clean Bee. Get your free quote today —
          no commitment, no pressure, just results.
        </p>
        <button className="btn btn-black" style={{ fontSize: 16, padding: '15px 36px' }} onClick={() => go('contact')}>
          Get My Free Quote →
        </button>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">

            <div className="footer-brand">
              <div className="footer-logo-row">
                {!logoErr
                  ? <img src="/logo.png" alt="Clean Bee" onError={() => setLogoErr(true)} />
                  : <span className="footer-logo-fallback">🐝</span>
                }
                <div className="footer-name-wrap">
                  <span className="footer-name">Clean Bee</span>
                  <span className="footer-sub">Clean That Creates a Buzz!</span>
                </div>
              </div>
              <p className="footer-body">
                Tulsa&apos;s trusted residential cleaning service since 2016.
                Eco-friendly, bonded, insured, and always on time.
              </p>
            </div>

            <div>
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                {['Standard Cleaning','Deep Cleaning','Move-In / Move-Out','Recurring Cleaning','Post-Construction','Green Cleaning'].map((s) => (
                  <li key={s}><a href="#services" onClick={e => { e.preventDefault(); go('services') }}>{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                {[['About Clean Bee','about'],['Customer Reviews','testimonials'],['Why Choose Us','why-us'],['Free Quote','contact']].map(([l,id]) => (
                  <li key={l}><a href={`#${id}`} onClick={e => { e.preventDefault(); go(id) }}>{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Contact</h4>
              {[
                { icon: '📞', text: '(918) 772-7228' },
                { icon: '✉️', text: 'hello@cleanbeecleaning.com' },
                { icon: '📍', text: 'Tulsa, OK & Surrounding Areas' },
                { icon: '🕐', text: 'Mon–Fri 8AM–6PM · Sat 9AM–5PM' },
              ].map(({ icon, text }) => (
                <div className="footer-contact-row" key={text}>
                  <span className="footer-contact-icon">{icon}</span>
                  <span className="footer-contact-val">{text}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="footer-bottom">
            <span>© {yr} Clean Bee Cleaning Co. All rights reserved. · Tulsa, Oklahoma</span>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
