import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import MeetFarmer from './components/MeetFarmer'
import OurStory from './components/OurStory'
import RiverIsland from './components/RiverIsland'
import FarmDay from './components/FarmDay'
import Philosophy from './components/Philosophy'
import WhatWeDontUse from './components/WhatWeDontUse'
import SoilToSoul from './components/SoilToSoul'
import WhyChooseUs from './components/WhyChooseUs'
import ProductShowcase from './components/ProductShowcase'
import EasternGhats from './components/EasternGhats'
import SeasonalAvailability from './components/SeasonalAvailability'
import Traceability from './components/Traceability'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import VisitFarm from './components/VisitFarm'
import Testimonials from './components/Testimonials'
import WhyOrganic from './components/WhyOrganic'
import JoinCommunity from './components/JoinCommunity'
import Delivery from './components/Delivery'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import EmotionalClosing from './components/EmotionalClosing'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { OrganicDivider } from './components/SectionDivider'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <MeetFarmer />
      <OrganicDivider />
      <OurStory />
      <RiverIsland />
      <FarmDay />
      <OrganicDivider />
      <Philosophy />
      <WhatWeDontUse />
      <SoilToSoul />
      <WhyChooseUs />
      <OrganicDivider />
      <ProductShowcase />
      <EasternGhats />
      <SeasonalAvailability />
      <Traceability />
      <HowItWorks />
      <OrganicDivider />
      <Gallery />
      <VisitFarm />
      <Testimonials />
      <WhyOrganic />
      <JoinCommunity />
      <Delivery />
      <Contact />
      <FAQ />
      <EmotionalClosing />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
