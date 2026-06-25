import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingWidget from './components/BookingWidget'
import About from './components/About'
import Services from './components/Services'
import Rooms from './components/Rooms'
import Experience from './components/Experience'
import Amenities from './components/Amenities'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Offers from './components/Offers'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Booking from './pages/Booking'

const HomePage = () => (
  <>
    <Hero />
    <BookingWidget />
    <About />
    <Services />
    <Rooms />
    <Experience />
    <Amenities />
    <Testimonials />
    <Gallery />
    <Offers />
    <Contact />
    <MapSection />
  </>
)

const App = () => {
  return (
    <div className="bg-midnight text-ivory min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
