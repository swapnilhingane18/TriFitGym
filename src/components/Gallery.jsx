import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const images = [
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', alt: 'Gym interior', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', alt: 'Weight training', span: '' },
    { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80', alt: 'Cardio zone', span: '' },
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80', alt: 'Group class', span: '' },
    { src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=400&q=80', alt: 'Dumbbells', span: '' },
    { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80', alt: 'Training area', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80', alt: 'Workout', span: '' },
    { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80', alt: 'Strength training', span: '' },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Gallery() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <section id="gallery" className="py-28 lg:py-36" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    {...fadeUp()}
                    animate={inView ? fadeUp().animate : {}}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
                        Gallery
                    </span>
                    <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Inside <span className="gradient-text">Royal Fitness</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-2.5 auto-rows-[200px] md:auto-rows-[220px]"
                >
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={`group relative rounded-xl overflow-hidden cursor-pointer ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-[11px] font-medium uppercase tracking-wider text-white/80">
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
