import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './QuotePage.css'
import './WhyCleanBeePage.css'

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

const STEPS = [
  {
    num: '01',
    title: 'Request a Free Quote',
    desc: 'Fill out our quick form or give us a call. Tell us about your home and what you need. We\'ll get back to you fast with a custom quote.',
  },
  {
    num: '02',
    title: 'We Show Up and Clean',
    desc: 'A background-checked, trained Clean Bee crew arrives on time with everything needed. We clean your home top to bottom, exactly the way we promised.',
  },
  {
    num: '03',
    title: 'You Come Home to Clean',
    desc: 'That\'s it. No surprises, no shortcuts. Just a genuinely clean home waiting for you. And if anything isn\'t right, we\'ll come back and fix it.',
  },
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
      <SEO
        title="Get a Free Cleaning Quote | Tulsa OK | Clean Bee"
        description="Get a free house cleaning quote in Tulsa, OK. Takes just 2 minutes. No contracts, no hassle. Serving Tulsa, Broken Arrow, Jenks, Owasso & surrounding areas."
        path="/get-a-quote"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cleanbeetulsa.com/' },
            { '@type': 'ListItem', position: 2, name: 'Get a Free Quote', item: 'https://cleanbeetulsa.com/get-a-quote' },
          ],
        }}
      />
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


        {/* ── How It Works ── */}
        <section className="wcb-how">
          <div className="container">
            <div className="section-header">
              <span className="pill pill-white-yellow">How It Works</span>
              <h2 className="h2 h2-dark">Three Steps to a Cleaner Home</h2>
              <p className="lead lead-muted">
                No complicated process. No hoops to jump through. Just tell us what you need and we'll handle the rest.
              </p>
            </div>
            <div className="wcb-how-grid">
              {STEPS.map((step, i) => (
                <div className="wcb-how-card" key={step.num}>
                  <div className="wcb-how-num">{step.num}</div>
                  {i < STEPS.length - 1 && <div className="wcb-how-connector" aria-hidden="true" />}
                  <h3 className="wcb-how-title">{step.title}</h3>
                  <p className="wcb-how-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
