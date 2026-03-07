import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram } from 'react-icons/fa'

const trainers = [
    {
        name: 'Vikram Rathod',
        role: 'Head Trainer & Strength Coach',
        img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    },
    {
        name: 'Sneha Kulkarni',
        role: 'Yoga & Flexibility Expert',
        img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    },
    {
        name: 'Rohit Joshi',
        role: 'CrossFit & HIIT Specialist',
        img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&q=80',
    },
    {
        name: 'Ananya Nair',
        role: 'Nutrition & Fat Loss Coach',
        img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Trainers() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="trainers" className="py-28 lg:py-36 relative" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Our Team
                    </span>
                    <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Expert <span className="gradient-text">Trainers</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light">
                        Our certified professionals are dedicated to guiding you every step of
                        your fitness journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {trainers.map((t, i) => (
                        <motion.div
                            key={t.name}
                            {...fadeUp(0.08 + 0.08 * i)}
                            animate={inView ? fadeUp(0.08 + 0.08 * i).animate : {}}
                            className="group premium-card overflow-hidden"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                                {/* Social Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-accent/15 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors duration-300 border border-white/20 shadow-xl">
                                        <FaInstagram className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="font-montserrat font-bold text-base mb-1 tracking-tight">{t.name}</h3>
                                <p className="text-accent text-[12px] font-medium uppercase tracking-[0.1em]">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
