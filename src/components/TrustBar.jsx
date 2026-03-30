import { FaStar, FaUsers, FaDumbbell } from 'react-icons/fa'

const features = [
    { icon: FaStar, text: '4.7 Rating', desc: 'Google Reviews' },
    { icon: FaUsers, text: '1000+ Members', desc: 'Active Community' },
    { icon: FaDumbbell, text: 'Premium Equipment', desc: 'World-Class Tools' },
]

export default function TrustBar() {
    return (
        <section className="glass-panel border-y border-white/10 relative z-10 -mt-10 mx-4 sm:mx-8 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto px-4 py-5 sm:py-6 flex items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {features.map((f, i) => {
                        const Icon = f.icon
                        return (
                            <div key={i} className="flex items-center gap-4 px-4 py-3 md:px-6 md:py-4 hover:bg-white/[0.02] transition-colors duration-300">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00C6FF]/10 shrink-0">
                                    <Icon className="w-5 h-5 text-[#00C6FF]" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-white font-semibold leading-tight">
                                        {f.text}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-400 leading-tight mt-0.5">{f.desc}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
