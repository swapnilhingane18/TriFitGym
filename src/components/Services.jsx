import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    GiWeightLiftingUp,
    GiMuscleUp,
    GiRunningShoe,
    GiMeal,
} from 'react-icons/gi'
import { FaUserFriends } from 'react-icons/fa'

const services = [
    {
        icon: GiWeightLiftingUp,
        title: 'Strength Training',
        desc: 'Build raw strength. Premium free weights.',
    },
    {
        icon: FaUserFriends,
        title: 'Personal Training',
        desc: '1-on-1 coaching. Custom fitness plans.',
    },
    {
        icon: GiRunningShoe,
        title: 'Fat Loss Programs',
        desc: 'High-intensity cardio. Burn stubborn fat.',
    },
    {
        icon: GiMuscleUp,
        title: 'Muscle Building',
        desc: 'Progressive overload. Pure form guidance.',
    },
    {
        icon: GiMeal,
        title: 'Diet Guidance',
        desc: 'Personalized nutrition. Maximize your results.',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Services() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <section id="services" className="py-8 md:py-12 relative" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10 sm:mb-8 md:mb-12"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        What We Offer
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Our <span className="gradient-text">Programs</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light">
                        Comprehensive fitness programs to reach your peak performance,
                        no matter your experience level.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            {...fadeUp(0.1 + 0.08 * i)}
                            animate={inView ? fadeUp(0.1 + 0.08 * i).animate : {}}
                            className="group premium-card glow-hover p-5 md:p-8 lg:p-9"
                        >
                            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-accent/[0.08] text-accent mb-4 md:mb-7 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/20">
                                    <service.icon className="text-2xl md:text-[1.75rem]" />
                                </div>
                                <h3 className="font-montserrat font-bold text-sm md:text-lg mb-2 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-text-muted leading-snug md:leading-relaxed text-[11px] md:text-[13px] font-light hidden sm:block">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
