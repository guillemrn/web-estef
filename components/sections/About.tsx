"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
    return (
        <section id="sobre-mi" className="bg-brand-light py-12 md:py-32 overflow-hidden transition-colors duration-300">
            <Container className="grid gap-16 lg:grid-cols-[0.8fr,1.2fr] items-center">
                {/* Image Column (35% approx with the grid-cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto z-10">
                        {/* Offset Border Detail */}
                        <div className="absolute -top-4 -left-4 w-full h-full border border-brand-gold rounded-2xl pointer-events-none translate-x-1 translate-y-1" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-brand-dark/10 shadow-xl">
                            <Image
                                src="/about.jpeg" // Placeholder, user will provide real image later
                                alt="Estefanía - Mentora & Estratega"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-wine/5 rounded-full blur-3xl pointer-events-none" />
                </motion.div>

                {/* Content Column (65% approx) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col gap-8"
                >
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-tight">
                            No es solo marketing. Es tu <span className="italic text-brand-gold">historia</span> contada bien.
                        </h2>

                        <div className="space-y-4 max-w-xl">
                            <p className="font-sans text-base md:text-lg text-brand-dark/80 leading-relaxed">
                                He estado ahí. Tienes la visión, tienes la pasión, pero traducir eso al mundo digital puede ser abrumador. Mi misión es simple: darte la claridad estratégica y la potencia técnica para que tu negocio no solo se vea bien, sino que venda.
                            </p>
                            <p className="font-sans text-base md:text-lg text-brand-dark/80 leading-relaxed">
                                Trabajamos 100% online, optimizando tu tiempo y enfocándonos en lo que importa: resultados. Desde tu identidad visual hasta tu primera venta automatizada.
                            </p>
                        </div>

                        <div className="pt-4">
                            <p className="font-serif italic text-2xl text-brand-wine">
                                - Estefanía G.
                            </p>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="pt-12 border-t border-brand-dark/10 flex flex-wrap gap-x-12 gap-y-6">
                        <div className="flex flex-col gap-1">
                            <span className="font-serif text-2xl text-brand-wine font-bold">+8</span>
                            <span className="font-sans text-xs tracking-widest uppercase text-brand-dark/60">Años de Experiencia</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-serif text-2xl text-brand-wine font-bold">Dual</span>
                            <span className="font-sans text-xs tracking-widest uppercase text-brand-dark/60">Estrategia + Código</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-serif text-2xl text-brand-wine font-bold">Remote</span>
                            <span className="font-sans text-xs tracking-widest uppercase text-brand-dark/60">Enfoque 100% Online</span>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
