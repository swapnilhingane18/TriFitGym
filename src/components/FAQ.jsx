import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
    {
        q: 'Where is TRIFIT located in Wagholi?',
        a: 'We are conveniently located on the 1st Floor, ICON Imperio, Ivy Estate, Wagholi, Pune. We are easily accessible from all parts of Wagholi and nearby areas.',
    },
    {
        q: 'What are your gym timings?',
        a: 'TRIFIT is open from 5:30 AM to 10:30 PM, Monday through Saturday. On Sundays, we operate from 7:00 AM to 1:00 PM. We also offer early morning batches to fit your schedule.',
    },
    {
        q: 'Do you offer personal training?',
        a: 'Yes! We have a team of certified personal trainers who create customized workout and nutrition plans tailored to your specific goals, available in our Pro and Elite plans.',
    },
    {
        q: 'Is there a free trial available?',
        a: 'Yes, we offer a free 1-day trial pass so you can experience our premium facilities, equipment, and training environment before committing to a membership.',
    },
    {
        q: 'Do you have beginner-friendly plans?',
        a: 'Absolutely! We welcome individuals of all fitness levels. Our expert trainers will guide you through proper form, technique, and provide a comprehensive fitness assessment to kickstart your journey.',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function FAQ() {
    const [open, setOpen] = useState(null)
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-10 md:py-12 relative ambient-glow" ref={ref}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        FAQ
                    </span>
                    <h2 className="font-montserrat font-extrabold text-[1.375rem] sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-2 mb-3 md:mt-5 md:mb-7 leading-tight tracking-tight">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                </motion.div>

                <div className="divide-y divide-border/40 border-y border-border/40">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(0.06 + 0.06 * i)}
                            animate={inView ? fadeUp(0.06 + 0.06 * i).animate : {}}
                            className="overflow-hidden transition-colors duration-300"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between py-4 sm:py-6 text-left group min-h-[44px]"
                            >
                                <span className="font-montserrat font-semibold text-[13px] sm:text-[15px] pr-4 group-hover:text-accent transition-colors duration-300 tracking-tight leading-snug">
                                    {faq.q}
                                </span>
                                <span
                                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i
                                            ? 'bg-accent text-white rotate-180 shadow-lg shadow-accent/25'
                                            : 'bg-white/[0.04] text-text-dim group-hover:bg-white/[0.08]'
                                        }`}
                                >
                                    {open === i ? <FiMinus className="text-sm" /> : <FiPlus className="text-sm" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 sm:pb-6 pr-8 sm:pr-12 text-text-muted text-[12.5px] sm:text-[14px] leading-[1.75] font-light">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
