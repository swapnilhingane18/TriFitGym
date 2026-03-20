import { FaStar, FaUsers, FaDumbbell } from 'react-icons/fa'

const features = [
    { icon: FaStar, text: '4.7 Rating', desc: 'Google Reviews' },
    { icon: FaUsers, text: '1000+ Members', desc: 'Active Community' },
    { icon: FaDumbbell, text: 'Premium Equipment', desc: 'World-Class Tools' },
]

export default function TrustBar() {
    return (
        <section className="glass-panel border-y border-white/10 relative z-10 -mt-10 mx-5 sm:mx-8 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto px-5 py-6 flex items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {features.map((f, i) => {
                        const Icon = f.icon
                        return (
                            <div key={i} className="flex items-center justify-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors duration-300">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 text-accent shadow-[0_0_10px_rgba(0,198,255,0.2)]">
                                    <Icon className="text-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-montserrat font-bold text-lg text-white tracking-wide leading-tight">
                                        {f.text}
                                    </span>
                                    <span className="text-xs text-text-muted mt-0.5">{f.desc}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
