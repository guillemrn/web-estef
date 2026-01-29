"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"

const articles = [
    {
        title: "Por qué tu web bonita no vende (y cómo arreglarlo)",
        category: "ESTRATEGIA WEB",
        readTime: "5 MIN LECTURA",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        excerpt: "Descubre los errores comunes de diseño que están matando tus conversiones y cómo priorizar la estrategia sobre la estética."
    },
    {
        title: "De Freelance a Agencia: Sistemas para escalar",
        category: "NEGOCIOS",
        readTime: "8 MIN LECTURA",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop",
        excerpt: "Cómo dejar de ser el cuello de botella de tu propio negocio mediante la automatización y la delegación estratégica."
    },
    {
        title: "La psicología del color en marcas High-Ticket",
        category: "BRANDING",
        readTime: "6 MIN LECTURA",
        image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2670&auto=format&fit=crop",
        excerpt: "El uso estratégico de la paleta de colores para evocar exclusividad, autoridad y confianza en el mercado de lujo."
    },
]

export function LatestInsights() {
    return (
        <section id="blog" className="bg-brand-light dark:bg-brand-wine py-12 md:py-32 transition-colors duration-500">
            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase">
                            El Blog
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-dark dark:text-brand-light leading-tight max-w-2xl">
                            Estrategia, código y <span className="italic text-brand-gold">negocios</span>.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-3 text-brand-wine dark:text-brand-gold font-bold tracking-widest uppercase text-xs"
                        >
                            <span>Leer todos los artículos</span>
                            <MoveRight className="transition-transform duration-300 group-hover:translate-x-2" size={16} />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href="#" className="group block space-y-6">
                                {/* Image Wrapper */}
                                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-dark/5 dark:border-white/5 shadow-sm">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-brand-wine/5 group-hover:bg-transparent transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <div className="space-y-3 px-1">
                                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-wine/50 dark:text-white/40 uppercase">
                                        <span>{article.category}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <h3 className="font-serif text-xl md:text-2xl text-brand-wine dark:text-brand-light leading-tight group-hover:text-brand-gold transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <p className="font-sans text-sm text-brand-dark/60 dark:text-white/60 line-clamp-2 leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    )
}
