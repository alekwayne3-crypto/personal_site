import { useState } from 'react'

const SERVICE_OPTIONS = [
  'Standard Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Recurring Cleaning — Weekly',
  'Recurring Cleaning — Bi-Weekly',
  'Recurring Cleaning — Monthly',
  'Post-Construction Cleaning',
  'Green / Eco-Friendly Cleaning',
  'Not Sure — Help Me Choose',
]

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Saturday',        time: '9:00 AM – 5:00 PM', open: true },
  { day: 'Sunday',          time: 'Closed',             open: false },
]

const DETAILS = [
  { icon: '📞', label: 'Phone',        value: '(918) 772-7228' },
  { icon: '✉️', label: 'Email',        value: 'hello@cleanbeecleaning.com' },
  { icon: '📍', label: 'Service Area', value: 'Greater Tulsa, OK & Surrounding Areas' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (f) => (e) => setForm((prev) => ({ ...prev, [f]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
    } catch (err) {
      setErrMsg(err.message)
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="pill pill-yellow">Contact Us</span>
          <h2 className="h2 h2-dark">Get Your Free Quote Today</h2>
          <p className="lead lead-muted">
            Ready for a cleaner home? Reach out and we&apos;ll respond within a few hours —
            no obligation, no pressure.
          </p>
        </div>

        <div className="contact-inner">

          {/* Left — info (order-2 on mobile) */}
          <div className="contact-info-col">
            <span className="contact-eyebrow">Reach Us</span>
            <h3 className="contact-title">Let&apos;s Make Your Home Shine</h3>
            <p className="contact-sub">
              Fill out the form and a Clean Bee team member will reach back out with
              a custom quote. Or give us a call — we&apos;re happy to chat.
            </p>
            <div className="contact-details">
              {DETAILS.map(({ icon, label, value }) => (
                <div className="contact-item" key={label}>
                  <div className="contact-item-icon">{icon}</div>
                  <div>
                    <div className="contact-item-label">{label}</div>
                    <div className="contact-item-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form (order-1 on mobile) */}
          <div className="form-card contact-form-col">
            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success-icon">🐝</div>
                <h3 className="form-success-title">We Got Your Request!</h3>
                <p className="form-success-body">
                  Thank you, {form.name.split(' ')[0]}! A Clean Bee team member will
                  reach out within 24 hours with your personalized quote.
                  We can&apos;t wait to make your home shine!
                </p>
              </div>
            ) : (
              <>
                <h3 className="form-card-title">Request a Free Quote</h3>
                <p className="form-card-sub">No obligation — we&apos;ll get back to you fast.</p>
                <form onSubmit={submit}>
                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" type="text" placeholder="Jane Smith" value={form.name} onChange={set('name')} required />
                    </div>
                    <div className="form-col">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" type="tel" placeholder="(918) 555-0000" value={form.phone} onChange={set('phone')} />
                    </div>
                    <div className="form-col">
                      <label className="form-label">Service Needed</label>
                      <select className="form-select" value={form.service} onChange={set('service')}>
                        <option value="">Select a service…</option>
                        {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-col">
                    <label className="form-label">Tell Us About Your Home *</label>
                    <textarea className="form-textarea" placeholder="e.g. 3-bed house in South Tulsa, need bi-weekly cleaning, 1 dog…" value={form.message} onChange={set('message')} required />
                  </div>
                  {status === 'error' && <p className="form-error">⚠️ {errMsg}</p>}
                  <button type="submit" className="form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? '⏳ Sending…' : '🐝 Send My Free Quote Request'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Hours — order-3 on mobile */}
          <div className="contact-hours-box contact-hours-col">
            <div className="contact-hours-title">🕐 Business Hours</div>
            {HOURS.map(({ day, time, open }) => (
              <div className="hours-row" key={day}>
                <span>{day}</span>
                <span className={open ? 'hours-open' : 'hours-closed'}>{time}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
