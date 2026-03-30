import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa'
import { trackLeadEvent } from '../utils/analytics'

const contactInfo = [
    { icon: FaPhoneAlt, title: 'Phone', value: '07219 256076', link: 'tel:07219256076' },
    { icon: FaMapMarkerAlt, title: 'Address', value: 'Wagholi, Pune, Maharashtra, India', link: 'https://maps.google.com/?q=Wagholi+Pune' },
    { icon: FaClock, title: 'Hours', value: 'Mon-Sat: 5:30 AM - 10:30 PM', link: null },
    { icon: FaEnvelope, title: 'Email', value: 'info@trifit.in', link: 'mailto:info@trifit.in' },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="contact" className="py-10 md:py-12" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Contact Us
                    </span>
                    <h2 className="font-montserrat font-extrabold text-[1.375rem] sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-2 mb-3 md:mt-5 md:mb-7 leading-tight tracking-tight">
                        Visit <span className="gradient-text">TRIFIT</span> in Wagholi
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light mb-3">
                        Proudly serving Wagholi and nearby areas. Visit us or reach out — we&apos;d love to help you start your fitness journey.
                    </p>
                    <p className="font-montserrat font-bold text-accent text-base sm:text-xl tracking-tight leading-snug">
                        Call Now &amp; Start Your Fitness Journey Today
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 sm:gap-8">
                    {/* Contact Cards */}
                    <motion.div
                        {...fadeUp(0.2)}
                        animate={inView ? fadeUp(0.2).animate : {}}
                        className="space-y-4 sm:space-y-5"
                    >
                        {contactInfo.map((item) => {
                            const Wrapper = item.link ? 'a' : 'div'
                            return (
                                <Wrapper
                                    key={item.title}
                                    {...(item.link ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="group flex items-center gap-4 premium-card glow-hover p-4 md:p-6 cursor-pointer"
                                    onClick={item.title === 'Phone' ? () => trackLeadEvent('call_click', { location: 'contact_page' }) : undefined}
                                >
                                    <div className="relative z-10 shrink-0 w-13 h-13 rounded-xl bg-accent/[0.08] text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                                        <item.icon className="text-lg" />
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-text-dim text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                                            {item.title}
                                        </p>
                                        <p className="font-semibold text-[14px] tracking-tight">{item.value}</p>
                                    </div>
                                </Wrapper>
                            )
                        })}

                        {/* CTA */}
                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 mt-5 md:mt-8 text-center border border-white/10">
                            <p className="font-montserrat font-bold text-[15px] sm:text-base mb-3 tracking-tight text-white">
                                Ready to Start Your Transformation?
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="tel:07219256076"
                                    onClick={() => trackLeadEvent('call_click', { location: 'contact_page' })}
                                    className="w-full sm:flex-1 px-4 py-3 min-h-[48px] bg-gradient-to-r from-accent to-[#0088cc] text-white font-bold text-[13px] rounded-xl hover:shadow-[0_0_15px_rgba(0,198,255,0.3)] transition-all duration-300 active:scale-[0.98] uppercase tracking-wider text-center flex items-center justify-center"
                                >
                                    Call Now
                                </a>
                                <button
                                    onClick={() => {
                                        document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                                        trackLeadEvent('free_trial_click', { location: 'contact_page' });
                                    }}
                                    className="w-full sm:flex-1 px-4 py-3 min-h-[48px] bg-white/10 text-white font-bold text-[13px] rounded-xl hover:bg-white/20 transition-all duration-300 active:scale-[0.98] uppercase tracking-wider text-center border border-white/5 flex items-center justify-center"
                                >
                                    Free Trial
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Google Map */}
                    <motion.div
                        {...fadeUp(0.3)}
                        animate={inView ? fadeUp(0.3).animate : {}}
                        className="flex flex-col"
                    >
                        <h3 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl mb-4 tracking-tight text-center lg:text-left">
                            📍 Find Us in <span className="gradient-text">Wagholi</span>
                        </h3>
                        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.4839876678334!2d73.99713761077197!3d18.583631082449283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1565d3fe463%3A0x15f74a3d7c3de183!2sTrifit%20-%20The%20Best%20Gym%20in%20Wagholi%20for%20Fitness%2C%20Strength%20Training%2C%20Cardio%2C%20and%20Overall%20Wellness!5e1!3m2!1sen!2sin!4v1774027327857!5m2!1sen!2sin"
                                className="w-full h-[200px] sm:h-[400px] md:h-[450px]"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="TRIFIT Fitness Centre - Wagholi, Pune"
                            />
                        </div>
                        <p className="text-text-dim text-xs sm:text-sm text-center lg:text-left mt-3 font-light">
                            1st Floor, ICON Imperio, Ivy Estate, Wagholi, Pune
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
