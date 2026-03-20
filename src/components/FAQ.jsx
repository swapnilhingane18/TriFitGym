import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
    {
        q: 'What are the membership prices?',
        a: 'We offer three flexible plans: Starter at ₹999/month, Pro at ₹1,999/month (our most popular plan), and Elite at ₹3,499/month. Each plan includes different levels of access and services. Visit our pricing section or contact us for current offers and discounts.',
    },
    {
        q: 'Do you offer personal training?',
        a: 'Yes! We have a team of certified personal trainers who can create customized workout and nutrition plans for you. Personal training is included in our Pro and Elite plans, and can also be added as an add-on to the Starter plan.',
    },
    {
        q: 'What are gym timings?',
        a: 'TRIFIT is open from 5:30 AM to 10:30 PM, Monday through Saturday. On Sundays, we operate from 7:00 AM to 1:00 PM. We also offer early morning batches for working professionals.',
    },
    {
        q: 'Are beginners welcome?',
        a: 'Absolutely! We welcome people of all fitness levels. Our trainers are specially trained to guide beginners through proper form, technique, and progressive workout plans. We also offer a free fitness assessment for all new members.',
    },
    {
        q: 'Is there a trial period available?',
        a: 'Yes, we offer a free 1-day trial pass so you can experience our facilities and training quality before committing to a membership. Contact us via WhatsApp or phone to schedule your trial.',
    },
    {
        q: 'Do you have separate batches for women?',
        a: 'Yes, we offer dedicated women-only batches with female trainers. We also have a separate training area that can be used during these batches for added comfort and privacy.',
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function FAQ() {
    const [open, setOpen] = useState(null)
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-8 md:py-12 relative ambient-glow" ref={ref}>
            <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10 sm:mb-8 md:mb-12"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        FAQ
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                </motion.div>

                <div className="space-y-3.5">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(0.06 + 0.06 * i)}
                            animate={inView ? fadeUp(0.06 + 0.06 * i).animate : {}}
                            className={`premium-card overflow-hidden transition-all duration-300 ${open === i ? '!border-accent/30 shadow-xl shadow-accent/[0.04]' : ''
                                }`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 lg:p-7 text-left group"
                            >
                                <span className="font-montserrat font-semibold text-[13.5px] sm:text-[14px] pr-4 group-hover:text-accent transition-colors duration-300 tracking-tight">
                                    {faq.q}
                                </span>
                                <span
                                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${open === i
                                            ? 'bg-accent text-white rotate-180 shadow-lg shadow-accent/25'
                                            : 'bg-white/[0.04] text-text-dim'
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
                                        <div className="px-6 lg:px-7 pb-6 lg:pb-7 text-text-muted text-[13px] leading-[1.85] border-t border-border/40 pt-5 font-light">
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
