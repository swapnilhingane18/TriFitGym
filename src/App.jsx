import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Amenities from './components/Amenities'
import Transformations from './components/Transformations'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import Instagram from './components/Instagram'
import Testimonials from './components/Testimonials'
import BMICalculator from './components/BMICalculator'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileBottomBar from './components/MobileBottomBar'
import FreeTrialPopup from './components/FreeTrialPopup'
import TrustBar from './components/TrustBar'

const Divider = () => (
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C6FF]/20 to-transparent my-6 shadow-[0_0_15px_rgba(0,198,255,0.05)] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-dark rotate-45 border border-[#00C6FF]/30 shadow-[0_0_10px_rgba(0,198,255,0.2)]" />
    </div>
)

const FinalCTA = () => (
    <section className="py-16 relative overflow-hidden flex items-center justify-center border-t border-white/[0.02] bg-gradient-to-b from-dark to-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00C6FF]/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-5">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight drop-shadow-lg">
                Ready to <span className="text-accent drop-shadow-[0_0_15px_rgba(0,198,255,0.4)]">Transform</span> Your Body?
            </h2>
            <p className="text-text-muted text-base sm:text-lg mb-8 font-light max-w-xl mx-auto">
                No matter your starting point, TRIFIT is built for your journey. Join today and start with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <button
                    onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-10 py-4 sm:py-5 bg-gradient-to-r from-accent to-[#0088cc] text-white font-black rounded-xl shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:shadow-[0_0_35px_rgba(0,198,255,0.8)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] uppercase tracking-wider text-[14px]"
                >
                    Book Free Trial
                </button>
                <a
                    href="tel:+919730091331"
                    className="w-full sm:w-auto px-10 py-4 sm:py-5 border border-white/10 glass-panel text-white font-bold rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] uppercase tracking-wider text-[14px]"
                >
                    Call Now
                </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#E5E7EB] font-bold opacity-80">
                <span className="flex items-center gap-1.5"><span className="text-[#FACC15] text-sm leading-none">✓</span> Certified Trainers</span>
                <span className="flex items-center gap-1.5"><span className="text-[#FACC15] text-sm leading-none">✓</span> Modern Equipment</span>
                <span className="flex items-center gap-1.5"><span className="text-[#FACC15] text-sm leading-none">✓</span> Hygienic Environment</span>
            </div>
        </div>
    </section>
)

function App() {
  return (
    <div className="min-h-screen bg-dark text-text font-poppins overflow-x-hidden pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <TrustBar />
      <Divider />
      <Pricing />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Amenities />
      <Divider />
      <Transformations />
      <Divider />
      <Schedule />
      <Divider />
      <Trainers />
      <Divider />
      <Gallery />
      <Divider />
      <Instagram />
      <Divider />
      <Testimonials />
      <Divider />
      <BMICalculator />
      <Divider />
      <FAQ />
      <Divider />
      <Contact />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
      <FreeTrialPopup />
    </div>
  )
}

export default App
