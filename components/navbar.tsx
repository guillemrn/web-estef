"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
    { href: "#services", label: "Servicios" },
    { href: "#about", label: "Sobre Mí" },
    { href: "#resources", label: "Recursos" },
    { href: "#insights", label: "Blog" },
]

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full bg-brand-light/80 backdrop-blur-md transition-colors duration-300 dark:bg-brand-wine/80">
            <Container className="flex h-24 items-center justify-between">
                <Link href="/" className="font-serif text-xl font-bold tracking-tight text-brand-dark transition-colors dark:text-brand-light sm:text-2xl">
                    estefanía.<span className="text-brand-gold">mkt</span>
                </Link>

                <nav className="hidden items-center gap-10 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="font-sans text-sm font-bold text-brand-dark transition-colors hover:text-brand-gold dark:text-brand-champagne dark:hover:text-brand-gold"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="#"
                        className="hidden rounded-full bg-brand-gold px-6 py-3 font-sans text-sm font-bold text-brand-wine transition-all hover:scale-105 hover:shadow-lg active:scale-95 lg:block"
                    >
                        Agendar Consulta
                    </Link>
                </div>
            </Container>
        </header>
    )
}
