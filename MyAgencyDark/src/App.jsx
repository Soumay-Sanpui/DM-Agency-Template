import './App.css'
import About from './components/AboutSection'
import BlogSection from './components/BlogSection'
import EndNoteSection from './components/EndNoteSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import ServiceSection from './components/ServiceSection'
import TestimonialSection from './components/TestimonialSection'

function App() {
  return (
    <main className='font-poppins w-screen text-[1.1vw]'>
     <Navbar />
     <HeroSection />
     <About />
     <PortfolioSection />
     <ProcessSection />
     <ServiceSection />
     <BlogSection />
     <TestimonialSection />
     <EndNoteSection />
     <Footer />
    </main>
  )
}

export default App
