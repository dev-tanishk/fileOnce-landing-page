import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Features from '../components/Features'
import Reminders from '../components/Reminders'
import FeatureDeepDive from '../components/FeatureDeepDive'
import Workflow from '../components/Workflow'
import Dashboard from '../components/Dashboard'
import Impact from '../components/Impact'
import WhyFileOnce from '../components/WhyFileOnce'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <FeatureDeepDive />
        <Reminders />
        <Workflow />
        <Dashboard />
        <Impact />
        <WhyFileOnce />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
