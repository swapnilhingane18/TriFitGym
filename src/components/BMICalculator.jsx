import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalculator, FaHeartbeat } from 'react-icons/fa'

const cats = [
    { range: 'Below 18.5', label: 'Underweight', color: 'text-blue-400', bg: 'bg-blue-400', tip: 'Consider our muscle building program.' },
    { range: '18.5 – 24.9', label: 'Normal', color: 'text-green-400', bg: 'bg-green-400', tip: 'Maintain fitness with our Pro plan.' },
    { range: '25.0 – 29.9', label: 'Overweight', color: 'text-yellow-400', bg: 'bg-yellow-400', tip: 'Try our fat loss program and diet guidance.' },
    { range: '30.0+', label: 'Obese', color: 'text-accent', bg: 'bg-accent', tip: 'Personal training can help you get on track.' },
]

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] } })

export default function BMICalculator() {
    const [h, setH] = useState('')
    const [w, setW] = useState('')
    const [res, setRes] = useState(null)
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    const calc = () => {
        const hv = parseFloat(h), wv = parseFloat(w)
        if (!hv || !wv || hv <= 0 || wv <= 0) return
        const bmi = (wv / ((hv / 100) ** 2)).toFixed(1)
        const c = bmi < 18.5 ? cats[0] : bmi < 25 ? cats[1] : bmi < 30 ? cats[2] : cats[3]
        setRes({ bmi, ...c })
    }

    const badgeClass = (l) => l === 'Normal' ? 'bg-green-500/10 text-green-400 border-green-500/25' : l === 'Underweight' ? 'bg-blue-500/10 text-blue-400 border-blue-500/25' : l === 'Overweight' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/25' : 'bg-accent/10 text-accent border-accent/25'

    return (
        <section className="py-8 md:py-12 relative ambient-glow" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <motion.div {...fadeUp()} animate={inView ? fadeUp().animate : {}} className="text-center mb-10 sm:mb-16">
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">Health Check</span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">BMI <span className="gradient-text">Calculator</span></h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light">Check your BMI and find the right TRIFIT program for you.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 max-w-5xl mx-auto">
                    <motion.div {...fadeUp(0.2)} animate={inView ? fadeUp(0.2).animate : {}} className="premium-card p-8 lg:p-9">
                        <div className="flex items-center gap-3.5 mb-9">
                            <div className="w-12 h-12 rounded-xl bg-accent/[0.08] text-accent flex items-center justify-center"><FaCalculator className="text-xl" /></div>
                            <h3 className="font-montserrat font-bold text-lg tracking-tight">Calculate Your BMI</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[11px] font-bold text-text-dim mb-2.5 uppercase tracking-[0.15em]">Height (cm)</label>
                                <input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="e.g. 175" className="w-full px-5 py-4 bg-dark border border-border rounded-xl text-white placeholder-text-dim/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-[14px]" />
                            </div>
                            <div>
                                <label className="block text-[11px] font-bold text-text-dim mb-2.5 uppercase tracking-[0.15em]">Weight (kg)</label>
                                <input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="e.g. 70" className="w-full px-5 py-4 bg-dark border border-border rounded-xl text-white placeholder-text-dim/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-[14px]" />
                            </div>
                            <div className="flex gap-3 pt-1">
                                <button onClick={calc} className="flex-1 py-4 bg-gradient-to-r from-accent to-[#0088cc] text-white font-bold text-[13px] uppercase tracking-[0.15em] rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">Calculate BMI</button>
                                <button onClick={() => { setH(''); setW(''); setRes(null) }} className="px-6 py-4 bg-white/[0.04] border border-border text-text-dim font-bold text-[13px] uppercase tracking-wider rounded-xl hover:bg-white/[0.08] transition-all duration-300">Reset</button>
                            </div>
                        </div>
                        {res && (
                            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-8 bg-dark border border-border rounded-2xl p-7">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-text-dim text-[11px] uppercase tracking-[0.15em] font-bold">Your BMI</span>
                                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${badgeClass(res.label)}`}>{res.label}</span>
                                </div>
                                <div className={`font-montserrat font-black text-[3.5rem] leading-none mb-3 tracking-tight ${res.color}`}>{res.bmi}</div>
                                <p className="text-text-muted text-[13px] leading-relaxed flex items-start gap-2.5 mt-4 font-light"><FaHeartbeat className="text-accent mt-0.5 shrink-0" />{res.tip}</p>
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div {...fadeUp(0.3)} animate={inView ? fadeUp(0.3).animate : {}} className="premium-card p-8 lg:p-9">
                        <h3 className="font-montserrat font-bold text-lg mb-9 tracking-tight">BMI Categories</h3>
                        <div className="space-y-3.5">
                            {cats.map(c => (
                                <div key={c.label} className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${res && res.label === c.label ? 'bg-white/[0.04] border-accent/25 shadow-lg shadow-accent/[0.04]' : 'border-border/40 hover:border-border'}`}>
                                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${c.bg}`} />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className={`font-semibold text-[13px] ${res && res.label === c.label ? c.color : ''}`}>{c.label}</span>
                                            <span className="text-text-dim text-[11px]">{c.range}</span>
                                        </div>
                                        <p className="text-text-dim text-[11px] mt-1 font-light">{c.tip}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-9">
                            <div className="flex rounded-full overflow-hidden h-2.5">
                                <div className="w-1/4 bg-blue-400" /><div className="w-1/4 bg-green-400" /><div className="w-1/4 bg-yellow-400" /><div className="w-1/4 bg-accent" />
                            </div>
                            <div className="flex justify-between mt-2.5 text-[10px] text-text-dim font-medium">
                                <span>15</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
