"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
            <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Text Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start gap-6"
                >
                    <div className="rounded-full border border-brand-dark/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark backdrop-blur-sm dark:border-brand-champagne/20 dark:text-brand-champagne sm:text-xs">
                        Consultoría Estratégica & Desarrollo Web
                    </div>

                    <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-brand-wine dark:text-brand-light mb-6">
                        Marketing con <span className="italic text-brand-gold">alma</span>.
                        <br />
                        Estrategia con <span className="italic text-brand-gold">datos</span>.
                    </h1>

                    <p className="max-w-xl font-lato text-base text-brand-dark/80 dark:text-brand-champagne/90 sm:text-lg">
                        Transformo la visión de emprendedores en negocios digitales rentables. Combino narrativa auténtica con infraestructura web diseñada para vender.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4">
                        <button className="rounded-full bg-brand-gold px-8 py-4 font-lato text-base font-bold text-brand-wine transition-transform hover:scale-105 active:scale-95">
                            Agendar Consulta
                        </button>
                        <button className="rounded-full border border-brand-dark px-8 py-4 font-lato text-base font-bold text-brand-dark transition-all hover:bg-brand-dark hover:text-brand-light dark:border-brand-champagne dark:text-brand-champagne dark:hover:bg-brand-champagne dark:hover:text-brand-wine active:scale-95">
                            Conoce mi historia
                        </button>
                    </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-[420px]"
                >
                    <div className="relative aspect-[3/5] max-w-[420px] overflow-hidden rounded-[40px] border-[6px] border-brand-gold/60 dark:border-brand-gold shadow-2xl">
                        <Image
                            src="/estef-hero.png"
                            alt="Estefanía - Consultoría Estratégica"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Floating Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute -bottom-4 -left-4 w-fit rounded-2xl bg-[#FDFBF7]/10 p-4 backdrop-blur-2xl border border-white/20 shadow-xl dark:bg-[#3B010B]/20 dark:border-white/10 hidden md:block lg:-left-12"
                    >
                        <p className="font-serif text-lg italic leading-relaxed text-brand-dark dark:text-brand-light">
                            &quot;Tu historia es tu mejor estrategia de venta.&quot;
                        </p>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}
