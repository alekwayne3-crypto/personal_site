import { useState } from 'react'

export default function Footer() {
  const [logoErr, setLogoErr] = useState(false)
  const go  = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const yr  = new Date().getFullYear()

  return (
    <>
      {/* Service Areas Banner */}
      <div className="cta-banner">
        <span className="pill pill-white-yellow" style={{ marginBottom: 20, display: 'inline-block' }}>Service Areas</span>
        <h2 className="cta-banner-title">Proudly Serving the Greater Tulsa Area</h2>
        <p className="cta-banner-sub">
          Clean Bee provides professional residential cleaning services across Tulsa and all surrounding communities.
        </p>
        <div className="service-areas-grid">
          {['Broken Arrow','Bixby','Jenks','Owasso','Sand Springs','Sapulpa','Glenpool','Catoosa','Coweta','Claremore','Tulsa'].map(area => (
            <span key={area} className="service-area-tag">{area}</span>
          ))}
        </div>
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
              </div>
              <p className="footer-body">
                Keeping Tulsa homes clean since 2016. No shortcuts, no excuses, just a clean home every time.
              </p>
            </div>

            <div>
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                {['Standard Cleaning','Deep Cleaning','Commercial Cleaning','Recurring Cleaning','Move-In / Move-Out','Post-Construction'].map((s) => (
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
                { icon: '✉️', text: 'info@cleanbeetulsa.com' },
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
            <span>© {yr} Clean Bee Cleaning Co. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="/terms.html" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
