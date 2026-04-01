import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGift } from 'react-icons/fa'

// NOTE: This popup currently has NO scroll lock management.
// When isOpen=true, the body should be scroll-locked.
// When isOpen=false, the body scroll should be restored.
// Missing this causes scroll to break after popup dismissal.
export default function FreeTrialPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [hasSeen, setHasSeen] = useState(false)
    const [formData, setFormData] = useState({ name: '', phone: '' })
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        // Only show once per session
        if (sessionStorage.getItem('freeTrialSeen')) return

        const timer = setTimeout(() => {
            setIsOpen(true)
            setHasSeen(true)
            sessionStorage.setItem('freeTrialSeen', 'true')
        }, 3500) // Trigger after 3.5 seconds

        return () => clearTimeout(timer)
    }, [])

    // Lock body scroll when popup is open, restore when closed
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
        return () => { document.body.classList.remove('no-scroll') }
    }, [isOpen])

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the data to your backend/CRM
        console.log('Lead submitted:', formData)
        setIsSubmitted(true)
        setTimeout(() => {
            setIsOpen(false)
        }, 2500)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-md bg-gradient-to-b from-[#1a1010] to-[#121212] rounded-2xl border border-accent/30 shadow-[0_0_60px_rgba(0,198,255,0.15)] overflow-hidden"
                    >
                        {/* Red Top Accent */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-accent to-[#0088cc]" />

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-text-muted hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                        >
                            <FaTimes />
                        </button>

                        <div className="p-7 sm:p-8">
                            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20 text-accent">
                                <FaGift className="text-2xl" />
                            </div>

                            <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-center mb-2 tracking-tight">
                                Get 1 Day <span className="gradient-text">Free Trial</span>
                            </h3>
                            <p className="text-center text-text-muted text-sm mb-6 leading-relaxed">
                                Enter your details below to claim your VIP trial pass. Limited spots available this week!
                            </p>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your Full Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-text-dim text-sm focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="Mobile Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-text-dim text-sm focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-colors"
                                        />
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full py-4 mt-2 bg-gradient-to-r from-accent to-[#0088cc] text-white font-bold rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                    >
                                        Claim Free Trial
                                    </button>
                                </form>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-500/10 border border-green-500/20 text-green-400 p-5 rounded-xl text-center"
                                >
                                    <h4 className="font-bold text-lg mb-1">Pass Claimed! 🎉</h4>
                                    <p className="text-sm text-green-400/80">We've received your request. Our team will contact you shortly.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
