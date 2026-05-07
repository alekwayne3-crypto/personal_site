import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import WhyCleanBeePage from './pages/WhyCleanBeePage'
import StandardCleaningPage from './pages/services/StandardCleaningPage'
import DeepCleaningPage from './pages/services/DeepCleaningPage'
import CommercialCleaningPage from './pages/services/CommercialCleaningPage'
import RecurringCleaningPage from './pages/services/RecurringCleaningPage'
import MoveInMoveOutPage from './pages/services/MoveInMoveOutPage'
import PostConstructionPage from './pages/services/PostConstructionPage'
import QuotePage from './pages/QuotePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    if (!hash) {
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)
      document.documentElement.style.scrollBehavior = ''
    }
  }, [pathname, hash])
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [pathname, hash])
  return null
}

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Clean Bee Cleaning Co.',
  url: 'https://cleanbeetulsa.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://cleanbeetulsa.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

function HomePage() {
  return (
    <div className="app">
      <SEO
        title="House Cleaning Service Tulsa OK | Clean Bee"
        description="Clean Bee is Tulsa's top-rated house cleaning service. Bonded, insured & background-checked. Standard, deep, move-out & recurring cleaning. Call (918) 772-7228."
        path="/"
        schema={HOME_SCHEMA}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/standard-cleaning" element={<StandardCleaningPage />} />
        <Route path="/services/deep-cleaning" element={<DeepCleaningPage />} />
        <Route path="/services/commercial-cleaning" element={<CommercialCleaningPage />} />
        <Route path="/services/recurring-cleaning" element={<RecurringCleaningPage />} />
        <Route path="/services/move-in-move-out" element={<MoveInMoveOutPage />} />
        <Route path="/services/post-construction" element={<PostConstructionPage />} />
        <Route path="/why-clean-bee" element={<WhyCleanBeePage />} />
        <Route path="/get-a-quote"  element={<QuotePage />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/contact"      element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
