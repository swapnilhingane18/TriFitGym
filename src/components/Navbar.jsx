import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaDumbbell } from 'react-icons/fa'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Plans', href: '#pricing' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    const handleClick = (e, href) => {
        e.preventDefault()
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                    scrolled || mobileOpen
                        ? 'bg-dark/80 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/[0.04]'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    {/* Compact on mobile (h-[68px]), regular on desktop (h-20) */}
                    <div className="flex items-center justify-between h-[68px] md:h-20">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 md:gap-2.5 group">
                            <div className="relative">
                                <FaDumbbell className="text-accent text-xl md:text-2xl group-hover:rotate-12 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <span className="font-montserrat font-extrabold text-lg md:text-xl tracking-tight">
                                ROYAL <span className="text-accent">FITNESS</span>
                            </span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className="relative px-4 py-2 text-[13px] font-medium text-text-muted hover:text-white transition-colors duration-300 group tracking-wide uppercase"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent rounded-full group-hover:w-6 transition-all duration-400" />
                                </a>
                            ))}
                            <a
                                href="#pricing"
                                onClick={(e) => handleClick(e, '#pricing')}
                                className="ml-4 px-7 py-2.5 bg-gradient-to-r from-accent to-red-700 text-white text-[13px] font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-400 hover:scale-[1.04] active:scale-[0.98]"
                            >
                                Join Now
                            </a>
                        </div>

                        {/* Mobile Hamburger — animated icon swap */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white text-2xl rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <HiX />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <HiMenu />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu — scroll-contained, max height capped */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="md:hidden overflow-hidden border-t border-white/[0.04]"
                        >
                            <div
                                className="bg-dark/95 backdrop-blur-2xl overflow-y-auto overscroll-contain px-5 py-6"
                                style={{ maxHeight: 'calc(100dvh - 68px)' }}
                            >
                                <div className="space-y-0.5">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleClick(e, link.href)}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05, ease: 'easeOut' }}
                                            className="flex items-center text-[15px] font-medium text-text-muted hover:text-white active:text-accent transition-colors py-3.5 px-4 rounded-xl hover:bg-white/[0.04] active:bg-white/[0.06] border-b border-white/[0.03] last:border-0"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>
                                <motion.a
                                    href="#pricing"
                                    onClick={(e) => handleClick(e, '#pricing')}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35 }}
                                    className="block text-center mt-5 px-6 py-4 bg-gradient-to-r from-accent to-red-700 text-white font-bold rounded-xl uppercase tracking-wider text-sm active:scale-[0.97] transition-transform"
                                >
                                    Join Now
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Dark overlay behind menu — closes on tap */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setMobileOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>
        </>
    )
}
