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
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                    alt="Royal Fitness Gym Interior"
                    className="w-full h-full object-cover scale-105"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.72) 40%, rgba(10,10,10,0.95) 100%)',
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
                    <span className="inline-block px-5 py-2 mb-8 text-[11px] font-bold tracking-[0.25em] uppercase text-accent border border-accent/20 rounded-full bg-accent/[0.06] backdrop-blur-sm">
                        Wagholi&apos;s #1 Fitness Center
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-montserrat font-black text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] mb-7 tracking-tight"
                    style={{
                        textShadow:
                            '0 0 60px rgba(255, 44, 44, 0.2), 0 0 120px rgba(255, 44, 44, 0.08)',
                    }}
                >
                    Transform Your Body
                    <br />
                    <span className="gradient-text">at Royal Fitness Gym</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-accent/90 font-semibold text-sm sm:text-base tracking-wide uppercase mb-4"
                >
                    Join 1000+ Members Transforming Their Body in Wagholi
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-2xl mx-auto text-text-muted text-base sm:text-lg mb-10 leading-relaxed font-light"
                >
                    Wagholi&apos;s most trusted fitness destination. World-class equipment,
                    certified expert trainers, and results-driven programs designed to
                    unlock your full potential.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => handleScroll('#pricing')}
                        className="group px-9 py-4 bg-gradient-to-r from-accent to-red-800 text-white font-bold rounded-xl text-base hover:shadow-2xl hover:shadow-accent/25 transition-all duration-500 hover:scale-[1.04] active:scale-[0.98] flex items-center gap-2.5 uppercase tracking-wide text-sm"
                    >
                        Get Free Trial
                        <FaPlay className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button
                        onClick={() => handleScroll('#pricing')}
                        className="px-9 py-4 border border-white/15 text-white font-semibold rounded-xl text-sm hover:bg-white/[0.06] hover:border-white/25 transition-all duration-500 backdrop-blur-sm uppercase tracking-wide"
                    >
                        Explore Membership Plans
                    </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-8 mt-10"
                >
                    {['Certified Trainers', 'Modern Equipment', 'Beginner Friendly'].map(
                        (badge) => (
                            <div
                                key={badge}
                                className="flex items-center gap-2 text-text-muted/80 text-[13px] font-medium"
                            >
                                <FaCheckCircle className="text-accent/70 text-xs" />
                                <span>{badge}</span>
                            </div>
                        )
                    )}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
                >
                    {[
                        { value: '5+', label: 'Years' },
                        { value: '1000+', label: 'Members' },
                        { value: '20+', label: 'Trainers' },
                        { value: '4.7★', label: 'Rating' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-text-dim text-xs mt-1.5 uppercase tracking-[0.15em] font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
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
