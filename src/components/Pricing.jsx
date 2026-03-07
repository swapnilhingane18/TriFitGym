import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheck, FaCrown } from 'react-icons/fa'

const plans = [
    {
        name: 'Starter',
        price: '999',
        period: '/month',
        desc: 'Perfect for beginners starting their fitness journey.',
        features: [
            'Access to gym floor',
            'Basic equipment usage',
            'Locker room access',
            'Free fitness assessment',
            'Group classes (2/week)',
        ],
        popular: false,
    },
    {
        name: 'Pro',
        price: '1,999',
        period: '/month',
        desc: 'Most popular choice for serious fitness enthusiasts.',
        features: [
            'Full gym access',
            'All equipment & machines',
            'Personal trainer (2 sessions/week)',
            'Diet consultation',
            'Unlimited group classes',
            'Progress tracking app',
            'Towel service',
        ],
        popular: true,
    },
    {
        name: 'Elite',
        price: '3,499',
        period: '/month',
        desc: 'The ultimate package for maximum results.',
        features: [
            'Everything in Pro',
            'Daily personal training',
            'Custom meal plans',
            'Body composition analysis',
            'Priority booking',
            'Guest passes (2/month)',
            'Recovery zone access',
            'Monthly progress report',
        ],
        popular: false,
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Pricing() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="pricing" className="py-28 lg:py-36 relative ambient-glow" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Pricing
                    </span>
                    <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Membership <span className="gradient-text">Plans</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light">
                        Flexible plans designed to fit your lifestyle. Start anytime, cancel anytime.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            {...fadeUp(0.1 + 0.12 * i)}
                            animate={inView ? fadeUp(0.1 + 0.12 * i).animate : {}}
                            className={`relative group flex flex-col rounded-2xl p-8 lg:p-9 transition-all duration-500 ${plan.popular
                                    ? 'bg-gradient-to-b from-[#1a1010] to-card border-2 border-accent/40 shadow-2xl shadow-accent/10 scale-[1.03] hover:shadow-3xl hover:shadow-accent/15'
                                    : 'premium-card hover:-translate-y-2'
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-accent to-red-800 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 shadow-xl shadow-accent/25 whitespace-nowrap">
                                    <FaCrown className="text-yellow-300 text-[10px]" />
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-7">
                                <h3 className="font-montserrat font-bold text-lg mb-2 tracking-tight">{plan.name}</h3>
                                <p className="text-text-dim text-[13px] font-light">{plan.desc}</p>
                            </div>

                            <div className="mb-8">
                                <span className="font-montserrat font-black text-[3.25rem] text-white leading-none tracking-tight">
                                    ₹{plan.price}
                                </span>
                                <span className="text-text-dim text-sm ml-1">{plan.period}</span>
                            </div>

                            <ul className="space-y-3.5 mb-9 flex-1">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-[13px]">
                                        <FaCheck className="text-accent mt-[3px] shrink-0 text-[11px]" />
                                        <span className="text-text-muted font-light">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-500 ${plan.popular
                                        ? 'bg-gradient-to-r from-accent to-red-800 text-white hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]'
                                        : 'bg-white/[0.04] border border-border text-white hover:bg-accent hover:border-accent hover:shadow-xl hover:shadow-accent/20 active:scale-[0.98]'
                                    }`}
                            >
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
