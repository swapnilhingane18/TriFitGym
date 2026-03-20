import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GiWeightLiftingUp, GiRunningShoe, GiLockers } from 'react-icons/gi'
import { FaHeartbeat, FaExpandArrowsAlt } from 'react-icons/fa'

const amenities = [
    {
        icon: GiWeightLiftingUp,
        title: 'Modern Strength Equipment',
        desc: 'State-of-the-art machines and free weights from top fitness brands.',
    },
    {
        icon: FaHeartbeat,
        title: 'Cardio Zone',
        desc: 'Treadmills, ellipticals, rowing machines, and cycling stations.',
    },
    {
        icon: FaExpandArrowsAlt,
        title: 'Personal Training Area',
        desc: 'Dedicated space for one-on-one sessions with certified trainers.',
    },
    {
        icon: GiLockers,
        title: 'Locker Rooms',
        desc: 'Clean, spacious locker rooms with showers and secure storage.',
    },
    {
        icon: GiRunningShoe,
        title: 'Spacious Workout Floor',
        desc: 'Open area for stretching, functional training, and group workouts.',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Amenities() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-8 md:py-12 relative ambient-glow" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Our Facilities
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Premium <span className="gradient-text">Amenities</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {amenities.map((item, i) => (
                        <motion.div
                            key={item.title}
                            {...fadeUp(0.08 + 0.08 * i)}
                            animate={inView ? fadeUp(0.08 + 0.08 * i).animate : {}}
                            className="group flex items-start gap-5 premium-card glow-hover p-7"
                        >
                            <div className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-accent/[0.08] text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                                <item.icon className="text-2xl" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-montserrat font-semibold text-[15px] mb-1.5 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-text-muted text-[13px] leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
