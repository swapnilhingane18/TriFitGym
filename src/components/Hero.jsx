import { motion } from 'framer-motion'
import { FaPlay, FaArrowDown, FaCheckCircle } from 'react-icons/fa'
import { trackLeadEvent } from '../utils/analytics'

export default function Hero() {
    const handleScroll = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="relative pt-24 pb-16 md:py-32 flex items-center justify-center overflow-hidden"
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
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-gradient-to-b from-transparent via-[#00C6FF]/[0.03] to-transparent blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-24">
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-montserrat font-black text-[2rem] leading-[1.15] sm:text-[2.5rem] md:text-6xl lg:text-[5.5rem] md:leading-[1.1] mb-2 sm:mb-4 tracking-tight"
                    style={{
                        textShadow:
                            '0 0 60px rgba(0, 198, 255, 0.2), 0 0 120px rgba(0, 198, 255, 0.08)',
                    }}
                >
                    Train in Wagholi’s Most
                    <br />
                    <span className="text-accent">Premium</span> <span className="text-white">Fitness Space</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-[#E5E7EB] text-[15px] sm:text-lg md:text-[1.15rem] mb-8 font-semibold drop-shadow-sm uppercase tracking-wider"
                >
                    Build muscle. Burn fat. Transform.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-full max-w-[280px] sm:max-w-none mx-auto"
                >
                    <button
                        onClick={() => {
                            handleScroll('#pricing');
                            trackLeadEvent('free_trial_click', { location: 'hero' });
                        }}
                        className="group w-full sm:w-auto px-12 md:px-14 py-5 md:py-4 min-h-[60px] md:min-h-[56px] bg-gradient-to-r from-accent to-[#0088cc] text-white font-black rounded-xl shadow-[0_0_30px_rgba(0,198,255,0.5)] hover:shadow-[0_0_40px_rgba(0,198,255,0.8)] transition-all duration-300 active:scale-[0.96] flex items-center justify-center gap-2 uppercase tracking-wider text-[15px]"
                    >
                        Book Free Trial
                        <FaPlay className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <p className="hidden md:block text-[#E5E7EB] text-[11px] mt-4 font-bold tracking-[0.15em] uppercase opacity-90">
                        ⚡ Limited slots &bull; Quick signup &bull; No commitment
                    </p>
                </motion.div>

                {/* Space maintained for TrustBar below */}
                <div className="pb-16 md:pb-0" />
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
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
