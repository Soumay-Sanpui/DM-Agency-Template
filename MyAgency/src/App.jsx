import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ClientSection from './components/ClientSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import PortfolioSection from './components/PortfolioSection'
import BlogSection from './components/BlogSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

function App() {

  return (
    <main className='w-screen h-screen font-poppins'>
      <Navbar />
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <BlogSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}

export default App
