"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Recursos", href: "#recursos" },
    { name: "Blog", href: "#blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Bloquear scroll al abrir menú
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [isOpen]);

    // Detectar scroll para fondo glass
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Variantes de Animación
    const menuVars = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
    };

    const linkVars = {
        initial: { y: "30vh", opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as any } },
        exit: { y: "-30vh", opacity: 0, transition: { duration: 0.3 } },
    };

    const containerVars = {
        animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || isOpen ? "py-4" : "py-6",
                    isScrolled && !isOpen ? "bg-brand-light/80 dark:bg-brand-wine/80 backdrop-blur-md shadow-sm" : "bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* LOGO (Cambia color si el menú está abierto) */}
                    <Link href="/" className="relative z-50">
                        <span className={cn(
                            "font-serif font-bold text-2xl tracking-tight transition-colors duration-300",
                            isOpen ? "text-brand-champagne" : "text-brand-wine dark:text-brand-light"
                        )}>
                            estefanía.mkt
                        </span>
                    </Link>

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold tracking-wide text-brand-dark hover:text-brand-burgundy dark:text-brand-light transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Button variant="primary">Agendar Consulta</Button>
                        </div>
                    </nav>

                    {/* MOBILE TOGGLE */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-50 p-2 text-brand-wine dark:text-brand-light focus:outline-none"
                        >
                            <span className="sr-only">Menu</span>
                            {isOpen ? <X className="text-brand-champagne w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-brand-wine flex flex-col justify-center px-6"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col gap-6"
                        >
                            {navLinks.map((link) => (
                                <div key={link.name} className="overflow-hidden">
                                    <motion.div variants={linkVars}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="font-serif text-5xl text-brand-champagne hover:text-brand-gold transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}

                            {/* CTA en Móvil */}
                            <div className="overflow-hidden pt-8">
                                <motion.div variants={linkVars}>
                                    <Button variant="primary" size="lg" className="w-full text-lg">
                                        Agendar Consulta
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Decoración Fondo */}
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-burgundy/20 blur-[100px] pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
