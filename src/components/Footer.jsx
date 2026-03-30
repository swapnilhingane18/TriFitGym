import { FaDumbbell, FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaArrowUp } from 'react-icons/fa'

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Plans', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
]

const socials = [
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className="relative bg-[#0c0c0c] border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="flex items-center gap-2.5 mb-5">
                            <FaDumbbell className="text-accent text-2xl" />
                            <span className="font-montserrat font-extrabold text-xl tracking-tight">
                                TRI<span className="text-accent">FIT</span>
                            </span>
                        </a>
                        <p className="text-[#00C6FF] font-bold text-sm mb-2 uppercase tracking-wide">
                            Best Gym in Wagholi, Pune
                        </p>
                        <p className="text-text-dim text-[12px] md:text-[13px] leading-[1.75] max-w-md mb-5 md:mb-7 font-light">
                            Wagholi&apos;s premier fitness destination. We combine world-class
                            equipment, expert trainers, and a motivating community to help you
                            achieve your fitness goals.
                        </p>
                        <div className="flex items-center gap-2.5">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-border flex items-center justify-center text-text-dim hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                                >
                                    <s.icon className="text-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-[0.2em] mb-5 md:mb-7 text-text">
                            Quick Links
                        </h4>
                        <ul className="space-y-3.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-text-dim text-[13px] hover:text-accent transition-colors duration-300 hover:translate-x-1.5 inline-block font-light"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-[0.2em] mb-5 md:mb-7 text-text">
                            Contact Info
                        </h4>
                        <ul className="space-y-4 text-text-dim text-[13px] font-light">
                            <li>
                                <span className="text-white font-medium text-[12px] uppercase tracking-wider">Address</span>
                                <br />
                                <span className="leading-relaxed">Wagholi, Pune, Maharashtra, India</span>
                            </li>
                            <li>
                                <span className="text-white font-medium text-[12px] uppercase tracking-wider">Phone</span>
                                <br />
                                <a href="tel:07219256076" className="hover:text-accent transition-colors">
                                    07219 256076
                                </a>
                            </li>
                            <li>
                                <span className="text-white font-medium text-[12px] uppercase tracking-wider">Hours</span>
                                <br />
                                Mon-Sat: 5:30 AM - 10:30 PM
                                <br />
                                Sun: 7:00 AM - 1:00 PM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-7 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
                    <p className="text-text-dim text-[11px] text-center sm:text-left tracking-wide">
                        © {new Date().getFullYear()} TRIFIT Fitness Centre. All rights reserved.
                    </p>
                    <p className="text-text-dim text-[11px] flex items-center gap-1.5 tracking-wide">
                        Made by Swapnil Hingane
                    </p>
                </div>
            </div>

            {/* Scroll to top */}
            <button
                onClick={scrollToTop}
                className="absolute -top-5 right-8 w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Back to top"
            >
                <FaArrowUp className="text-sm" />
            </button>
        </footer>
    )
}
