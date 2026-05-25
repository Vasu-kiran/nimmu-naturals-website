import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import RiverIsland from './components/RiverIsland'
import Products from './components/Products'
import Gallery from './components/Gallery'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <RiverIsland />
      <Products />
      <Gallery />
      <GetInTouch />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
