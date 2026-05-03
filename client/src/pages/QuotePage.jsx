import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './QuotePage.css'

const SERVICES = [
  { id: 'Standard Cleaning',      icon: '🧹', label: 'Standard Cleaning',      sub: 'Regular home maintenance' },
  { id: 'Deep Cleaning',          icon: '✨', label: 'Deep Cleaning',          sub: 'Top-to-bottom detail clean' },
  { id: 'Move-In / Move-Out',     icon: '📦', label: 'Move-In / Move-Out',     sub: 'Ready for move day' },
  { id: 'Recurring Cleaning',     icon: '📅', label: 'Recurring Cleaning',     sub: 'Weekly or bi-weekly service' },
  { id: 'Post-Construction',      icon: '🔨', label: 'Post-Construction',      sub: 'After the build dust settles' },
  { id: 'Commercial Cleaning',    icon: '🏢', label: 'Commercial Cleaning',    sub: 'Office & business spaces' },
]

const BEDROOMS  = ['Studio', '1', '2', '3', '4', '5', '6+']
const BATHROOMS = ['1', '1.5', '2', '2.5', '3', '4+']

const TRUST = [
  { icon: '🔒', text: 'Bonded & Fully Insured' },
  { icon: '✅', text: 'Background-Checked Staff' },
  { icon: '⭐', text: 'Satisfaction Guaranteed' },
  { icon: '🌱', text: 'Eco-Friendly Products' },
]

const STEP_LABELS = ['Service', 'Your Home', 'Contact', 'Confirm']

