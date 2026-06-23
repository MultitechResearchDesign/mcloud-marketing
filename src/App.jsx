import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import PlatformOverview from './components/PlatformOverview'
import FeatureSection from './components/FeatureSection'
import Hardware from './components/Hardware'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import Pricing from './components/Pricing'
import Migration from './components/Migration'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-midnight text-text-primary font-sans min-h-screen">
      <Navbar />
      <Hero />
      <LogoBar />
      <PlatformOverview />
      <FeatureSection />
      <Hardware />
      <Stats />
      <Solutions />
      <Pricing />
      <Migration />
      <CTA />
      <Footer />
    </div>
  )
}
