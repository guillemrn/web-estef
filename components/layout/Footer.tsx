"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
    explore: [
        { name: "Servicios", href: "#servicios" },
        { name: "Sobre Mí", href: "#sobre-mi" },
        { name: "Blog", href: "#blog" },
    ],
    legal: [
        { name: "Privacidad", href: "/privacidad" },
        { name: "Términos", href: "/terminos" },
    ],
    social: [
        { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/estefania.mkt" },
        // { name: "LinkedIn", icon: Linkedin, href: "#" },
        // { name: "Twitter", icon: Twitter, href: "#" },
    ]
}

export function Footer() {
    return (
        <footer className="relative bg-brand-light dark:bg-brand-wine pt-20 pb-12 transition-colors duration-500 overflow-hidden">
            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full border-t border-brand-dark/10 dark:border-white/10" />

            <Container>
                {/* Level 1: Navigation Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 items-start">
                    {/* Brand / Logo */}
                    <div className="col-span-1">
                        <Link href="/" className="font-serif text-2xl font-bold text-brand-wine dark:text-brand-gold">
                            estefanía.mkt
                        </Link>
                        <p className="mt-4 text-xs font-sans text-brand-dark/50 dark:text-white/40 max-w-[200px] leading-relaxed">
                            Diseño estratégico y tecnología para marcas con propósito.
                        </p>
                    </div>

                    {/* Explore */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-brand-wine dark:text-brand-gold uppercase">Explora</h4>
                        <ul className="space-y-4">
                            {footerLinks.explore.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-sans text-brand-dark/70 dark:text-white/60 hover:text-brand-wine dark:hover:text-brand-gold transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-brand-wine dark:text-brand-gold uppercase">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-sans text-brand-dark/70 dark:text-white/60 hover:text-brand-wine dark:hover:text-brand-gold transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-brand-wine dark:text-brand-gold uppercase">Redes</h4>
                        <div className="flex gap-4">
                            {footerLinks.social.map((social) => {
                                const Icon = social.icon
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full border border-brand-dark/10 dark:border-white/10 flex items-center justify-center text-brand-dark dark:text-white hover:bg-brand-wine dark:hover:bg-brand-gold hover:text-brand-light dark:hover:text-brand-wine transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <Icon size={18} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-brand-dark/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans text-brand-dark/40 dark:text-white/30 tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} Estefanía García. Todos los derechos reservados.</p>
                    <p>Hecho por <a href="https://guillermoml.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-wine dark:hover:text-brand-gold transition-colors">Guillermo</a></p>
                </div>
            </Container>
        </footer>
    )
}
