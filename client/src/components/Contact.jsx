import { useState } from 'react'

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM', open: true },
  { day: 'Saturday',        time: '9:00 AM – 5:00 PM', open: true },
  { day: 'Sunday',          time: 'Closed',             open: false },
]

const DETAILS = [
  { icon: '📞', label: 'Phone',        value: '(918) 772-7228' },
  { icon: '✉️', label: 'Email',        value: 'info@cleanbeetulsa.com' },
  { icon: '📍', label: 'Based In', value: 'Tulsa, OK' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', bedrooms: '', bathrooms: '', service: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')
  const [attempted, setAttempted] = useState(false)

  const set = (f) => (e) => setForm(prev => ({ ...prev, [f]: e.target.value }))

  const required = ['name', 'phone', 'email', 'address']
  const invalid = (f) => attempted && required.includes(f) && !form[f].trim()

  const submit = async (e) => {
    e.preventDefault()
    setAttempted(true)
    if (required.some(f => !form[f].trim())) return
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    setStatus('loading')
    setErrMsg('')
    try {
      const res  = await fetch('https://formspree.io/f/xdabkqqb', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(form) })
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
          <span className="pill pill-white-yellow">GET A QUOTE</span>
          <h2 className="h2 h2-dark">Let&apos;s Make Your Home Shine</h2>
          <p className="lead lead-muted">
            Fill out the form and a Clean Bee team member will reach back out to you with a custom quote. Or give us a call, we&apos;d be happy to help.
          </p>
        </div>

        <div className="contact-inner">

          {/* Left — info */}
          <div className="contact-info-col" id="reach-us">
            <span className="contact-eyebrow">Reach Us</span>
            <h3 className="contact-title">We&apos;re Easy to Reach</h3>
            <p className="contact-sub">
              Call, email, or stop by. We&apos;d love to hear from you. Our team is available Monday through Saturday and always happy to help.
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

          {/* Right — form */}
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
                <h3 className="form-card-title">Get Your Free Quote Today</h3>
                <form onSubmit={submit}>
                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label">Full Name {invalid('name') && <span className="form-required-err">*</span>}</label>
                      <input className={`form-input${invalid('name') ? ' form-input-err' : ''}`} type="text" placeholder="Jane Smith" value={form.name} onChange={set('name')} />
                    </div>
                    <div className="form-col">
                      <label className="form-label">Phone Number {invalid('phone') && <span className="form-required-err">*</span>}</label>
                      <input className={`form-input${invalid('phone') ? ' form-input-err' : ''}`} type="tel" placeholder="(918) 555-0000" value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>
                  <div className="form-col">
                    <label className="form-label">Email Address {invalid('email') && <span className="form-required-err">*</span>}</label>
                    <input className={`form-input${invalid('email') ? ' form-input-err' : ''}`} type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} />
                  </div>
                  <div className="form-col">
                    <label className="form-label">Home Address {invalid('address') && <span className="form-required-err">*</span>}</label>
                    <input className={`form-input${invalid('address') ? ' form-input-err' : ''}`} type="text" placeholder="123 Main St, Tulsa, OK" value={form.address} onChange={set('address')} />
                  </div>
                  <div className="form-col">
                    <label className="form-label" htmlFor="service">Type of Cleaning</label>
                    <select id="service" className="form-select" value={form.service} onChange={set('service')}>
                      <option value="">Select a service…</option>
                      {['Standard Cleaning', 'Deep Cleaning', 'Move-In / Move-Out', 'Recurring Cleaning', 'Post-Construction', 'Commercial Cleaning', 'Not Sure'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-col">
                      <label className="form-label" htmlFor="bedrooms">Bedrooms</label>
                      <select id="bedrooms" className="form-select" value={form.bedrooms} onChange={set('bedrooms')}>
                        <option value="">Select…</option>
                        {['1', '2', '3', '4', '5', '6+'].map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="form-col">
                      <label className="form-label" htmlFor="bathrooms">Bathrooms</label>
                      <select id="bathrooms" className="form-select" value={form.bathrooms} onChange={set('bathrooms')}>
                        <option value="">Select…</option>
                        {['1', '1.5', '2', '2.5', '3', '4+'].map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-col">
                    <label className="form-label">Tell Us About Your Home</label>
                    <textarea className="form-textarea" placeholder="e.g. pets, special requests, preferred schedule…" value={form.message} onChange={set('message')} />
                  </div>
                  {status === 'error' && <p className="form-error">⚠️ {errMsg}</p>}
                  <button type="submit" className="form-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? '⏳ Sending…' : 'Send My Free Quote Request'}
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
            <div className="contact-map">
              <iframe
                title="Clean Bee Service Area"
                src="https://maps.google.com/maps?q=8211+E+Regal+Pl,+Tulsa,+OK&z=10&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px', marginTop: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
