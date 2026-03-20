import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa'
import { trackLeadEvent } from '../utils/analytics'

const contactInfo = [
    { icon: FaPhoneAlt, title: 'Phone', value: '+91 97300 91331', link: 'tel:+919730091331' },
    { icon: FaMapMarkerAlt, title: 'Address', value: 'Wagholi, Pune, Maharashtra, India', link: 'https://maps.google.com/?q=Wagholi+Pune' },
    { icon: FaClock, title: 'Hours', value: 'Mon-Sat: 5:30 AM - 10:30 PM', link: null },
    { icon: FaEnvelope, title: 'Email', value: 'info@trifit.in', link: 'mailto:info@trifit.in' },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="contact" className="py-8 md:py-12" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10 sm:mb-8 md:mb-12"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Contact Us
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Visit <span className="gradient-text">TRIFIT</span> in Wagholi
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light mb-3">
                        Proudly serving Wagholi and nearby areas. Visit us or reach out — we&apos;d love to help you start your fitness journey.
                    </p>
                    <p className="font-montserrat font-bold text-accent text-lg sm:text-xl tracking-tight">
                        Call Now &amp; Start Your Fitness Journey Today
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
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
                                    className="group flex items-center gap-5 premium-card glow-hover p-6 cursor-pointer"
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
                        <div className="bg-gradient-to-br from-accent/15 via-red-950/20 to-card border border-accent/20 rounded-2xl p-7 text-center">
                            <p className="font-montserrat font-bold text-lg mb-2 tracking-tight">
                                Ready to Start Your Transformation?
                            </p>
                            <p className="text-text-muted text-[13px] mb-5 font-light">
                                Walk in for a free tour and fitness assessment today!
                            </p>
                            <a
                                href="https://wa.me/919730091331?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial%20at%20TRIFIT."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-7 py-3.5 bg-gradient-to-r from-accent to-[#0088cc] text-white font-bold text-[13px] rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] uppercase tracking-wider"
                            >
                                Message on WhatsApp
                            </a>
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15130.63821817478!2d73.9712066!3d18.5781442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3a557b7f16f%3A0x6d8bffd069f0bd!2sWagholi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
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
