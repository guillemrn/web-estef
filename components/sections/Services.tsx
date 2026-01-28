"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { User, Target, Laptop, Share2, Megaphone, ArrowUpRight } from "lucide-react"

const services = [
    {
        number: "01",
        category: "DIRECCIÓN",
        title: "Consultoría 1:1",
        description: "Claridad estratégica y dirección personalizada para escalar tu negocio con propósito y visión de largo plazo.",
        icon: User,
    },
    {
        number: "02",
        category: "BRANDING",
        title: "Estrategia Digital",
        description: "Branding y posicionamiento de marca que conecta emocionalmente con tu audiencia ideal en cada punto de contacto.",
        icon: Target,
    },
    {
        number: "03",
        category: "INGENIERÍA",
        title: "Desarrollo Web",
        description: "Landing pages de alto rendimiento y sitios web diseñados con infraestructura moderna para convertir tráfico en clientes.",
        icon: Laptop,
    },
    {
        number: "04",
        category: "CONTENIDO",
        title: "Social Media",
        description: "Estrategia de contenidos y gestión de autoridad para construir una comunidad leal y comprometida con tu marca.",
        icon: Share2,
    },
    {
        number: "05",
        category: "ADS",
        title: "Publicidad Digital",
        description: "Campañas en Meta Ads y Google Ads optimizadas para maximizar el retorno de inversión y el crecimiento sostenido.",
        icon: Megaphone,
    },
]

export function Services() {
    return (
        <section id="services" className="bg-brand-light dark:bg-brand-wine py-24 border-t border-brand-wine/10 dark:border-white/10 transition-colors duration-300">
            <Container>
                {/* Structural Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-brand-wine/10 dark:border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative group p-8 md:p-10 border-r border-b border-brand-wine/10 dark:border-white/10 overflow-hidden min-h-[320px] flex flex-col justify-between
                                ${index >= 3 ? 'md:col-span-1' : ''}
                                ${index === 3 ? 'md:col-start-1 md:ml-[50%] lg:ml-0' : ''} 
                            `}
                        >
                            {/* Ghost Number */}
                            <span className="absolute bottom-[-20px] right-[-10px] font-serif text-[10rem] leading-none text-brand-wine/5 dark:text-white/5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4">
                                {service.number}
                            </span>

                            {/* Cell Header */}
                            <div className="flex items-center justify-between mb-12">
                                <div className="w-10 h-10 rounded-full border border-brand-wine/20 dark:border-white/20 flex items-center justify-center dark:text-brand-gold text-brand-wine bg-brand-wine/5 dark:bg-white/5">
                                    <service.icon size={18} />
                                </div>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-wine/60 dark:text-brand-champagne/60 uppercase">
                                    {service.category}
                                </span>
                            </div>

                            {/* Cell Body */}
                            <div className="relative z-10">
                                <h3 className="font-serif text-2xl text-brand-wine dark:text-brand-light mb-4 text-balance">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-sm leading-relaxed text-brand-dark/60 dark:text-white/60 max-w-[280px]">
                                    {service.description}
                                </p>
                            </div>

                            {/* Cell Footer */}
                            <div className="mt-8 flex items-center gap-2 text-brand-wine dark:text-brand-gold text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:gap-4 cursor-pointer">
                                <span>Saber más</span>
                                <ArrowUpRight size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
