import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CalloutBanner from './components/CalloutBanner'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CalloutBanner />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
