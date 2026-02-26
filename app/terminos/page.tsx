import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";

export const metadata = {
    title: "Términos y Condiciones | Estefanía García",
    description: "Términos y Condiciones de uso de Estefanía García.",
};

export default function Terminos() {
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
                            Términos y <span className="italic text-brand-gold">Condiciones</span>.
                        </h1>
                        <p className="font-sans text-lg text-brand-dark/70 dark:text-white/70">
                            Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-brand max-w-none font-sans text-brand-dark/80 dark:text-white/80 space-y-8">
                        <p>
                            [Texto de Ejemplo] Bienvenido a <strong>estefanía.mkt</strong>. Al acceder y utilizar este sitio web, aceptas cumplir y estar sujeto a los siguientes términos y condiciones de uso.
                        </p>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">1. Uso del Sitio Web</h2>
                        <p>
                            El contenido de las páginas de este sitio web es solo para tu información general y uso. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros brindamos ninguna garantía en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular.
                        </p>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">2. Propiedad Intelectual</h2>
                        <p>
                            Este sitio web contiene material que es de nuestra propiedad o que tenemos bajo licencia. Este material incluye, entre otros, el diseño, la disposición, el aspecto, la apariencia y los gráficos. La reproducción está prohibida salvo de acuerdo con el aviso de copyright, que forma parte de estos términos y condiciones.
                        </p>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">3. Prestación de Servicios</h2>
                        <p>
                            Toda contratación de los servicios de &quot;Consultoría Estratégica&quot; o &quot;Desarrollo Web&quot; se rige por acuerdos y contratos individuales que se elaborarán y firmarán de previo acuerdo entre las partes, estableciendo tiempos, entregables y presupuestos detallados.
                        </p>

                        <h2 className="font-serif text-2xl text-brand-wine dark:text-brand-gold mt-12 mb-4">4. Enlaces a Terceros</h2>
                        <p>
                            De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para tu conveniencia para proporcionar más información. No significan que respaldemos el(los) sitio(s) web. No tenemos ninguna responsabilidad por el contenido del (de los) sitio(s) web vinculado(s).
                        </p>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
