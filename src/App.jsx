import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import TestimonialsSection from './TestimonialsSection'
import ContactSection from './ContactSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
