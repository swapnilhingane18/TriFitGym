import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FaStar, FaComments, FaDumbbell, FaUserTie } from 'react-icons/fa'
import { FiLayers, FiUsers, FiTrendingUp } from 'react-icons/fi'

const features = [
    { icon: FiLayers, title: 'Modern imported machines', desc: 'Top-tier fitness gear' },
    { icon: FiUsers, title: 'Certified personal coaches', desc: 'Expert 1-on-1 guidance' },
    { icon: FiTrendingUp, title: 'Proven transformations', desc: 'Data-backed results' }
]

const stats = [
    { icon: FaStar, end: 4.7, decimals: 1, suffix: ' ⭐', label: 'Google Rating' },
    { icon: FaComments, end: 500, suffix: '+', label: 'Reviews' },
    { icon: FaDumbbell, end: 50, suffix: '+', label: 'Modern Machines' },
    { icon: FaUserTie, end: 20, suffix: '+', label: 'Certified Trainers' },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <section id="about" className="mt-8 md:mt-10 py-8 md:py-12 relative ambient-glow" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-20"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        About Us
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 leading-tight tracking-tight">
                        More Than Just a <span className="gradient-text">Gym</span>
                    </h2>
                    <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 px-2 md:px-0">
                        {features.map((feat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="group flex items-start gap-3 text-left bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-3 md:p-5 shadow-[0_0_20px_rgba(0,198,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                            >
                                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#00C6FF]/10 text-[#00C6FF] rounded-lg group-hover:text-white group-hover:bg-[#00C6FF]/20 transition-colors duration-300">
                                    <feat.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-white text-[15px] md:text-base leading-tight">{feat.title}</h3>
                                    <p className="text-[13px] md:text-sm text-gray-400 mt-1">{feat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            {...fadeUp(0.15 + i * 0.1)}
                            animate={inView ? fadeUp(0.15 + i * 0.1).animate : {}}
                            className="group premium-card glow-hover p-8 lg:p-10 text-center"
                        >
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/[0.08] text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                                    <stat.icon className="text-2xl" />
                                </div>
                                <div className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white mb-2 tracking-tight">
                                    {inView && (
                                        <CountUp
                                            end={stat.end}
                                            decimals={stat.decimals || 0}
                                            duration={2.5}
                                            suffix={stat.suffix || ''}
                                        />
                                    )}
                                </div>
                                <div className="text-text-dim text-xs font-medium uppercase tracking-[0.15em]">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