export default function QuotePage() {
  const [step,      setStep]      = useState(1)
  const [dir,       setDir]       = useState('forward')
  const [attempted, setAttempted] = useState(false)
  const [status,    setStatus]    = useState('idle')
  const [errMsg,    setErrMsg]    = useState('')
  const [form,      setForm]      = useState({
    service: '', bedrooms: '', bathrooms: '',
    name: '', phone: '', email: '', address: '', message: '',
  })

  useEffect(() => { document.title = 'Get a Free Quote | Clean Bee Tulsa' }, [])

  const pick   = (f, v) => setForm(prev => ({ ...prev, [f]: v }))
  const setFld = (f)    => (e) => setForm(prev => ({ ...prev, [f]: e.target.value }))

  const advance = (n) => { setDir(n > step ? 'forward' : 'back'); setStep(n) }

  const selectService = (id) => { pick('service', id); setTimeout(() => advance(2), 180) }

  const step2Valid = form.bedrooms && form.bathrooms
  const s3req      = ['name', 'phone', 'email', 'address']
  const step3Valid = s3req.every(f => form[f].trim())
  const inv3       = (f) => attempted && !form[f].trim()

  const next3 = () => { setAttempted(true); if (step3Valid) { setAttempted(false); advance(4) } }

  const submit = async () => {
    setStatus('loading')
    setErrMsg('')
    try {
      const res  = await fetch('https://formspree.io/f/xdabkqqb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
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
      <Navbar />
      <main className="qp-main">

        {/* ── Hero ── */}
        <section className="qp-hero">
          <div className="container qp-hero-inner">
            <span className="pill pill-dark">Free Quote — No Obligation</span>
            <h1 className="qp-hero-title">How Much Will It Cost?</h1>
            <p className="qp-hero-sub">Answer a few quick questions and we'll send you a custom quote within 24 hours.</p>
            <div className="qp-hero-badges">
              <span className="qp-hero-badge"><span className="qp-badge-check">✓</span> 2 Minutes</span>
              <span className="qp-hero-badge"><span className="qp-badge-check">✓</span> No Contracts</span>
              <span className="qp-hero-badge"><span className="qp-badge-check">✓</span> 100% Free</span>
              <span className="qp-hero-badge"><span className="qp-badge-check">✓</span> Quick Response</span>
            </div>
          </div>
        </section>

        {/* ── Form card ── */}
        <section className="qp-form-section">
          <div className="qp-card">

            {status === 'success' ? (
              <div className="qp-success">
                <div className="qp-success-bee">🐝</div>
                <h2 className="qp-success-title">We Got Your Request!</h2>
                <p className="qp-success-body">
                  Thank you, {form.name.split(' ')[0]}! A Clean Bee team member will reach out within 24 hours with your custom quote.
                </p>
                <Link className="btn btn-yellow" to="/">Back to Home</Link>
              </div>
            ) : (
              <>
                {/* Progress bar */}
                <div className="qp-progress">
                  {STEP_LABELS.map((label, i) => {
                    const n = i + 1
                    return (
                      <div className="qp-prog-item" key={n}>
                        <div className={`qp-prog-dot${step > n ? ' done' : step === n ? ' active' : ''}`}>
                          {step > n ? '✓' : n}
                        </div>
                        <div className={`qp-prog-label${step === n ? ' active' : ''}`}>{label}</div>
                        {n < 4 && <div className={`qp-prog-line${step > n ? ' done' : ''}`} />}
                      </div>
                    )
                  })}
                </div>

                {/* Step content — key forces re-mount → re-triggers animation */}
                <div className={`qp-step qp-step--${dir}`} key={step}>

                  {/* ── Step 1: Service ── */}
                  {step === 1 && (
                    <div className="qp-step-inner">
                      <h2 className="qp-step-title">What type of cleaning do you need?</h2>
                      <p className="qp-step-sub">Tap one to continue</p>
                      <div className="qp-service-grid">
                        {SERVICES.map(s => (
                          <button
                            key={s.id}
                            className={`qp-service-card${form.service === s.id ? ' selected' : ''}`}
                            onClick={() => selectService(s.id)}
                          >
                            <span className="qp-svc-icon">{s.icon}</span>
                            <span className="qp-svc-label">{s.label}</span>
                            <span className="qp-svc-sub">{s.sub}</span>
                            {form.service === s.id && <span className="qp-svc-check">✓</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Step 2: Home details ── */}
                  {step === 2 && (
                    <div className="qp-step-inner">
                      <h2 className="qp-step-title">Tell us about your home</h2>
                      <p className="qp-step-sub">This helps us give you an accurate quote</p>

                      <div className="qp-pill-section">
                        <div className="qp-pill-label">Bedrooms</div>
                        <div className="qp-pill-row">
                          {BEDROOMS.map(b => (
                            <button
                              key={b}
                              className={`qp-pill${form.bedrooms === b ? ' selected' : ''}`}
                              onClick={() => pick('bedrooms', b)}
                            >{b}</button>
                          ))}
                        </div>
                      </div>

                      <div className="qp-pill-section">
                        <div className="qp-pill-label">Bathrooms</div>
                        <div className="qp-pill-row">
                          {BATHROOMS.map(b => (
                            <button
                              key={b}
                              className={`qp-pill${form.bathrooms === b ? ' selected' : ''}`}
                              onClick={() => pick('bathrooms', b)}
                            >{b}</button>
                          ))}
                        </div>
                      </div>

                      <div className="qp-nav">
                        <button className="qp-back-btn" onClick={() => advance(1)}>← Back</button>
                        <button
                          className="btn btn-yellow"
                          onClick={() => step2Valid && advance(3)}
                          disabled={!step2Valid}
                        >Continue →</button>
                      </div>
                    </div>
                  )}

                  {/* ── Step 3: Contact info ── */}
                  {step === 3 && (
                    <div className="qp-step-inner">
                      <h2 className="qp-step-title">How do we reach you?</h2>
                      <p className="qp-step-sub">Your info is never shared or sold</p>

                      <div className="qp-fields">
                        <div className="qp-field-row">
                          <div className="qp-field">
                            <label className="form-label">Full Name {inv3('name') && <span className="form-required-err">*</span>}</label>
                            <input className={`form-input${inv3('name') ? ' form-input-err' : ''}`} placeholder="Jane Smith" value={form.name} onChange={setFld('name')} />
                          </div>
                          <div className="qp-field">
                            <label className="form-label">Phone Number {inv3('phone') && <span className="form-required-err">*</span>}</label>
                            <input className={`form-input${inv3('phone') ? ' form-input-err' : ''}`} type="tel" placeholder="(918) 555-0000" value={form.phone} onChange={setFld('phone')} />
                          </div>
                        </div>
                        <div className="qp-field">
                          <label className="form-label">Email Address {inv3('email') && <span className="form-required-err">*</span>}</label>
                          <input className={`form-input${inv3('email') ? ' form-input-err' : ''}`} type="email" placeholder="jane@example.com" value={form.email} onChange={setFld('email')} />
                        </div>
                        <div className="qp-field">
                          <label className="form-label">Home Address {inv3('address') && <span className="form-required-err">*</span>}</label>
                          <input className={`form-input${inv3('address') ? ' form-input-err' : ''}`} placeholder="123 Main St, Tulsa, OK" value={form.address} onChange={setFld('address')} />
                        </div>
                      </div>

                      <div className="qp-nav">
                        <button className="qp-back-btn" onClick={() => advance(2)}>← Back</button>
                        <button className="btn btn-yellow" onClick={next3}>Continue →</button>
                      </div>
                    </div>
                  )}

                  {/* ── Step 4: Confirm ── */}
                  {step === 4 && (
                    <div className="qp-step-inner">
                      <h2 className="qp-step-title">Almost done!</h2>
                      <p className="qp-step-sub">Review your details below, then send your request</p>

                      <div className="qp-summary">
                        {[
                          ['Service',   form.service],
                          ['Bedrooms',  form.bedrooms],
                          ['Bathrooms', form.bathrooms],
                          ['Name',      form.name],
                          ['Phone',     form.phone],
                          ['Email',     form.email],
                          ['Address',   form.address],
                        ].map(([k, v]) => (
                          <div className="qp-summary-row" key={k}>
                            <span className="qp-summary-key">{k}</span>
                            <span className="qp-summary-val">{v}</span>
                          </div>
                        ))}
                      </div>

                      <div className="qp-field" style={{ marginTop: '24px' }}>
                        <label className="form-label">
                          Anything else we should know?&nbsp;
                          <span className="qp-optional">(optional)</span>
                        </label>
                        <textarea
                          className="form-textarea"
                          placeholder="Pets, special requests, preferred schedule…"
                          value={form.message}
                          onChange={setFld('message')}
                        />
                      </div>

                      {status === 'error' && <p className="form-error">⚠️ {errMsg}</p>}

                      <div className="qp-nav">
                        <button className="qp-back-btn" onClick={() => advance(3)}>← Back</button>
                        <button className="btn btn-yellow qp-submit-btn" onClick={submit} disabled={status === 'loading'}>
                          {status === 'loading' ? '⏳ Sending…' : 'Send My Free Quote Request →'}
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </>
            )}
          </div>
        </section>

        {/* ── Trust strip ── */}
        <section className="qp-trust">
          <div className="container qp-trust-inner">
            {TRUST.map(({ icon, text }) => (
              <div className="qp-trust-item" key={text}>
                <span className="qp-trust-icon">{icon}</span>
                <span className="qp-trust-text">{text}</span>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
