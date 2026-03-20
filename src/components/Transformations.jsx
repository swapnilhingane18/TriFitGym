import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaArrowRight } from 'react-icons/fa'

const transformations = [
    {
        name: 'Rahul Sharma',
        story: 'Lost 18 kg in 6 months through dedicated training and diet guidance.',
        stat: '-18 kg',
        statLabel: 'Weight Lost',
        duration: '6 Months',
        beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
        afterImg: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?w=400&q=80',
    },
    {
        name: 'Priya Deshmukh',
        story: 'Gained lean muscle and improved overall fitness with personal training.',
        stat: '+8 kg',
        statLabel: 'Muscle Gained',
        duration: '8 Months',
        beforeImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80',
        afterImg: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80',
    },
    {
        name: 'Amit Patil',
        story: 'Completely transformed physique from skinny to strong in 10 months.',
        stat: '+12 kg',
        statLabel: 'Muscle Gained',
        duration: '10 Months',
        beforeImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
        afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Transformations() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-8 md:py-12" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10 sm:mb-8 md:mb-12"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Success Stories
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Real Results From <span className="gradient-text">Real Members</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light">
                        These incredible transformations happened right here at TRIFIT.
                        Your journey could be next.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
                    {transformations.map((t, i) => (
                        <motion.div
                            key={t.name}
                            {...fadeUp(0.1 + 0.12 * i)}
                            animate={inView ? fadeUp(0.1 + 0.12 * i).animate : {}}
                            className="group premium-card overflow-hidden"
                        >
                            {/* Before / After Images */}
                            <div className="relative h-56 flex">
                                <div className="w-1/2 relative overflow-hidden">
                                    <img src={t.beforeImg} alt="Before" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                                    <div className="absolute bottom-2 left-2 bg-dark/70 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                                        Before
                                    </div>
                                </div>
                                <div className="w-1/2 relative overflow-hidden">
                                    <img src={t.afterImg} alt="After" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                                    <div className="absolute bottom-2 right-2 bg-accent/80 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider">
                                        After
                                    </div>
                                </div>
                                {/* Divider */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/60 to-transparent" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-accent flex items-center justify-center shadow-xl shadow-accent/30">
                                    <FaArrowRight className="text-white text-[10px]" />
                                </div>
                            </div>

                            <div className="p-7">
                                <div className="flex flex-col mb-3">
                                    <h3 className="font-montserrat font-bold text-base tracking-tight">{t.name}</h3>
                                    <span className="text-accent text-[11px] font-bold tracking-wider uppercase mt-1">
                                        {t.duration} Transformation
                                    </span>
                                </div>
                                <p className="text-text-muted text-[13px] mb-5 leading-relaxed font-light">{t.story}</p>
                                <div className="flex items-center gap-3 bg-accent/[0.06] rounded-xl px-5 py-3.5 border border-accent/10">
                                    <span className="font-montserrat font-extrabold text-2xl text-accent tracking-tight">
                                        {t.stat}
                                    </span>
                                    <span className="text-text-dim text-xs uppercase tracking-wider">{t.statLabel}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
