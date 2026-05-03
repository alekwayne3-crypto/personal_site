import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
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

function HomePage() {
  return (
    <div className="app">
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
