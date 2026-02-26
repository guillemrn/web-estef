import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";

export const metadata = {
    title: "Privacidad | Estefanía García",
    description: "Política de Privacidad de Estefanía García.",
};

export default function Privacidad() {
    return (
        <main className="flex min-h-screen flex-col bg-brand-light dark:bg-brand-wine transition-colors duration-500">
            <Navbar />

            <section className="pt-40 pb-20 mt-12 overflow-hidden flex-1">
                <Container className="max-w-3xl">
                    <div className="space-y-6 mb-12">
                        <div className="rounded-full border w-fit border-brand-dark/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark backdrop-blur-sm dark:border-brand-champagne/20 dark:text-brand-champagne sm:text-xs">
                            Legal
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark dark:text-brand-light leading-tight">
                            Política de <span className="italic text-brand-gold">Privacidad</span>.
                        </h1>
                        <p className="font-sans text-lg text-brand-dark/70 dark:text-white/70">
                            Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-brand max-w-none font-sans text-brand-dark/80 dark:text-white/80 space-y-8">
                        <p>
                            [Texto de Ejemplo] En <strong>estefanía.mkt</strong>, valoramos y respetamos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios de consultoría estratégica y desarrollo web.
                        </p>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">1. Información que Recopilamos</h2>
                        <p>
                            Podemos recopilar información personal que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, tipo de proyecto y detalles sobre tu visión, específicamente cuando completas nuestro formulario de contacto.
                        </p>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">2. Uso de la Información</h2>
                        <p>
                            Utilizamos la información recopilada para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-brand-gold">
                            <li>Responder a tus consultas y evaluar propuestas de proyectos.</li>
                            <li>Proporcionar y mejorar nuestros servicios de consultoría.</li>
                            <li>Enviarte comunicaciones relevantes (solo si has dado tu consentimiento).</li>
                        </ul>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">3. Cuidados y Seguridad</h2>
                        <p>
                            Implementamos medidas de seguridad para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. No compartimos tu información con terceros sin tu consentimiento, excepto cuando sea necesario para proveer nuestros servicios o por requerimiento legal.
                        </p>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">4. Contacto</h2>
                        <p>
                            Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de los diversos canales de comunicación provistos en nuestro sitio web.
                        </p>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
