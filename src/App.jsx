import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Features from './components/Features'
import Reminders from './components/Reminders'
import Workflow from './components/Workflow'
import Dashboard from './components/Dashboard'
import Impact from './components/Impact'
import WhyFileOnce from './components/WhyFileOnce'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Reminders />
        <Workflow />
        <Dashboard />
        <Impact />
        <WhyFileOnce />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
