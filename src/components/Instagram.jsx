import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa'

const posts = [
    { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80', likes: '2.4K', comments: '89' },
    { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', likes: '1.8K', comments: '56' },
    { img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80', likes: '3.1K', comments: '124' },
    { img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80', likes: '1.5K', comments: '43' },
    { img: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80', likes: '2.7K', comments: '67' },
    { img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80', likes: '1.9K', comments: '92' },
]

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Instagram() {
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
                        Instagram
                    </span>
                    <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] mt-5 mb-7 leading-tight tracking-tight">
                        Join the <span className="gradient-text">TRIFIT Community</span>
                    </h2>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-accent hover:text-white transition-colors duration-300"
                    >
                        <FaInstagram className="text-xl" />
                        <span className="font-medium text-sm">@trifitfitness</span>
                    </a>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    {posts.map((post, i) => (
                        <motion.a
                            key={i}
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={post.img}
                                alt="Instagram post"
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-300 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-[1px]">
                                <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="flex items-center gap-2 text-white">
                                        <FaHeart className="text-sm" />
                                        <span className="font-bold text-[13px]">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white">
                                        <FaComment className="text-sm" />
                                        <span className="font-bold text-[13px]">{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
