import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const images = [
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80', alt: 'Premium Equipment' },
    { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80', alt: 'Cardio Zone' },
    { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80', alt: 'Elite Training' },
    { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80', alt: 'Dumbbell Rack' },
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', alt: 'Aesthetic Lighting' },
    { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80', alt: 'Strength Station' },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Gallery() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <section id="gallery" className="mt-6 md:mt-16 py-10 md:py-12 bg-white/[0.02] border-y border-white/[0.02]" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-6 md:mb-10"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Gallery
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-3 mb-4 md:mt-5 md:mb-7 leading-tight tracking-tight">
                        Inside <span className="gradient-text">TRIFIT</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 auto-rows-[180px] md:auto-rows-[280px]"
                >
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={`group relative rounded-xl overflow-hidden cursor-pointer bg-dark transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,198,255,0.2)] ${i > 3 ? 'hidden md:block' : 'block'}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                <span className="text-[12px] font-bold uppercase tracking-widest text-[#00C6FF]">
                                    {img.alt}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
