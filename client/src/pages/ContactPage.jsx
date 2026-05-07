import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContactPage.css'

const DETAILS = [
  { icon: '📞', label: 'Phone',   value: '(918) 772-7228',        href: 'tel:9187727228' },
  { icon: '✉️', label: 'Email',   value: 'info@cleanbeetulsa.com', href: 'mailto:info@cleanbeetulsa.com' },
  { icon: '📍', label: 'Based In', value: 'Tulsa, OK',             href: null },
]

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM', open: true },
  { day: 'Saturday',        time: '9:00 AM – 5:00 PM', open: true },
  { day: 'Sunday',          time: 'Closed',             open: false },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cleanbeetulsa/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/61588860914607/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@clean.bee.of.tuls',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>,
  },
]

export default function ContactPage() {
  const [form,      setForm]      = useState({ name: '', email: '', phone: '', message: '' })
  const [status,    setStatus]    = useState('idle')
  const [attempted, setAttempted] = useState(false)
  const [errMsg,    setErrMsg]    = useState('')

  const set = (f) => (e) => setForm(prev => ({ ...prev, [f]: e.target.value }))
  const required = ['name', 'email', 'message']
  const inv = (f) => attempted && required.includes(f) && !form[f].trim()

  const submit = async (e) => {
    e.preventDefault()
    setAttempted(true)
    if (required.some(f => !form[f].trim())) return
    setStatus('loading')
    setErrMsg('')
    try {
      const res  = await fetch('https://formspree.io/f/xdabkqqb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, formType: 'General Inquiry' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
    } catch (err) {
      setErrMsg(err.message)
      setStatus('error')
    }
  }

  return (
    <div className="app">
      <SEO
        title="Contact Clean Bee Tulsa | (918) 772-7228"
        description="Get in touch with Clean Bee in Tulsa, OK. Call (918) 772-7228, email us, or fill out our contact form. We respond quickly during business hours Mon–Sat."
        path="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cleanbeetulsa.com/' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://cleanbeetulsa.com/contact' },
          ],
        }}
      />
      <Navbar />

      <main className="cp-main">

        {/* ── Hero ── */}
        <section className="cp-hero">
          <div className="container cp-hero-inner">
            <span className="pill pill-dark">Contact</span>
            <h1 className="cp-hero-title">Let's Talk.</h1>
            <p className="cp-hero-sub">
              Questions, special requests, or just want to learn more? We are easy to reach and always happy to help.
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="cp-body">
          <div className="container cp-grid">

            {/* ── Left: Info ── */}
            <div className="cp-info">

              <div className="cp-info-block">
                <h2 className="cp-block-title">Reach Us Directly</h2>
                <p className="cp-block-sub">The fastest way to get an answer is to call or email us directly.</p>
                <div className="cp-details">
                  {DETAILS.map(({ icon, label, value, href }) => (
                    <div className="cp-detail-row" key={label}>
                      <div className="cp-detail-icon">{icon}</div>
                      <div>
                        <div className="cp-detail-label">{label}</div>
                        {href
                          ? <a className="cp-detail-value cp-detail-link" href={href}>{value}</a>
                          : <div className="cp-detail-value">{value}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cp-info-block">
                <h3 className="cp-block-title cp-block-title--sm">Business Hours</h3>
                <div className="cp-hours">
                  {HOURS.map(({ day, time, open }) => (
                    <div className="cp-hours-row" key={day}>
                      <span className="cp-hours-day">{day}</span>
                      <span className={`cp-hours-time${open ? '' : ' cp-hours-closed'}`}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cp-info-block">
                <h3 className="cp-block-title cp-block-title--sm">Follow Us</h3>
                <div className="cp-socials">
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="cp-social-icon">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="cp-cta-strip">
                <p className="cp-cta-strip-text">Looking for a cleaning quote?</p>
                <Link className="btn btn-yellow" to="/get-a-quote">Get a Free Quote →</Link>
              </div>

            </div>

            {/* ── Right: Form ── */}
            <div className="cp-form-card">
              {status === 'success' ? (
                <div className="cp-success">
                  <div className="cp-success-bee">🐝</div>
                  <h3 className="cp-success-title">Message Received!</h3>
                  <p className="cp-success-body">
                    Thanks, {form.name.split(' ')[0]}. We will get back to you as soon as possible — usually within a few hours during business days.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="cp-form-title">Send Us a Message</h2>
                  <p className="cp-form-sub">We read every message and respond promptly.</p>
                  <form onSubmit={submit} className="cp-form">
                    <div className="cp-field-row">
                      <div className="cp-field">
                        <label className="form-label">Full Name {inv('name') && <span className="form-required-err">*</span>}</label>
                        <input className={`form-input${inv('name') ? ' form-input-err' : ''}`} placeholder="Jane Smith" value={form.name} onChange={set('name')} />
                      </div>
                      <div className="cp-field">
                        <label className="form-label">Phone <span className="cp-optional">(optional)</span></label>
                        <input className="form-input" type="tel" placeholder="(918) 555-0000" value={form.phone} onChange={set('phone')} />
                      </div>
                    </div>
                    <div className="cp-field">
                      <label className="form-label">Email Address {inv('email') && <span className="form-required-err">*</span>}</label>
                      <input className={`form-input${inv('email') ? ' form-input-err' : ''}`} type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} />
                    </div>
                    <div className="cp-field">
                      <label className="form-label">Message {inv('message') && <span className="form-required-err">*</span>}</label>
                      <textarea className={`form-textarea${inv('message') ? ' form-input-err' : ''}`} placeholder="How can we help?" value={form.message} onChange={set('message')} rows={6} />
                    </div>
                    {status === 'error' && <p className="form-error">⚠️ {errMsg}</p>}
                    <button type="submit" className="btn btn-yellow cp-submit" disabled={status === 'loading'}>
                      {status === 'loading' ? '⏳ Sending…' : 'Send Message →'}
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </section>

        {/* ── Map ── */}
        <div className="cp-map">
          <iframe
            title="Clean Bee Service Area — Tulsa, OK"
            src="https://maps.google.com/maps?q=Tulsa,+OK&z=11&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </main>

      <Footer />
    </div>
  )
}
