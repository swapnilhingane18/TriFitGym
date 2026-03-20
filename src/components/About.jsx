import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FaStar, FaComments, FaDumbbell, FaUserTie } from 'react-icons/fa'

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
        <section id="about" className="py-8 md:py-12 relative ambient-glow" ref={ref}>
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
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        More Than Just a <span className="gradient-text">Gym</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-text-muted text-base lg:text-lg leading-relaxed font-light">
                        TRIFIT isn&apos;t just a place to work out — it&apos;s a community
                        that transforms lives. Located in the heart of Wagholi, Pune, we bring
                        world-class fitness facilities, expert trainers, and a motivating
                        environment designed to push your limits and help you achieve your
                        dream physique.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
