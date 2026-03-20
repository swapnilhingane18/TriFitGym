import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-dark/90 backdrop-blur-xl border-t border-white/[0.06] shadow-[0_-4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between gap-3 px-4 py-3 max-w-lg mx-auto">
          {/* Call Now */}
          <a
            href="tel:+919730091331"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 glass-panel text-white font-bold text-[13px] uppercase tracking-wider rounded-xl active:scale-[0.96] transition-transform shadow-lg"
          >
            <FaPhoneAlt className="text-sm text-accent" />
            Call Now
          </a>

          {/* Free Trial */}
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex-1 flex items-center justify-center py-3.5 bg-gradient-to-r from-accent to-[#0088cc] text-white font-bold text-[13px] uppercase tracking-wider rounded-xl hover:shadow-[0_0_15px_rgba(0,198,255,0.4)] active:scale-[0.96] transition-all duration-300"
          >
            Free Trial
          </a>
        </div>
      </div>
      {/* Safe area spacer for phones with bottom bars */}
      <div className="bg-dark/90 h-[env(safe-area-inset-bottom,0px)]" />
    </div>
  )
}
