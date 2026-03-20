import { motion } from 'framer-motion'
import { FaPlay, FaArrowDown, FaCheckCircle } from 'react-icons/fa'

export default function Hero() {
    const handleScroll = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <motion.img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                    alt="TRIFIT Fitness Centre Interior"
                    className="w-full h-full object-cover origin-center"
                    animate={{ scale: [1.02, 1.06, 1.02] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div
                    className="absolute inset-0 backdrop-blur-[2px]"
                    style={{
                        background:
                            'radial-gradient(circle at center, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.98) 100%)',
                    }}
                />
            </div>

            {/* Ambient glows */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/[0.07] rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="inline-block px-5 py-1.5 mb-2 sm:mb-4 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-accent border border-accent/20 rounded-full bg-accent/[0.06] backdrop-blur-sm shadow-[0_0_15px_rgba(0,198,255,0.1)]">
                        🏆 Rated among the top gyms in Wagholi, Pune
                    </span>
                    <div className="text-white hover:text-accent font-semibold text-xs sm:text-sm tracking-wide uppercase mb-5 sm:mb-8 animate-pulse">
                        <span className="bg-accent/20 px-3 py-1 rounded-full border border-accent/30 shadow-[0_0_15px_rgba(0,198,255,0.3)]">🔥 Limited Offer – Free Trial Available</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-montserrat font-black text-[1.85rem] sm:text-[2.5rem] md:text-6xl lg:text-[5.5rem] leading-[1.1] mb-4 sm:mb-7 tracking-tight"
                    style={{
                        textShadow:
                            '0 0 60px rgba(0, 198, 255, 0.2), 0 0 120px rgba(0, 198, 255, 0.08)',
                    }}
                >
                    Train in Wagholi’s Most
                    <br />
                    <span className="text-accent">Premium</span> <span className="text-[#FACC15]">Fitness Space</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-[#E5E7EB] font-semibold text-xs sm:text-sm tracking-wide uppercase mb-3 sm:mb-4 drop-shadow-md"
                >
                    ⭐ 4.7 Rated | Join 1000+ members already training at TRIFIT
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-2xl mx-auto text-text-muted text-base sm:text-lg md:text-[1.15rem] mb-6 sm:mb-10 leading-relaxed font-medium drop-shadow-sm"
                >
                    This isn&apos;t just a gym. This is where your transformation begins.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto mb-6"
                >
                    <button
                        onClick={() => handleScroll('#pricing')}
                        className="group w-full sm:w-auto px-10 py-4 sm:py-5 min-h-[52px] bg-gradient-to-r from-accent to-[#0088cc] text-white font-black rounded-xl shadow-[0_0_20px_rgba(0,198,255,0.4)] hover:shadow-[0_0_35px_rgba(0,198,255,0.8)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-3 uppercase tracking-wider text-[14px]"
                    >
                        Book Free Trial
                        <FaPlay className="text-[11px] group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                    <button
                        onClick={() => handleScroll('#pricing')}
                        className="w-full sm:w-auto px-9 py-4 sm:py-5 min-h-[52px] border border-white/10 text-white/70 font-semibold rounded-xl text-[13px] hover:bg-white/[0.05] hover:text-white transition-all duration-300 uppercase tracking-wide active:scale-[0.97]"
                    >
                        Explore Membership
                    </button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.6 }}
                    className="text-[#FACC15] text-xs sm:text-sm font-semibold tracking-wide"
                >
                    ⚡ Limited slots available this week
                </motion.p>

                {/* Space maintained for TrustBar below */}
                <div className="pb-16 md:pb-0" />
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="cursor-pointer p-2"
                    onClick={() => handleScroll('#about')}
                >
                    <FaArrowDown className="text-accent/60 text-lg" />
                </motion.div>
            </motion.div>
        </section>
    )
}
