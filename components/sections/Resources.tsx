"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { ShoppingBag, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const shopHighlights = [
    "Sistema de Gestión de Clientes (Notion)",
    "Calendario de Contenidos Estratégico",
    "Kit de Bienvenida para Clientes",
]

export function Resources() {
    return (
        <section id="recursos" className="bg-brand-light dark:bg-brand-wine py-12 md:py-32 transition-colors duration-500 overflow-hidden">
            <Container className="grid gap-16 lg:grid-cols-2 items-center">
                {/* Left Column: Sales Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <div className="space-y-6">
                        <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase">
                            Recursos Digitales
                        </span>

                        <h2 className="font-serif text-3xl md:text-5xl text-brand-dark dark:text-brand-light leading-tight">
                            Herramientas para crecer <span className="italic text-brand-gold">sin depender</span> de consultoría 1:1.
                        </h2>

                        <p className="font-sans text-lg text-brand-dark/70 dark:text-white/70 max-w-xl leading-relaxed">
                            He destilado mis procesos de agencia en plantillas de Notion, Checklists y Workshops pre-grabados para que implementes a tu ritmo.
                        </p>
                    </div>

                    <ul className="grid gap-4">
                        {shopHighlights.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-brand-dark/80 dark:text-white/80">
                                <CheckCircle2 size={20} className="text-brand-gold flex-shrink-0" />
                                <span className="font-sans text-sm md:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <motion.button
                        disabled
                        className="w-full md:w-fit flex items-center justify-center gap-3 bg-brand-wine/10 dark:bg-brand-gold/20 text-brand-wine/40 dark:text-brand-wine/50 px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs transition-all duration-300 cursor-not-allowed border border-brand-wine/10 dark:border-brand-gold/10"
                    >
                        <ShoppingBag size={18} />
                        <span>Próximamente</span>
                    </motion.button>
                </motion.div>

                {/* Right Column: Visual Hero (Product Card) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl">
                        {/* Imagen de Stock Editorial (Desk/Planning) */}
                        <Image
                            src="/4.png"
                            alt="Espacio de trabajo premium con planificador y café, representando recursos digitales"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlay Sutil para Integración de Color */}
                        <div className="absolute inset-0 bg-brand-wine/20 dark:bg-brand-wine/40 mix-blend-multiply pointer-events-none" />

                        {/* Overlay de Texto (Opcional, para reforzar) */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-brand-wine/80 via-brand-wine/20 to-transparent">
                            <span className="text-brand-gold text-sm tracking-widest uppercase mb-2 font-bold">
                                Exclusivo
                            </span>
                            <h3 className="text-brand-light font-serif text-2xl lg:text-3xl font-bold leading-tight">
                                Plantillas de Alto Impacto
                            </h3>
                        </div>
                    </div>

                    {/* Background decorative blob */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
                </motion.div>
            </Container>

        </section>
    )
}
