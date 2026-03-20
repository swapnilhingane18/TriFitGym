import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
    {
        name: 'Aditya Kale',
        role: 'Member',
        text: 'Lost 12kg in 5 months. The trainers truly care.',
        rating: 5,
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
    {
        name: 'Meera Joshi',
        role: 'Member',
        text: 'Gained muscle & confidence. Best decision I made.',
        rating: 5,
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    {
        name: 'Suresh Pawar',
        role: 'Member',
        text: 'Rehab to strength athlete. Best gym in Wagholi.',
        rating: 5,
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    {
        name: 'Pooja Desai',
        role: 'Member',
        text: 'Lost 8kg in 3 months! Unmatched energy & vibe.',
        rating: 5,
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Testimonials() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-8 md:py-12 relative" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10 sm:mb-8 md:mb-12"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Testimonials
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        What Our Members <span className="gradient-text">Say</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            {...fadeUp(0.08 + 0.08 * i)}
                            animate={inView ? fadeUp(0.08 + 0.08 * i).animate : {}}
                            className={`group glass-panel glow-hover p-6 md:p-8 lg:p-9 relative rounded-2xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,198,255,0.15)] transition-all duration-300 ${i >= 2 ? 'hidden md:block' : 'block'}`}
                        >
                            <FaQuoteLeft className="absolute top-7 right-7 text-accent/[0.06] text-5xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-1.5 mb-5">
                                    {[...Array(5)].map((_, j) => (
                                        <FaStar
                                            key={j}
                                            className={`text-[16px] ${j < t.rating ? 'text-[#FACC15] drop-shadow-[0_0_5px_rgba(234,179,8,0.6)]' : 'text-gray-700'}`}
                                        />
                                    ))}
                                    <span className="text-text-dim text-xs ml-1 font-medium">{t.rating}.0</span>
                                </div>
                                <p className="text-text-muted leading-[1.8] mb-7 text-[13.5px] font-light">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="w-11 h-11 rounded-full object-cover ring-2 ring-accent/20"
                                    />
                                    <div>
                                        <h4 className="font-montserrat font-semibold text-sm tracking-tight">{t.name}</h4>
                                        <p className="text-text-dim text-[11px] uppercase tracking-[0.1em]">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
