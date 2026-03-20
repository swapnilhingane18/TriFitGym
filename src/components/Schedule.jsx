import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const classes = [
    {
        name: 'Zumba',
        color: 'bg-pink-500/15 text-pink-400 border-pink-500/25',
        times: { Monday: '7:00 AM', Wednesday: '7:00 AM', Friday: '7:00 AM' },
    },
    {
        name: 'Yoga',
        color: 'bg-green-500/15 text-green-400 border-green-500/25',
        times: { Tuesday: '6:30 AM', Thursday: '6:30 AM', Saturday: '8:00 AM' },
    },
    {
        name: 'HIIT',
        color: 'bg-accent/15 text-accent border-accent/25',
        times: { Monday: '6:00 PM', Wednesday: '6:00 PM', Friday: '6:00 PM' },
    },
    {
        name: 'CrossFit',
        color: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
        times: { Tuesday: '5:30 PM', Thursday: '5:30 PM', Saturday: '10:00 AM' },
    },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Schedule() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="py-8 md:py-12" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10 sm:mb-8 md:mb-12"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Class Schedule
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Weekly <span className="gradient-text">Classes</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-muted text-base lg:text-lg font-light">
                        Join our group fitness classes led by expert instructors.
                    </p>
                </motion.div>

                {/* Desktop Table */}
                <motion.div
                    {...fadeUp(0.2)}
                    animate={inView ? fadeUp(0.2).animate : {}}
                    className="hidden lg:block overflow-hidden rounded-2xl border border-border premium-card"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="p-5 text-left font-montserrat font-semibold text-[11px] uppercase tracking-[0.15em] text-text-dim">
                                    Class
                                </th>
                                {days.map((d) => (
                                    <th key={d} className="p-5 text-center font-montserrat font-semibold text-[11px] uppercase tracking-[0.15em] text-text-dim">
                                        {d}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((c) => (
                                <tr key={c.name} className="border-b border-border/40 last:border-0 hover:bg-white/[0.015] transition-colors duration-300">
                                    <td className="p-5">
                                        <span className={`inline-block px-3.5 py-1.5 rounded-lg text-[11px] font-bold border uppercase tracking-wider ${c.color}`}>
                                            {c.name}
                                        </span>
                                    </td>
                                    {days.map((d) => (
                                        <td key={d} className="p-5 text-center text-[13px]">
                                            {c.times[d] ? (
                                                <span className="text-white font-medium">{c.times[d]}</span>
                                            ) : (
                                                <span className="text-white/10">—</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Mobile Cards */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {classes.map((c, i) => (
                        <motion.div
                            key={c.name}
                            {...fadeUp(0.08 + 0.08 * i)}
                            animate={inView ? fadeUp(0.08 + 0.08 * i).animate : {}}
                            className="premium-card p-6"
                        >
                            <span className={`inline-block px-3.5 py-1.5 rounded-lg text-[11px] font-bold border mb-5 uppercase tracking-wider ${c.color}`}>
                                {c.name}
                            </span>
                            <div className="space-y-3">
                                {Object.entries(c.times).map(([day, time]) => (
                                    <div key={day} className="flex justify-between text-[13px]">
                                        <span className="text-text-dim font-light">{day}</span>
                                        <span className="font-medium">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
