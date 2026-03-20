import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { trackLeadEvent } from '../utils/analytics'
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
        <section id="pricing" className="py-8 md:py-12 relative ambient-glow" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10 sm:mb-8 md:mb-12"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Pricing
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Membership <span className="gradient-text">Plans</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light mb-6">
                        Flexible plans designed to fit your lifestyle. Perfect for beginners and advanced members alike.
                    </p>
                    <div className="inline-block px-5 py-2 bg-accent/10 border border-accent/20 rounded-full text-[#00C6FF] text-[13px] font-bold tracking-wide animate-pulse shadow-[0_0_15px_rgba(0,198,255,0.15)]">
                        ⚡ Limited time offer for new members
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            {...fadeUp(0.1 + 0.12 * i)}
                            animate={inView ? fadeUp(0.1 + 0.12 * i).animate : {}}
                            className={`relative group flex flex-col rounded-2xl p-5 md:p-8 lg:p-9 transition-all duration-300 glass-panel ${plan.popular
                                    ? 'border-2 border-[#FACC15] shadow-[0_0_40px_rgba(250,204,21,0.25)] scale-[1.02] md:scale-110 hover:shadow-[0_0_60px_rgba(250,204,21,0.45)] z-20 bg-gradient-to-b from-[#111827] to-[#0A0A0A]'
                                    : 'hover:-translate-y-1'
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-[#FACC15] to-[#EAB308] rounded-full text-black font-black uppercase tracking-[0.2em] flex items-center gap-1.5 shadow-[0_0_20px_rgba(250,204,21,0.4)] whitespace-nowrap">
                                    <FaCrown className="text-black text-[12px]" />
                                    MOST POPULAR
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

                            <ul className="space-y-2 md:space-y-3.5 mb-6 md:mb-9 flex-1">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-[13px]">
                                        <FaCheck className="text-accent mt-[3px] shrink-0 text-[11px]" />
                                        <span className="text-text-muted font-light">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => trackLeadEvent('free_trial_click', { location: 'pricing_tier', plan: plan.name })}
                                className={`w-full py-3.5 min-h-[44px] rounded-xl font-black uppercase tracking-wider text-[13px] md:text-sm transition-all duration-300 active:scale-[0.96] ${plan.popular
                                        ? 'bg-[#FACC15] text-[#0A0A0A] hover:bg-white hover:shadow-[0_0_25px_rgba(250,204,21,0.6)]'
                                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                Start Your Transformation
                            </button>
                            {/* Reassurance */}
                            <p className="text-center text-text-dim text-[10px] mt-4 uppercase tracking-[0.15em] font-medium">
                                No long-term commitment &bull; Cancel anytime
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
