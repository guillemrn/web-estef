"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-12 md:pb-16 overflow-hidden">
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

                    <h1 className="font-serif text-4xl md:text-6xl leading-tight text-brand-wine dark:text-brand-light mb-6">
                        Marketing con <span className="italic text-brand-gold">alma</span>.
                        <br />
                        Estrategia con <span className="italic text-brand-gold">datos</span>.
                    </h1>

                    <p className="max-w-xl font-lato text-base text-brand-dark/80 dark:text-brand-champagne/90 sm:text-lg">
                        Transformo la visión de emprendedores en negocios digitales rentables. Combino narrativa auténtica con infraestructura web diseñada para vender.
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full">
                        <Button variant="primary" size="lg" className="w-full sm:w-fit font-bold" href="#contacto">
                            Agendar Consulta
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-fit font-bold" href="#sobre-mi">
                            Conoce mi historia
                        </Button>
                    </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-[420px] order-last lg:order-none"
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
